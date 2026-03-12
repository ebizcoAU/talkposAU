# TalkPOS AU — Image Generation Prompts

Brand palette for all images:
- Dark navy: #0F1729 / #1A1A2E backgrounds
- Accent amber: #F4A261, green: #2E7D32, blue: #1E3A5F
- Australian hospitality aesthetic — authentic, sun-bleached, NOT corporate stock
- People: real Aussie small business owners (30–60), worn aprons, busy hands

---

## HERO & SECTION BACKGROUNDS

### hero-bg.jpg
Used in: Hero.tsx — desktop background (≥768px)
Size: 1920×1080px, landscape
**Critical composition:** Subject must sit CENTRE frame (45–55%).
Left 40% will have text overlaid — keep it darker/simpler there.
Right 30% must be open/blurred for the dashboard mockup overlay.
The operator is the visual bridge between the two columns.

Prompt:
  A busy Australian café at the lunch rush, wide landscape shot.
  A sole female operator (woman, 40s, apron) is working the espresso machine
  CENTRED in frame — her body and hands in action, warm smile.
  LEFT side of frame: darker café interior, counter edge, slightly underexposed —
  text will overlay here so keep it simple and dark.
  RIGHT side of frame: open café interior, blurred customers in background,
  brick wall and hanging plants — no strong focal subject, deliberately open.
  Bright natural light. Timber benchtops, chalkboard menu.
  Documentary style. No text, no logos. Warm amber tones.
  Operator centred at 50% — left darker, right open and blurred.

### hero-bg-mobile.jpg
Used in: Hero.tsx — mobile background only (<768px), shown with stronger dark overlay
Size: 750×1200px, portrait / tall crop
**Critical composition note:** Single-column layout on mobile — no dashboard mockup,
just text over image. Subject can be centred. Top portion (above fold) is most important.

Prompt:
  Portrait crop of an Australian café owner (woman, 40s, apron) looking slightly
  off-camera with a warm, confident expression. Upper body, café background softly
  blurred behind her — espresso machine, brick wall, warm light.
  Vertical format, subject centred and filling the upper two-thirds of frame.
  Photojournalistic style. Warm golden tones. No text, no logos.
  Image will have a dark navy overlay applied — avoid very dark scenes.

### cta-bg.jpg
Used in: CtaBanner.tsx
Size: 1920×600px

Prompt:
  Wide shot of an Australian café or pub interior from above. Tables set, morning
  prep underway. Lone staff member arranging chairs. Warm natural light.
  No people's faces visible. Clean, aspirational but authentic.

---

## BUSINESS TEMPLATES (Templates.tsx)
Size: 600×400px each — Australian settings, real businesses

### template-cafe.jpg
  Inside a busy Australian café at 8am. Espresso machine in foreground, barista
  in motion. Timber and exposed brick. Morning light. Chalkboard specials.

### template-pub.jpg
  Australian pub bistro, lunch service. Parma on a plate, pot of beer, TAB screen
  in background. Warm tungsten light. Authentic suburban pub feel.

### template-takeaway.jpg
  Australian fish and chip shop counter. Flake and chips wrapped in paper,
  wire basket. Fluorescent lights, tiled walls, handwritten price board on wall.

### template-market.jpg
  Busy Australian weekend market — Malaga, Wanneroo or Swap Meet style.
  Rows of stalls: fresh produce, clothing, tools, bric-a-brac. Sunny morning,
  families browsing. No readable signage. Wide angle, documentary.

### template-foodtruck.jpg
  Australian food truck at a weekend festival or farmers market. Serving window
  open, queue of customers. Clear blue sky. Bright colours. Authentic outdoor feel.

### template-bakery.jpg
  Australian bakery display counter — pies, sausage rolls, vanilla slices,
  lamingtons under glass. Warm display lighting. Tongs and paper bags on counter.

### template-service.jpg
  Australian barber shop. Two chairs, mirror wall, clippers in hand. Relaxed,
  masculine interior. One barber working, one customer waiting. Natural light.

### template-homebiz.jpg
  Bright home kitchen, suburban Australian house. Baked goods packaged in clear
  bags with handwritten labels on a bench. Phone showing Instagram DMs nearby.
  Natural window light. Warm, domestic, authentic.

### template-farm.jpg
  Australian farm gate roadside stall — hand-painted sign, egg cartons, bunches
  of vegetables, honey jars, cut flowers in buckets. Wire honour box visible.
  Sunny morning. Rural Western Australian setting, red dirt road nearby.

### template-hotel.jpg
  Reception desk of a small Australian motel or B&B. Room key hooks on wall,
  simple computer on desk. Clean, modest. Warm interior light.

### template-carrental.jpg
  Small Australian car hire yard — 4–6 vehicles parked in a row, utes and
  family cars. Coastal or regional town backdrop. Clear sky, bright sun.

### template-toolhire.jpg
  Australian hire shop interior — power tools, ladders, compressors on shelves
  and floor. Fluorescent lighting. Trade/industrial feel. Signs with hire rates.

---

## KITCHEN & QUEUE DISPLAY SYSTEM (KitchenDisplay.tsx)
Size: 800×500px each — real-world screens in Australian hospitality settings

### kitchen-display.jpg
Used in: KitchenDisplay.tsx — KDS photo

Prompt:
  An Australian café or pub kitchen. On the wall or pass, an Android tablet in a
  protective mount shows a kitchen display — table numbers, dish names, time elapsed.
  Colour-coded tickets: amber for cooking, green for ready. Background: stainless
  steel bench, chef's hands plating a parma. Steam. Real working kitchen.
  Documentary feel. No branded UI. Overhead + under-bench lighting.

### customer-display.jpg
Used in: KitchenDisplay.tsx — customer-facing display

Prompt:
  Australian café counter, customer side. A small tablet mounted on a stand faces
  the customer — showing order confirmation: "Flat White $5.00 ✓ · Avo Toast
  $18.00 ✓ · Total $23.00". Green checkmark. Payment method shown.
  Customer's hands visible, tapping card on reader beside it.
  Warm natural café light. Authentic, not staged.

### queue-display.jpg
Used in: KitchenDisplay.tsx — queue board

Prompt:
  A busy Australian fish and chip shop or food court. On the wall, a large
  flat-screen TV used as a queue board — big bold numbers (47, 48, 49) with
  status: NOW READY / PREPARING in high contrast amber on dark background.
  Customers looking up at the screen. Fluorescent and LED lighting.
  No branded logos. Authentic Australian takeaway setting.

---

## Recommended generation tools
  - Midjourney v6 (best for documentary/photojournalistic style)
  - DALL-E 3 (good for specific scene compositions)
  - Adobe Firefly (if licensing is a concern)

## Export settings
  - Format: .jpg, quality 85%, progressive encoding
  - Size: compress to <300KB per image (Next.js will auto-optimise further)
  - Avoid: stock photo poses, overly perfect lighting, American/UK settings
  - Goal: images an Australian small business owner would recognise as their own life