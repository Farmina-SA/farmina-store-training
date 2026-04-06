// ═══════════════════════════════════════
// INGREDIENTS DATA
// To add a new ingredient: copy an existing entry, give it a new id (i26, etc.)
// and add it to the array. Categories: protein, prebiotic, botanical, grain, joint, fruit
// conditions: digestion, joint, skin, immune, brain, eye, heart, allergy
// ═══════════════════════════════════════

const INGREDIENTS = [
  {id:'i1',icon:'🍗',name:'Fresh Boneless Chicken',cat:'protein',catLabel:'Animal Protein',
   conditions:[],
   what:'The number-one ingredient — Italian free-range chicken, used fresh (not dried) to preserve natural amino acids.',
   why:'Fresh meat provides biologically available protein that dogs and cats evolved to digest. Being listed first means it\'s the highest percentage ingredient before water weight is accounted for.',
   sell:'Ask customers: "Would you rather feed your pet fresh chicken or chicken powder?" That\'s the difference.'},

  {id:'i2',icon:'🥩',name:'Dehydrated Chicken Meat',cat:'protein',catLabel:'Concentrated Protein',
   conditions:[],
   what:'Chicken that\'s been gently dried to remove moisture, concentrating the protein content to ~4x that of fresh meat.',
   why:'Provides dense, stable protein. When fresh + dehydrated chicken are combined, the total chicken content is significant — typically 50%+ of the recipe.',
   sell:'Explain: fresh chicken is 70% water. After cooking, dehydrated meat provides more actual protein per gram.'},

  {id:'i3',icon:'🐗',name:'Italian Wild Boar',cat:'protein',catLabel:'Novel Protein',
   conditions:['allergy'],
   what:'Free-ranging wild boar from Italian forests. A novel protein rarely used in commercial pet food.',
   why:'Novel proteins are key for elimination diets. Dogs with sensitivities to chicken or beef have typically never been exposed to boar — reducing allergic responses.',
   sell:'Perfect for: "My dog keeps scratching and the vet thinks it\'s food allergies." Wild boar = untested protein = fresh immune response.'},

  {id:'i4',icon:'🐑',name:'NZ Grass-Fed Lamb',cat:'protein',catLabel:'Premium Protein',
   conditions:['allergy','skin'],
   what:'Lamb sourced from New Zealand\'s pasture-raised, hormone-free sheep. Considered one of the cleanest protein sources globally.',
   why:'Grass-fed animals have better omega-3 to omega-6 ratios than grain-fed. No growth hormones, no antibiotics — cleaner protein profile.',
   sell:'New Zealand has some of the strictest agricultural regulations in the world. Pure, traceable, premium.'},

  {id:'i5',icon:'🐟',name:'Atlantic Wild Caught Cod',cat:'protein',catLabel:'Fish Protein',
   conditions:['allergy'],
   what:'White fish caught from wild Atlantic waters. Low in fat, high in quality protein, naturally hypoallergenic.',
   why:'Cod is one of the least allergenic proteins available. Rich in B vitamins, phosphorus and selenium. The mild flavour is highly palatable even for picky eaters.',
   sell:'Best for dogs with food sensitivities or those that have reacted to both chicken AND beef.'},

  {id:'i6',icon:'🐠',name:'Wild Caught Herring',cat:'protein',catLabel:'Oily Fish / Omega Source',
   conditions:['skin','brain','heart','joint','allergy'],
   what:'Atlantic herring, wild caught and used both fresh and dehydrated. Exceptionally rich in omega-3 fatty acids (EPA & DHA).',
   why:'EPA and DHA directly reduce inflammation, support brain function, improve coat condition and support cardiovascular health. Herring is one of the richest natural sources.',
   sell:'For cats or dogs with skin issues, dull coats, joint stiffness or anxiety — herring-based food is a powerful natural intervention.'},

  {id:'i7',icon:'🎃',name:'Dried Pumpkin',cat:'botanical',catLabel:'Digestive Support',
   conditions:['digestion'],
   what:'5% dried pumpkin in the Pumpkin range. Rich in soluble and insoluble fiber, beta-carotene and vitamins A, C and E.',
   why:'Pumpkin acts as a natural digestive regulator — soluble fiber helps with diarrhoea, insoluble fiber helps with constipation. A well-known "vet trick" for GI upset.',
   sell:'If a customer mentions their dog has loose stools or irregular digestion, recommend the Pumpkin range. The 5% pumpkin inclusion makes a real functional difference.'},

  {id:'i8',icon:'🌿',name:'Inulin',cat:'prebiotic',catLabel:'Prebiotic Fiber',
   conditions:['digestion','immune'],
   what:'A natural plant-based fiber extracted from chicory root. Functions as a prebiotic — food for beneficial gut bacteria.',
   why:'A healthy gut microbiome improves digestion, immunity and even mood. Inulin specifically feeds Bifidobacteria and Lactobacilli — the "good guys" in the gut.',
   sell:'"This food actively feeds the beneficial bacteria in your pet\'s gut." That\'s the difference from standard commercial food.'},

  {id:'i9',icon:'🔬',name:'Fructooligosaccharides (FOS)',cat:'prebiotic',catLabel:'Prebiotic',
   conditions:['digestion','immune'],
   what:'Short-chain carbohydrates found naturally in plants. A second type of prebiotic that complements inulin.',
   why:'FOS specifically helps reduce harmful bacteria like Clostridium and E. coli in the gut. Works synergistically with inulin for more complete gut support.',
   sell:'Farmina uses BOTH inulin AND FOS — a dual-prebiotic approach that most commercial brands don\'t even include one of.'},

  {id:'i10',icon:'🧫',name:'Mannan-oligosaccharides (MOS)',cat:'prebiotic',catLabel:'Immune Prebiotic',
   conditions:['digestion','immune'],
   what:'Derived from yeast cell walls. Works differently from other prebiotics — it binds to and helps expel harmful bacteria from the gut lining.',
   why:'MOS acts as a "decoy" receptor for pathogens like Salmonella, helping flush them out before they colonise the gut. Also linked to improved immune response.',
   sell:'Inulin + FOS + MOS = three complementary gut health ingredients. This is pharmaceutical-grade gut support in a pet food.'},

  {id:'i11',icon:'🍎',name:'Pomegranate',cat:'fruit',catLabel:'Superfood Antioxidant',
   conditions:['immune','heart'],
   what:'Dried pomegranate powder at 0.5% of the recipe. One of the most antioxidant-dense fruits known to science.',
   why:'Pomegranate is rich in punicalagins and punicic acid — unique antioxidants with proven anti-inflammatory effects. Supports cellular health and reduces oxidative damage.',
   sell:'Pomegranate is literally called a "superfood" in human nutrition. Farmina brings it into pet food at a meaningful inclusion rate.'},

  {id:'i12',icon:'🫐',name:'Blueberries',cat:'fruit',catLabel:'Antioxidant Fruit',
   conditions:['brain','immune','eye'],
   what:'Dried blueberry powder. Rich in anthocyanins, vitamin C, vitamin K and manganese.',
   why:'Blueberries cross the blood-brain barrier, making them one of the few foods linked to improved cognitive function. Excellent anti-inflammatory and immune support.',
   sell:'For senior dogs, ageing cats or breeds prone to cognitive decline — blueberries are a meaningful ingredient, not just marketing.'},

  {id:'i13',icon:'🌱',name:'Turmeric Root',cat:'botanical',catLabel:'Anti-inflammatory Botanical',
   conditions:['joint','digestion'],
   what:'Dried turmeric root at 0.2%. Contains curcumin — one of the most studied natural anti-inflammatory compounds.',
   why:'Curcumin inhibits inflammatory pathways at the molecular level. Supported by hundreds of studies for joint pain, digestive inflammation and liver health.',
   sell:'Turmeric is a vet-recommended natural supplement for dogs with arthritis. It\'s already in the food — no extra cost, no hassle.'},

  {id:'i14',icon:'🌾',name:'Psyllium Husk',cat:'botanical',catLabel:'Soluble Fiber',
   conditions:['digestion'],
   what:'The husk of Plantago ovata seeds. Used at 0.3%. One of the most effective natural sources of soluble dietary fiber.',
   why:'Forms a gel in the gut that regulates bowel movements, lowers cholesterol absorption and supports blood sugar stability. A key ingredient for healthy digestion.',
   sell:'This is the same ingredient in Metamucil for humans. At 0.3% it provides meaningful digestive support in every meal.'},

  {id:'i15',icon:'🦴',name:'Glucosamine',cat:'joint',catLabel:'Joint Support',
   conditions:['joint'],
   what:'A naturally occurring compound essential for cartilage production and maintenance. Often derived from shellfish or chicken cartilage in Farmina.',
   why:'Glucosamine is the building block of joint cartilage. Supplementation has been shown to slow cartilage breakdown and reduce joint pain in dogs.',
   sell:'Large breed owners worry about hip dysplasia. Older dog owners worry about arthritis. This is the supplement vets always recommend — already included.'},

  {id:'i16',icon:'💪',name:'Chondroitin Sulfate',cat:'joint',catLabel:'Joint Support',
   conditions:['joint'],
   what:'Works alongside glucosamine to maintain joint health. Found naturally in cartilage and connective tissue.',
   why:'Chondroitin draws fluid into cartilage (keeping it cushioned) and inhibits enzymes that break down cartilage. The glucosamine+chondroitin combination is more effective than either alone.',
   sell:'"Glucosamine AND chondroitin" is the gold standard in joint supplements. Farmina includes both in every adult formula.'},

  {id:'i17',icon:'🌼',name:'Marigold Extract (Lutein)',cat:'botanical',catLabel:'Eye Health',
   conditions:['eye'],
   what:'Extract from marigold flowers, standardised for lutein content. Lutein is a carotenoid that concentrates in the eye\'s macula.',
   why:'Lutein is the primary antioxidant protecting eyes from UV damage and oxidative stress. Linked to reduced risk of cataracts and age-related eye disease.',
   sell:'Eye conditions are a major concern as pets age. Lutein from marigold extract is proactive protection — most brands don\'t include it.'},

  {id:'i18',icon:'🌾',name:'Organic Spelt',cat:'grain',catLabel:'Ancient Grain (LAG Range)',
   conditions:['digestion'],
   what:'An ancient wheat variety used at 10% in the Low Ancestral Grain range. Organically certified — no pesticides or GMOs.',
   why:'Spelt has a different gluten structure to modern wheat, making it more digestible for many dogs. Rich in B vitamins, magnesium and zinc. Ancient grains were part of the original "ancestral" canine diet.',
   sell:'Not all grains are equal. Organic spelt is nothing like processed corn or wheat derivatives. It\'s a clean, traceable, ancient carbohydrate.'},

  {id:'i19',icon:'🌾',name:'Organic Oats',cat:'grain',catLabel:'Ancient Grain (LAG Range)',
   conditions:['digestion','immune'],
   what:'Whole organic oats at 10% in the Low Ancestral Grain range. Naturally gluten-free in their pure form.',
   why:'Oats contain beta-glucan — a type of soluble fiber proven to reduce cholesterol and support immune function. Rich in iron, manganese and B vitamins.',
   sell:'For dogs that need a calorie source beyond protein and fat, oats are the cleanest option. Naturally energising and easily digested.'},

  {id:'i20',icon:'🫚',name:'Fish Oil (Herring)',cat:'protein',catLabel:'Omega-3 Source',
   conditions:['skin','brain','heart','joint'],
   what:'Cold-pressed oil from herring, added as a concentrated source of EPA and DHA omega-3 fatty acids.',
   why:'Omega-3s are anti-inflammatory, support skin and coat condition, improve cognitive function and support heart health. Essential for cats who cannot synthesise DHA efficiently.',
   sell:'Every Farmina formula includes fish oil on top of the fresh/dehydrated fish ingredients. Double the omega-3 support.'},

  {id:'i21',icon:'🍠',name:'Sweet Potato',cat:'grain',catLabel:'Low-GI Carbohydrate',
   conditions:['digestion'],
   what:'Whole sweet potato used as the primary carbohydrate source in grain-free puppy and kitten formulas. Rich in beta-carotene, vitamin C, potassium and dietary fibre.',
   why:'Sweet potato has a lower glycaemic index than white potato or rice, providing sustained energy release rather than blood sugar spikes. A nutrient-dense, naturally sweet carb source that is highly palatable and easy to digest.',
   sell:'When customers ask what replaces grains in grain-free food, sweet potato is the answer. Clean energy, no spikes, plus natural vitamins built in.'},

  {id:'i22',icon:'🍈',name:'Cantaloupe Melon',cat:'fruit',catLabel:'Antioxidant Fruit',
   conditions:['eye','immune'],
   what:'Dried cantaloupe melon at 0.5% in the N&D Ocean Puppy formula. Rich in beta-carotene, vitamin C, vitamin A and potassium.',
   why:'Cantaloupe provides natural antioxidant support during the rapid growth phase of puppyhood. Beta-carotene is a precursor to vitamin A, essential for healthy vision, immune function and skin development.',
   sell:'A unique ingredient that sets the Ocean Puppy formula apart — functional fruit nutrition specifically chosen for growing dogs.'},

  {id:'i23',icon:'🦐',name:'Dried Shrimp',cat:'joint',catLabel:'Natural Joint Source',
   conditions:['joint'],
   what:'Dried shrimp used as a natural source of glucosamine and chondroitin sulphate in the N&D Ocean Puppy formula.',
   why:'Marine-sourced glucosamine from shrimp shells is highly bioavailable. Including it from puppyhood supports correct joint and cartilage development, particularly important in medium and large breed puppies.',
   sell:'Most puppy foods use synthetic glucosamine. Farmina Ocean Puppy uses real dried shrimp — natural joint support that starts on day one.'},

  {id:'i24',icon:'🌰',name:'Linseed (Flaxseed)',cat:'botanical',catLabel:'Plant Omega-3',
   conditions:['skin'],
   what:'Cold-pressed linseed (flaxseed) used in the N&D Quinoa Skin & Coat formulas. The richest plant source of ALA omega-3 fatty acids.',
   why:'ALA omega-3 supports skin barrier function and reduces trans-epidermal water loss — keeping skin hydrated and coat glossy. Combined with fish oil, linseed creates a comprehensive omega-3 and omega-6 fatty acid profile.',
   sell:'For dogs with dry, flaky skin or a dull coat, the dual omega approach (fish oil + linseed) in the Skin & Coat formula is the most comprehensive natural solution available.'},

  {id:'i25',icon:'🥥',name:'Dried Coconut',cat:'botanical',catLabel:'Medium-Chain Fatty Acids',
   conditions:['skin'],
   what:'Dried coconut included in the N&D Quinoa Skin & Coat formulas. Contains lauric acid and medium-chain triglycerides (MCTs).',
   why:'MCTs are rapidly absorbed and used directly as energy, bypassing normal fat digestion. Lauric acid has natural antimicrobial properties. MCTs also support skin lipid barriers and coat conditioning.',
   sell:'Coconut oil has been popular in holistic pet care for years. The Skin & Coat formula includes it as a whole food ingredient — natural coat conditioning from the inside out.'},
];

