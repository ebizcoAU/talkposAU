// src/components/Pricing.tsx — AU version
import Link from 'next/link'

const plans = [
  {
    name: 'Solo',
    price: '$39',
    unit: '/month',
    badge: 'Up to 500 transactions · 1 venue',
    badgeColor: 'text-[#1E3A5F] bg-[#EFF6FF] border-[#1E3A5F]/20',
    desc: 'Perfect for solo operators running a single café, food truck, or market stall.',
    features: [
      'QR + Voice + Counter ordering',
      'Kitchen display (any TV)',
      'ATO-ready immutable audit trail',
      'PayID + card payments',
      'Basic revenue reporting',
      'Offline-first mode',
      'Email support',
    ],
    notIncluded: [
      'Complete accounting (expenses)',
      'COGS & margin tracking',
      'Supplier management',
      'BAS reports',
      'Delivery platform integration',
    ],
    cta: 'Start Free Trial',
    ctaStyle: 'border-2 border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white',
    featured: false,
    accentColor: '#1E3A5F',
  },
  {
    name: 'Pro',
    price: '$79',
    unit: '/month',
    badge: 'Most popular · Unlimited transactions',
    badgeColor: 'text-white bg-[#F4A261] border-[#F4A261]',
    desc: 'Everything in Solo, plus complete accounting — no Xero, MYOB or QuickBooks needed.',
    features: [
      'Everything in Solo',
      'Complete accounting (revenue + expenses)',
      'COGS & margin tracking per item',
      'Supplier management & auto-reorder',
      'Bills, cash flow & P&L',
      'BAS-ready reports (one tap)',
      'Accountant view-only access',
      'Unlimited transactions · 3 venues',
      'Priority support',
      'Predictive rostering (AI)',
      'Delivery platform integration (Uber Eats, DoorDash, Menulog +)',
      'Commission tracking per platform',
    ],
    notIncluded: [],
    cta: 'Start Free Trial',
    ctaStyle: 'bg-[#1E3A5F] border-[#1E3A5F] text-white hover:bg-[#162d4a]',
    featured: true,
    accentColor: '#F4A261',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    unit: '',
    badge: 'Multi-venue · On-premise option',
    badgeColor: 'text-[#2E7D32] bg-[#F0FDF4] border-[#2E7D32]/20',
    desc: 'For pub groups, franchise operators, and large hospitality businesses.',
    features: [
      'Everything in Pro',
      'Multi-venue dashboard (10+ venues)',
      'Edge server deployment',
      'API access & custom integrations',
      'Dedicated account manager',
      'Staff training included',
      'On-premise data option',
      'SLA 99.9% uptime',
    ],
    notIncluded: [],
    cta: 'Contact Us',
    ctaStyle: 'border-2 border-[#E5E7EB] text-[#4B5563] hover:border-[#1E3A5F]/30 hover:text-[#1E3A5F]',
    featured: false,
    accentColor: '#2E7D32',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section-pad bg-white text-center">
      <div className="max-w-[1060px] mx-auto">

        <div className="reveal mb-14">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#F4A261] mb-3">Pricing</p>
          <h2 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.9rem)] tracking-tight
                         leading-tight max-w-xl mx-auto text-[#1F2937]">
            From $39/month.{' '}
            <span className="text-[#1E3A5F]">No lock-in contracts.</span>
          </h2>
          <p className="text-[#4B5563] font-light mt-3 max-w-sm mx-auto">
            Start free. Scale as you grow. Cancel anytime.
          </p>
        </div>

        {/* Plan cards */}
        <div className="grid md:grid-cols-3 gap-5 items-start reveal mb-10">
          {plans.map((p) => (
            <div key={p.name}
              className={`relative rounded-2xl p-7 text-left transition-all duration-200
                          hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(30,58,95,0.12)]
                          ${p.featured
                            ? 'bg-white border-2 border-[#1E3A5F] shadow-[0_8px_32px_rgba(30,58,95,0.15)]'
                            : 'bg-[#F8F9FA] border border-[#E5E7EB]'}`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F4A261] text-white
                                text-[0.64rem] font-black px-3.5 py-1 rounded-full tracking-widest
                                whitespace-nowrap uppercase shadow-md">
                  MOST POPULAR
                </div>
              )}

              <div className="text-[0.64rem] font-black tracking-[0.14em] uppercase text-[#4B5563] mb-3">
                {p.name}
              </div>

              <div className="font-display font-black text-[2.4rem] tracking-[-0.04em] leading-none mb-3
                              text-[#1F2937]">
                {p.price}
                <span className="text-sm font-normal text-[#4B5563]">{p.unit}</span>
              </div>

              <div className={`text-[0.68rem] font-bold px-2.5 py-1.5 rounded-lg border inline-block mb-3 ${p.badgeColor}`}>
                ✓ {p.badge}
              </div>

              <p className="text-[0.84rem] text-[#4B5563] mb-5 font-light leading-relaxed">{p.desc}</p>

              {/* Included */}
              <ul className="space-y-2 mb-4">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[0.84rem] text-[#4B5563]">
                    <span className="font-bold flex-shrink-0 mt-0.5 text-[#2E7D32]">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Not included (Solo only) */}
              {p.notIncluded.length > 0 && (
                <div className="border-t border-[#E5E7EB] pt-4 mb-6">
                  <div className="text-[0.68rem] font-black text-[#4B5563] uppercase tracking-wide mb-2">
                    Upgrade to Pro for:
                  </div>
                  <ul className="space-y-1.5">
                    {p.notIncluded.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[0.78rem] text-[#4B5563]/60">
                        <span className="flex-shrink-0 mt-0.5">→</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {p.notIncluded.length === 0 && <div className="mb-6" />}

              <Link href="#"
                className={`block w-full text-center py-3 rounded-xl font-bold text-[0.84rem]
                            tracking-wide border transition-all ${p.ctaStyle}`}>
                {p.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Hardware note */}
        <div className="reveal bg-[#F8F4EF] border border-[#E5E7EB] rounded-2xl px-8 py-6 text-left
                        max-w-2xl mx-auto">
          <div className="text-[0.72rem] font-black text-[#4B5563] uppercase tracking-widest mb-3">
            🔧 Hardware (one-time cost — use what you own)
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {[
              { label: 'Android TV',  val: '~$300', note: 'Any 32–42" TV' },
              { label: 'QR Prints',   val: '~$60',  note: 'From Officeworks' },
              { label: 'Edge Server', val: '~$600', note: 'Optional, high-volume' },
            ].map((h) => (
              <div key={h.label} className="text-center">
                <div className="font-display font-black text-[#1E3A5F] text-lg">{h.val}</div>
                <div className="text-[0.78rem] font-semibold text-[#1F2937]">{h.label}</div>
                <div className="text-[0.72rem] text-[#4B5563]">{h.note}</div>
              </div>
            ))}
          </div>
          <div className="border-t border-[#E5E7EB] pt-3 flex items-center justify-between flex-wrap gap-2">
            <span className="text-[0.84rem] text-[#4B5563]">
              Total startup cost: <strong className="text-[#1F2937]">$300–$900</strong>
            </span>
            <span className="text-[0.78rem] text-[#2E7D32] font-semibold">
              No lock-in · Cancel anytime · Australian support
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}