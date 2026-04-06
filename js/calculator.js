// ═══════════════════════════════════════
// CALCULATOR LOGIC
// Feeding guide formula: metabolic body weight × species factor
// Dogs: ~22.3 × weight^0.75 | Cats: ~16.5 × weight^0.75
// ═══════════════════════════════════════

function calcPortion(petType, weightKg){
  // Based on metabolic body weight formula fitted to Farmina feeding guides
  // Dogs: ~22.3 × weight^0.75 | Cats: ~16.5 × weight^0.75
  const factor = petType === 'cat' ? 16.5 : 22.3;
  return Math.round(factor * Math.pow(weightKg, 0.75));
}

function initCalculator(){
  const sel = document.getElementById('cProductSelect');
  if(!sel) return;
  sel.innerHTML = '<option value="">Custom price or choose a product</option>';
  if(typeof FARMINA_SCRAPED_PRODUCTS === 'undefined') return;
  FARMINA_SCRAPED_PRODUCTS.forEach(p=>{
    const opt = document.createElement('option');
    const petIcon = p.species === 'cat' ? '🐱' : '🐶';
    opt.value = p.product_id;
    opt.textContent = `${p.line} · ${p.product_name} ${petIcon}`;
    sel.appendChild(opt);
  });
  setGenericBagOptions();
}

function getCalcProduct(){
  const productId = document.getElementById('cProductSelect')?.value;
  if(!productId || typeof FARMINA_SCRAPED_PRODUCTS === 'undefined') return null;
  return FARMINA_SCRAPED_PRODUCTS.find(p=>p.product_id===productId) || null;
}

function renderCalcSkuButtons(product){
  const container = document.getElementById('cProductSkuButtons');
  if(!container) return;
  container.innerHTML = '';
  if(!product || !Array.isArray(product.skus) || !product.skus.length) return;
  product.skus.forEach(sku=>{
    const button = document.createElement('button');
    const sizeLabel = sku.pack_size_unit === 'g'
      ? `${parseInt(sku.pack_size_grams)} g`
      : `${sku.pack_size_value}${sku.pack_size_unit}`;
    button.type = 'button';
    button.textContent = `${sizeLabel} · R${sku.price_current}`;
    button.style.cssText = 'padding:8px 12px;border:1.5px solid var(--border);border-radius:8px;background:var(--surf);font-size:12px;font-weight:600;cursor:pointer;color:var(--gd);box-shadow:var(--sh)';
    button.addEventListener('click', ()=>{
      const bagSelect = document.getElementById('cBagSize');
      if(!bagSelect) return;
      const opt = Array.from(bagSelect.options).find(o=>o.value === String(sku.pack_size_grams));
      if(opt){
        bagSelect.value = opt.value;
        document.getElementById('cPrice').value = sku.price_current;
        calcUpdate();
      }
    });
    container.appendChild(button);
  });
}

function onCalcProductChange(){
  const product = getCalcProduct();
  const bagSelect = document.getElementById('cBagSize');
  const priceInput = document.getElementById('cPrice');
  const petTypeSelect = document.getElementById('cPetType');
  if(!bagSelect || !priceInput) return;
  if(!product){
    setGenericBagOptions();
    renderCalcSkuButtons(null);
    priceInput.value = '';
    calcUpdate();
    return;
  }

  if(petTypeSelect && product.species){
    petTypeSelect.value = product.species;
  }

  bagSelect.innerHTML = '';
  product.skus.forEach(sku=>{
    const opt = document.createElement('option');
    opt.value = String(sku.pack_size_grams || sku.pack_size_value || '');
    opt.dataset.price = sku.price_current || '';
    const sizeLabel = sku.pack_size_unit === 'g'
      ? `${parseInt(sku.pack_size_grams)} g`
      : `${sku.pack_size_value}${sku.pack_size_unit}`;
    opt.textContent = `${sizeLabel}${sku.price_current ? ` · R${sku.price_current}` : ''}`;
    bagSelect.appendChild(opt);
  });

  if(bagSelect.options.length){
    bagSelect.selectedIndex = 0;
    const selected = bagSelect.selectedOptions[0];
    if(selected && selected.dataset.price){
      priceInput.value = selected.dataset.price;
    }
  }

  renderCalcSkuButtons(product);
  calcUpdate();
}

function onCalcBagSizeChange(){
  const bagSelect = document.getElementById('cBagSize');
  const priceInput = document.getElementById('cPrice');
  if(!bagSelect || !priceInput) return;
  const selected = bagSelect.selectedOptions[0];
  if(selected && selected.dataset.price){
    priceInput.value = selected.dataset.price;
  }
  calcUpdate();
}

function setGenericBagOptions(){
  const bagSelect = document.getElementById('cBagSize');
  if(!bagSelect) return;
  bagSelect.innerHTML =
    '<optgroup label="Dog">' +
      '<option value="2500">2.5 kg</option>' +
      '<option value="7000" selected>7 kg</option>' +
      '<option value="10000">10 kg</option>' +
      '<option value="12000">12 kg</option>' +
      '<option value="15000">15 kg</option>' +
      '<option value="20000">20 kg</option>' +
    '</optgroup>' +
    '<optgroup label="Cat">' +
      '<option value="300">300 g</option>' +
      '<option value="1500">1.5 kg</option>' +
      '<option value="5000">5 kg</option>' +
    '</optgroup>';
}

window.addEventListener('load', initCalculator);

function calcBagPrice(){
  calcUpdate();
}

function calcUpdate(){
  const result = document.getElementById('calcResult');
  if(result){
    result.classList.remove('show');
    result.style.display = 'none';
  }
}

function runCalc(){
  const petType = document.getElementById('cPetType').value;
  const weight = parseFloat(document.getElementById('cWeight').value);
  const bagSizeG = parseInt(document.getElementById('cBagSize').value);
  const price = parseFloat(document.getElementById('cPrice').value);

  if(!weight || weight <= 0 || !price || price <= 0) {
    alert('Please enter a valid pet weight and bag price to calculate.');
    return;
  }

  const portion = calcPortion(petType, weight);
  const bagSizeKg = bagSizeG / 1000;
  const costPerG = price / bagSizeG;
  const costPerDay = costPerG * portion;
  const daysPerBag = Math.floor(bagSizeG / portion);
  const monthlyCost = costPerDay * 30.4;

  document.getElementById('crPortion').textContent = portion + 'g';
  document.getElementById('crCostDay').textContent = 'R' + costPerDay.toFixed(2);
  document.getElementById('crDays').textContent = daysPerBag;
  document.getElementById('crMonth').textContent = 'R' + Math.round(monthlyCost);
  const selectedProductId = document.getElementById('cProductSelect')?.value;
  const selectedProduct = (typeof FARMINA_SCRAPED_PRODUCTS !== 'undefined' && selectedProductId)
    ? FARMINA_SCRAPED_PRODUCTS.find(p => p.product_id === selectedProductId)
    : null;
  document.getElementById('crNote').innerHTML =
    `Based on mid-range feeding guide for a ${weight}kg ${petType}.<br>` +
    `${bagSizeKg}kg bag @ R${price} = <strong style="color:#fff">R${costPerDay.toFixed(2)}/day</strong> · Individual pets vary — adjust for healthy body weight.<br>` +
    `${selectedProduct ? `Product: ${selectedProduct.line} · ${selectedProduct.product_name}<br>` : ''}` +
    `⚠️ Prices subject to change in 2026.`;
  document.getElementById('calcResult').style.display = 'block';
}
