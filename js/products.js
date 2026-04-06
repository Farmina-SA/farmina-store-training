// ═══════════════════════════════════════
// PRODUCTS DATA
// To update: edit the object for the relevant product below.
// Each product must have: id, line, lineName, pet, stage, name, variant,
// icon, protein, nutrition, macros, highlights, composition, suitable, sizes, sell
// ═══════════════════════════════════════

const PRODUCTS = [
  // ── N&D QUINOA ──
  {id:'q1',line:'quinoa',lineName:'N&D Quinoa',pet:'dog',stage:'puppy',
   name:'Chicken & Pomegranate',variant:'Puppy Dog',icon:'🐶',
   protein:'Italian Free-Range Chicken',
   nutrition:{protein:33,proteinAnimal:98,fat:22,moisture:9},
   macros:{meat:'80%',grains:'0%',fruits:'19.3%',legumes:'0.7%',fresh:'48%'},
   highlights:['GMO Free','Meat Meal Free','Grain Free','Byproduct Free','Digest Free'],
   composition:'Fresh boneless chicken (28%), dehydrated chicken meat (27%), sweet potatoes, chicken fat, dried whole eggs, fresh herrings, dehydrated herrings, fish oil, fiber vegetable of peas, dried carrots, dried alfalfa, chicken cartilages, inulin, FOS, yeast extract (MOS), dried pomegranate (0.5%), dried apple, spinach powder, psyllium (0.3%), dried sweet orange, dried blueberries, sodium chloride, dried brewer\'s yeast, turmeric root (0.2%).',
   suitable:'Puppies and gestating/lactating bitches. All breeds and life stages.',
   sizes:['800g','2.5kg','7kg','12kg'],
   sell:'The highest fresh meat content in the Farmina range. No grains, no legumes — ideal for dogs with sensitivities or owners wanting ancestral-style nutrition.'},

  {id:'q2',line:'quinoa',lineName:'N&D Quinoa',pet:'dog',stage:'adult',
   name:'Chicken & Pomegranate',variant:'Adult Dog',icon:'🐕',
   protein:'Italian Free-Range Chicken',
   nutrition:{protein:30,proteinAnimal:98,fat:18,moisture:9},
   macros:{meat:'75.8%',grains:'0%',fruits:'21.4%',legumes:'2.8%',fresh:'46%'},
   highlights:['GMO Free','Meat Meal Free','Grain Free','Byproduct Free','Digest Free'],
   composition:'Fresh boneless chicken (26%), dehydrated chicken meat (25%), potatoes, chicken fat, dehydrated whole eggs, fresh herring, dehydrated herring, fish oil, fiber vegetable of peas, dried carrots, dried alfalfa, inulin, FOS, MOS, pomegranate powder (0.5%), dehydrated apple, spinach powder, psyllium (0.3%), blackcurrant, dehydrated sweet orange, blueberries, sodium chloride, dried brewer\'s yeast, turmeric root (0.2%), glucosamine, chondroitin sulfate, Marigold extract (source of lutein).',
   suitable:'All breeds and all life stages.',
   sizes:['800g','2.5kg','7kg','12kg'],
   sell:'A premium everyday adult dog food. Glucosamine and chondroitin from natural sources support long-term joint health. Great upsell from standard commercial brands.'},

  {id:'q3',line:'quinoa',lineName:'N&D Quinoa',pet:'cat',stage:'kitten',
   name:'Chicken & Pomegranate',variant:'Kitten',icon:'🐱',
   protein:'Italian Free-Range Chicken',
   nutrition:{protein:44,proteinAnimal:98,fat:20,moisture:8},
   macros:{meat:'86.2%',grains:'0%',fruits:'13.3%',legumes:'0.5%',fresh:'47%'},
   highlights:['GMO Free','Meat Meal Free','Grain Free','Byproduct Free','Digest Free'],
   composition:'Fresh boneless chicken (30%), dehydrated chicken meat (28%), potatoes, chicken fat, dehydrated whole eggs, fresh herring, dehydrated herring, fish oil, hydrolyzed animal proteins, fiber vegetable of peas, dried carrots, dried alfalfa, inulin, FOS, MOS, pomegranate powder (0.5%), dehydrated apple, spinach powder, psyllium (0.3%), blackcurrant, sweet orange, blueberries, sodium chloride, dried brewer\'s yeast, curcuma root (0.2%), glucosamine, chondroitin sulfate, Marigold extract (lutein).',
   suitable:'Kittens and gestating/lactating cats. All breeds and life stages.',
   sizes:['300g','1.5kg','5kg'],
   sell:'Cats are obligate carnivores. 86% from animal sources means this mirrors what a cat\'s biology demands. The highest-quality kitten start you can offer.'},

  {id:'q4',line:'quinoa',lineName:'N&D Quinoa',pet:'cat',stage:'adult',
   name:'Chicken & Pomegranate',variant:'Adult Cat',icon:'🐈',
   protein:'Italian Free-Range Chicken',
   nutrition:{protein:44,proteinAnimal:98,fat:20,moisture:8},
   macros:{meat:'86%',grains:'0%',fruits:'13.5%',legumes:'0.5%',fresh:'47%'},
   highlights:['GMO Free','Meat Meal Free','Grain Free','Byproduct Free','Digest Free'],
   composition:'Fresh boneless chicken (30%), dehydrated chicken meat (28%), potatoes, chicken fat, dehydrated whole eggs, fresh herring, dehydrated herring, fish oil, hydrolyzed animal proteins, peas, dried carrots, dried alfalfa, inulin, FOS, MOS, pomegranate powder (0.5%), dehydrated apple, spinach powder, psyllium (0.3%), blackcurrant, sweet orange, blueberries, sodium chloride, dried brewer\'s yeast, turmeric root (0.2%), glucosamine, chondroitin sulfate, Marigold extract (lutein).',
   suitable:'All breeds and all life stages.',
   sizes:['300g','1.5kg','5kg'],
   sell:'One of the most biologically appropriate cat foods available. High protein, no grains, no fillers — perfect for cat owners who read labels.'},

  {id:'q5',line:'quinoa',lineName:'N&D Quinoa',pet:'cat',stage:'neutered',
   name:'Chicken & Pomegranate',variant:'Neutered Cat',icon:'🐈‍⬛',
   protein:'Italian Free-Range Chicken',
   nutrition:{protein:38,proteinAnimal:98,fat:11,moisture:8},
   macros:{meat:'86.2%',grains:'0%',fruits:'13.3%',legumes:'0.5%',fresh:'47%'},
   highlights:['GMO Free','Meat Meal Free','Grain Free','For Neutered Cats','Weight Management'],
   composition:'Fresh boneless chicken (30%), dehydrated chicken meat (28%), potatoes, chicken fat, dehydrated whole eggs, fresh herring, dehydrated herring, fish oil, hydrolyzed animal proteins, peas, dried carrots, dried alfalfa, inulin, FOS, MOS, pomegranate powder (0.5%), dehydrated apple, spinach powder, psyllium (0.3%), blackcurrant, sweet orange, blueberries, sodium chloride, dried brewer\'s yeast, turmeric root (0.2%), glucosamine, chondroitin sulfate, Marigold extract (lutein).',
   suitable:'Neutered/sterilised cats. All breeds and life stages.',
   sizes:['300g','1.5kg','5kg'],
   sell:'After neutering, cats have lower energy needs and are prone to weight gain. This formula is calorie-controlled while keeping all the nutritional quality — a natural recommendation for neutered cat owners.'},

  {id:'q6',line:'quinoa',lineName:'N&D Quinoa',pet:'cat',stage:'adult',
   name:'Boar & Apple',variant:'Adult Cat',icon:'🐈',
   protein:'Italian Wild Boar',
   nutrition:{protein:44,proteinAnimal:98,fat:20,moisture:8},
   macros:{meat:'85.7%',grains:'0%',fruits:'13.8%',legumes:'0.5%',fresh:'47%'},
   highlights:['GMO Free','Meat Meal Free','Grain Free','Novel Protein','Byproduct Free'],
   composition:'Fresh boneless wild boar (25%), dehydrated boar meat (23%), potatoes, fresh boneless chicken, dehydrated chicken meat, chicken fat, dehydrated whole eggs, fresh herring, dehydrated herring, hydrolyzed animal protein, fish oil, peas, dried carrots, dried alfalfa, inulin, FOS, MOS, dehydrated apple (0.5%), pomegranate powder, dehydrated sweet orange, spinach powder, psyllium (0.3%), blackcurrant, blueberries, sodium chloride, dried brewer\'s yeast, turmeric root (0.2%), glucosamine, chondroitin sulfate, Marigold extract (lutein).',
   suitable:'All breeds and all life stages.',
   sizes:['300g','1.5kg','5kg'],
   sell:'Wild boar is a novel protein — excellent for cats with chicken or beef sensitivities. A great recommendation for cats with food intolerances or allergy concerns.'},

  {id:'q7',line:'quinoa',lineName:'N&D Quinoa',pet:'cat',stage:'adult',
   name:'NZ Lamb & Blueberry',variant:'Adult Cat',icon:'🐈',
   protein:'New Zealand Grass-Fed Lamb',
   nutrition:{protein:44,proteinAnimal:98,fat:20,moisture:8},
   macros:{meat:'85%',grains:'0%',fruits:'15%',legumes:'0%',fresh:'47%'},
   highlights:['GMO Free','Meat Meal Free','Grain Free','NZ Grass-Fed Lamb','Antioxidant Rich'],
   composition:'Fresh boneless lamb (28%), dehydrated lamb meat (26%), sweet potato, chicken fat, dehydrated whole eggs, fresh herring, dehydrated herring, herring oil, pea fibre, dried carrots, sun-cured alfalfa, inulin, FOS, MOS, blueberry powder (0.5%), dehydrated sweet orange, dehydrated apple, pomegranate powder, spinach powder, psyllium (0.3%), sodium chloride, dried beer yeast, turmeric (0.2%), glucosamine, chondroitin sulfate, marigold flower extract (lutein), aloe vera gel concentrate, green tea extract, rosemary extract.',
   suitable:'All breeds and all life stages.',
   sizes:['300g','1.5kg','5kg'],
   sell:'Grass-fed New Zealand lamb is free from hormones and sustainably raised. The blueberry, aloe vera and green tea combination provides outstanding antioxidant support. Premium choice for discerning cat owners.'},

  {id:'q8',line:'quinoa',lineName:'N&D Quinoa',pet:'dog',stage:'adult',
   name:'Duck, Quinoa, Coconut & Turmeric',variant:'Skin & Coat Adult Dog',icon:'🦆',
   protein:'Italian Duck',
   nutrition:{protein:23,proteinAnimal:92,fat:14,moisture:9,estimated:true},
   macros:{meat:'55%',grains:'0%',fruits:'5%',legumes:'38%',fresh:'30%'},
   highlights:['GMO Free','Mono Protein','Grain Free','Skin & Coat Formula','Novel Protein','Omega Rich'],
   composition:'Boneless duck, dehydrated duck protein, pea starch, fish oil from herring, quinoa seed (extracted), linseed, dried coconut, turmeric, inulin, fructooligosaccharides, yeast extract (source of mannooligosaccharides), calcium carbonate, dicalcium phosphate, psyllium husks and seeds, potassium chloride, sodium chloride, dried brewers\' yeast, aloe vera extract, glucosamine, chondroitin sulphate.',
   suitable:'All breeds and all life stages. For dogs with food sensitivities or skin and coat concerns.',
   sizes:['800g','2.5kg','7kg','12kg'],
   sell:'A mono-protein skin and coat formula for dogs with food sensitivities. Duck is a novel protein for most dogs, paired with extracted quinoa and linseed for exceptional omega fatty acid support — ideal for restoring skin health and coat condition after food-related reactions.'},

  {id:'q9',line:'quinoa',lineName:'N&D Quinoa',pet:'dog',stage:'adult',
   name:'Quail, Quinoa, Coconut & Turmeric',variant:'Skin & Coat Adult Dog',icon:'🐦',
   protein:'Italian Quail',
   nutrition:{protein:23,proteinAnimal:92,fat:14,moisture:9,estimated:true},
   macros:{meat:'55%',grains:'0%',fruits:'5%',legumes:'38%',fresh:'30%'},
   highlights:['GMO Free','Mono Protein','Grain Free','Skin & Coat Formula','Novel Protein','Lean Protein'],
   composition:'Quail, dehydrated quail protein, pea starch, fish oil from herring, quinoa seed (extracted), linseed, dried coconut, turmeric, inulin, fructooligosaccharides, yeast extract (source of mannooligosaccharides), calcium carbonate, dicalcium phosphate, psyllium husks and seeds, potassium chloride, sodium chloride, dried brewers\' yeast, aloe vera extract, glucosamine, chondroitin sulphate.',
   suitable:'All breeds and all life stages. For dogs with food sensitivities or skin and coat concerns.',
   sizes:['800g','2.5kg','7kg','12kg'],
   sell:'Quail is an exceptionally lean, highly digestible novel protein — rarely used in pet food. Ideal for dogs that have already trialled duck or chicken and need an alternative mono-protein for elimination diets or rotation feeding.'},

  // ── N&D PUMPKIN ──
  {id:'p1',line:'pumpkin',lineName:'N&D Pumpkin',pet:'dog',stage:'adult',
   name:'Cod, Pumpkin & Orange',variant:'Adult Dog',icon:'🐟',
   protein:'Atlantic Wild Caught Cod',
   nutrition:{protein:35,proteinAnimal:96,fat:18,moisture:9},
   macros:{meat:'67%',grains:'0%',fruits:'12%',legumes:'21%',fresh:'50%'},
   highlights:['GMO Free','Meat Meal Free','Grain Free','Wild Caught Fish','Hypoallergenic Protein'],
   composition:'Fresh codfish (25%), dehydrated codfish (25%), pea starch, fish oil (herring), dried pumpkin (5%), fibre vegetable of peas, dried carrots, dried alfalfa, inulin, FOS, yeast extract (MOS), dried sweet orange (0.5%), dried apple, dried pomegranate, dried spinach, psyllium (0.3%), dried blueberries, sodium chloride, dried brewer\'s yeast, turmeric root (0.2%), glucosamine, chondroitin sulfate.',
   suitable:'All breeds and all life stages.',
   sizes:['800g','2.5kg','7kg','12kg'],
   sell:'Cod is an ideal hypoallergenic protein — excellent for dogs with chicken or beef allergies. Combined with pumpkin (a natural digestive aid), this is perfect for sensitive stomachs.'},

  {id:'p2',line:'pumpkin',lineName:'N&D Pumpkin',pet:'cat',stage:'adult',
   name:'Herring & Orange',variant:'Adult Cat',icon:'🐠',
   protein:'Wild Caught Atlantic Herring',
   nutrition:{protein:44,proteinAnimal:98,fat:20,moisture:8},
   macros:{meat:'82.6%',grains:'0%',fruits:'16.8%',legumes:'0.6%',fresh:'47%'},
   highlights:['GMO Free','Meat Meal Free','Grain Free','Wild Caught Fish','High Omega-3'],
   composition:'Fresh herrings (32%), dehydrated herrings (30%), sweet potatoes, fish oil (herring), dried whole eggs, fiber vegetable of peas, dried carrots, dried alfalfa, inulin, FOS, yeast extract (MOS), dried sweet orange (0.5%), dried apple, dried pomegranate, dried spinach, psyllium (0.3%), dried blueberries, sodium chloride, dried brewer\'s yeast, turmeric root (0.2%), glucosamine, chondroitin sulfate.',
   suitable:'All breeds and all life stages.',
   sizes:['300g','1.5kg','5kg'],
   sell:'Herring is one of the richest natural sources of Omega-3. This is exceptional for cats with skin, coat or inflammatory issues. A strong recommendation for cats needing coat support.'},

  {id:'p3',line:'pumpkin',lineName:'N&D Pumpkin',pet:'dog',stage:'adult',
   name:'Chicken & Pomegranate',variant:'Adult Dog',icon:'🐕',
   protein:'Italian Free-Range Chicken',
   nutrition:{protein:30,proteinAnimal:96,fat:18,moisture:9},
   macros:{meat:'68.8%',grains:'0%',fruits:'11.5%',legumes:'19.7%',fresh:'51%'},
   highlights:['GMO Free','Meat Meal Free','Grain Free','With Pumpkin','Byproduct Free'],
   composition:'Fresh boneless chicken (24%), dehydrated chicken protein (22%), pea starch, chicken fat, dried pumpkin (5%), dried eggs, herring, dehydrated herring protein, fish oil, pea fibre, dried carrots, alfalfa meal, inulin, FOS, yeast extract (MOS), dried pomegranate (0.5%), dried apple, dried spinach, psyllium husks and seeds (0.3%), dried sweet orange, dried blueberries, sodium chloride, dried brewers\' yeast, turmeric (0.2%), aloe vera extract, glucosamine, chondroitin sulfate.',
   suitable:'All breeds and all life stages.',
   sizes:['800g','2.5kg','7kg','12kg'],
   sell:'The Pumpkin version adds 5% dried pumpkin for superior digestive support. Recommend over the Quinoa line for dogs with looser stools or digestive sensitivities.'},

  {id:'p4',line:'pumpkin',lineName:'N&D Pumpkin',pet:'dog',stage:'adult',
   name:'Boar & Apple',variant:'Adult Dog',icon:'🐗',
   protein:'Italian Wild Boar',
   nutrition:{protein:30,proteinAnimal:96,fat:18,moisture:9},
   macros:{meat:'67.5%',grains:'0%',fruits:'15.1%',legumes:'17.4%',fresh:'47%'},
   highlights:['GMO Free','Meat Meal Free','Grain Free','Novel Protein','Wild Boar'],
   composition:'Fresh boneless wild boar (24%), dehydrated boar meat (22%), pea starch, chicken fat, dehydrated pumpkin (5%), dehydrated whole eggs, fish oil, pea vegetable fibre, dried carrots, dried alfalfa, inulin, FOS, MOS, dehydrated apple (0.5%), spinach powder, psyllium (0.3%), pomegranate powder, blackcurrant, dehydrated sweet orange, blueberries, sodium chloride, dried brewer\'s yeast, turmeric root (0.2%), glucosamine, chondroitin sulphate, Marigold extract (lutein).',
   suitable:'All breeds and all life stages.',
   sizes:['800g','2.5kg','7kg','12kg'],
   sell:'Wild boar is rarely used in pet food — making it ideal for elimination diets or rotation feeding. Pair with the Cod variant when rotating proteins for sensitive dogs.'},

  {id:'p5',line:'pumpkin',lineName:'N&D Pumpkin',pet:'dog',stage:'adult',
   name:'NZ Lamb, Pumpkin & Blueberry',variant:'Adult Dog',icon:'🐑',
   protein:'New Zealand Grass-Fed Lamb',
   nutrition:{protein:30,proteinAnimal:96,fat:18,moisture:9},
   macros:{meat:'67%',grains:'0%',fruits:'33%',legumes:'0%',fresh:'50%'},
   highlights:['GMO Free','Meat Meal Free','Grain Free','NZ Grass-Fed','High Antioxidants'],
   composition:'Fresh boneless lamb (22%), dehydrated lamb protein (20%), pea starch, chicken fat, dried pumpkin (5%), dried eggs, herring, dehydrated herring protein, herring oil, pea fibre, dried carrots, sun-cured alfalfa, inulin, FOS, MOS, dried blueberry (0.5%), dried apple, dried pomegranate, dried sweet orange, dried spinach, psyllium husks and seeds (0.3%), sodium chloride, dried beer yeast, turmeric root (0.2%), glucosamine, chondroitin sulfate, marigold flower extract (lutein), aloe vera gel concentrate, green tea extract, rosemary extract.',
   suitable:'All breeds and all life stages.',
   sizes:['800g','2.5kg','7kg','12kg'],
   sell:'The highest fruit and botanical content in the range (33%). Green tea, aloe vera and rosemary provide exceptional antioxidant and anti-inflammatory support. Best for dogs with skin or joint concerns.'},

  {id:'p6',line:'pumpkin',lineName:'N&D Pumpkin',pet:'dog',stage:'puppy',
   name:'Cod, Pumpkin & Cantaloupe Melon',variant:'Puppy Dog',icon:'🐶',
   protein:'Wild Caught North Sea Cod',
   nutrition:{protein:35,proteinAnimal:96,fat:20,moisture:9},
   macros:{meat:'70%',grains:'0%',fruits:'18%',legumes:'12%',fresh:'52%'},
   highlights:['GMO Free','Mono Protein','Grain Free','Wild Caught Cod','Puppy Formula','Novel Protein'],
   composition:'Cod, dehydrated cod protein, sweet potato, fish oil from herring, dehydrated herring protein, dried pumpkin (5%), dehydrated shrimp (source of glucosamine and chondroitin sulphate), pea fibre, dried carrot, alfalfa meal, inulin, fructooligosaccharides, yeast extract (source of mannooligosaccharides), dried cantaloupe melon, dried apple, dried pomegranate, dried spinach, psyllium husks and seeds, dried blueberry, sodium chloride, potassium chloride, calcium carbonate, dried brewers\' yeast, turmeric, aloe vera extract.',
   suitable:'Puppies and gestating/lactating bitches. All breeds and life stages.',
   sizes:['800g','2.5kg','7kg','12kg'],
   sell:'A mono-protein puppy formula using wild-caught cod — ideal for breeders or owners wanting to minimise early allergen exposure. The pumpkin supports digestive health from day one, and shrimp-derived glucosamine supports healthy joint development.'},

  {id:'p7',line:'pumpkin',lineName:'N&D Pumpkin',pet:'cat',stage:'neutered',
   name:'Lamb, Pumpkin & Blueberry',variant:'Neutered Cat',icon:'🐈‍⬛',
   protein:'New Zealand Grass-Fed Lamb',
   nutrition:{protein:35,proteinAnimal:96,fat:13,moisture:8},
   macros:{meat:'80%',grains:'0%',fruits:'20%',legumes:'0%',fresh:'42%'},
   highlights:['GMO Free','Meat Meal Free','Grain Free','For Neutered Cats','With Pumpkin','Weight Management'],
   composition:'Lamb, dehydrated lamb protein, sweet potato, dehydrated herring protein, dried pumpkin (5%), dried eggs, chicken fat, fish oil from herring, dried beet pulp, dried carrot, alfalfa meal, inulin, fructooligosaccharides, yeast extract (source of mannooligosaccharides), dried blueberry, dried pomegranate, dried spinach, psyllium husks and seeds, dried sweet orange, dried apple, sodium chloride, dried brewers\' yeast, turmeric, aloe vera extract.',
   suitable:'Neutered/sterilised cats. All breeds and life stages.',
   sizes:['300g','1.5kg','5kg'],
   sell:'A calorie-controlled formula specifically for neutered cats whose energy needs drop after sterilisation. Grass-fed lamb is a novel protein for most cats, and the pumpkin delivers natural digestive fibre. Recommend this when a neutered cat owner wants the Pumpkin line quality without the weight gain risk.'},

  // ── N&D OCEAN ──
  {id:'o1',line:'ocean',lineName:'N&D Ocean',pet:'dog',stage:'puppy',
   name:'Cod, Pumpkin & Cantaloupe Melon',variant:'Puppy Dog',icon:'🐶',
   protein:'Wild Caught North Sea Cod',
   nutrition:{protein:30,proteinAnimal:96,fat:20,moisture:9},
   macros:{meat:'77%',grains:'0%',fruits:'23%',legumes:'0%',fresh:'49%'},
   highlights:['GMO Free','Mono Protein','Grain Free','Wild Caught Cod','Puppy Formula','High Omega-3'],
   composition:'Cod (26%), dried cod protein (25%), sweet potato, fish oil (from herring), dried herring protein, dried pumpkin (5%), dried shrimp (source of glucosamine and chondroitin sulphate), pea fibre, dried carrots, alfalfa meal, inulin, fructooligosaccharides, yeast extract (source of mannan-oligosaccharides), cantaloupe melon (0.5%), dried apple, dried pomegranate, dried spinach, psyllium husks and seeds, dried blueberry, sodium chloride, potassium chloride, calcium carbonate, dried brewers\' yeast, turmeric (0.2%), aloe vera extract.',
   suitable:'Puppies and gestating/lactating bitches. All breeds and life stages.',
   sizes:['800g','2.5kg','7kg','12kg'],
   sell:'A mono-protein puppy formula built around wild-caught cod — ideal for minimising early allergen exposure. Sweet potato provides clean low-GI energy for growth, shrimp-derived glucosamine supports joint development, and 5% pumpkin keeps digestion stable from day one.'},

  {id:'o2',line:'ocean',lineName:'N&D Ocean',pet:'dog',stage:'adult',
   name:'Cod, Pumpkin & Orange',variant:'Adult Dog',icon:'🐕',
   protein:'Wild Caught North Sea Cod',
   nutrition:{protein:30,proteinAnimal:96,fat:18,moisture:9},
   macros:{meat:'67%',grains:'0%',fruits:'33%',legumes:'0%',fresh:'50%'},
   highlights:['GMO Free','Mono Protein','Grain Free','Wild Caught Cod','High Omega-3','High Taurine'],
   composition:'Fresh wild-caught cod (25%), dehydrated cod (25%), pea starch, herring oil, dehydrated pumpkin (5%), pea fibre, dried carrots, sun-cured alfalfa, inulin, fructooligosaccharides, mannan-oligosaccharides, dried sweet orange (0.5%), dried apple, dried pomegranate, dried spinach, psyllium (0.3%), dried blueberries, sodium chloride, dried beer yeast, turmeric root (0.2%), glucosamine, chondroitin sulfate, marigold flower extract (source of lutein), aloe vera gel concentrate, green tea extract, rosemary extract.',
   suitable:'All breeds and all life stages.',
   sizes:['800g','2.5kg','7kg','12kg'],
   sell:'50% fresh/raw cod and exceptional taurine levels (2900mg/kg) make this one of the most heart-supportive formulas in the Farmina range. The highest fruit and botanical content in the Ocean line. Recommend for dogs with cardiac concerns or those needing hypoallergenic protein long-term.'},

  // ── N&D PRIME ──
  {id:'pr1',line:'prime',lineName:'N&D Prime',pet:'dog',stage:'puppy',
   name:'Chicken & Pomegranate',variant:'Puppy Dog',icon:'🐶',
   protein:'Italian Free-Range Chicken',
   nutrition:{protein:32,proteinAnimal:98,fat:22,moisture:9},
   macros:{meat:'80%',grains:'0%',fruits:'20%',legumes:'0%',fresh:'48%'},
   highlights:['GMO Free','Grain Free','Legume Free','High Fresh Meat','No Plant Protein','Puppy Formula'],
   composition:'Deboned chicken (28%), dried chicken protein (27%), sweet potato, chicken fat, dried eggs, herring, dried herring protein, fish oil (from herring), pea fibre, dried carrots, alfalfa meal, chicken cartilage (source of glucosamine and chondroitin sulphate), inulin, fructooligosaccharides, yeast extract (source of mannan-oligosaccharides), dried pomegranate (0.5%), dried apple, dried spinach, psyllium husks and seeds (0.3%), dried sweet orange, dried blueberry, sodium chloride, dried brewer\'s yeast, turmeric (0.2%), aloe vera extract.',
   suitable:'Puppies and gestating/lactating bitches. All breeds and life stages.',
   sizes:['800g','2.5kg','7kg','12kg'],
   sell:'98% animal-sourced protein with zero legumes — Prime eliminates the pea/lentil debate entirely. Ideal for owners who want maximum animal protein without any plant-protein substitutes. The cleanest Farmina puppy formula available.'},

  {id:'pr2',line:'prime',lineName:'N&D Prime',pet:'dog',stage:'adult',
   name:'Chicken & Pomegranate',variant:'Adult Dog',icon:'🐕',
   protein:'Italian Free-Range Chicken',
   nutrition:{protein:34,proteinAnimal:98,fat:18,moisture:9},
   macros:{meat:'76%',grains:'0%',fruits:'24%',legumes:'0%',fresh:'46%'},
   highlights:['GMO Free','Grain Free','Legume Free','High Fresh Meat','No Plant Protein','Glucosamine & Chondroitin'],
   composition:'Deboned chicken (26%), dried chicken protein (25%), sweet potato, chicken fat, dried eggs, herring, dried herring protein, fish oil (from herring), pea fibre, dried carrots, alfalfa meal, inulin, fructooligosaccharides, yeast extract (source of mannan-oligosaccharides), dried pomegranate (0.5%), dried apple, dried spinach, psyllium husks and seeds (0.3%), dried sweet orange, dried blueberry, sodium chloride, dried brewer\'s yeast, turmeric (0.2%), aloe vera extract, glucosamine, chondroitin sulphate.',
   suitable:'All breeds and all life stages.',
   sizes:['800g','2.5kg','7kg','12kg'],
   sell:'34% protein entirely from named animal sources, no legumes at all. For customers who\'ve heard concerns about peas/legumes in grain-free food — Prime is the definitive answer. Highest protein content in the adult dog range.'},

  // ── N&D LOW ANCESTRAL GRAIN ──
  {id:'l1',line:'lag',lineName:'N&D Low Ancestral Grain',pet:'dog',stage:'puppy',
   name:'Chicken & Pomegranate',variant:'Puppy Dog',icon:'🐶',
   protein:'Italian Free-Range Chicken',
   nutrition:{protein:35,proteinAnimal:90,fat:20,moisture:9},
   macros:{meat:'70.3%',grains:'20%',fruits:'9.7%',legumes:'0%',fresh:'45%'},
   highlights:['GMO Free','Meat Meal Free','Organic Spelt & Oats','No Corn/Wheat/Rice','Byproduct Free'],
   composition:'Fresh boneless chicken, dehydrated chicken meat, organic spelt (10%), organic oats (10%), chicken fat, dehydrated whole eggs, fresh herring, dehydrated herring, pea fibre, fish oil, dried carrots, dried alfalfa, inulin, FOS, MOS, pomegranate powder (0.5%), dehydrated apple, spinach powder, psyllium (0.3%), blackcurrant, dehydrated sweet orange, blueberries, sodium chloride, dried brewer\'s yeast, turmeric root (0.2%), glucosamine, chondroitin sulphate, Marigold extract (lutein).',
   suitable:'Puppies and gestating/lactating bitches. All breeds and life stages.',
   sizes:['800g','2.5kg','7kg','12kg'],
   sell:'Ideal for puppy owners who want premium nutrition but are hesitant about fully grain-free. Organic spelt and oats provide energy for growing pups — no pesticides, no GMO.'},

  {id:'l2',line:'lag',lineName:'N&D Low Ancestral Grain',pet:'dog',stage:'adult',
   name:'Chicken & Pomegranate',variant:'Adult Dog',icon:'🐕',
   protein:'Italian Free-Range Chicken',
   nutrition:{protein:30,proteinAnimal:90,fat:18,moisture:9},
   macros:{meat:'63.6%',grains:'20%',fruits:'16.4%',legumes:'0%',fresh:'48%'},
   highlights:['GMO Free','Meat Meal Free','Organic Spelt & Oats','No Corn/Wheat/Rice','Byproduct Free'],
   composition:'Fresh boneless chicken (20%), dehydrated chicken meat (18%), spelt (10%), oats (10%), chicken fat, dehydrated whole eggs, fresh herring, dehydrated herring, dried beet pulp, fish oil, dried carrots, dried alfalfa, inulin, FOS, MOS, pomegranate powder (0.5%), dehydrated apple, spinach powder, psyllium (0.3%), blackcurrant, dehydrated sweet orange, blueberries, sodium chloride, dried brewer\'s yeast, turmeric root (0.2%), glucosamine, chondroitin sulfate, Marigold extract (lutein).',
   suitable:'All breeds and all life stages.',
   sizes:['800g','2.5kg','7kg','12kg'],
   sell:'The bridge product. For customers switching from supermarket food who aren\'t ready to go fully grain-free. Still no corn, wheat or rice — only organic ancient grains.'},

  {id:'l3',line:'lag',lineName:'N&D Low Ancestral Grain',pet:'dog',stage:'light',
   name:'Chicken & Pomegranate Light',variant:'Light Adult Dog',icon:'🐕',
   protein:'Italian Free-Range Chicken',
   nutrition:{protein:28,proteinAnimal:90,fat:11,moisture:9},
   macros:{meat:'62.7%',grains:'20%',fruits:'17.3%',legumes:'0%',fresh:'47%'},
   highlights:['GMO Free','Meat Meal Free','Reduced Calorie','Organic Spelt & Oats','Weight Management'],
   composition:'Fresh boneless chicken (20%), dehydrated chicken meat (18%), spelt (10%), oats (10%), fresh herring, dehydrated herring, dehydrated whole eggs, dried beet pulp, dried alfalfa, chicken fat, fish oil, dried carrots, inulin, FOS, MOS, pomegranate powder (0.5%), dehydrated apple, spinach powder, psyllium (0.3%), blackcurrant, dehydrated sweet orange, blueberries, sodium chloride, dried brewer\'s yeast, turmeric root (0.2%), glucosamine, chondroitin sulfate, Marigold extract (lutein).',
   suitable:'Adult dogs needing weight management. All breeds.',
   sizes:['800g','2.5kg','7kg','12kg'],
   sell:'Reduced calorie formula for overweight or less active dogs. Premium ingredients with no compromise on quality — just fewer calories. A must-recommend for owners of couch-potato breeds!'},
];

