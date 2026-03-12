// src/app/compliance/page.tsx
import PageShell from '@/components/PageShell'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Compliance Statement — TalkPOS Australia',
  description: 'ATO compliance, GST, STP payroll, and data security statement for TalkPOS Australia.',
}

const pillars = [
  {
    icon: '🏛️',
    title: 'ATO-Ready Audit Trail',
    color: '#1E3A5F',
    bg: 'bg-[#EFF6FF]',
    points: [
      'Every transaction is recorded with a tamper-evident hash chain',
      'Records cannot be deleted or backdated',
      'Meets the ATO\'s requirement for 5-year electronic record retention',
      'Export full transaction history as CSV or PDF at any time',
    ],
  },
  {
    icon: '📊',
    title: 'GST Compliance',
    color: '#2E7D32',
    bg: 'bg-[#F0FDF4]',
    points: [
      'Automatic GST calculation on all taxable sales',
      'Support for GST-free items (e.g. basic food)',
      'Monthly and quarterly BAS-ready summaries',
      'Compatible with Xero, MYOB and QuickBooks exports',
    ],
  },
  {
    icon: '👥',
    title: 'Single Touch Payroll (STP)',
    color: '#7C3AED',
    bg: 'bg-[#F5F3FF]',
    points: [
      'STP Phase 2 compliant reporting',
      'Automatic submission to the ATO on each pay run',
      'Supports casual, part-time and full-time employees',
      'Digital payslips sent to staff automatically',
    ],
  },
  {
    icon: '🔐',
    title: 'Data Security',
    color: '#DC2626',
    bg: 'bg-[#FEF2F2]',
    points: [
      'TLS 1.3 encryption for all data in transit',
      'AES-256 encryption for data at rest',
      'Role-based access controls per staff member',
      'Regular penetration testing and security audits',
    ],
  },
  {
    icon: '💳',
    title: 'Payment Security (PCI DSS)',
    color: '#F4A261',
    bg: 'bg-[#FFF7ED]',
    points: [
      'Card payments processed by Stripe (PCI DSS Level 1) or Tyro',
      'TalkPOS never stores raw card numbers',
      'PayID payments settled directly via the NPP',
      'Chargeback and dispute management tools included',
    ],
  },
  {
    icon: '📋',
    title: 'Privacy Act 1988 (Cth)',
    color: '#0891B2',
    bg: 'bg-[#ECFEFF]',
    points: [
      'Compliant with the Australian Privacy Principles (APPs)',
      'Data stored in Australian AWS data centres',
      'Data breach notification procedures in place',
      'Customers may request data access or deletion at any time',
    ],
  },
]

export default function CompliancePage() {
  return (
    <PageShell>
      <div className="max-w-[1100px] mx-auto px-5 py-16">

        {/* Header */}
        <div className="text-center max-w-[620px] mx-auto mb-14">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#F4A261] mb-3">Legal</p>
          <h1 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.9rem)] tracking-tight
                         leading-tight text-[#1F2937] mb-4">
            Compliance Statement
          </h1>
          <p className="text-[#4B5563] font-light leading-relaxed">
            TalkPOS Australia is built from the ground up for Australian regulatory requirements.
            Here's exactly how we keep your business compliant.
          </p>
          <p className="text-[#9CA3AF] text-xs mt-3">
            Ebizco Australia Pty Ltd (ABN 44 091 466 858) — Last reviewed March 2026
          </p>
        </div>

        {/* Compliance pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pillars.map((p) => (
            <div key={p.title}
              className={`${p.bg} rounded-2xl p-6 border border-transparent
                          hover:border-[#E5E7EB] hover:-translate-y-1
                          hover:shadow-[0_12px_32px_rgba(30,58,95,0.08)]
                          transition-all duration-200`}>
              <div className="text-3xl mb-3">{p.icon}</div>
              <div className="font-display font-bold text-base mb-4" style={{ color: p.color }}>
                {p.title}
              </div>
              <ul className="space-y-2.5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-[0.80rem] text-[#4B5563] leading-relaxed">
                    <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-current opacity-40"
                          style={{ color: p.color }} />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Download / contact */}
        <div className="bg-[#1E3A5F] rounded-2xl p-8 text-center text-white">
          <h2 className="font-display font-bold text-xl mb-2">Need a compliance certificate or data processing agreement?</h2>
          <p className="text-white/70 text-sm font-light mb-6 max-w-lg mx-auto">
            Enterprise customers can request a signed DPA, penetration test summary, or ATO lodgement confirmation.
            Contact us and we'll respond within 1 business day.
          </p>
          <a href="mailto:admin@ebizco.com.au"
            className="inline-flex items-center gap-2 bg-[#F4A261] text-[#1A1A2E] font-bold
                       px-6 py-3 rounded-xl hover:-translate-y-0.5 transition-all text-sm">
            ✉️ Request compliance documents
          </a>
        </div>

      </div>
    </PageShell>
  )
}