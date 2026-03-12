# TalkPOS Australia — Next.js 14 + Tailwind CSS

Production-ready marketing website for **TalkPOS Australia**, adapted from the TalkPOS Vietnam product for the Australian hospitality market.

Built with Next.js 14 App Router and Tailwind CSS. **Light-mode design** using a deep navy / warm amber palette targeting Australian café, pub, food truck, and takeaway owners.

---

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001)

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — DM Sans + Syne fonts, AU metadata
│   ├── page.tsx            # Page assembly (AU section order)
│   └── globals.css         # Tailwind base + AU brand tokens + animations
│
└── components/
    ├── ScrollReveal.tsx     # Intersection observer for .reveal
    ├── Navbar.tsx           # Fixed top nav — light mode, navy/amber
    ├── Hero.tsx             # Hero — dark (#1A1A2E), 3-channel dashboard mockup
    ├── TheProblem.tsx       # Labour crisis stats section  ← NEW (AU)
    ├── HowItWorks.tsx       # 3-step explainer             ← NEW (AU)
    ├── Features.tsx         # 6-feature grid — AU features
    ├── SoloOperator.tsx     # Lunch rush timeline + dashboard ← NEW (AU)
    ├── VoiceSection.tsx     # AU voice ordering + comparison table
    ├── TrustedPOS.tsx       # ATO compliance + hash chain   ← NEW (AU)
    ├── Payments.tsx         # PayID + payment methods       ← NEW (AU)
    ├── Templates.tsx        # 6 AU business templates
    ├── ROICalculator.tsx    # Interactive savings calculator ← NEW (AU)
    ├── Testimonials.tsx     # 3 AU customer testimonials
    ├── Pricing.tsx          # 3-tier pricing + hardware note
    ├── CtaBanner.tsx        # Bottom CTA — dark with bg photo
    ├── Footer.tsx           # Footer — light, AU contact details
    ├── TalkingPerson.tsx    # Animated SVG logo (recoloured navy/amber)
    ├── PageShell.tsx        # Layout wrapper for sub-pages
    └── PhoneMockup.tsx      # (retained, not used on AU homepage)

public/
└── images/
    ├── README.md            # Image replacement guide (see below)
    ├── hero-bg.jpg          # Done
    ├── cta-bg.jpg           # Done
    └── og-image.jpg         # TODO: replace with AU OG image
```

---

## 🖼️ Image Prompts

All image placeholder prompts are embedded as comments inside the relevant components. Use any generative AI image tool (Midjourney, DALL·E, Firefly, Ideogram) with the prompts found in:

| File | Section | Prompt location |
|------|---------|----------------|
| `Hero.tsx` | Hero background | `hero-bg.jpg` alt text / inline comment |
| `TheProblem.tsx` | Problem illustration | Inline `IMAGE PLACEHOLDER` block |
| `SoloOperator.tsx` | Dashboard visual | Inline `IMAGE PLACEHOLDER` block |
| `CtaBanner.tsx` | CTA background | `cta-bg.jpg` / inline comment |

**Minimum required to launch:**
- `public/images/hero-bg.jpg` — solo café owner running lunch rush (dark-overlay ready)
- `public/images/cta-bg.jpg` — AU hospitality precinct, golden hour

---

## 🎨 Design Tokens

### Palette (Light Mode)

| Token | Hex | Use |
|-------|-----|-----|
| `brand-navy` | `#1E3A5F` | Primary — trust, stability |
| `brand-amber` | `#F4A261` | Energy, hospitality, CTAs |
| `brand-green` | `#2E7D32` | Savings, compliance, success |
| `brand-ink` | `#1A1A2E` | Hero / dark sections bg |
| `brand-slate` | `#F8F9FA` | Main page background |
| `brand-warm` | `#F8F4EF` | Alternate section background |
| `brand-text` | `#1F2937` | Primary text |
| `brand-muted` | `#6B7280` | Body copy |

Defined in `tailwind.config.ts` under `theme.extend.colors.brand`.

### Fonts

- **Display / Headlines:** `Syne` (700, 800) — bold, confident
- **Body:** `DM Sans` (300–700) — rounded, friendly, readable

Both loaded via `next/font/google` with zero layout shift.

---

## 📄 Section Order (page.tsx)

| # | Component | Type |
|---|-----------|------|
| 1 | `Hero` | Dark section, split layout |
| 2 | `TheProblem` | Labour crisis stats |
| 3 | `HowItWorks` | 3-step explainer |
| 4 | `Features` | 6-feature grid |
| 5 | `SoloOperator` | Lunch rush scenario |
| 6 | `VoiceSection` | Voice ordering demo |
| 7 | `TrustedPOS` | ATO compliance |
| 8 | `Payments` | PayID + payment methods |
| 9 | `Templates` | 6 AU templates |
| 10 | `ROICalculator` | Interactive savings tool |
| 11 | `Testimonials` | 3 AU reviews |
| 12 | `Pricing` | 3-tier + hardware note |
| 13 | `CtaBanner` | Final CTA |
| 14 | `Footer` | Links + AU contact |

---

## 💰 Pricing

| Plan | Price | Transactions | Venues |
|------|-------|-------------|--------|
| Solo | $39/mo | 500/mo | 1 |
| Pro | $79/mo | Unlimited | 3 |
| Enterprise | Custom | Unlimited | Unlimited |

**Hardware (one-time):** Android TV ~$300 · QR prints ~$60 · Optional edge server ~$600
**Total startup cost: $300–$900. No lock-in. Cancel anytime.**

---

## 🌐 Deployment

### Vercel (recommended)

```bash
npx vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) — zero config needed.

### Static export

```bash
npm run build
npm run start
```

---

## 📦 Tech Stack

- **Next.js 14** — App Router, Server Components
- **Tailwind CSS 3** — utility-first styling
- **TypeScript** — full type safety
- **DM Sans + Syne** — Google Fonts via `next/font` (zero layout shift)
- **next/image** — automatic image optimisation

---

## 🇻🇳 → 🇦🇺 Adaptation Notes

This site is adapted from the TalkPOS Vietnam product. Key changes:

| Component | VN | AU |
|-----------|----|----|
| Theme | Dark mode (#0D0D0D) | Light mode (#F8F9FA) |
| Font | Be Vietnam Pro + Syne | DM Sans + Syne |
| Palette | Red + Gold (#E8381A / #F5A623) | Navy + Amber (#1E3A5F / #F4A261) |
| Voice | "Má ơi" Vietnamese wake word | Native iOS/Android ASR (en-AU) |
| Payments | VietQR / VNPay | PayID + Stripe + Tyro |
| Compliance | Basic logging | ATO-ready immutable audit trail |
| Currency | VND (₫) | AUD ($) |
| Tax | Vietnamese tax tables | GST + STP payroll |

**Architecture is unchanged** — offline-first SQLite, React Native app, Customer PWA, optional edge server. See `TalkPOS_Australia_-_Product_Requirements_v2.pdf` for full PRD.

---

## 📬 Contact

- **Email:** hello@talkpos.com.au
- **Phone:** 1800 TALKPOS
- **WhatsApp:** +61 412 783 132
- **Company:** Ebizco Australia Pty Ltd (ABN 44 091 466 858)# talkposAU
