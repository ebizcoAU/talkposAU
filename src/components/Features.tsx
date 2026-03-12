// src/components/Features.tsx — AU version (with accounting features)

const features = [
  {
    icon: '📶',
    iconBg: 'bg-[#1E3A5F]/8 border-[#1E3A5F]/20',
    title: 'Offline-First',
    desc: 'Works in regional areas with spotty internet. SQLite runs entirely on-device. Never lose a sale.',
  },
  {
    icon: '📱',
    iconBg: 'bg-[#F4A261]/8 border-[#F4A261]/20',
    title: 'No App for Customers',
    desc: 'Just a QR code and their phone browser. Australians hate installing apps. Zero friction.',
  },
  {
    icon: '📺',
    iconBg: 'bg-[#1E3A5F]/8 border-[#1E3A5F]/20',
    title: 'Kitchen Display Ready',
    desc: 'Orders appear instantly on any TV or tablet. Android TV ready. Nothing falls through the cracks.',
  },
  {
    icon: '💸',
    iconBg: 'bg-[#2E7D32]/8 border-[#2E7D32]/20',
    title: 'PayID Saves You Real Money',
    desc: '~50c flat vs 1.6% card fees. On $5k/week turnover that\'s over $750/month back in your pocket.',
  },
  {
    icon: '📊',
    iconBg: 'bg-[#F4A261]/8 border-[#F4A261]/20',
    title: 'Complete Accounting',
    desc: 'Track every dollar in AND out. COGS, supplier management, BAS reports — no Xero needed.',
    badge: 'Pro',
  },
  {
    icon: '🧾',
    iconBg: 'bg-[#2E7D32]/8 border-[#2E7D32]/20',
    title: 'BAS Ready — One Tap',
    desc: 'Everything the ATO needs, auto-calculated every quarter. Give your accountant view-only access.',
    badge: 'Pro',
  },
  {
    icon: '📦',
    iconBg: 'bg-[#1E3A5F]/8 border-[#1E3A5F]/20',
    title: 'Supplier Management',
    desc: 'Auto-reorder when stock hits threshold. Track supplier performance. Never run out of chicken parmas.',
    badge: 'Pro',
  },
  {
    icon: '💳',
    iconBg: 'bg-[#F4A261]/8 border-[#F4A261]/20',
    title: 'Every Payment Method',
    desc: 'Cards, Apple Pay, Google Pay, PayID, Afterpay. Smart surcharging — ATO-compliant, auto-applied.',
  },
  {
    icon: '🏪',
    iconBg: 'bg-[#2E7D32]/8 border-[#2E7D32]/20',
    title: 'Multi-Venue Dashboard',
    desc: 'One login for all your venues. Cafes, pubs, food trucks — reporting together. Scale without complexity.',
  },
  {
    icon: '🛵',
    iconBg: 'bg-[#FF6B35]/8 border-[#FF6B35]/20',
    title: 'Delivery Platform Integration',
    desc: 'Uber Eats, DoorDash, Menulog and more flow into one queue. No tablet juggling. Commission auto-tracked per order — see your real net revenue, not just gross.',
    badge: 'Pro',
  },
]

export default function Features() {
  return (
    <section id="features" className="section-pad bg-[#F8F9FA]">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center max-w-[560px] mx-auto reveal mb-14">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#F4A261] mb-3">
            Core Features
          </p>
          <h2 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.9rem)] tracking-tight
                         leading-tight text-[#1F2937]">
            Everything you need.{' '}
            <span className="text-[#1E3A5F]">Nothing you don't.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E7EB]
                        border border-[#E5E7EB] rounded-2xl overflow-hidden reveal">
          {features.map((f) => (
            <div key={f.title}
              className="group bg-white hover:bg-[#F8F9FA] p-10 relative transition-colors">
              <div className="absolute top-0 left-0 right-0 h-0.5
                               bg-gradient-to-r from-[#1E3A5F] to-transparent
                               opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start justify-between mb-5">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl
                                border ${f.iconBg}`}>
                  {f.icon}
                </div>
                {f.badge && (
                  <span className="text-[0.64rem] font-black px-2 py-1 bg-[#1E3A5F] text-white
                                   rounded-full tracking-wider">
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