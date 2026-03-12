// src/components/HowItWorks.tsx — AU 4-channel explainer

const steps = [
  {
    num: '01',
    icon: '📱',
    title: 'QR Self-Ordering',
    subtitle: 'Customers become cashiers',
    desc: 'Customer scans QR on table → Opens menu on their phone → Orders & pays → Order appears in your kitchen. You never touched it.',
    accent: '#1E3A5F',
    bg: 'bg-[#EFF6FF]',
    border: 'border-[#1E3A5F]/15',
    pill: 'bg-[#1E3A5F]/8 text-[#1E3A5F] border-[#1E3A5F]/20',
    featured: false,
  },
  {
    num: '02',
    icon: '📞',
    title: 'Voice Takeaway',
    subtitle: 'Phone orders without the chaos',
    desc: 'Customer calls → Says "Two lattes and a ham croissant" → Order appears instantly → Payment link sent via SMS. No IVR menus. No staff needed.',
    accent: '#F4A261',
    bg: 'bg-[#FFF7ED]',
    border: 'border-[#F4A261]/30',
    pill: 'bg-[#F4A261]/10 text-[#C2410C] border-[#F4A261]/30',
    featured: true,
    featuredLabel: '⭐ AU Difference',
  },
  {
    num: '03',
    icon: '🖐',
    title: 'Counter Assist',
    subtitle: 'For walk-ins and retail',
    desc: 'You tap a few items → Customer taps to pay via card, Apple Pay, Google Pay, or PayID → Done. Clean, fast, no fuss.',
    accent: '#2E7D32',
    bg: 'bg-[#F0FDF4]',
    border: 'border-[#2E7D32]/15',
    pill: 'bg-[#2E7D32]/8 text-[#2E7D32] border-[#2E7D32]/20',
    featured: false,
  },
  {
    num: '04',
    icon: '🛵',
    title: 'Delivery Platforms',
    subtitle: 'Uber Eats · DoorDash · Menulog + more',
    desc: 'Orders from all delivery platforms flow into the same queue — automatically. No separate tablets. Commission tracked per order so you always know your real net revenue.',
    accent: '#FF6B35',
    bg: 'bg-[#FFF4EE]',
    border: 'border-[#FF6B35]/25',
    pill: 'bg-[#FF6B35]/10 text-[#C2410C] border-[#FF6B35]/25',
    featured: true,
    featuredLabel: '🆕 Delivery Integration',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad bg-white">
      <div className="max-w-[1100px] mx-auto">

        <div className="text-center max-w-[620px] mx-auto reveal mb-14">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#F4A261] mb-3">
            How It Works
          </p>
          <h2 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.9rem)] tracking-tight
                         leading-tight text-[#1F2937]">
            Every channel customers order from.{' '}
            <span className="text-[#1E3A5F]">One queue.</span>
          </h2>
          <p className="text-[#4B5563] font-light mt-4 leading-relaxed">
            Table QR, phone call, walk-in, or delivery app — every order lands
            in the same kitchen display. Still one person running the show.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 reveal">
          {steps.map((s) => (
            <div key={s.num}
              className={`relative rounded-2xl p-7 border-2 ${s.bg} ${s.border}
                          hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]
                          transition-all duration-200
                          ${s.featured ? 'ring-2 ring-offset-2' : ''}`}
              style={s.featured ? { '--tw-ring-color': s.accent + '55' } as React.CSSProperties : {}}
            >
              {s.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-white
                                text-[0.64rem] font-black px-3.5 py-1 rounded-full tracking-widest
                                whitespace-nowrap uppercase shadow-md"
                     style={{ backgroundColor: s.accent }}>
                  {s.featuredLabel}
                </div>
              )}

              <div className="flex items-start justify-between mb-5">
                <div className="text-[0.65rem] font-black tracking-[0.2em] text-[#4B5563]">{s.num}</div>
                <div className="text-3xl">{s.icon}</div>
              </div>

              <h3 className="font-display font-bold text-xl text-[#1F2937] mb-1 leading-tight">
                {s.title}
              </h3>
              <div className={`inline-block text-[0.67rem] font-semibold px-2.5 py-1 rounded-full border mb-3 ${s.pill}`}>
                {s.subtitle}
              </div>
              <p className="text-[0.85rem] text-[#4B5563] leading-relaxed font-light">
                {s.desc}
              </p>

              <div className="mt-6 h-0.5 w-12 rounded-full" style={{ backgroundColor: s.accent }} />
            </div>
          ))}
        </div>

        {/* Connector line */}
        <div className="hidden lg:flex items-center justify-center mt-8 reveal">
          <div className="flex items-center gap-3 text-sm text-[#4B5563] flex-wrap justify-center">
            <span className="font-semibold text-[#1E3A5F]">📱 QR</span>
            <div className="w-10 h-px bg-[#E5E7EB]" />
            <span className="font-semibold text-[#C2410C]">📞 Voice</span>
            <div className="w-10 h-px bg-[#E5E7EB]" />
            <span className="font-semibold text-[#2E7D32]">🖐 Counter</span>
            <div className="w-10 h-px bg-[#E5E7EB]" />
            <span className="font-semibold text-[#FF6B35]">🛵 Delivery</span>
            <div className="w-16 h-px bg-[#E5E7EB]" />
            <span className="font-bold text-[#1F2937]">📺 One Kitchen Display</span>
          </div>
        </div>

        {/* Delivery platforms pill strip */}
        <div className="flex flex-wrap justify-center gap-2 mt-6 reveal">
          <span className="text-[0.73rem] text-[#4B5563] font-medium self-center mr-1">
            Delivery integrations:
          </span>
          {[
            { label: '🟠 Uber Eats',  note: 'Direct API' },
            { label: '🔴 DoorDash',   note: 'Direct API' },
            { label: '🟡 Menulog',    note: 'via Deliverect' },
            { label: '🔵 Deliveroo',  note: 'via Deliverect' },
            { label: '🐼 HungryPanda',note: 'via Otter' },
            { label: '+ more',        note: 'via middleware' },
          ].map((p) => (
            <div key={p.label}
                 className="flex items-center gap-1.5 bg-white border border-[#E5E7EB]
                            rounded-full px-3 py-1.5 text-[0.68rem] font-semibold text-[#1F2937]">
              {p.label}
              <span className="text-[#6B7280] font-normal">· {p.note}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}