/* Tank Arena simulation core.
   Pure logic, no drawing. The same code runs in the browser (window.TankSim)
   and in Node (require) so balance can be tested outside the page.
   Every battle is driven by a seed, so the same tanks and seed always play out the same way. */
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.TankSim = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  var STATS = ["armor", "engine", "firepower", "reload", "barrel", "targeting"];
  var BUDGET = 30, MIN = 1, MAX = 10;
  var DT = 1 / 30, RADIUS = 14;
  var TARGETS = ["nearest", "weakest", "strongest"];

  // Tunable balance numbers. Each stat point is meant to be worth about the same.
  var B = {
    hpBase: 70, hpPer: 12,
    speedBase: 22, speedPer: 18,
    dmgBase: 14, dmgPer: 1.8,
    rateBase: 0.6, ratePer: 0.095,
    rangeBase: 135, rangePer: 11,
    shellBase: 120, shellPer: 16,
    spreadBase: 0.45, spreadPer: 0.03,
    turretBase: 1.4, turretPer: 0.32,
    leadBase: 0.2, leadPer: 0.08,
    turnBase: 2.4, turnPer: 0.16,
    standoff: 0.85,      // every tank fights near the edge of its own gun range
    falloff: 0.6,        // shells lose up to this share of their damage by the end of their range
    evade: 3.5,          // a fast-moving target is harder to hit: spread grows with its speed
    aimPenalty: 1.7      // weaving throws off your own aim
  };


  function clampInt(v, lo, hi, dflt) {
    v = Math.round(Number(v));
    if (!isFinite(v)) v = dflt;
    return Math.max(lo, Math.min(hi, v));
  }

  /* Make any incoming tank safe and legal: whole numbers in range, never over budget. */
  function sanitize(t) {
    t = t || {};
    var stats = {}, total = 0, src = t.stats || {};
    STATS.forEach(function (k) { stats[k] = clampInt(src[k], MIN, MAX, MIN); total += stats[k]; });
    // Over budget: shave points off the largest stats until it fits.
    while (total > BUDGET) {
      var top = STATS.slice().sort(function (a, b) { return stats[b] - stats[a]; })[0];
      stats[top]--; total--;
    }
    var ai = t.ai || {};
    return {
      id: String(t.id || "").replace(/[^\w-]/g, "").slice(0, 40),
      owner: String(t.owner || "Unknown").slice(0, 20),
      name: String(t.name || "Unnamed tank").slice(0, 24),
      color: /^#[0-9a-fA-F]{6}$/.test(t.color) ? t.color : "#7BE0A0",
      stats: stats,
      ai: {
        dodge: clampInt(ai.dodge, 0, 100, 50),
        target: TARGETS.indexOf(ai.target) >= 0 ? ai.target : "nearest"
      },
      v: clampInt(t.v, 1, 99999, 1),
      updated: String(t.updated || "").slice(0, 30)
    };
  }
  function spent(stats) { return STATS.reduce(function (s, k) { return s + (stats[k] || 0); }, 0); }

  /* Turn slider values into the numbers the battle uses. */
  function derive(stats) {
    return {
      hp: B.hpBase + B.hpPer * stats.armor,
      speed: B.speedBase + B.speedPer * stats.engine,
      damage: B.dmgBase + B.dmgPer * stats.firepower,
      cooldown: 1 / (B.rateBase + B.ratePer * stats.reload),
      range: B.rangeBase + B.rangePer * stats.barrel,
      shellSpeed: B.shellBase + B.shellPer * stats.barrel,
      spread: Math.max(0.02, B.spreadBase - B.spreadPer * stats.targeting),
      turretRate: B.turretBase + B.turretPer * stats.targeting,
      lead: Math.min(1, B.leadBase + B.leadPer * stats.targeting),
      turn: B.turnBase + B.turnPer * stats.engine
    };
  }

  function rng(seed) {
    var a = seed >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      var t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function hash(str) {
    var h = 2166136261;
    for (var i = 0; i < str.length; i++) h = Math.imul(h ^ str.charCodeAt(i), 16777619) >>> 0;
    return h;
  }
  function wrap(a) { while (a > Math.PI) a -= 2 * Math.PI; while (a < -Math.PI) a += 2 * Math.PI; return a; }
  function turnToward(cur, want, max) { var d = wrap(want - cur); return cur + Math.max(-max, Math.min(max, d)); }

  /* Start a battle. tanks: array of tank records. opts: { w, h, limit (seconds) } */
  function create(tanks, seed, opts) {
    opts = opts || {};
    var n = tanks.length;
    var w = opts.w || (n <= 2 ? 760 : Math.min(1200, 760 + (n - 2) * 45));
    var h = opts.h || (n <= 2 ? 460 : Math.min(760, 460 + (n - 2) * 30));
    var rand = rng(seed);
    var S = { w: w, h: h, t: 0, limit: opts.limit || (n <= 2 ? 60 : 100), rand: rand, tanks: [], shells: [], over: false, order: [], winner: null };
    var offset = rand() * Math.PI * 2;
    tanks.forEach(function (rec, i) {
      var d = derive(rec.stats);
      var ang = offset + (i / n) * Math.PI * 2;
      var x, y;
      if (n === 2) { x = i === 0 ? w * 0.14 : w * 0.86; y = h * (0.3 + rand() * 0.4); }
      else { x = w / 2 + Math.cos(ang) * w * 0.38; y = h / 2 + Math.sin(ang) * h * 0.38; }
      var face = Math.atan2(h / 2 - y, w / 2 - x);
      S.tanks.push({
        i: i, rec: rec, d: d, x: x, y: y, vx: 0, vy: 0, body: face, turret: face,
        hp: d.hp, cool: 0.4 + rand() * 0.6, target: -1, think: 0,
        strafe: rand() < 0.5 ? 1 : -1, strafeT: 0.6 + rand() * 1.2, alive: true, hits: 0, shots: 0, dealt: 0
      });
    });
    return S;
  }

  function pickTarget(S, me) {
    var best = -1, bestScore = Infinity, mode = me.rec.ai.target;
    for (var i = 0; i < S.tanks.length; i++) {
      var o = S.tanks[i];
      if (o === me || !o.alive) continue;
      var dist = Math.hypot(o.x - me.x, o.y - me.y);
      // Distance always matters a little so tanks don't chase across the whole arena.
      var score = mode === "weakest" ? o.hp + dist * 0.12 : mode === "strongest" ? -o.hp + dist * 0.12 : dist;
      if (score < bestScore) { bestScore = score; best = i; }
    }
    return best;
  }

  function step(S) {
    if (S.over) return;
    var rand = S.rand, alive = 0, i;
    S.t += DT;

    for (i = 0; i < S.tanks.length; i++) {
      var me = S.tanks[i];
      if (!me.alive) continue;
      alive++;
      me.think -= DT;
      if (me.think <= 0 || me.target < 0 || !S.tanks[me.target].alive) { me.target = pickTarget(S, me); me.think = 0.5; }
      if (me.target < 0) continue;
      var foe = S.tanks[me.target];
      var dx = foe.x - me.x, dy = foe.y - me.y, dist = Math.hypot(dx, dy) || 1;
      var toFoe = Math.atan2(dy, dx);

      // --- movement: hold a preferred distance, and weave sideways by the dodge setting ---
      var want = B.standoff * me.d.range;   // every tank fights near the edge of its own gun range
      var radial = dist > want * 1.1 ? 1 : dist < want * 0.85 ? -1 : 0;
      me.strafeT -= DT;
      if (me.strafeT <= 0) { me.strafe = -me.strafe; me.strafeT = 0.5 + rand() * 1.4; }
      var dodge = me.rec.ai.dodge / 100;
      // When too close, back off on a curve instead of reversing straight into a wall.
      // Out of gun range: drive in hard and weave less.
      var side = radial < 0 ? Math.max(dodge, 0.85) : dist > me.d.range ? dodge * 0.4 : dodge;
      var fwd = radial < 0 ? -0.55 : dist > me.d.range ? 1 : radial * (1 - dodge * 0.6);
      var mx = Math.cos(toFoe) * fwd + Math.cos(toFoe + Math.PI / 2) * me.strafe * side;
      var my = Math.sin(toFoe) * fwd + Math.sin(toFoe + Math.PI / 2) * me.strafe * side;
      // keep off the walls
      var m = 46;
      if (me.x < m) mx += (m - me.x) / m * 2; if (me.x > S.w - m) mx -= (me.x - (S.w - m)) / m * 2;
      if (me.y < m) my += (m - me.y) / m * 2; if (me.y > S.h - m) my -= (me.y - (S.h - m)) / m * 2;
      var mag = Math.hypot(mx, my);
      if (mag > 0.05) {
        var heading = Math.atan2(my, mx);
        me.body = turnToward(me.body, heading, me.d.turn * DT);
        var align = Math.max(0, Math.cos(wrap(heading - me.body)));
        var sp = me.d.speed * align * Math.min(1, mag);
        me.vx = Math.cos(me.body) * sp; me.vy = Math.sin(me.body) * sp;
      } else { me.vx = 0; me.vy = 0; }
      me.x = Math.max(RADIUS, Math.min(S.w - RADIUS, me.x + me.vx * DT));
      me.y = Math.max(RADIUS, Math.min(S.h - RADIUS, me.y + me.vy * DT));

      // --- turret: aim ahead of a moving target; better targeting leads better and turns faster ---
      var flight = dist / me.d.shellSpeed;
      var ax = foe.x + foe.vx * flight * me.d.lead, ay = foe.y + foe.vy * flight * me.d.lead;
      var aim = Math.atan2(ay - me.y, ax - me.x);
      me.turret = turnToward(me.turret, aim, me.d.turretRate * DT);

      // --- fire ---
      me.cool -= DT;
      if (me.cool <= 0 && dist <= me.d.range && Math.abs(wrap(aim - me.turret)) < 0.12) {
        var g = (rand() + rand() + rand() - 1.5) / 1.5;   // roughly bell-shaped, -1..1
        var foeSpeed = Math.hypot(foe.vx, foe.vy);
        var a = me.turret + g * me.d.spread * (1 + B.aimPenalty * dodge * (mag > 0.05 ? 1 : 0)) * (1 + B.evade * foeSpeed / 150);
        S.shells.push({ x: me.x + Math.cos(a) * RADIUS, y: me.y + Math.sin(a) * RADIUS, a: a, v: me.d.shellSpeed, left: me.d.range * 1.15, reach: me.d.range * 1.15, from: i, dmg: me.d.damage });
        me.cool = me.d.cooldown; me.shots++;
      }
    }

    // --- shells ---
    for (i = S.shells.length - 1; i >= 0; i--) {
      var s = S.shells[i], stepLen = s.v * DT;
      s.x += Math.cos(s.a) * stepLen; s.y += Math.sin(s.a) * stepLen; s.left -= stepLen;
      var gone = s.left <= 0 || s.x < 0 || s.y < 0 || s.x > S.w || s.y > S.h;
      if (!gone) for (var j = 0; j < S.tanks.length; j++) {
        var t = S.tanks[j];
        if (!t.alive || j === s.from) continue;
        if (Math.hypot(t.x - s.x, t.y - s.y) <= RADIUS + 2) {
          var dmg = s.dmg * (1 - B.falloff * (1 - s.left / s.reach));
          t.hp -= dmg; gone = true;
          var shooter = S.tanks[s.from]; shooter.hits++; shooter.dealt += dmg;
          if (t.hp <= 0) { t.hp = 0; t.alive = false; S.order.push(j); alive--; }
          break;
        }
      }
      if (gone) S.shells.splice(i, 1);
    }

    if (alive <= 1 || S.t >= S.limit) finish(S);
  }

  function finish(S) {
    S.over = true;
    // Survivors rank above the fallen, ordered by share of health left; the fallen rank by how long they lasted.
    var left = S.tanks.filter(function (t) { return t.alive; }).sort(function (a, b) { return a.hp / a.d.hp - b.hp / b.d.hp; });
    left.forEach(function (t) { S.order.push(t.i); });
    S.ranking = S.order.slice().reverse();          // best first
    if (left.length === 1) S.winner = left[0].i;
    else if (left.length > 1) {
      var top = left[left.length - 1], next = left[left.length - 2];
      S.winner = (top.hp / top.d.hp - next.hp / next.d.hp) > 0.02 ? top.i : null;   // near-equal health is a draw
    }
  }

  function run(tanks, seed, opts) {
    var S = create(tanks, seed, opts);
    while (!S.over) step(S);
    return S;
  }

  return {
    STATS: STATS, BUDGET: BUDGET, MIN: MIN, MAX: MAX, DT: DT, RADIUS: RADIUS, TARGETS: TARGETS, B: B,
    sanitize: sanitize, spent: spent, derive: derive, create: create, step: step, run: run, hash: hash
  };
});
