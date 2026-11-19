/* ============================================================
   THE COOKBOOK. Every dinner the planner can offer.

   Amounts are written for 2 servings; the planner scales them.
   Each ingredient: [amount, unit, name, store section, pantry staple?]
     unit: "oz", "lb", "cup", "tbsp", "tsp", or "" for things you count (2 shallots)
     section: produce, protein, dairy, pantry, bakery
     staple: true for things most kitchens already have (oil, salt, pepper).
             Staples are listed for a pantry check without amounts.
   Nutrition is per serving and approximate, estimated from the ingredients.
   tags: veg, seafood, poultry, meat, plus "weekend" for long cooks.

   To add a dinner, copy one block, give it a new id, and edit.
   ============================================================ */
window.COOKBOOK = [
  {
    id: "duck-cherry", name: "Seared Duck Breast, Cherry–Port Sauce", side: "parsnip purée, wilted greens",
    blurb: "Crisp-skinned duck, rosy in the middle, with a glossy sweet-sharp sauce.",
    time: 45, level: "Medium", tags: ["poultry"], kcal: 690, protein: 42, carbs: 48, fat: 34, fiber: 8,
    ingredients: [
      [2, "", "duck breast (about 7 oz each)", "protein"], [1, "lb", "parsnips", "produce"], [1, "", "shallot", "produce"],
      [5, "oz", "baby spinach", "produce"], [1, "cup", "frozen dark cherries", "pantry"], [0.5, "cup", "ruby port", "pantry"],
      [0.5, "cup", "chicken stock", "pantry"], [0.25, "cup", "heavy cream", "dairy"], [2, "tbsp", "butter", "dairy", true],
      [1, "tsp", "red wine vinegar", "pantry", true], [0, "", "salt", "pantry", true]
    ],
    steps: [
      "Peel and chop the parsnips. Simmer in salted water until very tender, about 15 minutes. Drain, then blend with the cream and half the butter until smooth. Keep warm.",
      "Score the duck skin in a crosshatch without cutting the meat, and season well. Lay skin-side down in a cold pan, then turn the heat to medium-low. Render 12–14 minutes, pouring off fat as it pools, until the skin is deep golden.",
      "Flip and cook 3–4 minutes for medium-rare. Rest on a board for 8 minutes.",
      "Pour off all but a spoonful of fat. Soften the minced shallot, add the port and reduce by half, then add the stock and cherries and simmer until syrupy. Off the heat, swirl in the remaining butter and the vinegar.",
      "Wilt the spinach in a little duck fat with a pinch of salt. Slice the duck and serve over the purée with the greens and sauce."
    ],
    note: "Starting the duck in a cold pan is the whole trick: the fat renders slowly and the skin crisps instead of burning."
  },
  {
    id: "miso-cod", name: "Miso-Glazed Black Cod", side: "sesame bok choy, jasmine rice",
    blurb: "Buttery fish under a caramelised sweet-savoury glaze.",
    time: 30, level: "Easy", tags: ["seafood"], kcal: 640, protein: 34, carbs: 62, fat: 28, fiber: 3,
    ingredients: [
      [2, "", "black cod (sablefish) fillet, about 6 oz", "protein"], [3, "tbsp", "white miso", "pantry"], [2, "tbsp", "mirin", "pantry"],
      [1, "tbsp", "sake or dry white wine", "pantry"], [1, "tbsp", "sugar", "pantry", true], [0.75, "cup", "jasmine rice", "pantry"],
      [4, "", "baby bok choy", "produce"], [2, "", "garlic clove", "produce"], [1, "", "thumb of ginger", "produce"],
      [2, "", "scallion", "produce"], [1, "tbsp", "toasted sesame oil", "pantry"], [1, "tbsp", "soy sauce", "pantry", true],
      [1, "tbsp", "sesame seeds", "pantry"]
    ],
    steps: [
      "Whisk the miso, mirin, sake and sugar. Coat the fish and leave it while you prepare everything else, or overnight in the fridge if you plan ahead.",
      "Rinse the rice and cook it according to the packet.",
      "Heat the broiler with a rack about 6 inches below. Wipe excess marinade off the fish, set it skin-side down on a foil-lined tray, and broil 8–10 minutes until deeply caramelised and just flaking.",
      "Halve the bok choy. Sear cut-side down in a hot pan with a little oil, add sliced garlic and ginger, a splash of water and the soy, then cover for 2 minutes. Finish with sesame oil.",
      "Serve the fish over rice with the bok choy, sliced scallions and sesame seeds."
    ],
    note: "Salmon or Chilean sea bass work if you can't find black cod. Watch the broiler closely in the last two minutes."
  },
  {
    id: "scallops-corn", name: "Brown-Butter Scallops, Sweet Corn Purée", side: "crisp prosciutto, chives",
    blurb: "Restaurant plating, weeknight timing.",
    time: 30, level: "Medium", tags: ["seafood"], kcal: 520, protein: 36, carbs: 38, fat: 24, fiber: 4,
    ingredients: [
      [0.75, "lb", "large dry sea scallops", "protein"], [2, "oz", "prosciutto", "protein"], [2.5, "cup", "frozen sweet corn", "pantry"],
      [1, "", "shallot", "produce"], [0.25, "cup", "heavy cream", "dairy"], [3, "tbsp", "butter", "dairy", true],
      [1, "", "lemon", "produce"], [1, "", "small bunch chives", "produce"], [1, "tbsp", "neutral oil", "pantry", true],
      [0, "", "salt", "pantry", true]
    ],
    steps: [
      "Crisp the prosciutto in a dry pan or a 400°F oven for 6–8 minutes. Break into shards.",
      "Soften the sliced shallot in a spoonful of butter, add 2 cups of the corn and the cream, and simmer 5 minutes. Blend until silky and season. Sauté the remaining corn until lightly charred.",
      "Pat the scallops very dry and season. Sear in smoking-hot oil for 2 minutes without moving them, until a dark crust forms.",
      "Flip, add the remaining butter, and baste for 1 minute as it browns and smells nutty. Squeeze in lemon.",
      "Spoon the purée onto warm plates, top with scallops, charred corn, prosciutto, chives and the brown butter."
    ],
    note: "Buy 'dry' scallops. Wet-packed ones are soaked in brine and will steam instead of sear."
  },
  {
    id: "steak-poivre", name: "Steak au Poivre", side: "cognac cream, crispy smashed potatoes",
    blurb: "The bistro classic: peppercorn crust and a pan sauce worth mopping up.",
    time: 40, level: "Medium", tags: ["meat"], kcal: 780, protein: 48, carbs: 40, fat: 46, fiber: 4,
    ingredients: [
      [2, "", "New York strip or filet steak, about 7 oz", "protein"], [1, "lb", "baby gold potatoes", "produce"], [1, "", "shallot", "produce"],
      [1.5, "tbsp", "whole black peppercorns", "pantry"], [0.25, "cup", "cognac or brandy", "pantry"], [0.5, "cup", "beef stock", "pantry"],
      [0.33, "cup", "heavy cream", "dairy"], [1, "tsp", "Dijon mustard", "pantry"], [2, "tbsp", "butter", "dairy", true],
      [2, "tbsp", "olive oil", "pantry", true], [3, "oz", "arugula", "produce"], [0, "", "salt", "pantry", true]
    ],
    steps: [
      "Boil the potatoes in salted water until tender, 15 minutes. Drain, smash each flat on an oiled tray, drizzle with oil and salt, and roast at 450°F for 20 minutes until crisp.",
      "Coarsely crush the peppercorns and press them into both sides of the salted steaks.",
      "Sear the steaks in a hot pan with oil, 3–4 minutes a side for medium-rare, adding the butter near the end to baste. Rest on a plate.",
      "Soften the minced shallot in the same pan. Off the heat, add the cognac, then return and let it bubble away. Add the stock, reduce by half, then stir in the cream and mustard and simmer until it coats a spoon. Pour in the resting juices.",
      "Serve the steaks with the sauce, potatoes and a handful of dressed arugula."
    ],
    note: "Take the pan off the flame before adding the cognac. It can flare."
  },
  {
    id: "mushroom-risotto", name: "Wild Mushroom Risotto", side: "thyme, parmesan, lemon",
    blurb: "Slow-stirred and deeply savoury, finished with butter and cheese.",
    time: 40, level: "Medium", tags: ["veg"], kcal: 610, protein: 19, carbs: 78, fat: 22, fiber: 4,
    ingredients: [
      [10, "oz", "mixed mushrooms (cremini, shiitake, oyster)", "produce"], [0.5, "oz", "dried porcini", "pantry"], [1, "cup", "arborio rice", "pantry"],
      [1, "", "shallot", "produce"], [2, "", "garlic clove", "produce"], [0.5, "cup", "dry white wine", "pantry"],
      [4, "cup", "vegetable stock", "pantry"], [2, "oz", "parmesan", "dairy"], [2, "tbsp", "butter", "dairy", true],
      [1, "", "small bunch thyme", "produce"], [1, "", "lemon", "produce"], [2, "tbsp", "olive oil", "pantry", true],
      [0, "", "salt", "pantry", true]
    ],
    steps: [
      "Soak the porcini in 1 cup of hot water for 10 minutes. Chop them and add the strained soaking liquid to the stock. Keep the stock hot.",
      "Sear the sliced fresh mushrooms in oil over high heat, in batches, until well browned. Season, add thyme, and set aside.",
      "Soften the minced shallot and garlic in a little oil. Stir in the rice for 2 minutes until the edges turn translucent, then add the wine and let it absorb.",
      "Add hot stock a ladle at a time, stirring often, for 18–20 minutes until the rice is creamy with a slight bite.",
      "Off the heat, beat in the butter, most of the parmesan, the mushrooms and a squeeze of lemon. Rest 2 minutes, then serve with the remaining cheese."
    ],
    note: "The risotto should flow slowly when you tilt the plate. Loosen with a splash of stock if it sits."
  },
  {
    id: "chicken-beans", name: "Lemon-Herb Chicken Thighs", side: "garlicky white beans, charred broccolini",
    blurb: "Shatteringly crisp skin over beans that drink up the pan juices.",
    time: 40, level: "Easy", tags: ["poultry"], kcal: 620, protein: 46, carbs: 38, fat: 30, fiber: 11,
    ingredients: [
      [4, "", "bone-in, skin-on chicken thigh", "protein"], [1, "", "can cannellini beans (15 oz)", "pantry"], [1, "", "bunch broccolini", "produce"],
      [4, "", "garlic clove", "produce"], [1, "", "lemon", "produce"], [0.5, "cup", "chicken stock", "pantry"],
      [1, "", "small bunch parsley", "produce"], [1, "", "sprig rosemary", "produce"], [0.25, "tsp", "chili flakes", "pantry", true],
      [2, "tbsp", "olive oil", "pantry", true], [0, "", "salt", "pantry", true]
    ],
    steps: [
      "Heat the oven to 425°F. Pat the chicken dry and season generously.",
      "Sear skin-side down in an ovenproof pan over medium heat for 8–10 minutes until deep golden. Flip and move to a plate.",
      "In the same pan, soften the sliced garlic with rosemary and chili. Add the drained beans, stock and strips of lemon zest. Nestle the chicken on top, skin up, and roast 15 minutes.",
      "Toss the broccolini with oil and salt and roast on a tray alongside for 10–12 minutes until charred at the tips.",
      "Finish the beans with lemon juice and chopped parsley and serve everything together."
    ],
    note: "Don't rush the sear. The skin releases from the pan on its own once it's crisp."
  },
  {
    id: "lamb-harissa", name: "Harissa Lamb Chops", side: "herbed couscous, mint yogurt",
    blurb: "Charred, spiced chops cooled by yogurt and a bright herb couscous.",
    time: 30, level: "Easy", tags: ["meat"], kcal: 720, protein: 44, carbs: 46, fat: 38, fiber: 5,
    ingredients: [
      [6, "", "lamb rib or loin chop", "protein"], [2, "tbsp", "harissa paste", "pantry"], [0.75, "cup", "couscous", "pantry"],
      [0.5, "cup", "Greek yogurt", "dairy"], [1, "", "small bunch mint", "produce"], [1, "", "small bunch parsley", "produce"],
      [1, "", "lemon", "produce"], [0.25, "cup", "pistachios", "pantry"], [0.25, "cup", "dried apricots", "pantry"],
      [1, "", "garlic clove", "produce"], [2, "tbsp", "olive oil", "pantry", true], [0, "", "salt", "pantry", true]
    ],
    steps: [
      "Rub the chops with the harissa, a spoonful of oil and salt. Leave at room temperature while you prepare the rest.",
      "Pour 1 cup of boiling salted water over the couscous, cover for 5 minutes, then fluff. Fold in chopped parsley, half the mint, chopped apricots and pistachios, lemon zest and juice, and oil.",
      "Stir the grated garlic and remaining chopped mint into the yogurt with a pinch of salt.",
      "Sear the chops in a very hot pan or on a grill, 2–3 minutes a side for medium-rare. Rest 5 minutes.",
      "Serve the chops over the couscous with the yogurt."
    ],
    note: "Harissa varies a lot in heat. Taste yours first and adjust."
  },
  {
    id: "pork-apple", name: "Pork Tenderloin, Apple–Mustard Pan Sauce", side: "roasted Brussels sprouts",
    blurb: "Lean, quick-roasting pork with a cider sauce that tastes like autumn.",
    time: 40, level: "Easy", tags: ["meat"], kcal: 560, protein: 46, carbs: 34, fat: 24, fiber: 8,
    ingredients: [
      [1, "", "pork tenderloin (about 1 lb)", "protein"], [0.75, "lb", "Brussels sprouts", "produce"], [1, "", "firm apple", "produce"],
      [1, "", "shallot", "produce"], [0.75, "cup", "apple cider", "pantry"], [0.5, "cup", "chicken stock", "pantry"],
      [1, "tbsp", "whole-grain mustard", "pantry"], [2, "tbsp", "butter", "dairy", true], [1, "", "small bunch thyme", "produce"],
      [2, "tbsp", "olive oil", "pantry", true], [0, "", "salt", "pantry", true]
    ],
    steps: [
      "Heat the oven to 425°F. Halve the sprouts, toss with oil and salt, and roast cut-side down for 20–25 minutes.",
      "Season the pork and sear in an ovenproof pan until browned all over, about 6 minutes. Roast 12–15 minutes to 140°F inside, then rest 8 minutes.",
      "In the same pan, cook the sliced apple and shallot in a spoonful of butter until golden. Add the cider and thyme and reduce by half, then the stock, and reduce until glossy.",
      "Off the heat, whisk in the mustard and remaining butter.",
      "Slice the pork and serve with the sprouts and sauce."
    ],
    note: "Pull the pork at 140°F. It climbs to a blushing 145°F as it rests."
  },
  {
    id: "shrimp-orzo", name: "Saffron Shrimp Orzo", side: "fennel, tomato, lemon",
    blurb: "One pan, cooked like a loose risotto, with a little saffron for luxury.",
    time: 30, level: "Easy", tags: ["seafood"], kcal: 590, protein: 40, carbs: 70, fat: 14, fiber: 6,
    ingredients: [
      [0.75, "lb", "large shrimp, peeled", "protein"], [1, "cup", "orzo", "pantry"], [1, "", "fennel bulb", "produce"],
      [1, "cup", "cherry tomatoes", "produce"], [3, "", "garlic clove", "produce"], [1, "", "pinch saffron", "pantry"],
      [0.5, "cup", "dry white wine", "pantry"], [2.5, "cup", "chicken or fish stock", "pantry"], [1, "", "lemon", "produce"],
      [1, "", "small bunch parsley", "produce"], [2, "tbsp", "olive oil", "pantry", true], [0.25, "tsp", "chili flakes", "pantry", true],
      [0, "", "salt", "pantry", true]
    ],
    steps: [
      "Steep the saffron in the warm stock.",
      "Soften the thinly sliced fennel in oil for 6 minutes, then add the garlic and chili. Stir in the orzo and toast for a minute.",
      "Add the wine, let it bubble away, then the saffron stock and halved tomatoes. Simmer, stirring now and then, for 9–10 minutes until the orzo is nearly tender and saucy.",
      "Nestle in the seasoned shrimp, cover, and cook 3–4 minutes until just pink.",
      "Finish with lemon juice, zest, parsley and the reserved fennel fronds."
    ],
    note: "Keep the fennel fronds. They make a better garnish than anything you could buy."
  },
  {
    id: "squash-pasta", name: "Pappardelle, Roasted Squash & Sage Brown Butter", side: "burrata, toasted hazelnuts",
    blurb: "Sweet squash, nutty butter and cool, creamy burrata.",
    time: 35, level: "Easy", tags: ["veg"], kcal: 740, protein: 24, carbs: 86, fat: 34, fiber: 7,
    ingredients: [
      [8, "oz", "pappardelle", "pantry"], [1, "lb", "butternut squash", "produce"], [1, "", "ball burrata (4 oz)", "dairy"],
      [3, "tbsp", "butter", "dairy", true], [1, "", "small bunch sage", "produce"], [0.25, "cup", "hazelnuts", "pantry"],
      [1, "oz", "parmesan", "dairy"], [1, "", "lemon", "produce"], [1, "tbsp", "olive oil", "pantry", true],
      [0, "", "salt", "pantry", true]
    ],
    steps: [
      "Heat the oven to 425°F. Roast the cubed squash with oil and salt for 25 minutes until caramelised. Toast the hazelnuts for the last 5 minutes, then chop.",
      "Cook the pasta in well-salted water. Keep a cup of the cooking water.",
      "Melt the butter over medium heat with the sage leaves until the butter turns hazelnut-brown and the sage is crisp.",
      "Toss the pasta into the butter with the squash, parmesan and enough pasta water to make it glossy. Sharpen with lemon juice.",
      "Plate, tear the burrata over the top, and scatter with hazelnuts and the crisp sage."
    ],
    note: "Take the burrata out of the fridge when you start cooking. It should be cool, not cold."
  },
  {
    id: "salmon-beurre-blanc", name: "Crispy-Skin Salmon, Lemon Beurre Blanc", side: "new potatoes, green beans",
    blurb: "A classic French butter sauce that makes a Tuesday feel like an occasion.",
    time: 30, level: "Medium", tags: ["seafood"], kcal: 690, protein: 40, carbs: 32, fat: 44, fiber: 6,
    ingredients: [
      [2, "", "skin-on salmon fillet, about 6 oz", "protein"], [0.75, "lb", "new potatoes", "produce"], [6, "oz", "green beans", "produce"],
      [1, "", "shallot", "produce"], [0.33, "cup", "dry white wine", "pantry"], [1, "tbsp", "white wine vinegar", "pantry", true],
      [5, "tbsp", "butter", "dairy"], [1, "", "lemon", "produce"], [1, "", "small bunch dill", "produce"],
      [1, "tbsp", "neutral oil", "pantry", true], [0, "", "salt", "pantry", true]
    ],
    steps: [
      "Boil the potatoes in salted water for 15 minutes, adding the beans for the last 3. Drain and toss with a little butter and chopped dill.",
      "Simmer the minced shallot with the wine and vinegar until only a couple of spoonfuls remain.",
      "Over the lowest heat, whisk in the cold butter a cube at a time until the sauce is pale and creamy. Season with salt and lemon. Keep just warm.",
      "Pat the salmon skin very dry and season. Cook skin-side down in a hot oiled pan, pressing for the first 30 seconds, for 5–6 minutes. Flip for 1 minute.",
      "Serve the salmon skin-up over the vegetables with the sauce spooned around."
    ],
    note: "If the sauce gets too hot it splits. Lift the pan off the heat whenever it starts to look oily."
  },
  {
    id: "chicken-marsala", name: "Chicken Marsala", side: "mushrooms, creamy polenta",
    blurb: "Tender cutlets in a sweet-savoury wine sauce over soft polenta.",
    time: 40, level: "Easy", tags: ["poultry"], kcal: 680, protein: 50, carbs: 48, fat: 26, fiber: 4,
    ingredients: [
      [2, "", "chicken breast", "protein"], [8, "oz", "cremini mushrooms", "produce"], [0.66, "cup", "dry Marsala", "pantry"],
      [0.66, "cup", "chicken stock", "pantry"], [0.75, "cup", "polenta (cornmeal)", "pantry"], [1.5, "oz", "parmesan", "dairy"],
      [1, "", "shallot", "produce"], [2, "", "garlic clove", "produce"], [0.25, "cup", "flour", "pantry", true],
      [3, "tbsp", "butter", "dairy", true], [1, "", "small bunch parsley", "produce"], [2, "tbsp", "olive oil", "pantry", true],
      [0, "", "salt", "pantry", true]
    ],
    steps: [
      "Whisk the polenta into 3 cups of simmering salted water. Cook on low, stirring often, for 20–25 minutes. Finish with the parmesan and a spoonful of butter.",
      "Halve each chicken breast horizontally and pound to an even thickness. Season and dust with flour.",
      "Brown the chicken in oil and butter, 3 minutes a side. Set aside.",
      "Brown the sliced mushrooms in the same pan, then add the shallot and garlic. Pour in the Marsala and reduce by half, add the stock, and simmer until lightly thickened.",
      "Return the chicken for 2 minutes, swirl in the last of the butter, and serve over polenta with parsley."
    ],
    note: "Use dry Marsala, not sweet. The sauce reduces enough to be sweet on its own."
  },
  {
    id: "cauliflower-romesco", name: "Roasted Cauliflower Steaks, Romesco", side: "crispy chickpeas, herbs",
    blurb: "Charred, meaty cauliflower over a smoky red pepper and almond sauce.",
    time: 40, level: "Easy", tags: ["veg"], kcal: 540, protein: 18, carbs: 48, fat: 32, fiber: 14,
    ingredients: [
      [1, "", "large cauliflower", "produce"], [1, "", "can chickpeas (15 oz)", "pantry"], [1, "", "jar roasted red peppers (12 oz)", "pantry"],
      [0.33, "cup", "roasted almonds", "pantry"], [1, "", "garlic clove", "produce"], [1, "tbsp", "sherry vinegar", "pantry"],
      [1.5, "tsp", "smoked paprika", "pantry"], [1, "", "small bunch parsley", "produce"], [1, "", "lemon", "produce"],
      [4, "tbsp", "olive oil", "pantry", true], [0, "", "salt", "pantry", true]
    ],
    steps: [
      "Heat the oven to 450°F. Cut two thick steaks from the centre of the cauliflower and break the rest into florets. Rub everything with oil, salt and half the paprika.",
      "Roast on a hot tray for 15 minutes, flip the steaks, and add the drained, dried chickpeas tossed in oil. Roast 12–15 minutes more until charred and crisp.",
      "Blend the drained peppers, almonds, garlic, vinegar, remaining paprika and 2 spoonfuls of oil to a coarse sauce. Season.",
      "Dress the parsley leaves with lemon juice and a little oil.",
      "Spread the romesco on plates, top with the steaks, florets and chickpeas, and finish with the herbs."
    ],
    note: "Leftover romesco keeps a week and is excellent on eggs, fish or toast."
  },
  {
    id: "mussels-wine", name: "Mussels in White Wine & Cream", side: "shallot, garlic, grilled bread",
    blurb: "Fifteen minutes at the stove and a broth made for dunking.",
    time: 25, level: "Easy", tags: ["seafood"], kcal: 610, protein: 38, carbs: 46, fat: 24, fiber: 3,
    ingredients: [
      [2, "lb", "mussels", "protein"], [2, "", "shallot", "produce"], [3, "", "garlic clove", "produce"],
      [0.75, "cup", "dry white wine", "pantry"], [0.33, "cup", "heavy cream", "dairy"], [2, "tbsp", "butter", "dairy", true],
      [1, "", "small bunch parsley", "produce"], [0.5, "", "baguette or country loaf", "bakery"], [1, "", "lemon", "produce"],
      [1, "tbsp", "olive oil", "pantry", true], [0, "", "black pepper", "pantry", true]
    ],
    steps: [
      "Rinse the mussels, pull off any beards, and discard any that stay open when tapped.",
      "Soften the sliced shallots and garlic in butter in a wide pot. Add the wine and bring to a hard boil.",
      "Add the mussels, cover, and steam 4–5 minutes, shaking the pot once, until they open. Discard any that stay shut.",
      "Stir in the cream and parsley and grind in pepper.",
      "Brush thick slices of bread with oil, grill or toast until charred, and serve alongside with lemon."
    ],
    note: "Mussels are salty on their own. Taste the broth before adding any salt."
  },
  {
    id: "short-ribs", name: "Red Wine–Braised Short Ribs", side: "celery root mash",
    blurb: "A slow Sunday braise that falls off the bone.",
    time: 195, level: "Involved", tags: ["meat", "weekend"], kcal: 860, protein: 52, carbs: 34, fat: 54, fiber: 6,
    ingredients: [
      [2, "lb", "bone-in beef short ribs", "protein"], [1.5, "cup", "dry red wine", "pantry"], [2, "cup", "beef stock", "pantry"],
      [1, "", "onion", "produce"], [2, "", "carrot", "produce"], [2, "", "celery stalk", "produce"],
      [4, "", "garlic clove", "produce"], [1, "tbsp", "tomato paste", "pantry"], [1, "", "small bunch thyme", "produce"],
      [2, "", "bay leaf", "pantry", true], [1, "", "celery root (about 1 lb)", "produce"], [0.5, "lb", "gold potatoes", "produce"],
      [0.25, "cup", "heavy cream", "dairy"], [2, "tbsp", "butter", "dairy", true], [1, "tbsp", "neutral oil", "pantry", true],
      [0, "", "salt", "pantry", true]
    ],
    steps: [
      "Heat the oven to 325°F. Season the ribs heavily and brown on all sides in a Dutch oven, about 10 minutes. Set aside.",
      "Soften the chopped onion, carrot and celery in the fat, then stir in the garlic and tomato paste until it darkens. Add the wine and reduce by half.",
      "Return the ribs with the stock, thyme and bay. Cover and braise in the oven for 2½–3 hours until a fork slides in easily.",
      "Simmer the peeled, cubed celery root and potatoes until tender, then mash with the cream and butter.",
      "Lift out the ribs, skim the fat, and reduce the strained liquid to a glossy sauce. Serve over the mash."
    ],
    note: "Better made a day ahead: chill overnight, lift off the set fat, and reheat gently."
  },
  {
    id: "tuna-soba", name: "Sesame-Crusted Tuna", side: "chilled soba, cucumber, ginger-soy dressing",
    blurb: "Seared outside, ruby inside, over cool noodles.",
    time: 25, level: "Easy", tags: ["seafood"], kcal: 560, protein: 46, carbs: 56, fat: 16, fiber: 5,
    ingredients: [
      [2, "", "sushi-grade tuna steak, about 6 oz", "protein"], [6, "oz", "soba noodles", "pantry"], [3, "tbsp", "sesame seeds", "pantry"],
      [1, "", "cucumber", "produce"], [3, "", "scallion", "produce"], [1, "cup", "shelled edamame", "pantry"],
      [1, "", "thumb of ginger", "produce"], [3, "tbsp", "soy sauce", "pantry", true], [1, "tbsp", "rice vinegar", "pantry"],
      [1, "tbsp", "toasted sesame oil", "pantry"], [1, "tsp", "honey", "pantry", true], [1, "", "lime", "produce"],
      [1, "tbsp", "neutral oil", "pantry", true]
    ],
    steps: [
      "Cook the soba according to the packet, adding the edamame for the last minute. Rinse under cold water until chilled and drain well.",
      "Whisk the soy, vinegar, sesame oil, honey, grated ginger and lime juice.",
      "Toss the noodles with half the dressing, the sliced cucumber and scallions.",
      "Press the tuna into the sesame seeds. Sear in a very hot oiled pan for 45–60 seconds a side, leaving the centre rare.",
      "Slice the tuna and serve over the noodles with the remaining dressing."
    ],
    note: "The pan has to be properly hot. A long sear cooks the tuna through and you lose the contrast."
  },
  {
    id: "halloumi-farro", name: "Seared Halloumi & Farro", side: "roasted peppers, pistachio–herb sauce",
    blurb: "Chewy grains, salty golden cheese, and a green sauce that ties it together.",
    time: 35, level: "Easy", tags: ["veg"], kcal: 680, protein: 28, carbs: 62, fat: 36, fiber: 10,
    ingredients: [
      [8, "oz", "halloumi", "dairy"], [0.75, "cup", "farro", "pantry"], [2, "", "bell pepper", "produce"],
      [1, "", "red onion", "produce"], [1, "", "small bunch parsley", "produce"], [1, "", "small bunch mint", "produce"],
      [0.25, "cup", "pistachios", "pantry"], [1, "", "garlic clove", "produce"], [1, "", "lemon", "produce"],
      [3, "oz", "arugula", "produce"], [1, "tsp", "honey", "pantry", true], [4, "tbsp", "olive oil", "pantry", true],
      [0, "", "salt", "pantry", true]
    ],
    steps: [
      "Simmer the farro in salted water for 25–30 minutes until tender with a little chew. Drain.",
      "Roast the sliced peppers and onion with oil and salt at 425°F for 20 minutes until soft and charred at the edges.",
      "Blend the parsley, mint, pistachios, garlic, lemon juice and 3 spoonfuls of oil into a loose sauce. Season.",
      "Sear thick slices of halloumi in a dry non-stick pan, 2 minutes a side, until golden. Drizzle with the honey.",
      "Toss the farro with the vegetables, arugula and half the sauce. Top with the halloumi and the remaining sauce."
    ],
    note: "Cook the halloumi last and serve it straight away. It turns squeaky as it cools."
  }
];
