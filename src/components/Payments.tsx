// src/components/Payments.tsx — AU Payment methods

const methods = [
  { icon: '💳', method: 'Visa / Mastercard', fee: '1.6%',       exp: 'Tap or enter card details',        highlight: false },
  { icon: '🍎', method: 'Apple Pay',          fee: '1.6%',       exp: 'One touch on iPhone',              highlight: false },
  { icon: '📱', method: 'Google Pay',          fee: '1.6%',       exp: 'One touch on Android',             highlight: false },
  { icon: '🏦', method: 'PayID',              fee: '~50c flat',  exp: 'Instant bank transfer',            highlight: true  },
  { icon: '🛒', method: 'Afterpay (BNPL)',    fee: '4–6%',       exp: 'Pay in 4 instalments',             highlight: false },
]

export default function Payments() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-[1100px] mx-auto">

        <div className="grid md:grid-cols-2 gap-16 items-center reveal">

          {/* Left — copy */}
          <div>
            <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#F4A261] mb-3">
              Payments
            </p>
            <h2 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.9rem)] tracking-tight
                           leading-tight text-[#1F2937] mb-4">
              Let customers{' '}
              <span className="text-[#1E3A5F]">pay their way.</span>
            </h2>
            <p className="text-[#4B5563] font-light leading-relaxed mb-6">
              Australia has fragmented payments. Some want Apple Pay, some want card, some prefer
              a bank transfer. One payment link covers all of them — customer chooses what suits them.
            </p>

            {/* Smart surcharging demo */}
            <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-2xl p-5">
              <div className="text-[0.7rem] font-black text-[#4B5563] uppercase tracking-wide mb-3">
                Smart Surcharging — ATO Compliant
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-[#E5E7EB]">
                  <span className="text-[0.85rem] text-[#1F2937] font-medium">Order Total</span>
                  <span className="font-bold text-[#1F2937]">$24.50</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#E5E7EB]">
                  <span className="text-[0.85rem] text-[#4B5563]">💳 Card (+1.6% surcharge)</span>
                  <span className="font-bold text-[#4B5563]">$24.89</span>
                </div>
                <div className="flex justify-between items-center py-2 bg-[#F0FDF4] rounded-lg px-3 -mx-1">
                  <div>
                    <span className="text-[0.85rem] text-[#2E7D32] font-semibold">🏦 PayID</span>
                    <span className="ml-2 text-[0.67rem] bg-[#2E7D32]/10 text-[#2E7D32] border border-[#2E7D32]/20
                                     px-2 py-0.5 rounded-full font-bold">Save $0.39</span>
                  </div>
                  <span className="font-bold text-[#2E7D32]">$24.50</span>
                </div>
              </div>
              <p className="text-[0.72rem] text-[#4B5563] mt-3 leading-relaxed">
                Surcharge is automatically calculated and displayed. Customers see both prices before choosing.
                Fully ATO-compliant.
              </p>
            </div>

            {/* PayID savings callout */}
            <div className="mt-4 bg-[#EFF6FF] border border-[#1E3A5F]/15 rounded-xl p-4 flex items-start gap-3">
              <div className="text-2xl flex-shrink-0">💡</div>
              <div>
                <div className="font-bold text-[#1E3A5F] text-sm mb-1">PayID saves serious money</div>
                <p className="text-[0.8rem] text-[#4B5563] font-light">
                  On $5,000/week in turnover, switching card transactions to PayID saves
                  <strong className="text-[#2E7D32]"> ~$750/month</strong> in fees.
                  That's over $9,000/year straight back to you.
                </p>
              </div>
            </div>
          </div>

          {/* Right — payment methods table */}
          <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-2xl overflow-hidden
                          shadow-[0_8px_32px_rgba(30,58,95,0.07)]">
            <div className="bg-[#1E3A5F] px-5 py-3.5">
              <div className="text-white font-display font-black text-sm">Payment Options</div>
              <div className="text-white/60 text-xs">One link · Customer chooses</div>
            </div>

            <div className="divide-y divide-[#E5E7EB]">
              {/* Table header */}
              <div className="grid grid-cols-3 bg-[#E5E7EB]/60 px-5 py-2.5">
                <div className="text-[0.68rem] font-black text-[#4B5563] uppercase tracking-wide">Method</div>
                <div className="text-[0.68rem] font-black text-[#4B5563] uppercase tracking-wide text-center">Fee</div>
                <div className="text-[0.68rem] font-black text-[#4B5563] uppercase tracking-wide text-center">Experience</div>
              </div>

              {methods.map((m) => (
                <div key={m.method}
                  className={`grid grid-cols-3 px-5 py-3.5 items-center
                              ${m.highlight ? 'bg-[#F0FDF4]' : 'bg-white'}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-base">{m.icon}</span>
                    <span className={`text-[0.78rem] font-medium ${m.highlight ? 'text-[#2E7D32] font-bold' : 'text-[#1F2937]'}`}>
                      {m.method}
                      {m.highlight && <span className="ml-1.5 text-[0.64rem] bg-[#2E7D32]/10 border border-[#2E7D32]/20 text-[#2E7D32] px-1.5 py-0.5 rounded-full font-bold">Best value</span>}
                    </span>
                  </div>
                  <div className={`text-[0.78rem] font-bold text-center ${m.highlight ? 'text-[#2E7D32]' : 'text-[#4B5563]'}`}>
                    {m.fee}
                  </div>
                  <div className="text-[0.72rem] text-[#4B5563] text-center">{m.exp}</div>
                </div>
              ))}
            </div>

            <div className="px-5 py-4 bg-[#F8F4EF] border-t border-[#E5E7EB]">
              <div className="text-[0.72rem] text-[#4B5563] leading-relaxed">
                Payment gateway fees apply separately.
                Supported gateways: Stripe, Pin Payments, Tyro, PayID.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}