// ═══════════════════════════════════════
// BODY CONDITIONS — for the "By Condition" filter
// id must match the strings used in each ingredient's conditions:[] array
// ═══════════════════════════════════════
const BODY_CONDITIONS = [
  {id:'digestion', icon:'🫁', label:'Digestion',     blurb:'Ingredients that regulate gut health, bowel movements and the microbiome.'},
  {id:'joint',     icon:'🦴', label:'Joints',        blurb:'Natural compounds that build, protect and lubricate joint cartilage.'},
  {id:'skin',      icon:'🐾', label:'Skin & Coat',   blurb:'Omega fatty acids and botanicals that restore skin barrier and coat shine.'},
  {id:'immune',    icon:'🛡️', label:'Immunity',      blurb:'Prebiotics and antioxidants that strengthen the immune response.'},
  {id:'brain',     icon:'🧠', label:'Brain',         blurb:'DHA-rich ingredients that support cognitive function — especially important in seniors.'},
  {id:'eye',       icon:'👁️', label:'Eyes',          blurb:'Carotenoids that protect against age-related eye damage and cataracts.'},
  {id:'heart',     icon:'🫀', label:'Heart',         blurb:'Omega-3 fatty acids and antioxidants that support cardiovascular health.'},
  {id:'allergy',   icon:'🌿', label:'Sensitivities', blurb:'Novel proteins rarely used commercially — ideal for food allergy elimination diets.'},
];

