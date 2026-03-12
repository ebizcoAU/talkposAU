'use client'
// src/components/Templates.tsx — AU version

interface Template {
  icon: string
  name: string
  img: string        // path relative to /public — e.g. /images/templates/cafe.jpg
  type: string
  desc: string
  color: string
  bg: string
  imgBg: string      // fallback gradient shown while/if image is missing
}

const templates: Template[] = [
  {
    icon: '☕',
    name: 'Café',
    img: '/images/templates/template-cafe.jpg',
    type: 'Coffee · Breakfast · Lunch',
    desc: 'Flat white, long black, avo smash — pre-configured. Modifiers for milk type, size, extras.',
    color: '#1E3A5F',
    bg: 'bg-[#EFF6FF]',
    imgBg: 'linear-gradient(135deg,#1E3A5F 0%,#3B6CB7 100%)',
  },
  {
    icon: '🍺',
    name: 'Pub & Club',
    img: '/images/templates/template-pub.jpg',
    type: 'Bar · Bistro · TAB',
    desc: 'Parma, pot, schnitzel with modifiers. TAB integration ready. Separate bar and bistro menus.',
    color: '#F4A261',
    bg: 'bg-[#FFF7ED]',
    imgBg: 'linear-gradient(135deg,#92400E 0%,#F4A261 100%)',
  },
  {
    icon: '🍟',
    name: 'Takeaway',
    img: '/images/templates/template-takeaway.jpg',
    type: 'Counter · Fast food · QSR',
    desc: 'Fast counter checkout, portion modifiers, and queue management built for the lunch rush.',
    color: '#2E7D32',
    bg: 'bg-[#F0FDF4]',
    imgBg: 'linear-gradient(135deg,#14532D 0%,#2E7D32 100%)',
  },
  {
    icon: '🚚',
    name: 'Food Truck',
    img: '/images/templates/template-foodtruck.jpg',
    type: 'Festival · Market · Street',
    desc: 'Queue management, fast checkout, offline-first. Built for outdoor events with zero internet.',
    color: '#DC2626',
    bg: 'bg-[#FEF2F2]',
    imgBg: 'linear-gradient(135deg,#7F1D1D 0%,#DC2626 100%)',
  },
  {
    icon: '🥐',
    name: 'Bakery',
    img: '/images/templates/template-bakery.jpg',
    type: 'Retail · Counter · Café',
    desc: 'Pie, sausage roll, vanilla slice — full bakery workflow. Stock tracking per item baked daily.',
    color: '#7C3AED',
    bg: 'bg-[#F5F3FF]',
    imgBg: 'linear-gradient(135deg,#4C1D95 0%,#7C3AED 100%)',
  },
  {
    icon: '🛠️',
    name: 'Tool Hire',
    img: '/images/templates/template-toolhire.jpg',
    type: 'Equipment · Hire · Retail',
    desc: 'Item hire tracking, deposit management, and retail sales in one checkout flow.',
    color: '#0891B2',
    bg: 'bg-[#ECFEFF]',
    imgBg: 'linear-gradient(135deg,#164E63 0%,#0891B2 100%)',
  },
  {
    icon: '🏨',
    name: 'Hotel',
    img: '/images/templates/template-hotel.jpg',
    type: 'Restaurant · Bar · Room service',
    desc: 'Multi-outlet hotel F&B — restaurant, bar, and room service orders linked to one kitchen.',
    color: '#1E3A5F',
    bg: 'bg-[#EFF6FF]',
    imgBg: 'linear-gradient(135deg,#1E3A5F 0%,#3B6CB7 100%)',
  },
  {
    icon: '🚗',
    name: 'Car Rental',
    img: '/images/templates/template-carrental.jpg',
    type: 'Vehicle hire · Deposits · Retail',
    desc: 'Vehicle checkout, security deposit collection, and accessory upsells at the counter.',
    color: '#F4A261',
    bg: 'bg-[#FFF7ED]',
    imgBg: 'linear-gradient(135deg,#92400E 0%,#F4A261 100%)',
  },
  {
    icon: '🌾',
    name: 'Farm & Produce',
    img: '/images/templates/template-farm.jpg',
    type: 'Market stall · Farm gate · Wholesale',
    desc: 'Seasonal produce pricing, bulk weight sales, and cash/card checkout at the farm gate.',
    color: '#2E7D32',
    bg: 'bg-[#F0FDF4]',
    imgBg: 'linear-gradient(135deg,#14532D 0%,#2E7D32 100%)',
  },
  {
    icon: '🏪',
    name: 'Market Stall',
    img: '/images/templates/template-market.jpg',
    type: 'Markets · Pop-up · Events',
    desc: 'Lightweight, offline-first checkout for markets and pop-ups. No internet? No problem.',
    color: '#DC2626',
    bg: 'bg-[#FEF2F2]',
    imgBg: 'linear-gradient(135deg,#7F1D1D 0%,#DC2626 100%)',
  },
  {
    icon: '✂️',
    name: 'Service',
    img: '/images/templates/template-service.jpg',
    type: 'Bookings · Walk-ins · Retail',
    desc: 'Walk-in queue and booking management. Retail product sales alongside service checkout.',
    color: '#7C3AED',
    bg: 'bg-[#F5F3FF]',
    imgBg: 'linear-gradient(135deg,#4C1D95 0%,#7C3AED 100%)',
  },
  {
    icon: '🏠',
    name: 'Home Business',
    img: '/images/templates/template-homebiz.jpg',
    type: 'Home-based · Online · Local',
    desc: 'Simple checkout for home-based operators — invoicing, cash, card, and PayID in one place.',
    color: '#0891B2',
    bg: 'bg-[#ECFEFF]',
    imgBg: 'linear-gradient(135deg,#164E63 0%,#0891B2 100%)',
  },
]

