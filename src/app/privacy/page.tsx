// src/app/privacy/page.tsx
import PageShell from '@/components/PageShell'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — TalkPOS Australia',
  description: 'How TalkPOS Australia collects, uses and protects your personal information.',
}

const sections = [
  {
    title: '1. Who We Are',
    body: `TalkPOS Australia is a product of Ebizco Australia Pty Ltd (ABN 44 091 466 858). We provide point-of-sale software and related services to Australian hospitality and retail businesses. This Privacy Policy explains how we collect, use, disclose and protect personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).`,
  },
  {
    title: '2. Information We Collect',
    body: `We collect information necessary to provide our services, including:
• Business contact details (name, email, phone number, ABN)
• Account credentials (email address and hashed password)
• Transaction data processed through your TalkPOS account
• Device and usage data (IP address, browser type, pages visited)
• Payment information (processed securely via Stripe or Tyro — we do not store card numbers)

We do not collect sensitive information such as health records or government identifiers unless required by law.`,
  },
  {
    title: '3. How We Use Your Information',
    body: `We use your information to:
• Provide, maintain and improve TalkPOS services
• Process transactions and send receipts
• Communicate product updates, support responses and billing notices
• Comply with ATO reporting obligations (GST, STP payroll)
• Detect and prevent fraud or unauthorised access
• Conduct analytics to improve our platform

We do not sell your personal information to third parties.`,
  },
  {
    title: '4. Disclosure to Third Parties',
    body: `We may share information with:
• Payment processors (Stripe, Tyro) for transaction processing
• Cloud infrastructure providers (AWS, Vercel) for hosting
• Accounting software integrations you authorise (e.g. Xero, MYOB)
• The Australian Taxation Office as required by law

All third-party providers are bound by confidentiality obligations and are not permitted to use your data for their own purposes.`,
  },
  {
    title: '5. Data Security',
    body: `We protect your data using industry-standard measures including TLS encryption in transit, AES-256 encryption at rest, immutable audit logs, and role-based access controls. Our local SQLite offline store does not transmit data unless connectivity is available. We conduct regular security reviews and promptly address identified vulnerabilities.`,
  },
  {
    title: '6. Data Retention',
    body: `Transaction records are retained for 7 years to satisfy ATO record-keeping requirements. Account data is retained while your subscription is active and for 12 months after cancellation. You may request earlier deletion of non-statutory data by contacting us.`,
  },
  {
    title: '7. Your Rights',
    body: `You have the right to access, correct or request deletion of your personal information. To exercise these rights, contact us at admin@ebizco.com.au. We will respond within 30 days. If you believe we have breached your privacy, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at oaic.gov.au.`,
  },
  {
    title: '8. Cookies',
    body: `Our website uses essential cookies to maintain your session and preferences. We use analytics cookies (e.g. Google Analytics) to understand how visitors use our site. You may disable cookies in your browser settings; however, some features may not function correctly without them.`,
  },
  {
    title: '9. Changes to This Policy',
    body: `We may update this Privacy Policy from time to time. Material changes will be notified via email or an in-app notice at least 14 days before taking effect. Continued use of TalkPOS after the effective date constitutes acceptance of the updated policy.`,
  },
  {
    title: '10. Contact Us',
    body: `For privacy enquiries or complaints:\n\nEbizco Australia Pty Ltd\nEmail: admin@ebizco.com.au\nPhone: +61 412 783 132\nABN: 44 091 466 858`,
  },
]

export default function PrivacyPage() {
  return (
    <PageShell>
      <div className="max-w-[760px] mx-auto px-5 py-16">

        <div className="mb-12">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#F4A261] mb-3">Legal</p>
          <h1 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.6rem)] tracking-tight
                         leading-tight text-[#1F2937] mb-3">
            Privacy Policy
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