// ═══════════════════════════════════════
// CONDITION → PRODUCT mapping
// Lists product ids most relevant to each condition.
// Order = priority (best match first).
// ═══════════════════════════════════════
const CONDITIONS_PRODUCTS = {
  digestion: ['p1','p3','p6','p7'],
  joint:     ['pr2','o2','l2','q2'],
  skin:      ['q8','q9','p2'],
  immune:    ['q1','q3','o1'],
  brain:     ['o1','o2'],
  eye:       ['o2','q2','o1'],
  heart:     ['o1','o2'],
  allergy:   ['p4','p1','o1','o2'],
};

function normalizeIngredientKey(value){
  return (value || '').toString().toLowerCase().replace(/[^a-z0-9]/g, '').trim();
}

function applyScrapedIngredientData(){
  if(typeof FARMINA_SCRAPED_INGREDIENTS === 'undefined') return;
  const scrapedIndex = new Map(FARMINA_SCRAPED_INGREDIENTS.map(item => [normalizeIngredientKey(item.canonical), item]));
  INGREDIENTS.forEach(item => {
    const key = normalizeIngredientKey(item.name);
    const scraped = scrapedIndex.get(key);
    if(!scraped) return;
    if(!item.conditions || item.conditions.length === 0){
      item.conditions = (scraped.conditions_it_appears_in || '').split(',').map(s=>s.trim()).filter(Boolean);
    }
    if(scraped.benefit_statement){
      item.benefit_statement = scraped.benefit_statement;
    }
    if(scraped.nutritional_role){
      item.nutritional_role = scraped.nutritional_role;
    }
    if(scraped.notes){
      item.notes = scraped.notes;
    }
    if(scraped.conditions_it_appears_in){
      item.scraped_conditions = scraped.conditions_it_appears_in.split(',').map(s=>s.trim()).filter(Boolean);
    }
    if(scraped.lines_it_appears_in){
      item.scraped_lines = scraped.lines_it_appears_in.split(',').map(s=>s.trim()).filter(Boolean);
    }
  });
}

applyScrapedIngredientData();
