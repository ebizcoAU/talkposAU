// src/components/Payroll.tsx — AU version (STP + payroll)

const insItems = [
  { label: 'Super (Employer)',       employee: '—',    employer: '11%',   color: '#1E3A5F' },
  { label: 'PAYG Withholding',       employee: 'Varies', employer: 'Remit', color: '#F4A261' },
  { label: 'WorkCover (VIC)',        employee: '—',    employer: '~1.5%', color: '#2E7D32' },
]

const features = [
  { icon: '🧮', color: '#1E3A5F', title: 'Auto-calculate pay',     desc: 'Enter gross pay — PAYG withholding, superannuation, and WorkCover calculated automatically using current ATO rates.' },
  { icon: '📄', color: '#F4A261', title: 'Digital payslips',        desc: 'Export PDF payslips, send via email. Staff sign off electronically on their phone.' },
  { icon: '📡', color: '#2E7D32', title: 'STP Phase 2 — direct to ATO', desc: 'Single Touch Payroll data formatted and sent directly to the ATO from TalkPOS. No Xero, no MYOB, no extra subscriptions needed.' },
  { icon: '📅', color: '#1E3A5F', title: 'Roster & timesheet',      desc: 'Set shifts, track hours, handle leave. Weekly totals feed directly into your payrun — no double entry.' },
]

export default function Payroll() {
  return (
    <section id="payroll" className="section-pad bg-[#F8F9FA]">
      <div className="max-w-[1100px] mx-auto">

        <div className="text-center max-w-[580px] mx-auto reveal mb-14">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#F4A261] mb-3">
            Payroll & STP
          </p>
          <h2 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.9rem)] tracking-tight
                         leading-tight text-[#1F2937] mb-4">
            Payroll that talks to the ATO.
          </h2>
          <p className="text-[#4B5563] font-light leading-relaxed">
            Staff costs are your biggest expense. TalkPOS handles super, PAYG, and STP reporting
            so your end-of-quarter isn't a scramble.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 reveal">

          {/* Left — deductions table + features */}
          <div className="space-y-5">
            {/* AU deductions table */}
            <div className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden
                            shadow-[0_4px_16px_rgba(30,58,95,0.06)]">
              <div className="bg-[#1E3A5F] px-5 py-3">
                <div className="text-white font-display font-black text-sm">AU Employer Obligations</div>
                <div className="text-white/60 text-xs">Auto-calculated on every payrun</div>
              </div>
              <div className="divide-y divide-[#E5E7EB]">
                <div className="grid grid-cols-3 bg-[#F8F9FA] px-5 py-2">
                  <div className="text-[0.68rem] font-black text-[#4B5563] uppercase tracking-wide">Obligation</div>
                  <div className="text-[0.68rem] font-black text-[#4B5563] uppercase tracking-wide text-center">Employee</div>
                  <div className="text-[0.68rem] font-black text-[#4B5563] uppercase tracking-wide text-center">Employer</div>
                </div>
                {insItems.map((item) => (
                  <div key={item.label} className="grid grid-cols-3 px-5 py-3 items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                      <span className="text-[0.78rem] text-[#1F2937] font-medium">{item.label}</span>
                    </div>
                    <div className="text-[0.78rem] font-bold text-[#4B5563] text-center">{item.employee}</div>
                    <div className="text-[0.78rem] font-bold text-center" style={{ color: item.color }}>{item.employer}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* STP callout */}
            <div className="bg-[#EFF6FF] border border-[#1E3A5F]/15 rounded-2xl p-5 flex gap-4">
              <div className="text-3xl flex-shrink-0">📡</div>
              <div>
                <div className="font-bold text-[#1E3A5F] text-sm mb-1">Single Touch Payroll (STP)</div>
                <p className="text-[0.8rem] text-[#4B5563] font-light leading-relaxed">
                  Every payrun automatically generates STP Phase 2 data and reports
                  directly to the ATO. No third-party payroll software needed.
                  Your obligations are met from inside TalkPOS.
                </p>
              </div>
            </div>
          </div>

          {/* Right — feature cards */}
          <div className="grid grid-cols-1 gap-4">
            {features.map((f) => (
              <div key={f.title}
                className="flex gap-4 bg-white border border-[#E5E7EB] rounded-2xl p-5
                           hover:border-[#1E3A5F]/20 hover:shadow-[0_4px_16px_rgba(30,58,95,0.07)]
                           transition-all">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg
                                flex-shrink-0 border"
                     style={{ background: `${f.color}12`, borderColor: `${f.color}30` }}>
                  {f.icon}
                </div>
                <div>
                  <div className="font-bold text-[0.88rem] mb-1 text-[#1F2937]">{f.title}</div>
                  <p className="text-[0.78rem] text-[#4B5563] font-light leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}