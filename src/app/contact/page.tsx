// src/app/contact/page.tsx
import PageShell from '@/components/PageShell'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us — TalkPOS Australia',
  description: 'Get in touch with the TalkPOS Australia support team.',
}

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
            Questions about TalkPOS or the Canberra pilot? Email us.
          </p>
        </div>

        {/* Email */}
        <a href="mailto:admin@ebizco.com.au"
          className="block bg-[#EFF6FF] rounded-2xl p-6 border border-transparent mb-14 text-center
                     hover:border-[#E5E7EB] hover:-translate-y-1
                     hover:shadow-[0_12px_32px_rgba(30,58,95,0.10)] transition-all duration-200">
          <div className="text-3xl mb-3">✉️</div>
          <div className="font-display font-bold text-[#1F2937] text-base mb-1">Send us an email</div>
          <div className="text-[0.8rem] text-[#6B7280] mb-3">A real person will reply.</div>
          <div className="font-bold text-[0.95rem] text-[#1E3A5F]">admin@ebizco.com.au</div>
        </a>

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