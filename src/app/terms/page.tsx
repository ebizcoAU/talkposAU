// src/app/terms/page.tsx
import PageShell from '@/components/PageShell'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — TalkPOS Australia',
  description: 'Terms and conditions for using TalkPOS Australia.',
}

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: `By creating a TalkPOS account or using our services, you agree to these Terms of Service. If you are accepting on behalf of a business, you represent that you have authority to bind that business. These terms form a legally binding agreement between you and Ebizco Australia Pty Ltd (ABN 44 091 466 858).`,
  },
  {
    title: '2. The Service',
    body: `TalkPOS provides cloud-based point-of-sale software including QR ordering, voice takeaway, payment processing integrations, kitchen display systems, and ATO compliance tools. We reserve the right to modify or discontinue any feature with reasonable notice.`,
  },
  {
    title: '3. Subscription & Billing',
    body: `• Plans are billed monthly in Australian dollars (AUD) inclusive of GST
• Solo: $39/month — 500 transactions, 1 venue
• Pro: $79/month — unlimited transactions, up to 3 venues
• Enterprise: custom pricing
• Billing occurs on the same day each month. Failed payments may result in service suspension after 7 days.
• You may cancel at any time. Cancellation takes effect at the end of the current billing period. No refunds are issued for partial months.`,
  },
  {
    title: '4. Free Trial',
    body: `New accounts receive a 14-day free trial with full Pro features. No credit card is required to start. At the end of the trial, you must select a paid plan to continue using the service. Unused trial days are not transferable.`,
  },
  {
    title: '5. Your Responsibilities',
    body: `You are responsible for:
• Keeping your account credentials secure
• Ensuring all transaction data is accurate for tax reporting purposes
• Complying with applicable Australian laws including GST obligations and STP payroll reporting
• Not using the service for unlawful purposes or in ways that harm others`,
  },
  {
    title: '6. Data Ownership',
    body: `You own your business data. We process it on your behalf. Upon cancellation, you may export your data in CSV format within 60 days. After that, data is deleted in accordance with our Privacy Policy and statutory retention obligations.`,
  },
  {
    title: '7. Uptime & Support',
    body: `We target 99.5% monthly uptime for core transaction processing. Planned maintenance will be notified at least 24 hours in advance. Support is available via email and WhatsApp, Monday to Friday 8am–6pm AEST, with a target response time of 2 hours.`,
  },
  {
    title: '8. Limitation of Liability',
    body: `To the maximum extent permitted by Australian Consumer Law, our total liability for any claim arising from the service is limited to the amount you paid in the 3 months preceding the event giving rise to the claim. We are not liable for indirect, incidental or consequential losses.`,
  },
  {
    title: '9. Intellectual Property',
    body: `TalkPOS software, branding, and documentation are the intellectual property of Ebizco Australia Pty Ltd. You are granted a non-exclusive, non-transferable licence to use the service for your business operations. You may not reverse engineer, copy, or resell any part of the service.`,
  },
  {
    title: '10. Changes to These Terms',
    body: `We may update these terms from time to time. Material changes will be communicated by email at least 14 days before taking effect. Continued use of TalkPOS after the effective date constitutes acceptance of the updated terms.`,
  },
  {
    title: '11. Governing Law',
    body: `These terms are governed by the laws of New South Wales, Australia. Any disputes will be subject to the exclusive jurisdiction of the courts of New South Wales.`,
  },
  {
    title: '12. Contact',
    body: `Ebizco Australia Pty Ltd\nEmail: admin@ebizco.com.au\nPhone: +61 412 783 132\nABN: 44 091 466 858`,
  },
]

export default function TermsPage() {
  return (
    <PageShell>
      <div className="max-w-[760px] mx-auto px-5 py-16">

        <div className="mb-12">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#F4A261] mb-3">Legal</p>
          <h1 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.6rem)] tracking-tight
                         leading-tight text-[#1F2937] mb-3">
            Terms of Service
          </h1>
          <p className="text-[#6B7280] text-sm">Last updated: March 2026 — Ebizco Australia Pty Ltd (ABN 44 091 466 858)</p>
        </div>

        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.title} className="border-b border-[#E5E7EB] pb-10 last:border-0">
              <h2 className="font-display font-bold text-[#1F2937] text-lg mb-3">{s.title}</h2>
              <p className="text-[0.88rem] text-[#4B5563] leading-relaxed whitespace-pre-line">{s.body}</p>
            </div>
          ))}
        </div>

      </div>
    </PageShell>
  )
}