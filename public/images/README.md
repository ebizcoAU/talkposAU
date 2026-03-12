# TalkPOS AU — Image Inventory

Place all images in this folder (`public/images/`) before deploying.
Subfolder `templates/` holds the 6 business-type template card images.

---

## ✅ Required Images (root — `public/images/`)

| Filename | Used In | Dimensions | Description |
|----------|---------|------------|-------------|
| `hero-bg.jpg` | `Hero.tsx` (desktop) | 1920×1080 min | Solo café owner mid-lunch-rush, dark overlay ready. Subject at ~40% from left. |
| `hero-bg-mobile.jpg` | `Hero.tsx` (mobile) | 828×1400 min | Portrait crop of same scene OR a closer face shot. Subject centred. |
| `cta-bg.jpg` | `CtaBanner.tsx` | 1920×1080 min | Aerial/drone shot of AU city café precinct at golden hour. Amber sky, navy tones. |
| `cafeman.jpg` | `TheProblem.tsx` | 1100×400 min | Wide banner: stressed AU café owner (left) vs calm owner using TalkPOS (right). |
| `soloman.jpg` | `SoloOperator.tsx` | 700×420 min | Café owner tapping POS screen with 3 active orders visible on screen. |
| `kitchen-display.jpg` | `KitchenDisplay.tsx` | 700×420 | Kitchen TV screen showing live order tickets, staff visible in background. |
| `customer-display.jpg` | `KitchenDisplay.tsx` | 700×420 | Counter-facing screen showing itemised order and live total to customer. |
| `queue-display.jpg` | `KitchenDisplay.tsx` | 700×420 | Wall-mounted TV queue board showing order numbers in a busy café. |
| `og-image.jpg` | `layout.tsx` (meta) | 1200×630 | Open Graph / social share image — TalkPOS AU logo on navy background. |

---

## ✅ Template Card Images (`public/images/templates/`)

| Filename | Template | Dimensions | Description |
|----------|----------|------------|-------------|
| `cafe.jpg` | Café | 600×400 | POS screen or café counter with flat white, menu visible. Light and modern. |
| `pub.jpg` | Pub & Club | 600×400 | Bar setting with TalkPOS on counter, amber lighting, beer taps in background. |
| `fish-chips.jpg` | Fish & Chips | 600×400 | Takeaway counter with POS, paper-wrapped fish & chips, queue of customers. |
| `food-truck.jpg` | Food Truck | 600×400 | Food truck window with POS tablet mounted, outdoor market/festival setting. |
| `bakery.jpg` | Bakery | 600×400 | Bakery display counter with POS, pies and pastries visible in cabinet. |
| `barber.jpg` | Service (Barber) | 600×400 | Barber shop front desk with POS/booking screen, clean modern interior. |

---

## Image Format Guidelines

- **Format:** JPG (preferred for photos), WebP also accepted
- **Quality:** 85%+ for JPG
- **Hero images:** compress to <400 KB each (next/image handles responsive sizes)
- **Template images:** compress to <150 KB each
- **Naming:** exact filenames above — all lowercase, hyphens, no spaces

## Fallback Behaviour

If an image is missing, the component renders its section without the photo (emoji/icon fallback). The site will not crash, but will look incomplete. The minimum viable set to launch is:

1. `hero-bg.jpg`
2. `cta-bg.jpg`
3. `cafeman.jpg`
4. `soloman.jpg`
