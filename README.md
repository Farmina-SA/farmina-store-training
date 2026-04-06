# Farmina SA Staff Training Guide

Mobile-first PWA for Farmina Pet Foods SA instore staff. Works fully offline after first load.

---

## Deploying to cPanel / public_html

1. Log in to cPanel and open **File Manager**.
2. Navigate to `public_html` (or a subdirectory, e.g. `public_html/training`).
3. Upload the entire `store_training/` folder contents — all files and subdirectories must be present:
   ```
   index.html
   manifest.json
   service-worker.js
   css/styles.css
   js/app.js  js/products.js  js/ingredients.js
   js/quiz.js  js/tips.js  js/calculator.js
   assets/logo.png
   assets/icons/icon-192.png
   assets/icons/icon-512.png
   ```
4. The service worker **requires HTTPS** to activate. Make sure your cPanel domain has an SSL certificate enabled (most cPanel hosts provide Let's Encrypt for free under **SSL/TLS**).
5. Open the URL in Chrome on mobile, tap the browser menu → **Add to Home Screen** to install as a PWA.

> **After uploading an update:** increment `CACHE_NAME` in `service-worker.js` (e.g. `farmina-v2`) so staff devices pick up the new files on next visit.

---

## Updating product data

All product data lives in **[js/products.js](js/products.js)**. Each product is one object in the `PRODUCTS` array.

### Add a new product
Copy an existing entry and change the fields:
```js
{id:'q8', line:'quinoa', lineName:'N&D Quinoa', pet:'dog', stage:'adult',
 name:'New Flavour', variant:'Adult Dog', icon:'🐕',
 protein:'Italian Free-Range Chicken',
 nutrition:{protein:30, proteinAnimal:96, fat:18, moisture:9},
 macros:{meat:'75%', grains:'0%', fruits:'22%', legumes:'3%', fresh:'46%'},
 highlights:['GMO Free','Meat Meal Free','Grain Free'],
 composition:'Full ingredient list here...',
 suitable:'All breeds and all life stages.',
 sizes:['2.5kg','7kg'],
 sell:'Your selling point here.'},
```

### Edit an existing product
Find the product by its `id` (e.g. `l2` = LAG Adult Dog) and update any field directly.

### Protein bar display
The Crude Protein bar width is calculated as `protein / 50 * 100` (capped at 100%). So a product with 50%+ crude protein will show a full bar. The "From Animal" bar uses `proteinAnimal` directly as a percentage (0–100).

---

## Updating calculator pricing

Preset prices are defined in two places:

### 1. `js/calculator.js` — `setPreset()` function
```js
// PRICE — confirm before 2026 update
function setPreset(sizeG, price){ ... }
```
The prices are passed as arguments from the HTML buttons (see below).

### 2. `index.html` — preset buttons (lines ~155–165)
```html
<!-- PRICE — confirm before 2026 update -->
<button onclick="setPreset(2500, 499)">2.5kg · R499</button>
<!-- PRICE — confirm before 2026 update -->
<button onclick="setPreset(7000, 1049)">7kg · R1049</button>
<!-- PRICE — confirm before 2026 update -->
<button onclick="setPreset(12000, 1499)">12kg · R1499</button>
```

To update a price, change **both** the `setPreset(sizeG, price)` argument **and** the button label text. After editing, bump the `CACHE_NAME` version in `service-worker.js`.

> ⚠️ All prices are subject to the 2026 price increase. Confirm current RRP before updating.

---

## Adding or replacing the logo

Replace `assets/logo.png` with the new file (keep the same filename). The logo displays at 46×46 px in the header — any square or circular image works well.

---

## Tech notes

- No framework, no npm, no build step required.
- Fonts load from Google Fonts (requires internet on first load; cached by the browser thereafter).
- All product, ingredient, quiz and tip data is embedded in the JS files — no server or API needed.
- The service worker caches all local assets on first load, enabling full offline use.
