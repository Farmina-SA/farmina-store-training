# Farmina SA Staff Training Guide

## Project overview
Single-file mobile-first PWA for Farmina Pet Foods SA instore staff.
File: farmina-training-v4.html (self-contained, no build step)

## Brand
- Primary blue: #1B75BC | Dark: #0D5A96 | Light: #4A9ED6
- Fonts: Playfair Display (headers), DM Sans (body) via Google Fonts
- Logo embedded as base64 PNG

## Product data
- 3 lines: N&D Quinoa, N&D Pumpkin, N&D Low Ancestral Grain
- 13 products with full compositions, macros, protein %, protein from animal %
- Pricing confirmed: LAG 2.5kg R499 / 7kg R1049 / 12kg R1499
- ⚠️ All pricing subject to 2026 increase — do not hardcode as final

## Screens (5 nav tabs)
1. Products — filterable catalog with protein bars
2. Ingredients — encyclopedia with modal detail
3. Quiz — per product line, 5 questions each
4. Calculator — daily feeding cost calculator
5. Selling Tips — scripts and objection handling

## What still needs doing
- Quinoa and Pumpkin range pricing (to be confirmed)
- Protein % data for any additional products added
- Possible: convert to proper PWA with manifest + service worker
- Possible: add a "Share this product" button per card