function normalizeText(value){
  return (value || '').toString().toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
}

function normalizeStage(stage){
  if(!stage) return '';
  stage = stage.toString().toLowerCase();
  if(stage === 'puppy' || stage === 'kitten' || stage === 'puppy/kitten') return 'puppy/kitten';
  if(stage === 'adult' || stage === 'light' || stage === 'neutered') return stage;
  return stage;
}

function scoreScrapedProduct(product, scraped){
  if(product.pet !== scraped.species) return -999;
  const productWords = new Set(normalizeText(product.name).split(' ').filter(Boolean));
  const scrapedWords = new Set(normalizeText(scraped.product_name).split(' ').filter(Boolean));
  const overlap = [...productWords].filter(word=>scrapedWords.has(word)).length;
  let score = overlap * 10;
  const appLine = normalizeText(product.lineName || product.line);
  const scrapedLine = normalizeText(scraped.line);
  if(appLine && scrapedLine && (appLine === scrapedLine || appLine.includes(scrapedLine) || scrapedLine.includes(appLine))) {
    score += 5;
  }
  const appStage = normalizeStage(product.stage);
  const scrapedStage = normalizeStage(scraped.life_stage);
  if(appStage && scrapedStage && appStage === scrapedStage) score += 3;
  if(appStage === 'neutered' && (normalizeText(scraped.product_name).includes('neuter') || normalizeText(scraped.condition_tag || '').includes('neuter'))) score += 3;
  return score;
}

