/* ============================================================
   THIS FILE IS YOUR WHOLE APP LIST.
   To add an app later, add one entry to "apps" and save.
   You never need to touch index.html.

   Each app:
     name      what the card is called
     desc      one sentence about it
     category  the id of one of the categories below
     url       where it lives, e.g. "games/my-game/" (a folder next
               to this file) or a full https:// address
     status    optional short label, e.g. "new" or "beta"

   To add a section, add a line to "categories" with a new id.
   ============================================================ */
window.HUB = {
  title: "App Hub",
  tagline: "Everything I build, running in your browser. Nothing to download.",

  categories: [
    { id: "games",       name: "Games",       blurb: "Things to play." },
    { id: "tools",       name: "Tools",       blurb: "Things that get a job done." },
    { id: "cards",       name: "Trading Cards", blurb: "Track what cards are worth, and make your own." },
    { id: "corner",      name: "Karly & Andrew's Corner", blurb: "Things we made for the two of us." },
    { id: "work",        name: "Work",        blurb: "Apps built for the day job." },
    { id: "experiments", name: "Experiments", blurb: "Half-finished ideas and odd prototypes." }
  ],

  apps: [
    { name: "Weekly Menu", desc: "Pick this week's dinners, see the nutrition, and get one shopping list.", category: "corner", url: "corner/menu/", status: "new" },
    { name: "Tank Arena", desc: "Build a tank from a fixed points budget and send it into the league.", category: "games", url: "games/tank-arena/", status: "new" },
    { name: "Metals Desk", desc: "A market monitor for copper, aluminium and steel: prices, signals, analytics and a news wire.", category: "tools", url: "tools/metals/", status: "live data" },
    { name: "Card Market", desc: "Pokémon card prices, market movers and price trends.", category: "cards", url: "tools/card-market/", status: "live data" },
    { name: "Card Maker", desc: "Design a custom trading card with your own art, moves and foil finish, then download it.", category: "cards", url: "cards/card-maker/", status: "new" },

    // Copy this line, remove the two slashes, and fill it in:
    // { name: "My App", desc: "What it does in one sentence.", category: "tools", url: "tools/my-app/", status: "new" },
  ]
};
