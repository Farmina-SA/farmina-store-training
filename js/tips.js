// ═══════════════════════════════════════
// SELLING TIPS DATA & LOGIC
// ═══════════════════════════════════════

const TIPS = [
  {icon:'🏆',title:'Why Choose Farmina?',items:[
    {q:'"Why is this better than [popular brand]?"',
     a:'Most popular brands use meat meals, by-products, corn and synthetic additives. Farmina starts with fresh, named proteins. You can actually name every ingredient.',
     script:'"With Farmina, the first ingredient is always fresh named meat — not \'meat meal\' or \'animal derivatives\'. You know exactly what your pet is eating, and it\'s human-grade quality."'},
    {q:'"What is Farmina\'s philosophy?"',
     a:'Italian brand. Backed by clinical research and veterinary nutritionists. The N&D range was specifically formulated around ancestral pet nutrition — what dogs and cats evolved to eat.',
     script:'"Farmina was founded by veterinary nutritionists. Every recipe is scientifically formulated and clinically tested. It\'s not just pet food — it\'s precision nutrition."'},
    {q:'"Is Farmina Italian? Does that matter?"',
     a:'Yes — Italy has some of the strictest food production standards in Europe. Italian free-range chicken and wild boar come from regulated, traceable farms. Origin matters for quality.',
     script:'"The chicken in N&D Quinoa is specifically Italian free-range. That\'s not marketing fluff — it means higher animal welfare standards and better quality protein."'},
  ]},
  {icon:'💰',title:'Price Objection Handling',items:[
    {q:'"It\'s so expensive compared to what I\'m currently buying."',
     a:'Cost per feeding day is the right comparison, not bag price. Premium food is fed in smaller quantities (higher nutrient density = better absorption). Do the daily feeding cost comparison.',
     script:'"A 7kg bag lasts longer than you\'d expect because smaller portions are needed. What are you paying per day currently? Let\'s compare that — most customers are surprised."'},
    {q:'"I can\'t afford to feed premium food every day."',
     a:'Offer rotation or mixing strategies. Even feeding Farmina 50% of the time is a significant upgrade. Or suggest the LAG range as an accessible premium entry point.',
     script:'"Completely understand. You could also mix Farmina with your current food — even partial replacement improves nutrition significantly. The LAG range is a great starting point."'},
    {q:'"Vets bills are already expensive. Why spend more on food?"',
     a:'Preventive nutrition reduces vet visits. Joint support, gut health, skin health, dental health — addressed through food before they become vet problems.',
     script:'"Think of premium food as preventive medicine. Glucosamine, prebiotics, omega-3s — these are things vets charge for as supplements. They\'re already in Farmina."'},
  ]},
  {icon:'🔍',title:'Choosing the Right Product',items:[
    {q:'Customer has a dog with food allergies or skin issues.',
     a:'Recommend: N&D Pumpkin Cod & Orange (novel fish protein, hypoallergenic) or N&D Quinoa Boar & Apple (novel protein). Novel proteins are the go-to for elimination diets.',
     script:'"For food sensitivities, the key is a protein they\'ve never eaten before. Has your dog ever had cod or wild boar? If not, that\'s where I\'d start."'},
    {q:'Customer has a dog with loose stools or digestive issues.',
     a:'Recommend: N&D Pumpkin range. The 5% pumpkin is a proven natural digestive regulator. Psyllium husk also helps. The prebiotic trio (inulin + FOS + MOS) rebuilds gut flora.',
     script:'"Pumpkin is actually the first thing most vets recommend for GI upset. The N&D Pumpkin range has 5% dried pumpkin in every formula — plus three types of prebiotics."'},
    {q:'Customer is transitioning from mainstream supermarket food.',
     a:'Start with N&D Low Ancestral Grain. It\'s less of a dietary shock than going fully grain-free. Build the habit first, then consider upgrading to Quinoa or Pumpkin later.',
     script:'"I\'d suggest starting with Low Ancestral Grain — it\'s a premium upgrade that doesn\'t change the diet too dramatically. Once you\'re comfortable, we can look at fully grain-free."'},
    {q:'Customer has a senior dog with joint problems.',
     a:'Any adult N&D formula works — they all contain glucosamine + chondroitin. The NZ Lamb & Blueberry (both ranges) adds green tea extract and rosemary for extra anti-inflammatory support.',
     script:'"All N&D adult formulas include glucosamine and chondroitin — the joint supplement vets always recommend. The Lamb & Blueberry also adds anti-inflammatory botanicals for extra support."'},
    {q:'Customer has a neutered or overweight cat.',
     a:'Recommend: N&D Quinoa Neutered Cat. Specifically formulated for post-sterilisation energy needs. Prevents weight gain without compromising on nutrition quality.',
     script:'"After neutering, cats\' metabolism slows significantly. The Neutered Cat formula is calorie-controlled while keeping all the premium quality. It\'s the responsible choice after sterilisation."'},
  ]},
  {icon:'🔄',title:'Transition Tips to Share with Customers',items:[
    {q:'How long does it take to transition to Farmina?',
     a:'7–10 days is standard. Day 1-3: 25% Farmina, 75% old food. Day 4-6: 50/50. Day 7-9: 75% Farmina. Day 10+: 100% Farmina.',
     script:'"The golden rule is 7-10 days. Mix gradually — sudden changes upset even healthy digestive systems. The good news is the prebiotics in Farmina actually help the transition go smoother."'},
    {q:'Customer says their pet won\'t eat new food.',
     a:'Palatability is a Farmina strength. 48-51% fresh meat gives it an aroma commercial food can\'t match. Suggest warming the food slightly, or adding warm water to release the aromas.',
     script:'"Try adding a small amount of warm water and let it sit for a minute — the fresh meat smell really opens up. Most picky eaters are converted within 3 days."'},
    {q:'Customer notices softer stools during transition.',
     a:'Normal and expected. The gut microbiome is adjusting. The prebiotics are actively changing the bacterial environment. Typically resolves by day 5-7. The Pumpkin range can help if it persists.',
     script:'"That\'s completely normal — it means the food is working and the gut is adjusting. It usually settles by day 5-7. If it continues, the Pumpkin range with added pumpkin fiber will help firm things up."'},
  ]},
  {icon:'🌿',title:'Key Ingredient Talking Points',items:[
    {q:'Customer asks: "What are meat meals?"',
     a:'Meat meal = rendered animal tissue, dried at high heat. It can include feet, beaks, feathers, organs, and unspecified parts. All Farmina products are MEAT MEAL FREE.',
     script:'"Meat meal is what you get when you render down various animal parts at very high temperatures. Farmina uses only named, fresh meats — no meat meal ever."'},
    {q:'Customer asks: "Why grain-free?"',
     a:'Ancestral diet argument: dogs evolved as carnivores. Grains (especially corn and wheat) are not part of their evolutionary diet. Grain-free reduces blood sugar spikes and inflammation risk.',
     script:'"Dogs evolved eating prey, not corn fields. Grains are used in cheap pet food as a low-cost filler. Farmina uses sweet potato or peas instead — complex carbs that don\'t spike blood sugar."'},
    {q:'Customer asks: "What are prebiotics?"',
     a:'Prebiotics feed beneficial gut bacteria. Farmina uses inulin, FOS AND MOS — three different prebiotics that work together. This is different from probiotics (live bacteria), which have shorter shelf lives.',
     script:'"Prebiotics are food for the good bacteria already in your pet\'s gut. Farmina includes three different types that work together — most brands include none. Think of it as feeding the whole gut ecosystem."'},
    {q:'Customer asks about GMO-free claims.',
     a:'All Farmina N&D products are GMO-free — including proteins, grains and botanicals. This is a verified claim, not just a marketing label.',
     script:'"Every ingredient in Farmina is GMO-free. That includes the grains in the Low Ancestral Grain range. It\'s a non-negotiable brand standard."'},
  ]},
];

// ── Tips functions ──
function renderTips(){
  document.getElementById('tcon').innerHTML = TIPS.map((cat,ci)=>`
<div class="tcat">
  <div class="tch" onclick="toggleTip(${ci})">
    <div class="tchi">${cat.icon}</div>
    <div class="tchtitle">${cat.title}</div>
    <svg class="tchev" id="tchev-${ci}" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" width="18" height="18"><path d="M6 9l6 6 6-6"/></svg>
  </div>
  <div class="tcontent" id="tc-${ci}">
    ${cat.items.map(ti=>`
    <div class="ti">
      <div class="tiq">💬 ${ti.q}</div>
      <div class="tia">${ti.a}</div>
      ${ti.script?`<div class="script">"${ti.script.replace(/^"|"$/g,'')}"</div>`:''}
    </div>`).join('')}
  </div>
</div>`).join('');
}

function toggleTip(idx){
  const tc=document.getElementById('tc-'+idx);
  const chev=document.getElementById('tchev-'+idx);
  const open=tc.classList.toggle('open');
  chev.classList.toggle('open',open);
}
