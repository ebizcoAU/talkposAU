// src/app/help/page.tsx
import PageShell from '@/components/PageShell'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Help Centre — TalkPOS Australia',
  description: 'Find answers to common questions about TalkPOS Australia.',
}

const categories = [
  {
    icon: '🚀',
    title: 'Getting Started',
    color: '#1E3A5F',
    bg: 'bg-[#EFF6FF]',
    articles: [
      'How to set up your first menu',
      'Connecting your QR ordering system',
      'Setting up PayID payments',
      'Adding your first staff member',
    ],
  },
  {
    icon: '📱',
    title: 'QR Ordering',
    color: '#F4A261',
    bg: 'bg-[#FFF7ED]',
    articles: [
      'Generating and printing QR codes',
      'Customising your customer ordering page',
      'Managing table numbers',
      'Handling order modifications',
    ],
  },
  {
    icon: '🎙️',
    title: 'Voice Ordering',
    color: '#2E7D32',
    bg: 'bg-[#F0FDF4]',
    articles: [
      'Setting up voice ordering on your phone',
      'Supported accents and dialects',
      'Training the system to your menu items',
      'Troubleshooting voice recognition',
    ],
  },
  {
    icon: '💳',
    title: 'Payments',
    color: '#7C3AED',
    bg: 'bg-[#F5F3FF]',
    articles: [
      'Accepting PayID payments',
      'Connecting Stripe or Tyro',
      'Processing refunds',
      'End-of-day reconciliation',
    ],
  },
  {
    icon: '📊',
    title: 'ATO Compliance',
    color: '#DC2626',
    bg: 'bg-[#FEF2F2]',
    articles: [
      'Understanding your audit trail',
      'Generating GST reports',
      'Single Touch Payroll (STP) setup',
      'Exporting data for your accountant',
    ],
  },
  {
    icon: '📶',
    title: 'Offline & Hardware',
    color: '#0891B2',
    bg: 'bg-[#ECFEFF]',
    articles: [
      'How offline mode works',
      'Recommended Android hardware',
      'Setting up your kitchen display',
      'Edge server installation',
    ],
  },
]

export default function HelpPage() {
  return (
    <PageShell>
      <div className="max-w-[1100px] mx-auto px-5 py-16">

        {/* Header */}
        <div className="text-center max-w-[560px] mx-auto mb-12">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#F4A261] mb-3">
            Help Centre
          </p>
          <h1 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.9rem)] tracking-tight
                         leading-tight text-[#1F2937] mb-4">
            How can we help?
          </h1>
          <p className="text-[#4B5563] font-light leading-relaxed">
            Browse articles below or contact our support team directly.
          </p>
        </div>

        {/* Search bar */}
        <div className="max-w-[520px] mx-auto mb-14">
          <div className="flex items-center gap-3 bg-white border border-[#E5E7EB] rounded-xl px-4 py-3
                          focus-within:border-[#1E3A5F] transition-colors shadow-sm">
            <span className="text-[#9CA3AF]">🔍</span>
            <input
              type="text"
              placeholder="Search help articles…"
              className="flex-1 outline-none text-sm text-[#1F2937] placeholder:text-[#9CA3AF] bg-transparent"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((cat) => (
            <div key={cat.title}
              className={`${cat.bg} rounded-2xl p-6 border border-transparent
                          hover:border-[#E5E7EB] hover:-translate-y-1
                          hover:shadow-[0_12px_32px_rgba(30,58,95,0.08)]
                          transition-all duration-200`}>
              <div className="text-2xl mb-3">{cat.icon}</div>
              <div className="font-display font-bold text-[#1F2937] text-base mb-4"
                   style={{ color: cat.color }}>
                {cat.title}
              </div>
              <ul className="space-y-2.5">
                {cat.articles.map((a) => (
                  <li key={a}>
                    <a href="#"
                      className="text-[0.82rem] text-[#4B5563] hover:text-[#1E3A5F]
                                 transition-colors flex items-center gap-2">
                      <span className="text-[#D1D5DB]">→</span> {a}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Still need help */}
        <div className="bg-[#1E3A5F] rounded-2xl p-8 text-center text-white">
          <div className="text-3xl mb-3">💬</div>
          <h2 className="font-display font-bold text-xl mb-2">Still need help?</h2>
          <p className="text-white/70 text-sm font-light mb-6">
            Our support team is available Mon–Fri 8am–6pm AEST. We reply within 2 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:admin@ebizco.com.au"
              className="inline-flex items-center gap-2 bg-[#F4A261] text-[#1A1A2E] font-bold
                         px-6 py-3 rounded-xl hover:-translate-y-0.5 transition-all text-sm">
              ✉️ Email Support
            </a>
            <a href="tel:+61412783132"
              className="inline-flex items-center gap-2 bg-white/10 text-white font-medium
                         px-6 py-3 rounded-xl border border-white/20 hover:bg-white/20
                         transition-all text-sm">
              📞 +61 412 783 132
            </a>
          </div>
        </div>

      </div>
    </PageShell>
  )
}