/* ============================================================
   THE PHOTO GALLERY: which picture goes with which food.
   Each line links a dish, a side or an ingredient to a search
   phrase. A scheduled job looks that phrase up on Wikimedia
   Commons (free, openly licensed photos) and saves the best few
   matches to data/food-images.json. The menu shows the first
   match unless you choose another on the Photos tab.

   To change a photo: edit the phrase here, or pin an exact file
   under "picks" using its Commons title, for example
     "dish:coq-au-vin": "File:Coq au vin rouge.jpg"
   ============================================================ */
window.GALLERY = {
  dishes: {
    "duck-cherry": "magret de canard", "steak-poivre": "steak au poivre", "salmon-beurre-blanc": "pan seared salmon fillet", "mussels-wine": "moules marinières",
    "coq-au-vin": "coq au vin", "sole-meuniere": "sole meunière", "mushroom-risotto": "mushroom risotto", "chicken-marsala": "chicken marsala",
    "squash-pasta": "pappardelle pasta dish", "shrimp-orzo": "orzo with shrimp", "pork-saltimbocca": "saltimbocca alla romana", "sausage-rigatoni": "rigatoni with sausage",
    "eggplant-parm": "parmigiana di melanzane", "miso-cod": "miso glazed black cod", "tuna-sesame": "seared tuna sesame", "gochujang-chicken": "korean spicy chicken dish",
    "green-curry-shrimp": "thai green curry", "mapo-tofu": "mapo tofu", "lamb-harissa": "grilled lamb chops", "cauliflower-romesco": "roasted cauliflower steak",
    "halloumi-farro": "grilled halloumi", "shawarma-chicken": "chicken shawarma plate", "greek-cod": "baked cod with tomatoes", "chicken-lemon": "roast chicken thighs lemon",
    "pork-apple": "pork tenderloin sliced", "scallops-butter": "seared scallops", "short-ribs": "braised beef short ribs", "hazelnut-halibut": "halibut fillet dish",
    "smash-burgers": "cheeseburger", "chimichurri-steak": "steak with chimichurri", "fish-tacos": "fish tacos", "chipotle-shrimp": "grilled shrimp", "enchiladas": "enchiladas"
  },
  sides: {
    "s-parsnip": "parsnip puree", "s-smashed": "smashed potatoes", "s-dill-potatoes": "new potatoes with dill", "s-polenta": "polenta", "s-rice": "steamed jasmine rice",
    "s-cilantro-rice": "cilantro lime rice", "s-couscous": "couscous dish", "s-celery-mash": "celeriac puree", "s-bread": "grilled bread slices", "s-soba": "zaru soba",
    "s-white-beans": "cannellini beans dish", "s-black-beans": "frijoles negros", "s-corn-puree": "creamed corn", "s-spinach": "sauteed spinach", "s-bokchoy": "bok choy stir fry",
    "s-broccolini": "broccolini", "s-sprouts": "roasted brussels sprouts", "s-green-beans": "green beans almondine", "s-asparagus": "roasted asparagus", "s-arugula": "arugula salad",
    "s-carrots": "roasted carrots", "s-cucumber": "smashed cucumber salad", "s-slaw": "coleslaw", "s-greek-salad": "greek salad", "s-corn": "esquites"
  },
  /* Ingredients are matched by a word in the ingredient's name: [word, search phrase]. */
  ingredients: [
    ["garlic", "garlic bulbs"], ["butter", "butter block"], ["lemon", "lemons fruit"], ["lime", "limes fruit"], ["parsley", "parsley bunch"], ["cilantro", "coriander leaves"],
    ["shallot", "shallots"], ["parmesan", "parmigiano reggiano cheese"], ["ginger", "ginger root"], ["scallion", "scallions"], ["shrimp", "raw shrimp"], ["tomatoes", "cherry tomatoes"],
    ["basil", "basil leaves"], ["mint", "mint leaves"], ["thyme", "thyme sprigs"], ["sage", "sage leaves"], ["rosemary", "rosemary sprigs"], ["red onion", "red onion"],
    ["mushrooms", "cremini mushrooms"], ["fennel", "fennel bulb"], ["prosciutto", "prosciutto"], ["hazelnuts", "hazelnuts"], ["pistachios", "pistachio nuts"], ["arugula", "arugula leaves"],
    ["olives", "kalamata olives"], ["feta", "feta cheese"], ["olive oil", "olive oil bottle"], ["honey", "honey jar"], ["sesame seeds", "sesame seeds"], ["soy sauce", "soy sauce"],
    ["bell pepper", "bell peppers"], ["cucumber", "cucumbers"], ["cabbage", "red cabbage"], ["tortilla", "corn tortillas"], ["black beans", "black turtle beans"], ["rice", "jasmine rice"],
    ["duck", "raw duck breast"], ["salmon", "salmon fillet raw"], ["mussels", "fresh mussels"], ["scallops", "raw scallops"], ["halloumi", "halloumi cheese"], ["eggplant", "aubergine"],
    ["tofu", "tofu block"], ["cauliflower", "cauliflower"], ["sweet potato", "sweet potatoes"], ["asparagus", "asparagus spears"], ["Brussels sprouts", "brussels sprouts"],
    ["bok choy", "bok choy"], ["carrots", "carrots"], ["parsnip", "parsnips"], ["potatoes", "new potatoes"], ["cream", "heavy cream"], ["wine", "wine bottles"], ["cod", "cod fillet"]
  ],
  picks: {}
};
