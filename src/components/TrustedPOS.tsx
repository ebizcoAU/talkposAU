// src/components/TrustedPOS.tsx — ATO Compliance section

const steps = [
  {
    n: '01', icon: '🔐',
    title: 'Every transaction fingerprinted',
    desc: 'A cryptographic hash links each transaction to the previous one. Change one number and the entire chain breaks — making tampering impossible and provable.',
  },
  {
    n: '02', icon: '📊',
    title: 'Compliance dashboard',
    desc: 'One glance: all transactions verified, voids have reason codes, cash reconciled daily, GST collected matches your sales. Always audit-ready.',
  },
  {
    n: '03', icon: '📄',
    title: 'ATO report on demand',
    desc: 'One tap generates a PDF audit report your accountant or the ATO can independently verify. No preparation needed, no stress.',
  },
]

const chain = [
  { id: '1042', amt: '$24.50', hash: 'a1b2c3…' },
  { id: '1043', amt: '$18.20', hash: 'd4e5f6…', linked: true },
  { id: '1044', amt: '$32.80', hash: 'g7h8i9…', linked: true },
]

const dashboard = [
  { icon: '✓', text: 'All transactions have valid hash chain', color: '#2E7D32' },
  { icon: '✓', text: 'All voids have reason codes',            color: '#2E7D32' },
  { icon: '✓', text: 'Cash reconciled today',                 color: '#2E7D32' },
  { icon: '✓', text: 'GST collected matches sales',           color: '#2E7D32' },
]

export default function TrustedPOS() {
  return (
    <section id="compliance" className="section-pad bg-[#F8F9FA]">
      <div className="max-w-[1100px] mx-auto">

        <div className="text-center max-w-[600px] mx-auto reveal mb-14">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#F4A261] mb-3">
            Trusted POS · ATO Compliance
          </p>
          <h2 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.9rem)] tracking-tight
                         leading-tight text-[#1F2937] mb-4">
            Sleep soundly.{' '}
            <span className="text-[#1E3A5F]">You're ATO-ready.</span>
          </h2>
          <div className="bg-[#FEF2F2] border border-red-200 rounded-xl px-4 py-3 text-sm text-left">
            <span className="font-bold text-[#DC2626]">⚠️ Important: </span>
            <span className="text-[#4B5563]">The ATO is aggressively targeting Electronic Sales Suppression Tools (ESSTs).
            Fines are massive. Jail time is possible. Your POS must be provably tamper-proof.</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start reveal">

          {/* Left — steps */}
          <div>
            <div className="space-y-6 mb-8">
              {steps.map((s) => (
                <div key={s.n} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#1E3A5F] flex items-center
                                  justify-center text-lg shadow-[0_4px_12px_rgba(30,58,95,0.25)]">
                    {s.icon}
                  </div>
                  <div>
                    <div className="text-[0.68rem] font-black tracking-[0.15em] text-[#4B5563] mb-0.5">{s.n}</div>
                    <div className="font-display font-bold text-[#1F2937] mb-1">{s.title}</div>
                    <p className="text-[0.83rem] text-[#4B5563] leading-relaxed font-light">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Hash chain visualisation */}
            <div className="bg-[#1A1A2E] rounded-xl p-5 border border-white/10">
              <div className="text-[0.68rem] text-white/48 uppercase tracking-widest mb-3 font-bold">
                Immutable audit chain
              </div>
              <div className="space-y-2">
                {chain.map((t, i) => (
                  <div key={t.id} className="flex items-center gap-3">
                    {t.linked && <div className="text-white/38 text-xs pl-1">↳</div>}
                    {!t.linked && <div className="w-4 flex-shrink-0" />}
                    <div className="flex-1 bg-white/[0.08] border border-white/[0.16] rounded-lg
                                    px-3 py-2 flex items-center justify-between">
                      <span className="text-white/60 text-[0.7rem] font-mono">Txn #{t.id}: {t.amt}</span>
                      <span className="text-[#F4A261] text-[0.65rem] font-mono">🔐 {t.hash}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 text-[0.65rem] text-[#2E7D32] font-semibold">
                ✓ Chain intact — 0 gaps — tamper-proof
              </div>
            </div>
          </div>

          {/* Right — compliance dashboard card */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden
                          shadow-[0_12px_40px_rgba(30,58,95,0.08)]">
            <div className="bg-[#1E3A5F] px-6 py-4 flex items-center justify-between">
              <div>
                <div className="text-white font-display font-black text-sm">Compliance Dashboard</div>
                <div className="text-white/70 text-xs">March 10, 2026</div>
              </div>
              <div className="text-right">
                <div className="text-[#4ADE80] font-display font-black text-2xl leading-none">100%</div>
                <div className="text-[#4ADE80] text-[0.68rem] font-bold">AUDIT READY</div>
              </div>
            </div>

            <div className="p-6 space-y-3">
              {dashboard.map((d) => (
                <div key={d.text} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2E7D32]/10 border border-[#2E7D32]/20
                                  flex items-center justify-center text-xs font-bold text-[#2E7D32]
                                  flex-shrink-0">
                    {d.icon}
                  </div>
                  <span className="text-[0.83rem] text-[#1F2937]">{d.text}</span>
                </div>
              ))}
            </div>

            <div className="px-6 pb-4 pt-2 text-[0.72rem] text-[#4B5563] border-t border-[#E5E7EB]
                            flex items-center justify-between">
              <span>Last backup: 2 minutes ago</span>
              <span className="text-[#2E7D32] font-semibold">🔒 Encrypted</span>
            </div>

            <div className="px-6 pb-5 grid grid-cols-2 gap-3">
              <button className="py-2.5 rounded-xl bg-[#1E3A5F] text-white text-[0.75rem] font-bold
                                 hover:bg-[#162d4a] transition-colors">
                Download ATO Report
              </button>
              <button className="py-2.5 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB] text-[#4B5563]
                                 text-[0.75rem] font-bold hover:bg-[#F0F0F0] transition-colors">
                Export for Accountant
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}