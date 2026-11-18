/* Tank Arena settings.

   dbUrl: where players' tanks are saved for everyone.
          Empty ("") means tanks are saved only in each player's own browser.
          Once a shared database exists, its address goes here and nothing else changes.

   house: built-in opponents so there is always something to fight.
          Each spends exactly 30 points, the same budget players get. */
window.TANK_CONFIG = {
  dbUrl: "",

  house: [
    { id: "house-brawler",  owner: "House", name: "Brawler",     color: "#FF3D71", stats: { armor: 9, engine: 3, firepower: 7, reload: 6, barrel: 2, targeting: 3 }, ai: { dodge: 10, target: "nearest" } },
    { id: "house-sniper",   owner: "House", name: "Sniper",      color: "#4D8BFF", stats: { armor: 3, engine: 3, firepower: 8, reload: 3, barrel: 9, targeting: 4 }, ai: { dodge: 20, target: "weakest" } },
    { id: "house-sprinter", owner: "House", name: "Sprinter",    color: "#FFE94A", stats: { armor: 3, engine: 9, firepower: 4, reload: 6, barrel: 4, targeting: 4 }, ai: { dodge: 80, target: "nearest" } },
    { id: "house-gunner",   owner: "House", name: "Gunner",      color: "#C77DFF", stats: { armor: 4, engine: 3, firepower: 4, reload: 9, barrel: 4, targeting: 6 }, ai: { dodge: 30, target: "strongest" } },
    { id: "house-allround", owner: "House", name: "All-rounder", color: "#7CFF6B", stats: { armor: 5, engine: 5, firepower: 5, reload: 5, barrel: 5, targeting: 5 }, ai: { dodge: 50, target: "nearest" } }
  ]
};
