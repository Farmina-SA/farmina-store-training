# Farmina SA Staff Training Guide — Claude Code Instructions

## Project overview
Mobile-first PWA for Farmina Pet Foods SA in-store staff training.
Deployed at: https://farmina-store-training.vercel.app
Git repo: https://github.com/Farmina-SA/farmina-store-training.git
No build step — static files served directly from store_training/

## Architecture
- index.html — app shell, loads all JS/CSS
- js/farmina-data.js — FARMINA_SCRAPED_PRODUCTS array (source of truth for prices/SKUs)
- js/products.js — PRODUCTS array (display definitions) + matching logic
- js/ingredients.js — INGREDIENTS array (encyclopedia entries with icons)
- js/app.js — UI rendering and filtering
- js/quiz.js, calculator.js, tips.js, search.js, matcher.js — feature modules

## Brand
- Primary blue: #1B75BC | Dark: #0D5A96 | Light: #4A9ED6
- Fonts: Playfair Display (headers), DM Sans (body) via Google Fonts
- Logo embedded as base64 PNG

## Product data
- farmina-data.js contains 31 products (P0001–P0031), updated to June 2026 prices
- Prices source: "Farmina Dealer Prices June 2026.xls" column G (Retail Price Incl VAT)
- products.js PRODUCTS array has named entries matched to farmina-data.js via scoring logic
- Matching logic merges MINI + MEDIUM&MAXI scraped entries so all bag sizes appear on one card

## Bag sizes by category
- Cat: 300g / 1.5kg / 5kg (Kitten is 300g / 1.5kg only — no 5kg)
- Dog standard: 800g / 2.5kg / 7kg / 12kg
- Dog Quinoa: 800g / 2.5kg / 7kg (no 12kg)
- Dog LAG Light: 2.5kg / 12kg only (no 800g or 7kg)

## Screens (5 nav tabs)
1. Products — filterable catalog with price data from farmina-data.js
2. Ingredients — encyclopedia with modal detail (icons in ingredients.js)
3. Quiz — per product line, 5 questions each
4. Calculator — daily feeding cost calculator
5. Selling Tips — scripts and objection handling

## Deployment
- Run: vercel --prod (from store_training/ directory)
- Project already linked: .vercel/project.json present
- No service worker — browsers serve latest on fresh load

## What still needs doing
- P0004 (Chicken & Pomegranate Neutered cat) is in farmina-data.js but has no matching
  entry in the products.js PRODUCTS array — confirm with owner whether to add it
- Nutrition data (protein %, protein from animal %) missing for Ocean and Prime ranges
- Possible: convert to proper PWA with manifest + service worker
- Possible: add a "Share this product" button per card