export default function Templates() {
  return (
    <section id="templates" className="section-pad bg-[#F8F4EF]">
      <div className="max-w-[1100px] mx-auto">

        <div className="text-center max-w-[560px] mx-auto reveal mb-14">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#F4A261] mb-3">
            Industry Templates
          </p>
          <h2 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.9rem)] tracking-tight
                         leading-tight text-[#1F2937]">
            Works for{' '}
            <span className="text-[#1E3A5F]">your kind of business.</span>
          </h2>
          <p className="text-[#4B5563] font-light mt-3">
            12 templates across Australian hospitality and retail. Pre-configured menus, modifiers,
            and workflows — ready in minutes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 reveal">
          {templates.map((t) => (
            <div
              key={t.name}
              className={`${t.bg} rounded-2xl border border-transparent overflow-hidden
                          hover:border-[#E5E7EB] hover:-translate-y-1
                          hover:shadow-[0_16px_40px_rgba(30,58,95,0.10)]
                          transition-all duration-200 cursor-pointer group`}
            >
              {/* ── Template preview image ── */}
              <div
                className="relative h-40 overflow-hidden"
                style={{ background: t.imgBg }}
              >
                <img
                  src={t.img}
                  alt={`${t.name} template preview`}
                  className="absolute inset-0 w-full h-full object-cover
                             group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Hide broken image — gradient fallback shows through
                    ;(e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
                {/* Subtle bottom fade into card body */}
                <div className="absolute bottom-0 left-0 right-0 h-10
                                bg-gradient-to-t from-white/20 to-transparent" />
                {/* Icon badge */}
                <div
                  className="absolute top-3 left-3 w-9 h-9 rounded-xl flex items-center
                             justify-center text-xl bg-white/90 shadow-sm"
                >
                  {t.icon}
                </div>
              </div>

              {/* ── Card body ── */}
              <div className="p-5">
                <div className="font-display font-bold text-[#1F2937] text-base mb-0.5">
                  {t.name}
                </div>
                <div className="text-[0.67rem] font-semibold mb-2" style={{ color: t.color }}>
                  {t.type}
                </div>
                <p className="text-[0.78rem] text-[#4B5563] leading-relaxed font-light">
                  {t.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 reveal">
          <a
            href="#features"
            className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] text-[#1F2937]
                       font-bold text-sm px-6 py-3 rounded-xl hover:border-[#1E3A5F]/30
                       hover:shadow-[0_4px_16px_rgba(30,58,95,0.1)] transition-all"
          >
            See core features →
          </a>
        </div>

      </div>
    </section>
  )
}