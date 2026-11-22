/* ============================================================
   KARLY'S PICKS: a second set of dinners, added on top of the
   original cookbook in recipes.js (nothing there is removed).
   Simpler weeknight food: salmon and rice, chicken, turkey, beef,
   plenty of vegetables and salads, Mexican, Asian and Italian.
   No bell peppers or fresh chiles anywhere in this file.

   Same format as recipes.js: ingredients are for 2 people,
   [amount, unit, name, aisle, staple?]; nutrition is per person
   and approximate. To add a dinner, copy one block and edit it.
   ============================================================ */
(function () {
  const S = true; // marks a cupboard staple
  const sides = [
    { id: "s-green-salad", name: "Simple green salad, lemon vinaigrette", type: "veg", time: 5, kcal: 90, protein: 2, carbs: 5, fat: 7, fiber: 2,
      ingredients: [[4, "oz", "mixed salad greens", "produce"], [0.5, "", "cucumber", "produce"], [0.5, "", "lemon", "produce"], [1, "tbsp", "olive oil", "pantry", S], [0, "", "salt", "pantry", S]],
      steps: ["Whisk the lemon juice with the oil and a pinch of salt.", "Toss with the greens and sliced cucumber just before serving."] },
    { id: "s-roast-veg", name: "Roasted broccoli & zucchini", type: "veg", time: 25, kcal: 130, protein: 5, carbs: 12, fat: 8, fiber: 5,
      ingredients: [[0.5, "lb", "broccoli florets", "produce"], [1, "", "zucchini", "produce"], [1, "", "garlic clove", "produce"], [1, "tbsp", "olive oil", "pantry", S], [0, "", "salt", "pantry", S]],
      steps: ["Cut the zucchini into half-moons. Toss with the broccoli, sliced garlic, oil and salt.", "Roast at 425°F for 18–20 minutes, turning once, until the edges brown."] }
  ];

  const dinners = [
    /* ---------- Asian ---------- */
    { id: "k-salmon-rice", genre: "asian", name: "Teriyaki Salmon Rice Bowls", complete: true, blurb: "Glazed salmon over rice with cucumber, avocado and edamame.",
      time: 30, level: "Easy", tags: ["seafood"], kcal: 680, protein: 40, carbs: 70, fat: 26, fiber: 6, pairs: ["s-bokchoy"],
      ingredients: [[2, "", "salmon fillet (6 oz each)", "protein"], [0.75, "cup", "jasmine rice", "pantry"], [1, "", "cucumber", "produce"], [1, "", "avocado", "produce"], [0.5, "cup", "shelled edamame", "produce"], [2, "", "scallion", "produce"], [3, "tbsp", "soy sauce", "pantry"], [1.5, "tbsp", "honey", "pantry"], [1, "", "garlic clove", "produce"], [1, "", "thumb of ginger", "produce"], [1, "tsp", "sesame seeds", "pantry"], [1, "tbsp", "neutral oil", "pantry", S]],
      steps: ["Cook the rice: rinse, simmer covered with 1 cup of water for 12 minutes, then rest 8.", "Simmer the soy sauce, honey, grated garlic and ginger with 2 tablespoons of water for 3–4 minutes until syrupy.", "Sear the salmon in oil, skin side down, 4 minutes. Flip, cook 2 minutes more and spoon over half the glaze.", "Fill bowls with rice, sliced cucumber, avocado and edamame. Top with the salmon, the rest of the glaze, scallions and sesame seeds."],
      note: "The glaze thickens as it cools, so take it off the heat while it still looks slightly thin." },
    { id: "k-chicken-stirfry", genre: "asian", name: "Chicken & Broccoli Stir-Fry", complete: true, blurb: "Tender chicken, crisp vegetables and a ginger-garlic sauce over rice.",
      time: 30, level: "Easy", tags: ["poultry"], kcal: 610, protein: 45, carbs: 68, fat: 16, fiber: 6, pairs: [],
      ingredients: [[0.75, "lb", "chicken breast", "protein"], [0.5, "lb", "broccoli florets", "produce"], [2, "", "carrot", "produce"], [1, "cup", "sugar snap peas", "produce"], [2, "", "garlic clove", "produce"], [1, "", "thumb of ginger", "produce"], [3, "tbsp", "soy sauce", "pantry"], [1, "tbsp", "honey", "pantry"], [2, "tsp", "cornstarch", "pantry"], [1, "tsp", "toasted sesame oil", "pantry"], [0.75, "cup", "jasmine rice", "pantry"], [1, "tbsp", "neutral oil", "pantry", S]],
      steps: ["Start the rice. Stir the soy sauce, honey, cornstarch and sesame oil with a quarter cup of water.", "Slice the chicken thinly. Stir-fry in hot oil for 4 minutes until golden, then set aside.", "Stir-fry the broccoli, sliced carrots and snap peas with a splash of water for 4 minutes. Add the garlic and ginger for 30 seconds.", "Return the chicken, pour in the sauce and toss for a minute until glossy. Serve over the rice."],
      note: "Cut everything before you turn on the heat; the cooking takes less than ten minutes." },
    { id: "k-beef-bowl", genre: "asian", name: "Korean-Style Beef Rice Bowls", complete: true, blurb: "Sweet-savoury ground beef with quick-pickled cucumber and carrots. Mild, not spicy.",
      time: 25, level: "Easy", tags: ["meat"], kcal: 690, protein: 38, carbs: 72, fat: 26, fiber: 4, pairs: ["s-bokchoy"],
      ingredients: [[0.75, "lb", "lean ground beef", "protein"], [0.75, "cup", "jasmine rice", "pantry"], [3, "tbsp", "soy sauce", "pantry"], [1.5, "tbsp", "brown sugar", "pantry"], [3, "", "garlic clove", "produce"], [1, "", "thumb of ginger", "produce"], [2, "tsp", "toasted sesame oil", "pantry"], [1, "", "cucumber", "produce"], [1, "", "carrot", "produce"], [1, "tbsp", "rice vinegar", "pantry"], [2, "", "scallion", "produce"], [1, "tsp", "sesame seeds", "pantry"]],
      steps: ["Start the rice. Toss thinly sliced cucumber and grated carrot with the rice vinegar and a pinch of salt.", "Brown the beef in a dry pan over high heat, breaking it up, 5–6 minutes. Pour off excess fat.", "Add the garlic and ginger for 30 seconds, then the soy sauce, brown sugar and sesame oil. Simmer 2 minutes until sticky.", "Serve over rice with the pickled vegetables, scallions and sesame seeds."],
      note: "Let the beef sit undisturbed for the first two minutes so it browns instead of steaming." },
    { id: "k-turkey-lettuce", genre: "asian", name: "Turkey Lettuce Wraps", blurb: "Savoury ground turkey with carrot and water chestnuts in crisp lettuce cups.",
      time: 20, level: "Easy", tags: ["poultry"], kcal: 420, protein: 36, carbs: 24, fat: 20, fiber: 4, pairs: ["s-rice"],
      ingredients: [[0.75, "lb", "ground turkey", "protein"], [1, "", "head butter lettuce", "produce"], [1, "", "carrot", "produce"], [1, "", "can water chestnuts (8 oz)", "pantry"], [3, "", "scallion", "produce"], [2, "", "garlic clove", "produce"], [1, "", "thumb of ginger", "produce"], [2, "tbsp", "hoisin sauce", "pantry"], [1.5, "tbsp", "soy sauce", "pantry"], [1, "tbsp", "rice vinegar", "pantry"], [1, "tsp", "toasted sesame oil", "pantry"], [1, "tbsp", "neutral oil", "pantry", S]],
      steps: ["Brown the turkey in oil over high heat, breaking it up, about 6 minutes.", "Add the garlic, ginger, grated carrot and chopped water chestnuts and cook 2 minutes.", "Stir in the hoisin, soy sauce, vinegar and sesame oil and cook a minute more. Fold in the scallions.", "Spoon into lettuce leaves at the table."],
      note: "Dry the lettuce well so the cups stay crisp." },
    { id: "k-sesame-noodles", genre: "asian", name: "Sesame Chicken Noodle Salad", complete: true, blurb: "Cold noodles, shredded chicken and crunchy vegetables in a creamy sesame-lime dressing.",
      time: 25, level: "Easy", tags: ["poultry"], kcal: 590, protein: 40, carbs: 62, fat: 20, fiber: 7, pairs: [],
      ingredients: [[0.6, "lb", "chicken breast", "protein"], [6, "oz", "soba or rice noodles", "pantry"], [0.25, "", "small red cabbage", "produce"], [1, "", "carrot", "produce"], [1, "", "cucumber", "produce"], [1, "", "small bunch cilantro", "produce"], [2, "tbsp", "tahini or peanut butter", "pantry"], [2, "tbsp", "soy sauce", "pantry"], [1, "", "lime", "produce"], [1, "tbsp", "honey", "pantry"], [1, "tsp", "toasted sesame oil", "pantry"], [1, "tsp", "sesame seeds", "pantry"]],
      steps: ["Poach the chicken in gently simmering salted water for 12–14 minutes, then shred.", "Cook the noodles, rinse under cold water and drain well.", "Whisk the tahini, soy sauce, lime juice, honey and sesame oil with 2 tablespoons of warm water.", "Toss the noodles with shredded cabbage, carrot, cucumber, chicken and dressing. Finish with cilantro and sesame seeds."],
      note: "Rinsing the noodles stops them sticking and keeps the salad cool." },

    /* ---------- Italian ---------- */
    { id: "k-turkey-meatballs", genre: "italian", name: "Turkey Meatballs & Spaghetti", complete: true, blurb: "Baked turkey meatballs simmered in marinara over spaghetti.",
      time: 40, level: "Easy", tags: ["poultry"], kcal: 690, protein: 46, carbs: 78, fat: 20, fiber: 7, pairs: ["s-green-salad"],
      ingredients: [[0.75, "lb", "ground turkey", "protein"], [0.33, "cup", "panko breadcrumbs", "pantry"], [1, "", "egg", "dairy"], [1, "oz", "parmesan", "dairy"], [2, "", "garlic clove", "produce"], [1, "", "small bunch parsley", "produce"], [2, "cup", "marinara sauce", "pantry"], [6, "oz", "spaghetti", "pantry"], [0, "", "salt", "pantry", S]],
      steps: ["Mix the turkey, panko, egg, half the grated parmesan, minced garlic, chopped parsley and salt. Roll into 12 balls.", "Bake on a lined tray at 425°F for 15 minutes.", "Warm the marinara in a wide pan, add the meatballs and simmer 5 minutes. Meanwhile cook the spaghetti.", "Toss the pasta with the sauce and serve with the remaining parmesan."],
      note: "Wet your hands before rolling and the mixture won't stick." },
    { id: "k-chicken-parm", genre: "italian", name: "Baked Chicken Parmesan", blurb: "Crisp-crumbed chicken under marinara and melted mozzarella, baked instead of fried.",
      time: 40, level: "Easy", tags: ["poultry"], kcal: 560, protein: 55, carbs: 28, fat: 24, fiber: 3, pairs: ["s-green-salad", "s-roast-veg"],
      ingredients: [[2, "", "chicken breast (about 6 oz each)", "protein"], [0.5, "cup", "panko breadcrumbs", "pantry"], [1, "oz", "parmesan", "dairy"], [1, "", "egg", "dairy"], [1, "cup", "marinara sauce", "pantry"], [4, "oz", "fresh mozzarella", "dairy"], [1, "", "small bunch basil", "produce"], [1, "tbsp", "olive oil", "pantry", S], [0, "", "salt", "pantry", S]],
      steps: ["Pound the chicken to an even half inch. Dip in beaten egg, then in the panko mixed with grated parmesan and salt.", "Place on an oiled tray, drizzle with oil and bake at 425°F for 15 minutes, turning once.", "Top each piece with marinara and sliced mozzarella. Bake 6–8 minutes more until bubbling.", "Scatter with basil."],
      note: "Pounding the chicken thin is what keeps it juicy; it cooks before it can dry out." },
    { id: "k-lemon-chicken-pasta", genre: "italian", name: "Lemon Chicken Pasta with Spinach & Peas", complete: true, blurb: "Penne with golden chicken, greens and a light lemon-parmesan sauce.",
      time: 30, level: "Easy", tags: ["poultry"], kcal: 640, protein: 48, carbs: 70, fat: 18, fiber: 7, pairs: [],
      ingredients: [[0.75, "lb", "chicken breast", "protein"], [6, "oz", "penne", "pantry"], [4, "oz", "baby spinach", "produce"], [0.75, "cup", "frozen peas", "pantry"], [3, "", "garlic clove", "produce"], [1, "", "lemon", "produce"], [1.5, "oz", "parmesan", "dairy"], [0.5, "cup", "chicken stock", "pantry"], [1, "tbsp", "olive oil", "pantry", S], [0, "", "salt", "pantry", S]],
      steps: ["Cook the penne, adding the peas for the last 2 minutes. Keep a cup of the cooking water.", "Cut the chicken into bite-size pieces, season and brown in oil for 6–7 minutes. Add the garlic for 30 seconds.", "Pour in the stock and the lemon juice and simmer 2 minutes. Stir in the spinach until wilted.", "Add the pasta, grated parmesan and a splash of pasta water and toss until the sauce coats everything. Finish with lemon zest."],
      note: "The starchy pasta water is what turns the stock and cheese into a sauce." },
    { id: "k-bolognese", genre: "italian", name: "Weeknight Beef Bolognese", complete: true, blurb: "A quick meat sauce with carrot and celery, tossed with rigatoni.",
      time: 45, level: "Easy", tags: ["meat"], kcal: 720, protein: 42, carbs: 82, fat: 24, fiber: 8, pairs: ["s-green-salad"],
      ingredients: [[0.75, "lb", "lean ground beef", "protein"], [1, "", "onion", "produce"], [1, "", "carrot", "produce"], [1, "", "celery stalk", "produce"], [3, "", "garlic clove", "produce"], [1, "", "can crushed tomatoes (15 oz)", "pantry"], [1, "tbsp", "tomato paste", "pantry"], [6, "oz", "rigatoni", "pantry"], [1, "oz", "parmesan", "dairy"], [1, "tsp", "dried oregano", "pantry"], [1, "tbsp", "olive oil", "pantry", S], [0, "", "salt", "pantry", S]],
      steps: ["Soften the finely chopped onion, carrot and celery in oil for 6 minutes. Add the garlic.", "Add the beef and brown well, breaking it up, about 6 minutes. Stir in the tomato paste and oregano.", "Add the tomatoes and half a cup of water. Simmer 20 minutes until thick. Season.", "Cook the rigatoni, toss with the sauce and serve with parmesan."],
      note: "Chop the vegetables small and they disappear into the sauce." },

    /* ---------- Mexican ---------- */
    { id: "k-chicken-tacos", genre: "latin", name: "Chicken Tacos, Avocado & Lime Slaw", complete: true, blurb: "Cumin-rubbed chicken in warm tortillas with crunchy slaw. No peppers, no heat.",
      time: 30, level: "Easy", tags: ["poultry"], kcal: 610, protein: 40, carbs: 52, fat: 26, fiber: 10, pairs: ["s-cilantro-rice", "s-black-beans"],
      ingredients: [[0.75, "lb", "boneless, skinless chicken thighs", "protein"], [8, "", "corn tortilla", "bakery"], [0.25, "", "small red cabbage", "produce"], [2, "", "lime", "produce"], [1, "", "small bunch cilantro", "produce"], [1, "", "avocado", "produce"], [0.25, "cup", "sour cream", "dairy"], [1, "tsp", "ground cumin", "pantry"], [1, "tsp", "chili powder", "pantry"], [0.5, "tsp", "garlic powder", "pantry"], [1, "tbsp", "neutral oil", "pantry", S], [0, "", "salt", "pantry", S]],
      steps: ["Rub the chicken with the cumin, chili powder, garlic powder and salt.", "Sear in oil 5–6 minutes a side until cooked through. Rest, then slice.", "Toss shredded cabbage with the juice of one lime, salt and half the cilantro. Stir a squeeze of lime into the sour cream.", "Warm the tortillas and fill with chicken, slaw, sliced avocado, lime cream and cilantro."],
      note: "Chili powder here is a mild spice blend. Leave it out and the tacos are still good." },
    { id: "k-turkey-taco-bowls", genre: "latin", name: "Turkey Taco Rice Bowls", complete: true, blurb: "Seasoned turkey over rice with black beans, corn, tomato and avocado.",
      time: 30, level: "Easy", tags: ["poultry"], kcal: 680, protein: 44, carbs: 74, fat: 22, fiber: 14, pairs: [],
      ingredients: [[0.75, "lb", "ground turkey", "protein"], [0.75, "cup", "jasmine rice", "pantry"], [1, "", "can black beans (15 oz)", "pantry"], [0.75, "cup", "frozen sweet corn", "pantry"], [1, "cup", "cherry tomatoes", "produce"], [1, "", "avocado", "produce"], [2, "cup", "shredded romaine lettuce", "produce"], [2, "oz", "cheddar", "dairy"], [1, "", "lime", "produce"], [1.5, "tsp", "ground cumin", "pantry"], [1, "tsp", "chili powder", "pantry"], [0.5, "tsp", "garlic powder", "pantry"], [0, "", "salt", "pantry", S]],
      steps: ["Start the rice.", "Brown the turkey, breaking it up, 6 minutes. Add the cumin, chili powder, garlic powder, salt and a quarter cup of water and simmer 2 minutes.", "Warm the drained beans with the corn.", "Build bowls with rice, lettuce, turkey, beans and corn, halved tomatoes, avocado and grated cheddar. Squeeze lime over the top."],
      note: "Everything keeps well, so a double batch makes two lunches." },
    { id: "k-carne-asada-bowls", genre: "latin", name: "Carne Asada Burrito Bowls", complete: true, blurb: "Lime-and-garlic steak, sliced over cilantro rice with beans, tomato and avocado.",
      time: 35, level: "Easy", tags: ["meat"], kcal: 720, protein: 46, carbs: 70, fat: 26, fiber: 12, pairs: [],
      ingredients: [[0.75, "lb", "flank or skirt steak", "protein"], [2, "", "lime", "produce"], [3, "", "garlic clove", "produce"], [1, "tsp", "ground cumin", "pantry"], [0.75, "cup", "jasmine rice", "pantry"], [1, "", "small bunch cilantro", "produce"], [1, "", "can black beans (15 oz)", "pantry"], [1, "cup", "cherry tomatoes", "produce"], [1, "", "avocado", "produce"], [2, "cup", "shredded romaine lettuce", "produce"], [1, "tbsp", "neutral oil", "pantry", S], [0, "", "salt", "pantry", S]],
      steps: ["Rub the steak with the juice of one lime, minced garlic, cumin, oil and salt. Leave 15 minutes while the rice cooks.", "Stir chopped cilantro and the juice of half a lime into the cooked rice. Warm the beans.", "Sear the steak in a very hot pan 3–4 minutes a side. Rest 5 minutes, then slice thinly across the grain.", "Serve over the rice with beans, lettuce, chopped tomatoes and avocado."],
      note: "Slicing across the grain makes these cuts tender." },
    { id: "k-chicken-enchiladas", genre: "latin", name: "Cheesy Chicken Enchiladas", blurb: "Shredded chicken rolled in corn tortillas and baked under mild red sauce.",
      time: 45, level: "Easy", tags: ["poultry"], kcal: 650, protein: 45, carbs: 48, fat: 30, fiber: 7, pairs: ["s-slaw", "s-cilantro-rice"],
      ingredients: [[0.75, "lb", "cooked shredded chicken", "protein"], [8, "", "corn tortilla", "bakery"], [1.5, "cup", "mild red enchilada sauce", "pantry"], [5, "oz", "Monterey Jack", "dairy"], [0.5, "", "onion", "produce"], [0.25, "cup", "sour cream", "dairy"], [1, "", "small bunch cilantro", "produce"], [1, "tsp", "ground cumin", "pantry"], [1, "tbsp", "neutral oil", "pantry", S]],
      steps: ["Soften the chopped onion in oil with the cumin. Mix with the chicken, a third of the cheese and a quarter cup of sauce.", "Warm the tortillas so they bend. Fill, roll and place seam-down in a baking dish.", "Pour over the remaining sauce and cheese. Bake at 400°F for 20 minutes until bubbling.", "Finish with sour cream and cilantro."],
      note: "A rotisserie chicken makes this a 30-minute dinner." },
    { id: "k-veggie-quesadillas", genre: "latin", name: "Black Bean, Corn & Spinach Quesadillas", blurb: "Crisp tortillas filled with beans, sweet corn, spinach and melted cheese.",
      time: 20, level: "Easy", tags: ["veg"], kcal: 640, protein: 26, carbs: 68, fat: 28, fiber: 14, pairs: ["s-slaw"],
      ingredients: [[4, "", "flour tortilla", "bakery"], [1, "", "can black beans (15 oz)", "pantry"], [0.75, "cup", "frozen sweet corn", "pantry"], [3, "oz", "baby spinach", "produce"], [5, "oz", "Monterey Jack", "dairy"], [1, "tsp", "ground cumin", "pantry"], [1, "", "avocado", "produce"], [1, "", "lime", "produce"], [0.25, "cup", "sour cream", "dairy"], [1, "tbsp", "neutral oil", "pantry", S]],
      steps: ["Warm the drained beans and corn with the cumin, lightly mashing some of the beans. Stir in the spinach to wilt.", "Scatter cheese over half of each tortilla, add the filling and more cheese, and fold.", "Cook in a lightly oiled pan 2–3 minutes a side until golden and melted.", "Cut into wedges and serve with mashed avocado, lime and sour cream."],
      note: "Cheese on both sides of the filling glues the quesadilla shut." },

    /* ---------- American ---------- */
    { id: "k-salmon-broccoli", genre: "american", name: "Lemon-Garlic Salmon, Rice & Roasted Broccoli", complete: true, blurb: "One tray of salmon and broccoli with lemon and garlic, over rice.",
      time: 30, level: "Easy", tags: ["seafood"], kcal: 640, protein: 42, carbs: 58, fat: 26, fiber: 5, pairs: [],
      ingredients: [[2, "", "salmon fillet (6 oz each)", "protein"], [0.75, "lb", "broccoli florets", "produce"], [0.75, "cup", "jasmine rice", "pantry"], [1, "", "lemon", "produce"], [3, "", "garlic clove", "produce"], [1, "", "small bunch parsley", "produce"], [2, "tbsp", "olive oil", "pantry", S], [0, "", "salt", "pantry", S]],
      steps: ["Start the rice. Heat the oven to 425°F.", "Toss the broccoli with half the oil and salt and roast 10 minutes.", "Mix the remaining oil with minced garlic, lemon zest and salt. Add the salmon to the tray, spread with the garlic oil and roast 10–12 minutes.", "Squeeze lemon over everything, scatter with parsley and serve with the rice."],
      note: "The salmon is done when it flakes at the thickest part but is still slightly translucent in the centre." },
    { id: "k-turkey-burgers", genre: "american", name: "Turkey Burgers with Avocado", blurb: "Juicy turkey burgers with cheddar, avocado, lettuce and tomato.",
      time: 25, level: "Easy", tags: ["poultry"], kcal: 560, protein: 42, carbs: 36, fat: 26, fiber: 5, pairs: ["s-smashed", "s-green-salad"],
      ingredients: [[0.75, "lb", "ground turkey", "protein"], [2, "", "burger bun", "bakery"], [1, "", "avocado", "produce"], [2, "oz", "cheddar", "dairy"], [1, "", "tomato", "produce"], [2, "", "leaf lettuce", "produce"], [0.25, "", "red onion", "produce"], [1, "tsp", "Worcestershire sauce", "pantry"], [0.5, "tsp", "garlic powder", "pantry"], [1, "tbsp", "neutral oil", "pantry", S], [0, "", "salt", "pantry", S]],
      steps: ["Mix the turkey with the Worcestershire, garlic powder and salt. Shape into two patties slightly wider than the buns.", "Cook in oil over medium-high heat 5 minutes a side until cooked through. Add the cheddar for the last minute.", "Toast the buns in the pan.", "Build with lettuce, tomato, red onion, the burger and sliced avocado."],
      note: "Press a shallow dent into the centre of each patty so it cooks flat." },
    { id: "k-steak-salad", genre: "american", name: "Steak Salad, Tomatoes, Avocado & Balsamic", complete: true, blurb: "Seared steak sliced over greens with tomatoes, cucumber and avocado.",
      time: 25, level: "Easy", tags: ["meat"], kcal: 560, protein: 44, carbs: 16, fat: 36, fiber: 7, pairs: ["s-bread"],
      ingredients: [[0.75, "lb", "sirloin or flank steak", "protein"], [5, "oz", "mixed salad greens", "produce"], [1, "cup", "cherry tomatoes", "produce"], [1, "", "cucumber", "produce"], [1, "", "avocado", "produce"], [0.25, "", "red onion", "produce"], [2, "oz", "feta", "dairy"], [1.5, "tbsp", "balsamic vinegar", "pantry"], [1, "tsp", "Dijon mustard", "pantry"], [3, "tbsp", "olive oil", "pantry", S], [0, "", "salt", "pantry", S]],
      steps: ["Salt the steak and sear in a very hot pan 3–4 minutes a side for medium-rare. Rest 5 minutes.", "Whisk the balsamic, mustard and oil with a pinch of salt.", "Toss the greens, halved tomatoes, sliced cucumber and red onion with most of the dressing.", "Slice the steak across the grain and lay over the salad with avocado and feta. Drizzle with the rest of the dressing."],
      note: "Resting the steak keeps the juices in the meat and off the salad." },
    { id: "k-chicken-tray", genre: "american", name: "Sheet-Pan Chicken, Zucchini, Carrots & Potatoes", complete: true, blurb: "Herby chicken thighs roasted on one tray with vegetables.",
      time: 45, level: "Easy", tags: ["poultry"], kcal: 590, protein: 42, carbs: 40, fat: 28, fiber: 7, pairs: [],
      ingredients: [[0.9, "lb", "boneless, skinless chicken thighs", "protein"], [0.75, "lb", "baby potatoes", "produce"], [1, "", "zucchini", "produce"], [2, "", "carrot", "produce"], [0.5, "", "red onion", "produce"], [3, "", "garlic clove", "produce"], [1, "", "lemon", "produce"], [1, "tsp", "dried oregano", "pantry"], [2, "tbsp", "olive oil", "pantry", S], [0, "", "salt", "pantry", S]],
      steps: ["Heat the oven to 425°F. Halve the potatoes and cut the carrots into sticks. Toss with half the oil and salt and roast 15 minutes.", "Toss the chicken, zucchini chunks and onion wedges with the remaining oil, garlic, oregano, lemon zest and salt.", "Add to the tray and roast 20 minutes more until the chicken is cooked and the vegetables are browned.", "Squeeze the lemon over the top."],
      note: "Give the potatoes a head start; they take longer than everything else." },
    { id: "k-chicken-caesar", genre: "american", name: "Chicken Caesar Salad", complete: true, blurb: "Warm sliced chicken over crisp romaine with croutons and a lemony dressing.",
      time: 25, level: "Easy", tags: ["poultry"], kcal: 540, protein: 48, carbs: 20, fat: 30, fiber: 4, pairs: [],
      ingredients: [[0.75, "lb", "chicken breast", "protein"], [2, "", "romaine heart", "produce"], [1.5, "oz", "parmesan", "dairy"], [2, "", "slice country bread", "bakery"], [2, "tbsp", "mayonnaise", "pantry"], [1, "", "lemon", "produce"], [1, "", "garlic clove", "produce"], [1, "tsp", "Dijon mustard", "pantry"], [1, "tsp", "Worcestershire sauce", "pantry"], [2, "tbsp", "olive oil", "pantry", S], [0, "", "salt", "pantry", S]],
      steps: ["Cube the bread, toss with half the oil and salt and bake at 400°F for 8 minutes until crisp.", "Season the chicken and cook in the remaining oil 5–6 minutes a side. Rest, then slice.", "Whisk the mayonnaise, lemon juice, grated garlic, mustard, Worcestershire and half the grated parmesan with a tablespoon of water.", "Toss torn romaine with the dressing and top with chicken, croutons and the rest of the parmesan."],
      note: "Dress the lettuce at the last minute so it stays crisp." },
    { id: "k-turkey-chili", genre: "american", name: "Turkey & Bean Chili", complete: true, blurb: "A mild, thick chili with beans, tomatoes and corn. No peppers.",
      time: 45, level: "Easy", tags: ["poultry"], kcal: 560, protein: 44, carbs: 52, fat: 16, fiber: 14, pairs: ["s-bread", "s-green-salad"],
      ingredients: [[0.75, "lb", "ground turkey", "protein"], [1, "", "onion", "produce"], [3, "", "garlic clove", "produce"], [1, "", "can kidney beans (15 oz)", "pantry"], [1, "", "can crushed tomatoes (15 oz)", "pantry"], [0.75, "cup", "frozen sweet corn", "pantry"], [1, "cup", "chicken stock", "pantry"], [1, "tbsp", "chili powder", "pantry"], [1.5, "tsp", "ground cumin", "pantry"], [2, "oz", "cheddar", "dairy"], [1, "tbsp", "olive oil", "pantry", S], [0, "", "salt", "pantry", S]],
      steps: ["Soften the chopped onion in oil 5 minutes. Add the garlic, then the turkey, and brown well.", "Stir in the chili powder and cumin for a minute.", "Add the tomatoes, drained beans, corn and stock. Simmer uncovered 25 minutes until thick. Season.", "Serve topped with grated cheddar."],
      note: "It tastes even better the next day and freezes well." },

    /* ---------- Mediterranean ---------- */
    { id: "k-greek-chicken-bowls", genre: "med", name: "Greek Chicken Bowls with Tzatziki", complete: true, blurb: "Lemon-oregano chicken over rice with cucumber, tomato, olives, feta and yogurt sauce.",
      time: 35, level: "Easy", tags: ["poultry"], kcal: 650, protein: 46, carbs: 56, fat: 26, fiber: 5, pairs: [],
      ingredients: [[0.75, "lb", "boneless, skinless chicken thighs", "protein"], [0.75, "cup", "jasmine rice", "pantry"], [1, "", "cucumber", "produce"], [1, "cup", "cherry tomatoes", "produce"], [0.25, "", "red onion", "produce"], [2, "oz", "feta", "dairy"], [0.25, "cup", "kalamata olives", "pantry"], [0.5, "cup", "Greek yogurt", "dairy"], [1, "", "lemon", "produce"], [2, "", "garlic clove", "produce"], [1, "tsp", "dried oregano", "pantry"], [1, "tbsp", "olive oil", "pantry", S], [0, "", "salt", "pantry", S]],
      steps: ["Toss the chicken with the juice of half the lemon, one minced garlic clove, oregano, oil and salt. Start the rice.", "Sear the chicken 5–6 minutes a side. Rest and slice.", "Grate a quarter of the cucumber into the yogurt with the remaining garlic, a squeeze of lemon and salt.", "Serve the chicken over rice with chopped cucumber, tomatoes, red onion, olives, feta and the tzatziki."],
      note: "Squeeze the grated cucumber dry so the sauce stays thick." },
    { id: "k-salmon-salad", genre: "med", name: "Salmon & Avocado Salad, Lemon-Dill Dressing", complete: true, blurb: "Warm flaked salmon over greens with cucumber, tomato and avocado.",
      time: 25, level: "Easy", tags: ["seafood"], kcal: 580, protein: 38, carbs: 22, fat: 38, fiber: 8, pairs: ["s-rice", "s-bread"],
      ingredients: [[2, "", "salmon fillet (6 oz each)", "protein"], [5, "oz", "mixed salad greens", "produce"], [1, "", "cucumber", "produce"], [1, "cup", "cherry tomatoes", "produce"], [1, "", "avocado", "produce"], [1, "", "lemon", "produce"], [1, "", "small bunch dill", "produce"], [1, "tsp", "Dijon mustard", "pantry"], [1, "tsp", "honey", "pantry"], [3, "tbsp", "olive oil", "pantry", S], [0, "", "salt", "pantry", S]],
      steps: ["Season the salmon and roast at 425°F for 10–12 minutes.", "Whisk the lemon juice, mustard, honey, chopped dill and oil with a pinch of salt.", "Toss the greens, cucumber and tomatoes with most of the dressing.", "Flake the salmon over the salad, add the avocado and spoon over the rest of the dressing."],
      note: "Add a scoop of rice on the side to make it more filling." }
  ];

  window.SIDES.push(...sides);
  window.COOKBOOK.push(...dinners.map((r) => Object.assign(r, { book: "karly" })));
})();
