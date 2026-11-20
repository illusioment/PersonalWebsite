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
    "squash-pasta": "pappardelle", "shrimp-orzo": "orzo pasta dish", "pork-saltimbocca": "saltimbocca alla romana", "sausage-rigatoni": "rigatoni al ragù",
    "eggplant-parm": "parmigiana di melanzane", "miso-cod": "saikyoyaki grilled fish", "tuna-sesame": "seared tuna sesame", "gochujang-chicken": "korean spicy chicken dish",
    "green-curry-shrimp": "thai green curry", "mapo-tofu": "mapo tofu", "lamb-harissa": "grilled lamb chops", "cauliflower-romesco": "roasted cauliflower",
    "halloumi-farro": "grilled halloumi", "shawarma-chicken": "chicken shawarma plate", "greek-cod": "baked cod fillet", "chicken-lemon": "roasted chicken thighs",
    "pork-apple": "pork tenderloin", "scallops-butter": "seared scallops", "short-ribs": "braised beef short ribs", "hazelnut-halibut": "halibut dish",
    "smash-burgers": "cheeseburger", "chimichurri-steak": "steak with chimichurri", "fish-tacos": "fish taco", "chipotle-shrimp": "grilled shrimp", "enchiladas": "enchiladas"
  },
  sides: {
    "s-parsnip": "mashed parsnips", "s-smashed": "crispy roast potatoes", "s-dill-potatoes": "boiled potatoes with dill", "s-polenta": "polenta", "s-rice": "bowl of steamed rice",
    "s-cilantro-rice": "cilantro lime rice", "s-couscous": "couscous", "s-celery-mash": "celeriac mash", "s-bread": "toasted sourdough bread", "s-soba": "cold soba noodles",
    "s-white-beans": "cannellini beans dish", "s-black-beans": "frijoles negros", "s-corn-puree": "creamed corn", "s-spinach": "sauteed spinach", "s-bokchoy": "bok choy stir fry",
    "s-broccolini": "broccolini", "s-sprouts": "roasted brussels sprouts", "s-green-beans": "haricots verts dish", "s-asparagus": "roasted asparagus", "s-arugula": "rocket salad parmesan",
    "s-carrots": "roasted carrots", "s-cucumber": "smashed cucumber salad", "s-slaw": "coleslaw", "s-greek-salad": "greek salad", "s-corn": "esquites"
  },
  /* Ingredients are matched by a word in the ingredient's name: [word, search phrase]. */
  ingredients: [
    ["garlic", "garlic bulbs"], ["butter", "butter block"], ["lemon", "lemons fruit"], ["lime", "limes fruit"], ["parsley", "parsley bunch"], ["cilantro", "coriander leaves"],
    ["shallot", "shallots"], ["parmesan", "parmigiano reggiano cheese"], ["ginger", "fresh ginger rhizome"], ["scallion", "spring onions bunch"], ["shrimp", "raw prawns"], ["tomatoes", "cherry tomatoes"],
    ["basil", "basil leaves"], ["mint", "mint leaves"], ["thyme", "fresh thyme herb"], ["sage", "sage leaves"], ["rosemary", "rosemary herb"], ["red onion", "red onion"],
    ["mushrooms", "cremini mushrooms"], ["fennel", "fennel bulb"], ["prosciutto", "prosciutto"], ["hazelnuts", "hazelnuts"], ["pistachios", "pistachio nuts"], ["arugula", "rocket leaves"],
    ["olives", "kalamata olives"], ["feta", "feta cheese"], ["olive oil", "olive oil bottle"], ["honey", "honey jar"], ["sesame seeds", "sesame seeds"], ["soy sauce", "soy sauce"],
    ["bell pepper", "bell peppers"], ["cucumber", "cucumber vegetable"], ["cabbage", "red cabbage head"], ["tortilla", "corn tortillas"], ["black beans", "black turtle beans"], ["rice", "jasmine rice"],
    ["duck", "duck breast meat"], ["salmon", "salmon fillet raw"], ["mussels", "blue mussels seafood"], ["scallops", "scallops seafood"], ["halloumi", "halloumi cheese"], ["eggplant", "aubergine"],
    ["tofu", "tofu"], ["cauliflower", "cauliflower"], ["sweet potato", "sweet potato tubers"], ["asparagus", "asparagus spears"], ["Brussels sprouts", "brussels sprouts"],
    ["bok choy", "bok choy"], ["carrots", "carrots"], ["parsnip", "parsnip roots"], ["potatoes", "baby potatoes"], ["cream", "heavy cream"], ["wine", "bottle of white wine"], ["cod", "cod fillet"]
  ],
  picks: {}
};
