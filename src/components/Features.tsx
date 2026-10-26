// src/components/Features.tsx — AU version (IVR + Kiosk led)

const features = [
  {
    icon: '🎙️',
    iconBg: 'bg-[#F4A261]/10 border-[#F4A261]/30',
    title: 'IVR Voice Ordering',
    desc: 'Customer calls your number. AI answers, understands natural speech, takes the full order — no staff involved. Works for phone-in takeaway, table service and hotel room ordering.',
    badge: 'Core',
    badgeColor: 'bg-[#F4A261] text-[#1A1A2E]',
  },
  {
    icon: '🖥️',
    iconBg: 'bg-[#1E3A5F]/10 border-[#1E3A5F]/30',
    title: 'Self-Service Kiosk',
    desc: 'Touch-screen kiosk ordering — just like McDonald\'s drive-through, built into your venue. Run 4 stations at once and clear the lunch rush without adding a single staff member.',
    badge: 'Core',
    badgeColor: 'bg-[#1E3A5F] text-white',
  },
  {
    icon: '📺',
    iconBg: 'bg-[#1E3A5F]/8 border-[#1E3A5F]/20',
    title: 'Kitchen Display',
    desc: 'Every order — phone, kiosk, QR or counter — appears instantly on your kitchen TV. Android TV ready. Nothing falls through the cracks during the rush.',
  },
  {
    icon: '📱',
    iconBg: 'bg-[#F4A261]/8 border-[#F4A261]/20',
    title: 'QR Table Ordering',
    desc: 'Customer scans the table QR on their phone browser. No app install. Australians hate downloading apps — we made it frictionless.',
  },
  {
    icon: '📶',
    iconBg: 'bg-[#1E3A5F]/8 border-[#1E3A5F]/20',
    title: 'Offline-First',
    desc: 'Works in regional areas with spotty internet. SQLite runs entirely on-device. Your kiosk and IVR keep taking orders even when the internet drops.',
  },
  {
    icon: '💸',
    iconBg: 'bg-[#2E7D32]/8 border-[#2E7D32]/20',
    title: 'PayID Saves You Real Money',
    desc: '~50c flat vs 1.6% card fees. On $5k/week turnover that\'s over $750/month back in your pocket. Kiosk and IVR both support PayID, card, Apple Pay and Google Pay.',
  },
  {
    icon: '📊',
    iconBg: 'bg-[#F4A261]/8 border-[#F4A261]/20',
    title: 'Complete Accounting',
    desc: 'Track every dollar in and out. COGS, supplier management, BAS reports — no Xero needed. Every kiosk and IVR order feeds the books automatically.',
    badge: 'Pro',
    badgeColor: 'bg-[#1E3A5F] text-white',
  },
  {
    icon: '🧾',
    iconBg: 'bg-[#2E7D32]/8 border-[#2E7D32]/20',
    title: 'BAS Ready — One Tap',
    desc: 'Everything the ATO needs, auto-calculated every quarter. Give your accountant view-only access. GST on every kiosk and phone order captured automatically.',
    badge: 'Pro',
    badgeColor: 'bg-[#1E3A5F] text-white',
  },
  {
    icon: '📦',
    iconBg: 'bg-[#1E3A5F]/8 border-[#1E3A5F]/20',
    title: 'Supplier Management',
    desc: 'Auto-reorder when stock hits threshold. Track supplier performance. Never run out of your top-selling items during a lunch rush.',
    badge: 'Pro',
    badgeColor: 'bg-[#1E3A5F] text-white',
  },
  {
    icon: '🏪',
    iconBg: 'bg-[#2E7D32]/8 border-[#2E7D32]/20',
    title: 'Multi-Venue Dashboard',
    desc: 'One login for all your venues. See kiosk and IVR revenue across every location in real time. Scale without complexity.',
  },
  {
    icon: '🛵',
    iconBg: 'bg-[#FF6B35]/8 border-[#FF6B35]/20',
    title: 'Delivery Platform Integration',
    desc: 'Uber Eats, DoorDash, Menulog and more flow into the same order queue as your kiosk and IVR. No tablet juggling. Commission auto-tracked per platform.',
    badge: 'Pro',
    badgeColor: 'bg-[#1E3A5F] text-white',
  },
  {
    icon: '💳',
    iconBg: 'bg-[#F4A261]/8 border-[#F4A261]/20',
    title: 'Every Payment Method',
    desc: 'Cards, Apple Pay, Google Pay, PayID, Afterpay. Smart surcharging — ATO-compliant, auto-applied across kiosk, IVR and table ordering.',
  },
]

export default function Features() {
  return (
    <section id="features" className="section-pad bg-[#F8F9FA]">
      <div className="max-w-[1100px] mx-auto">

        <div className="text-center max-w-[600px] mx-auto reveal mb-10">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#F4A261] mb-3">
            Core Features
          </p>
          <h2 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.9rem)] tracking-tight
                         leading-tight text-[#1F2937]">
            Everything you need.{' '}
            <span className="text-[#1E3A5F]">Nothing you don't.</span>
          </h2>
          <p className="text-[#4B5563] font-light mt-3 leading-relaxed">
            Voice IVR and self-service kiosks at the front. Complete accounting, tax and payroll at the back.
            One app runs it all.
          </p>
        </div>

        {/* IVR + Kiosk hero cards — full width, prominent */}
        <div className="grid md:grid-cols-2 gap-5 reveal mb-5">
          {features.slice(0, 2).map((f) => (
            <div key={f.title}
              className="group bg-white border-2 border-[#1E3A5F]/20 rounded-2xl p-8 relative
                         hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(30,58,95,0.12)]
                         transition-all duration-200">
              <div className="absolute top-0 left-0 right-0 h-1
                               bg-gradient-to-r from-[#F4A261] via-[#1E3A5F] to-transparent
                               rounded-t-2xl" />
              <div className="flex items-start justify-between mb-5">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl
                                border ${f.iconBg}`}>
                  {f.icon}
                </div>
                {f.badge && (
                  <span className={`text-[0.64rem] font-black px-3 py-1 rounded-full tracking-wider ${f.badgeColor}`}>
                    {f.badge}
                  </span>
                )}
              </div>
              <div className="font-display font-bold text-lg mb-2 text-[#1F2937]">{f.title}</div>
              <p className="text-[0.88rem] text-[#4B5563] leading-relaxed font-light">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Remaining features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E7EB]
                        border border-[#E5E7EB] rounded-2xl overflow-hidden reveal">
          {features.slice(2).map((f) => (
            <div key={f.title}
              className="group bg-white hover:bg-[#F8F9FA] p-8 relative transition-colors">
              <div className="absolute top-0 left-0 right-0 h-0.5
                               bg-gradient-to-r from-[#1E3A5F] to-transparent
                               opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start justify-between mb-5">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl
                                border ${f.iconBg}`}>
                  {f.icon}
                </div>
                {f.badge && (
                  <span className={`text-[0.64rem] font-black px-2 py-1 rounded-full tracking-wider ${f.badgeColor}`}>
                    {f.badge}
                  </span>
                )}
              </div>
              <div className="font-display font-bold text-base mb-2 text-[#1F2937]">{f.title}</div>
              <p className="text-[0.84rem] text-[#4B5563] leading-relaxed font-light">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}