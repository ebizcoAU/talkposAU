# TalkPOS Australia — website

Marketing site for **TalkPOS Australia** (talkpos.com.au), a product of Ebizco Australia Pty Ltd.
Next.js 14 App Router + Tailwind CSS, exported as a static site (`output: 'export'`).

## Quick start

```bash
npm install
npm run dev        # http://localhost:3002
npm run build      # static export to out/
```

Set `NEXT_PUBLIC_SITE_URL` when building for a host other than https://talkpos.com.au, so
Open Graph image URLs resolve to that host.

## Where things are

```
src/
├── content.ts          # every product claim, the pilot wording and the FAQ, in one place
├── app/
│   ├── layout.tsx      # fonts + site metadata
│   ├── page.tsx        # home: Hero, HowItWorks, Features, BackOffice, Pricing, Faq, CtaBanner
│   ├── help/           # setup steps + FAQ
│   ├── contact/
│   ├── privacy/  terms/  compliance/   # legal pages
└── components/
```

Copy rule: only features in the current Australian app go under "now" in `src/content.ts`.
Planned work goes under "coming", with no dates. No prices until they are published.

## Contact

admin@ebizco.com.au · Ebizco Australia Pty Ltd (ABN 44 091 466 858)
