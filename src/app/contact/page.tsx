// src/app/contact/page.tsx
import PageShell from '@/components/PageShell'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us — TalkPOS Australia',
  description: 'Get in touch with the TalkPOS Australia support team.',
}

const channels = [
  {
    icon: '✉️',
    label: 'Email',
    title: 'Send us an email',
    sub: 'We reply within 24 hours',
    value: 'admin@ebizco.com.au',
    href: 'mailto:admin@ebizco.com.au',
    color: '#1E3A5F',
    bg: 'bg-[#EFF6FF]',
  },
  {
    icon: '📞',
    label: 'Phone',
    title: 'Call us',
    sub: 'Mon–Fri, 8am–6pm AEST',
    value: '+61 412 783 132',
    href: 'tel:+61412783132',
    color: '#2E7D32',
    bg: 'bg-[#F0FDF4]',
  },
  {
    icon: '💬',
    label: 'WhatsApp',
    title: 'Message us on WhatsApp',
    sub: 'Fastest response — usually under 2 hrs',
    value: '+61 412 783 132',
    href: 'https://wa.me/61412783132',
    color: '#F4A261',
    bg: 'bg-[#FFF7ED]',
  },
]

export default function ContactPage() {
  return (
    <PageShell>
      <div className="max-w-[860px] mx-auto px-5 py-16">

        {/* Header */}
        <div className="text-center max-w-[520px] mx-auto mb-14">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#F4A261] mb-3">
            Contact Us
          </p>
          <h1 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.9rem)] tracking-tight
                         leading-tight text-[#1F2937] mb-4">
            We'd love to hear from you.
          </h1>
          <p className="text-[#4B5563] font-light leading-relaxed">
            Whether you have a question about pricing, features, or just want a demo —
            our team is ready to help.
          </p>
        </div>

        {/* Contact channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {channels.map((c) => (
            <a key={c.label} href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`${c.bg} rounded-2xl p-6 border border-transparent
                          hover:border-[#E5E7EB] hover:-translate-y-1
                          hover:shadow-[0_12px_32px_rgba(30,58,95,0.10)]
                          transition-all duration-200 block`}>
              <div className="text-3xl mb-4">{c.icon}</div>
              <div className="text-[0.65rem] font-bold uppercase tracking-wider mb-1"
                   style={{ color: c.color }}>
                {c.label}
              </div>
              <div className="font-display font-bold text-[#1F2937] text-base mb-1">{c.title}</div>
              <div className="text-[0.75rem] text-[#6B7280] mb-3">{c.sub}</div>
              <div className="font-bold text-[0.85rem]" style={{ color: c.color }}>{c.value}</div>
            </a>
          ))}
        </div>

        {/* Company info */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8">
          <h2 className="font-display font-bold text-[#1F2937] text-lg mb-6">Company Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#4B5563]">
            <div>
              <div className="font-semibold text-[#1F2937] mb-1">Legal Name</div>
              <div>Ebizco Australia Pty Ltd</div>
            </div>
            <div>
              <div className="font-semibold text-[#1F2937] mb-1">ABN</div>
              <div>44 091 466 858</div>
            </div>
            <div>
              <div className="font-semibold text-[#1F2937] mb-1">Email</div>
              <a href="mailto:admin@ebizco.com.au"
                className="text-[#1E3A5F] hover:underline">
                admin@ebizco.com.au
              </a>
            </div>
            <div>
              <div className="font-semibold text-[#1F2937] mb-1">Phone / WhatsApp</div>
              <a href="tel:+61412783132" className="text-[#1E3A5F] hover:underline">
                +61 412 783 132
              </a>
            </div>
            <div>
              <div className="font-semibold text-[#1F2937] mb-1">Support Hours</div>
              <div>Monday – Friday, 8:00 am – 6:00 pm AEST</div>
            </div>
            <div>
              <div className="font-semibold text-[#1F2937] mb-1">Website</div>
              <a href="https://ebizco.com.au" target="_blank" rel="noopener noreferrer"
                className="text-[#1E3A5F] hover:underline">
                ebizco.com.au
              </a>
            </div>
          </div>
        </div>

      </div>
    </PageShell>
  )
}