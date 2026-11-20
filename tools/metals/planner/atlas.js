/* ============================================================
   SUPPLY PLANNER DATA. Edit here; index.html never changes.
   Everything in this file is a planning estimate: locations are
   approximate, output figures are round numbers for scale, shares
   are roughly 2024 levels, and freight and price defaults are
   ballparks that the page lets you overwrite. Trade rules were
   checked in November 2026 and change often.
   ============================================================ */
window.ATLAS = {
  checked: "November 2026",

  /* Approximate share of world output by country (ISO code: percent). */
  shares: {
    copper: { label: "Share of world mined copper", v: { CHL: 23, COD: 14, PER: 11, CHN: 8, IDN: 5, USA: 5, RUS: 4, AUS: 3.5, ZMB: 3.5, KAZ: 3, MEX: 3, CAN: 2, POL: 2, MNG: 1.5, BRA: 1.5 } },
    aluminium: { label: "Share of world aluminium smelting", v: { CHN: 59, IND: 6, RUS: 5.3, CAN: 4.5, ARE: 3.7, BHR: 2.2, AUS: 2.2, NOR: 1.9, BRA: 1.6, MYS: 1.3, SAU: 1.1, USA: 1, ISL: 1, ZAF: 1, QAT: 0.9, MOZ: 0.8 } },
    steel: { label: "Share of world crude steel", v: { CHN: 53, IND: 8, JPN: 4.5, USA: 4.2, RUS: 3.8, KOR: 3.4, DEU: 2, TUR: 2, BRA: 1.8, IRN: 1.7, VNM: 1.2, ITA: 1.1, MEX: 1, IDN: 0.9, CAN: 0.65 } }
  },

  /* Sites: [name, kind, metal, lat, lon, country, operator, scale 1-3, note]
     kind: mine | plant (smelter, refinery or steel mill) | port */
  sites: [
    // copper mines
    ["Escondida", "mine", "copper", -24.27, -69.07, "Chile", "BHP, Rio Tinto", 3, "The world's largest copper mine, well over a million tonnes a year."],
    ["Collahuasi", "mine", "copper", -20.98, -68.69, "Chile", "Anglo American, Glencore", 3, "High-altitude mine producing roughly half a million tonnes a year."],
    ["Chuquicamata", "mine", "copper", -22.29, -68.90, "Chile", "Codelco", 2, "Century-old state-owned mine, now mostly underground, with its own smelter."],
    ["El Teniente", "mine", "copper", -34.09, -70.39, "Chile", "Codelco", 2, "The largest underground copper mine."],
    ["Los Pelambres", "mine", "copper", -31.72, -70.49, "Chile", "Antofagasta", 2, "Ships concentrate from the port of Los Vilos."],
    ["Cerro Verde", "mine", "copper", -16.53, -71.60, "Peru", "Freeport-McMoRan", 2, "Peru's largest producer, near Arequipa."],
    ["Antamina", "mine", "copper", -9.54, -77.05, "Peru", "BHP, Glencore, Teck", 2, "Copper and zinc; concentrate travels by pipeline to the coast."],
    ["Las Bambas", "mine", "copper", -14.10, -72.33, "Peru", "MMG", 2, "Output swings with road blockades by nearby communities."],
    ["Quellaveco", "mine", "copper", -17.11, -70.62, "Peru", "Anglo American", 2, "One of the newest large mines, opened in 2022."],
    ["Grasberg", "mine", "copper", -4.05, 137.11, "Indonesia", "Freeport-McMoRan", 3, "Among the largest copper and gold mines. A 2025 accident cut output, with recovery planned to run into 2027."],
    ["Kamoa-Kakula", "mine", "copper", -10.77, 25.25, "DR Congo", "Ivanhoe, Zijin", 3, "Very high-grade and fast-growing; flooding from seismic activity disrupted it in 2025."],
    ["Tenke Fungurume", "mine", "copper", -10.57, 26.19, "DR Congo", "CMOC", 2, "Copper and cobalt; exports leave by truck and rail to ports in Tanzania, South Africa and Angola."],
    ["Kansanshi", "mine", "copper", -12.10, 26.43, "Zambia", "First Quantum", 2, "Zambia's largest mine, with a smelter on site."],
    ["Morenci", "mine", "copper", 33.07, -109.35, "USA", "Freeport-McMoRan", 2, "The largest US copper mine."],
    ["Bingham Canyon", "mine", "copper", 40.52, -112.15, "USA", "Rio Tinto", 2, "Mine, smelter and refinery in one place near Salt Lake City."],
    ["Resolution (project)", "mine", "copper", 33.30, -111.10, "USA", "Rio Tinto, BHP", 1, "A large undeveloped deposit in Arizona, held up for years by permitting and legal challenges."],
    ["Buenavista del Cobre", "mine", "copper", 30.96, -110.32, "Mexico", "Grupo México", 2, "Mexico's largest copper mine, close to the Arizona border."],
    ["Cobre Panamá", "mine", "copper", 8.83, -80.65, "Panama", "First Quantum", 2, "Halted in late 2023 after a court ruling; whether and when it restarts is a live question for supply."],
    ["Olympic Dam", "mine", "copper", -30.44, 136.89, "Australia", "BHP", 2, "Copper, uranium and gold."],
    ["Oyu Tolgoi", "mine", "copper", 43.01, 106.85, "Mongolia", "Rio Tinto", 2, "Ramping up underground; nearly all output goes to China."],
    ["Highland Valley", "mine", "copper", 50.49, -121.05, "Canada", "Teck", 1, "Canada's largest copper mine, in British Columbia."],
    ["Norilsk", "mine", "copper", 69.35, 88.20, "Russia", "Nornickel", 2, "Copper and nickel from the Arctic; sanctions limit where it sells."],
    // copper smelters and refineries
    ["Guixi", "plant", "copper", 28.29, 117.21, "China", "Jiangxi Copper", 3, "One of the largest copper smelters. China refines close to half the world's copper."],
    ["Tongling", "plant", "copper", 30.95, 117.81, "China", "Tongling Nonferrous", 2, "Large smelting and refining hub on the Yangtze."],
    ["Dahej", "plant", "copper", 21.70, 72.55, "India", "Hindalco (Birla Copper)", 2, "India's largest copper smelter."],
    ["Mundra", "plant", "copper", 22.84, 69.72, "India", "Adani (Kutch Copper)", 2, "New smelter that started up in 2024."],
    ["Onsan", "plant", "copper", 35.43, 129.35, "South Korea", "LS MnM", 2, "A major exporter of cathode."],
    ["Saganoseki", "plant", "copper", 33.25, 131.87, "Japan", "JX Advanced Metals", 2, "One of several Japanese smelters cutting output as treatment charges collapsed."],
    ["Hamburg", "plant", "copper", 53.52, 10.03, "Germany", "Aurubis", 2, "Europe's largest copper producer and recycler."],
    ["Gresik", "plant", "copper", -7.10, 112.62, "Indonesia", "Freeport Indonesia", 2, "Built so Grasberg concentrate is processed in the country."],
    ["Altonorte", "plant", "copper", -23.80, -70.32, "Chile", "Glencore", 1, "Custom smelter near Antofagasta."],
    ["Ilo", "plant", "copper", -17.50, -71.36, "Peru", "Southern Copper", 1, "Smelter and refinery on the coast."],
    ["Miami, Arizona", "plant", "copper", 33.40, -110.87, "USA", "Freeport-McMoRan", 1, "One of only two primary copper smelters operating in the US."],
    ["Horne", "plant", "copper", 48.25, -79.01, "Canada", "Glencore", 1, "Smelter in Quebec feeding a refinery in Montreal."],
    // bauxite and alumina
    ["Boké region", "mine", "aluminium", 11.10, -13.77, "Guinea", "CBG and others", 3, "Guinea is the largest bauxite exporter; most goes to China."],
    ["Weipa", "mine", "aluminium", -12.63, 141.88, "Australia", "Rio Tinto", 2, "Bauxite mining in far north Queensland."],
    ["Darling Range", "mine", "aluminium", -32.60, 116.10, "Australia", "Alcoa, South32", 2, "Bauxite mines and alumina refineries south of Perth."],
    ["Barcarena", "plant", "aluminium", -1.55, -48.73, "Brazil", "Hydro (Alunorte, Albras)", 2, "The largest alumina refinery outside China, beside a smelter."],
    // aluminium smelters
    ["Alouette", "plant", "aluminium", 50.19, -66.38, "Canada", "Rio Tinto, Hydro and partners", 2, "The largest smelter in the Americas, on hydropower."],
    ["Saguenay", "plant", "aluminium", 48.43, -71.07, "Canada", "Rio Tinto", 3, "A cluster of hydro-powered smelters in Quebec; the core of US supply."],
    ["Bécancour", "plant", "aluminium", 46.37, -72.40, "Canada", "Alcoa, Rio Tinto", 2, "Smelter on the St Lawrence."],
    ["Kitimat", "plant", "aluminium", 54.00, -128.69, "Canada", "Rio Tinto", 2, "British Columbia smelter with its own hydropower; the closest primary smelter to the Pacific Northwest."],
    ["Al Taweelah", "plant", "aluminium", 24.78, 54.70, "UAE", "Emirates Global Aluminium", 3, "With Jebel Ali, makes the UAE the second-largest supplier to the US."],
    ["Alba", "plant", "aluminium", 26.09, 50.61, "Bahrain", "Aluminium Bahrain", 3, "One of the largest single-site smelters."],
    ["Ras Al Khair", "plant", "aluminium", 27.48, 49.24, "Saudi Arabia", "Ma'aden", 2, "Mine-to-metal complex on the Gulf."],
    ["Qatalum", "plant", "aluminium", 24.93, 51.58, "Qatar", "Qatar Aluminium, Hydro", 1, "Gas-powered smelter."],
    ["Sohar", "plant", "aluminium", 24.47, 56.60, "Oman", "Sohar Aluminium", 1, "Smelter beside the port of Sohar."],
    ["Krasnoyarsk", "plant", "aluminium", 56.07, 93.00, "Russia", "Rusal", 2, "Siberian hydro-powered smelting; effectively shut out of the US by a 200% duty."],
    ["Bratsk", "plant", "aluminium", 56.12, 101.60, "Russia", "Rusal", 2, "One of the largest smelters in the world."],
    ["Sunndal", "plant", "aluminium", 62.67, 8.55, "Norway", "Hydro", 1, "Europe's largest primary smelter."],
    ["Fjardaál", "plant", "aluminium", 65.03, -14.21, "Iceland", "Alcoa", 1, "Hydro-powered smelter in east Iceland."],
    ["Jharsuguda", "plant", "aluminium", 21.82, 84.03, "India", "Vedanta", 3, "Coal-powered and among the largest smelters outside China."],
    ["Shandong", "plant", "aluminium", 37.37, 118.02, "China", "Hongqiao and others", 3, "China caps its smelting at about 45 million tonnes a year and is at that ceiling."],
    ["Xinjiang", "plant", "aluminium", 44.30, 86.00, "China", "Several", 3, "Coal-powered smelting in China's far west."],
    ["Yunnan", "plant", "aluminium", 23.40, 103.40, "China", "Several", 2, "Hydro-powered; output is cut in dry seasons."],
    ["Boyne", "plant", "aluminium", -23.93, 151.35, "Australia", "Rio Tinto", 1, "Queensland smelter moving to renewable power."],
    ["Mozal", "plant", "aluminium", -25.92, 32.41, "Mozambique", "South32", 1, "Its future depends on an electricity contract; a recurring supply risk."],
    ["Sebree", "plant", "aluminium", 37.66, -87.53, "USA", "Century Aluminum", 1, "One of only a handful of primary smelters still running in the US."],
    ["Mt Holly", "plant", "aluminium", 33.05, -80.03, "USA", "Century Aluminum", 1, "South Carolina smelter being restarted toward full capacity."],
    ["Warrick", "plant", "aluminium", 37.92, -87.33, "USA", "Alcoa", 1, "Indiana smelter and rolling mill."],
    ["Massena", "plant", "aluminium", 44.98, -74.75, "USA", "Alcoa", 1, "Hydro-powered smelter in northern New York."],
    // iron ore
    ["Pilbara", "mine", "steel", -22.50, 118.50, "Australia", "Rio Tinto, BHP, Fortescue", 3, "The largest iron ore region, shipping around 900 million tonnes a year, mostly to China."],
    ["Carajás", "mine", "steel", -6.07, -50.17, "Brazil", "Vale", 3, "The highest-grade large iron ore operation."],
    ["Minas Gerais", "mine", "steel", -19.62, -43.23, "Brazil", "Vale, CSN", 2, "Brazil's older iron ore heartland."],
    ["Simandou", "mine", "steel", 8.90, -8.90, "Guinea", "Rio Tinto, Chinalco, WCS", 2, "A huge new high-grade source that began shipping in late 2025."],
    ["Sishen", "mine", "steel", -27.73, 23.00, "South Africa", "Kumba", 1, "Rail-constrained exports through Saldanha."],
    ["Kiruna", "mine", "steel", 67.85, 20.20, "Sweden", "LKAB", 1, "Europe's main iron ore supply."],
    ["Mesabi Range", "mine", "steel", 47.50, -92.60, "USA", "Cleveland-Cliffs, US Steel", 2, "Minnesota pellets feeding Great Lakes blast furnaces."],
    ["Labrador Trough", "mine", "steel", 52.95, -66.92, "Canada", "IOC, ArcelorMittal", 1, "High-grade concentrate and pellets shipped from Sept-Îles."],
    // steel mills
    ["Tangshan", "plant", "steel", 39.63, 118.18, "China", "Many mills", 3, "The single largest steelmaking city; Hebei province alone out-produces every other country."],
    ["Baoshan", "plant", "steel", 31.42, 121.45, "China", "Baowu", 3, "Flagship of the world's largest steelmaker."],
    ["Gwangyang", "plant", "steel", 34.92, 127.72, "South Korea", "POSCO", 3, "The largest single steelworks."],
    ["Kimitsu", "plant", "steel", 35.37, 139.87, "Japan", "Nippon Steel", 2, "Tokyo Bay works; Nippon also owns US Steel."],
    ["Vijayanagar", "plant", "steel", 15.18, 76.66, "India", "JSW", 2, "India's largest single-site mill."],
    ["Jamshedpur", "plant", "steel", 22.79, 86.20, "India", "Tata Steel", 2, "India's oldest integrated works."],
    ["Ghent", "plant", "steel", 51.17, 3.81, "Belgium", "ArcelorMittal", 2, "Flat steel for European automakers."],
    ["Duisburg", "plant", "steel", 51.47, 6.73, "Germany", "Thyssenkrupp", 2, "Europe's largest steel site."],
    ["Ereğli", "plant", "steel", 41.27, 31.42, "Turkey", "Erdemir", 1, "Turkey's main flat-steel producer; Turkey is a leading rebar exporter."],
    ["Dung Quat", "plant", "steel", 15.38, 108.80, "Vietnam", "Hoa Phat", 2, "Fast-growing exporter of hot-rolled coil."],
    ["Pesquería", "plant", "steel", 25.75, -100.03, "Mexico", "Ternium", 2, "Flat steel for the auto industry, with a new slab plant alongside."],
    ["Lázaro Cárdenas", "plant", "steel", 17.93, -102.18, "Mexico", "ArcelorMittal", 1, "Pacific-coast mill exporting slab."],
    ["Hamilton", "plant", "steel", 43.26, -79.82, "Canada", "ArcelorMittal Dofasco, Stelco", 2, "Ontario flat steel, traditionally sold into the US Midwest."],
    ["Sault Ste. Marie", "plant", "steel", 46.52, -84.36, "Canada", "Algoma", 1, "Converting to electric arc furnaces."],
    ["Rio de Janeiro", "plant", "steel", -22.90, -43.75, "Brazil", "Ternium Brasil, CSN", 2, "Slab exporters that feed US rolling mills."],
    ["Tubarão", "plant", "steel", -20.25, -40.24, "Brazil", "ArcelorMittal", 2, "Slab for export."],
    ["Northwest Indiana", "plant", "steel", 41.62, -87.25, "USA", "US Steel, Cleveland-Cliffs", 3, "Gary and Burns Harbor: the largest concentration of US blast furnaces."],
    ["Mississippi County", "plant", "steel", 35.70, -89.97, "USA", "Nucor, US Steel (Big River)", 3, "Arkansas electric arc furnace mills; the fastest-growing US steel region."],
    ["Berkeley", "plant", "steel", 33.00, -79.88, "USA", "Nucor", 2, "South Carolina sheet mill."],
    ["Calvert", "plant", "steel", 31.15, -87.99, "USA", "ArcelorMittal, Nippon Steel", 2, "Alabama mill that has long rolled imported slab and now melts its own as well."],
    ["Sinton", "plant", "steel", 28.03, -97.51, "USA", "Steel Dynamics", 2, "Texas sheet mill serving the south-west and Mexico."],
    ["Fontana", "plant", "steel", 34.09, -117.46, "USA", "California Steel Industries (Nucor JV)", 1, "Rolls purchased slab; the main West Coast sheet supplier, and it prices above the rest of the country."],
    ["McMinnville", "plant", "steel", 45.21, -123.19, "USA", "Cascade Steel", 1, "Oregon electric arc furnace mill making rebar from local scrap."],
    // ports
    ["New Orleans", "port", "all", 29.95, -90.06, "USA", "", 2, "The main US gateway for copper cathode and home to most exchange copper warehouses; barges run up the Mississippi."],
    ["Houston", "port", "all", 29.73, -95.27, "USA", "", 2, "The largest US port for imported steel."],
    ["Mobile", "port", "all", 30.70, -88.04, "USA", "", 1, "Steel slab and coil for Alabama mills."],
    ["Baltimore", "port", "all", 39.27, -76.58, "USA", "", 1, "Aluminium and copper warehouses; an exchange delivery point."],
    ["Philadelphia", "port", "all", 39.90, -75.14, "USA", "", 1, "Steel and breakbulk on the Delaware."],
    ["Savannah", "port", "all", 32.08, -81.09, "USA", "", 1, "Containers and breakbulk for the south-east."],
    ["Los Angeles / Long Beach", "port", "all", 33.74, -118.26, "USA", "", 2, "Steel and slab from Asia and Mexico for the West Coast."],
    ["Portland / Vancouver", "port", "all", 45.63, -122.68, "USA", "", 1, "Columbia River ports handling steel imports for the Pacific Northwest."],
    ["Laredo", "port", "all", 27.50, -99.50, "USA", "", 1, "The busiest land crossing for metal moving to and from Mexico."],
    ["Detroit", "port", "all", 42.33, -83.05, "USA", "", 1, "Land crossing for Canadian steel and aluminium."],
    ["Antofagasta", "port", "all", -23.65, -70.40, "Chile", "", 2, "With nearby Mejillones, the export point for northern Chile's copper."],
    ["Callao", "port", "all", -12.05, -77.15, "Peru", "", 1, "Peru's main port."],
    ["Durban", "port", "all", -29.87, 31.03, "South Africa", "", 1, "One of several long overland routes out for Congolese and Zambian copper."],
    ["Jebel Ali", "port", "all", 25.01, 55.06, "UAE", "", 1, "Export point for Gulf aluminium."],
    ["Santos", "port", "all", -23.95, -46.33, "Brazil", "", 1, "Brazil's largest port."],
    ["Busan", "port", "all", 35.10, 129.04, "South Korea", "", 1, "Korean steel and copper exports."],
    ["Rotterdam", "port", "all", 51.95, 4.14, "Netherlands", "", 1, "Europe's metals hub and a major exchange warehouse location."]
  ],

  /* Sea regions used for default freight and sailing time to each US coast.
     freight: $ per tonne; days: port to port. wc West Coast, gulf, ec East Coast, mw Midwest by land. */
  lanes: {
    sam_w: { name: "South America, Pacific side", freight: { wc: 75, gulf: 70, ec: 80, mw: 0 }, days: { wc: 16, gulf: 18, ec: 20 } },
    sam_e: { name: "South America, Atlantic side", freight: { wc: 95, gulf: 55, ec: 60, mw: 0 }, days: { wc: 30, gulf: 16, ec: 15 } },
    asia: { name: "East Asia", freight: { wc: 60, gulf: 85, ec: 95, mw: 0 }, days: { wc: 18, gulf: 35, ec: 38 } },
    india: { name: "India", freight: { wc: 110, gulf: 100, ec: 90, mw: 0 }, days: { wc: 40, gulf: 36, ec: 30 } },
    gulfme: { name: "Middle East Gulf", freight: { wc: 115, gulf: 100, ec: 95, mw: 0 }, days: { wc: 38, gulf: 32, ec: 28 } },
    europe: { name: "Europe", freight: { wc: 110, gulf: 75, ec: 65, mw: 0 }, days: { wc: 32, gulf: 20, ec: 14 } },
    med: { name: "Turkey and the Mediterranean", freight: { wc: 115, gulf: 75, ec: 70, mw: 0 }, days: { wc: 36, gulf: 24, ec: 20 } },
    africa: { name: "Southern Africa", freight: { wc: 140, gulf: 120, ec: 110, mw: 0 }, days: { wc: 50, gulf: 42, ec: 38 } },
    oceania: { name: "Australia", freight: { wc: 85, gulf: 110, ec: 115, mw: 0 }, days: { wc: 24, gulf: 40, ec: 42 } },
    canada: { name: "Canada, by rail or truck", land: true, freight: { wc: 55, gulf: 95, ec: 55, mw: 60 }, days: { wc: 5, gulf: 8, ec: 5, mw: 5 } },
    mexico: { name: "Mexico, by rail or truck", land: true, freight: { wc: 80, gulf: 45, ec: 110, mw: 85 }, days: { wc: 6, gulf: 4, ec: 9, mw: 7 } }
  },

  /* Products. base: "lme:copper" pulls the latest LME cash price; a number is a default $/t.
     origin: [id, country, ISO, lane, port lat, port lon, price adjustment $/t, normal duty %, Section 232 %, US import share %, flags] */
  products: [
    { id: "cathode", metal: "copper", name: "Copper cathode", unit: "LME cash + supplier premium", base: "lme:copper", premium: 80,
      domestic: { label: "Buy in the US instead", how: "LME cash plus a US delivered premium. New York copper was about $85 a tonne below London in early November 2026 and there are large stocks already onshore, so the default premium is small.", add: 120 },
      origins: [
        ["CHL", "Chile", "CHL", "sam_w", -23.65, -70.40, 0, 0, 0, 62, ["fta"]],
        ["PER", "Peru", "PER", "sam_w", -12.05, -77.15, 0, 0, 0, 8, ["fta"]],
        ["CAN", "Canada", "CAN", "canada", 45.50, -73.55, 20, 0, 0, 15, ["fta"]],
        ["MEX", "Mexico", "MEX", "mexico", 27.50, -99.50, 10, 0, 0, 6, ["fta"]],
        ["COD", "DR Congo", "COD", "africa", -29.87, 31.03, -60, 1, 0, 4, ["long", "route"]],
        ["JPN", "Japan", "JPN", "asia", 35.60, 139.80, 40, 1, 0, 2, []],
        ["KOR", "South Korea", "KOR", "asia", 35.10, 129.04, 40, 0, 0, 1, ["fta"]]
      ] },
    { id: "p1020", metal: "aluminium", name: "Primary aluminium ingot (P1020)", unit: "LME cash + supplier premium", base: "lme:aluminum", premium: 60,
      domestic: { label: "Buy duty-paid in the US", how: "LME cash plus the Midwest premium, which already contains the tariff and freight. The premium peaked near 99 cents a pound in February 2026; the default here is 90 cents ($1,984 a tonne). Replace it with the current figure.", add: 1984 },
      origins: [
        ["CAN", "Canada", "CAN", "canada", 48.43, -71.07, 0, 0, 50, 58, ["usmca25"]],
        ["ARE", "UAE", "ARE", "gulfme", 25.01, 55.06, 0, 2.6, 50, 9, []],
        ["BHR", "Bahrain", "BHR", "gulfme", 26.20, 50.60, 0, 0, 50, 4, ["fta"]],
        ["IND", "India", "IND", "india", 20.30, 86.70, -20, 2.6, 50, 3, []],
        ["AUS", "Australia", "AUS", "oceania", -23.85, 151.25, 0, 0, 50, 2, ["fta"]],
        ["GBR", "United Kingdom", "GBR", "europe", 51.50, 0.50, 60, 2.6, 25, 0.5, ["uk", "small"]],
        ["NOR", "Norway", "NOR", "europe", 62.67, 8.55, 40, 2.6, 50, 1, []],
        ["RUS", "Russia", "RUS", "europe", 59.90, 30.20, -200, 2.6, 200, 0, ["blocked"]]
      ] },
    { id: "hrc", metal: "steel", name: "Hot-rolled steel coil", unit: "Export price at origin (FOB)", base: 600, premium: 0, shortTon: true,
      domestic: { label: "Buy from a US mill", how: "US hot-rolled coil was $1,350–1,400 a short ton in mid-November 2026, up from about $850 a year earlier. The default is $1,375 a short ton ($1,516 a tonne).", set: 1516 },
      origins: [
        ["CAN", "Canada", "CAN", "canada", 43.26, -79.82, 360, 0, 50, 22, ["usmca25", "parity"]],
        ["MEX", "Mexico", "MEX", "mexico", 25.75, -100.03, 350, 0, 50, 12, ["usmca25", "parity"]],
        ["BRA", "Brazil", "BRA", "sam_e", -22.90, -43.75, 30, 0, 50, 14, ["adcvd"]],
        ["KOR", "South Korea", "KOR", "asia", 34.92, 127.72, 0, 0, 50, 10, ["adcvd"]],
        ["JPN", "Japan", "JPN", "asia", 35.37, 139.87, 20, 0, 50, 5, ["adcvd"]],
        ["VNM", "Vietnam", "VNM", "asia", 15.38, 108.80, -30, 0, 50, 5, []],
        ["DEU", "EU (Netherlands, Germany)", "DEU", "europe", 51.47, 6.73, 130, 0, 50, 5, ["adcvd"]],
        ["TUR", "Turkey", "TUR", "med", 41.27, 31.42, 20, 0, 50, 2, ["adcvd"]],
        ["GBR", "United Kingdom", "GBR", "europe", 53.60, -0.60, 150, 0, 25, 1, ["uk", "adcvd"]],
        ["IND", "India", "IND", "india", 15.18, 76.66, -20, 0, 50, 1, []]
      ] }
  ],
  flags: {
    fta: ["Free-trade partner", "Normal duty is zero under a trade agreement, if the supplier provides a certificate of origin."],
    usmca25: ["Narrow 25% route", "A 25% heading has existed since April 2026 for certain producers authorised under the North American trade agreement. It covers a short list; assume 50% unless your broker confirms."],
    uk: ["UK rate", "Metal melted or smelted in the UK pays 25% instead of 50%. The origin paperwork has to prove where it was melted."],
    adcvd: ["Check anti-dumping", "Anti-dumping or countervailing orders exist on hot-rolled steel from producers in this country or region. They are set per producer and stack on top of the Section 232 duty."],
    long: ["Long transit", "Six to eight weeks at sea, plus an overland leg to the port."],
    route: ["Route risk", "Depends on long truck and rail corridors across several borders."],
    parity: ["Priced off the US market", "Mills next door usually price just under the US market after duty, not at world export prices, so the default export price here is high."],
    small: ["Very little to buy", "The UK has a single small smelter, so the lower rate helps only for small lots. Left out of the suggested split."],
    blocked: ["Effectively shut out", "A 200% duty on Russian aluminium makes this route uneconomic; shown for comparison only."]
  },

  /* US destinations: [id, name, coast, lat, lon] */
  dests: [
    ["pnw", "Pacific Northwest (Portland)", "wc", 45.63, -122.68], ["socal", "Southern California", "wc", 33.74, -118.26],
    ["gulf", "Gulf Coast (Houston, New Orleans)", "gulf", 29.80, -93.00], ["se", "South-east (Savannah, Mobile)", "ec", 32.08, -81.09],
    ["ne", "North-east (Baltimore, Philadelphia)", "ec", 39.50, -76.00], ["mw", "Midwest (Chicago, Detroit)", "mw", 41.80, -87.60]
  ],
  inland: { truck: ["Truck", 0.14], rail: ["Rail", 0.05], barge: ["Barge", 0.02] },
  fees: { handling: 25, broker: 3, insurancePct: 0.15, mpfPct: 0.3464, mpfMin: 33.58, mpfMax: 651.5, hmfPct: 0.125, financePct: 7, termsDays: 30 },

  /* Playbook text. Each: title, now = what is happening, moves = [name, explanation], watch = things that would change the picture. */
  playbook: [
    { metal: "copper", title: "Copper", now: [
        "The US imports roughly half the refined copper it uses, almost all as cathode and mostly from Chile, with Peru, Canada, Mexico and the Congo behind. It lands as breakbulk, chiefly in New Orleans, where most exchange warehouses are.",
        "Since August 2025 semi-finished copper (wire, rod, tube, sheet) pays a 50% Section 232 duty, now charged on the full value of the product. Cathode, concentrate, anode and scrap are outside it. A duty on refined copper of 15% from 2027 and 30% from 2028 has been recommended but had not been proclaimed when this was checked.",
        "That threat pulled a record 1.64 million tonnes into the US in 2025 and about 1.52 million in the first nine months of 2026. New York prices ran well above London for much of the year, then the gap closed: in early November New York was about $85 a tonne below London, and shipments were expected to fall by more than half."
      ], moves: [
        ["Buy from the stock already here", "With the New York premium gone and a very large stockpile sitting in US warehouses, onshore metal can undercut a fresh import. Run the calculator both ways before booking a vessel."],
        ["Import cathode, not products", "Cathode enters free of Section 232 while wire rod or tube pays 50% on its whole value. Buyers with access to US rod mills and fabricators bring in metal and convert it here."],
        ["Use free-trade origins", "Chile, Peru, Canada, Mexico and Korea pay no normal duty with a certificate of origin; other origins pay 1%."],
        ["Price on the right exchange", "If your sales are priced off New York, buy and hedge on New York too. Buying on London and selling on New York leaves you exposed to the gap between them, which moved by thousands of dollars in 2025."],
        ["Decide who carries the tariff risk", "For 2027 deliveries, a delivered-duty-paid contract leaves a new duty with the seller; buying at the origin port leaves it with you. Either way, add a change-in-law clause."],
        ["Lean on scrap", "The US exports far more copper scrap than it needs to. Domestic scrap and new recycling smelters are the one supply route untouched by tariffs or shipping."]
      ], watch: ["A proclamation on refined copper tariffs.", "The gap between New York and London prices.", "US exchange warehouse stocks starting to fall.", "Restarts or setbacks at Grasberg, Kamoa-Kakula and Cobre Panamá."] },
    { metal: "aluminium", title: "Aluminium", now: [
        "The US smelts well under a fifth of the primary aluminium it uses. Canada supplies more than half of imports, mostly by rail from Quebec, followed by the UAE and Bahrain by sea.",
        "Primary aluminium pays a 50% Section 232 duty from almost every origin, charged on the value at the foreign port. UK-smelted metal pays 25%, and Russian metal 200%. Canada and Mexico are not exempt, apart from a narrow 25% route for certain authorised producers.",
        "US buyers rarely see the duty as a line item. It is folded into the Midwest premium, which roughly quadrupled during 2025 and reached a record near 99 cents a pound in February 2026. Alcoa has said a premium of about 88 to 90 cents covers the tariff and logistics."
      ], moves: [
        ["Compare importing with paying the premium", "Importing yourself means paying duty, freight and finance and taking the paperwork risk. If that total is well under the Midwest premium, the supplier is keeping the difference. The calculator shows the gap."],
        ["Hedge the premium as well as the metal", "The Midwest premium trades as its own futures contract. Fixing only the London price leaves the larger moving part open."],
        ["Raise recycled content", "Scrap is not covered by Section 232, so remelted metal avoids the duty entirely. This is why US scrap prices and recycling capacity have surged."],
        ["Document where metal was smelted and cast", "Duty rates turn on the country of smelt and cast, and products made mostly from US-smelted metal qualify for much lower rates. Missing paperwork defaults to the highest rate."],
        ["Don't count on refunds", "Section 232 duties cannot be reclaimed through drawback when goods are re-exported, and the product exclusion process ended in 2026. A foreign-trade zone can defer the duty or avoid it on re-exports, but not reduce it for US sales."],
        ["Spread origins by coast", "Canadian rail suits the Midwest and North-east. On the West Coast, Kitimat in British Columbia and Gulf or Australian metal by sea are the natural options."]
      ], watch: ["Any tariff relief for Canada or other partners; the Midwest premium would fall quickly.", "The Midwest premium against the cost of importing.", "Smelter restarts in the US and power-contract trouble abroad (Mozal).", "China holding to its smelting cap."] },
    { metal: "steel", title: "Steel", now: [
        "The US makes most of its own steel and has usually imported a fifth to a quarter of what it uses: slab and coil from Canada, Brazil and Mexico, and sheet from Korea, Japan, Vietnam and Europe.",
        "Steel mill products pay a 50% Section 232 duty from every country, 25% for UK-melted steel, with a narrow 25% route for some North American producers. Many origins also carry anti-dumping or countervailing duties on hot-rolled coil that stack on top.",
        "With imports priced out, US mills have raised prices for months. Hot-rolled coil was $1,350–1,400 a short ton in mid-November 2026 against about $850 a year earlier, and buyers reported a shortage of spot offers in October."
      ], moves: [
        ["Run import parity every week", "At these US prices an import can work even after a 50% duty. The answer changes with each mill increase and each offshore quote, so the comparison has to be current."],
        ["Price in the lead time", "Offshore steel takes three to five months from order to delivery against three to five weeks from a US mill. A deal that looks good today can land into a falling market; hot-rolled coil futures can hedge that gap."],
        ["Check anti-dumping before anything else", "Orders on hot-rolled steel cover producers in Brazil, Japan, Korea, the Netherlands, Turkey, the UK and others, at rates set per company. A cheap quote from a producer with a high rate isn't cheap."],
        ["Know the West Coast is different", "There is little sheet production west of the Rockies, so West Coast prices sit above the rest of the country and Asian or Mexican steel by sea is a normal part of supply."],
        ["Mix contract and spot", "Many buyers take most of their volume on contracts tied to a published index and keep a share for spot or import opportunities."],
        ["Record melt and pour", "Customs needs the country where the steel was first melted and poured. It decides the duty rate and matters for Buy America rules on public projects."]
      ], watch: ["Mill price announcements and lead times.", "Any change to the 50% rate or new country deals.", "New anti-dumping cases, especially against Vietnam and other newer suppliers.", "Scrap prices, which lead finished steel."] }
  ],
  toolkit: [
    ["Incoterms", "The three-letter terms that say where the seller's job ends. FOB: seller loads the ship, you pay freight, insurance and duty. CIF: seller also pays freight and insurance to your port. DAP: delivered to your door, duty unpaid. DDP: delivered with duty paid, so tariff changes are the seller's problem."],
    ["Customs value", "US duty is charged on the price at the foreign port, not including ocean freight and insurance. A 50% duty on $3,000 metal is $1,500 whatever the freight."],
    ["Customs broker and bond", "A licensed broker files the entry and classifies the goods; importers need a customs bond. For metals, classification and the melt or smelt origin decide the rate, so this is not a place to save money."],
    ["Fees on every entry", "A merchandise processing fee of 0.3464% of value (with a minimum and maximum per shipment) and, by sea, a harbor maintenance fee of 0.125%."],
    ["Quotational period", "Metal contracts usually price on an average over an agreed month rather than a single day. Matching that period between what you buy and what you sell removes most price risk without a hedge."],
    ["Foreign-trade zones and bonded warehouses", "Places where imported goods can sit without duty being paid until they enter the US market. Useful for deferring duty, for re-exports, and for waiting out a pending tariff decision."],
    ["Change-in-law clause", "Contract wording that says who pays if a tariff appears or changes between signing and delivery. Essential while rules are moving this fast."]
  ],
  sources: [
    ["Section 232 rates and headings, checked 7 November 2026 (HTS Hero)", "https://htshero.com/tariffs/section-232-steel-aluminum-copper"],
    ["Refined copper duty not proclaimed as of 13 October 2026 (KoalaGains)", "https://koalagains.com/industry-tariff-report/chapters/74-copper-and-articles/tariff-updates"],
    ["US cathode imports and the closed arbitrage, 29 October 2026 (Kpler)", "https://www.kpler.com/blog/us-copper-cathode-imports-to-slow-in-november-as-october-beats-breakbulk-record"],
    ["New York to London copper spread, 6 November 2026 (S&P Global)", "https://www.spglobal.com/energy/en/news-research/latest-news/metals/110626-china-copper-premium-hits-record-as-market-weighs-us-stock-shift"],
    ["US copper imports through September 2026 (Reuters via Engineering News)", "https://www.engineeringnews.co.za/article/us-september-copper-imports-fall-31-from-august-2026-11-05"],
    ["Midwest premium record, February 2026 (AlCircle)", "https://www.alcircle.com/news/us-aluminium-midwest-premium-in-jan26-exceeds-the-2k-mark-hitting-an-all-time-high-117128"],
    ["Midwest premium covering tariff and logistics (Hellenic Shipping News / Platts)", "https://www.hellenicshippingnews.com/?p=1116759"],
    ["US hot-rolled coil prices, 17 November 2026 (GMK Center)", "https://gmk.center/en/news/nucor-has-once-again-raised-its-hot-rolled-coil-price-by-15-t/"]
  ]
};