function findScrapedMatch(product){
  if(typeof FARMINA_SCRAPED_PRODUCTS === 'undefined') return null;
  const candidates = FARMINA_SCRAPED_PRODUCTS.slice();
  let best = null;
  let bestScore = -Infinity;
  candidates.forEach(scraped=>{
    const value = scoreScrapedProduct(product, scraped);
    if(value > bestScore){
      bestScore = value;
      best = scraped;
    }
  });
  return bestScore > 0 ? best : null;
}

function applyScrapedProductData(){
  if(typeof FARMINA_SCRAPED_PRODUCTS === 'undefined') return;
  PRODUCTS.forEach(product=>{
    const scraped = findScrapedMatch(product);
    if(!scraped) return;
    product.scraped_product_id = scraped.product_id;
    product.scraped_product_name = scraped.product_name;
    product.scraped_product_url = scraped.product_url;
    product.scraped_line = scraped.line;
    product.scraped_life_stage = scraped.life_stage;
    product.scraped_skus = scraped.skus || [];
    const pricedSkus = product.scraped_skus.filter(sku => typeof sku.price_current === 'number');
    if(pricedSkus.length){
      const cheapest = pricedSkus.reduce((best, sku) => (sku.price_current < best.price_current ? sku : best), pricedSkus[0]);
      const sizeLabel = cheapest.pack_size_unit === 'g' ? `${parseInt(cheapest.pack_size_grams)} g` : `${cheapest.pack_size_value}${cheapest.pack_size_unit}`;
      product.scraped_price_min = cheapest.price_current;
      product.scraped_price_per_kg = cheapest.price_per_kg;
      product.scraped_price_label = `From R${cheapest.price_current.toFixed(0)} (${sizeLabel})`;
    }
  });
}

applyScrapedProductData();
