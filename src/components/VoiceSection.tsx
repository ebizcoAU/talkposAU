// src/components/VoiceSection.tsx — AU Voice Ordering

const commands = [
  {
    wake: '📞 Automated order',
    text: '"Two large flat whites and a ham and cheese croissant"',
    tags: [
      { label: 'Voice Order',       style: 'bg-[#F4A261]/10 text-[#C2410C] border-[#F4A261]/30' },
      { label: 'Payment link sent', style: 'bg-[#2E7D32]/10 text-[#2E7D32] border-[#2E7D32]/20' },
    ],
  },
  {
    wake: '📞 Automated order',
    text: '"Three chicken schnitzels, two chips, one gravy thanks"',
    tags: [
      { label: 'Voice Order',      style: 'bg-[#F4A261]/10 text-[#C2410C] border-[#F4A261]/30' },
      { label: 'Kitchen notified', style: 'bg-[#1E3A5F]/10 text-[#1E3A5F] border-[#1E3A5F]/20' },
    ],
  },
  {
    wake: '📞 Automated order',
    text: '"One large soy latte, one avo smash on sourdough"',
    tags: [
      { label: 'Voice Order',  style: 'bg-[#F4A261]/10 text-[#C2410C] border-[#F4A261]/30' },
      { label: 'Table ready',  style: 'bg-[#2E7D32]/10 text-[#2E7D32] border-[#2E7D32]/20' },
    ],
  },
]

const chips = [
  { label: '📞 Voice',         style: 'bg-[#F4A261]/15 border-[#F4A261]/30 text-[#C2410C]' },
  { label: '☕ 2× Flat White', style: 'bg-[#1E3A5F]/8 border-[#1E3A5F]/20 text-[#1E3A5F]' },
  { label: '🥑 1× Avo Toast',  style: 'bg-[#2E7D32]/8 border-[#2E7D32]/20 text-[#2E7D32]' },
  { label: '💳 SMS link sent', style: 'bg-[#2E7D32]/8 border-[#2E7D32]/20 text-[#2E7D32]' },
]

const comparison = [
  { label: 'Interaction',     old: '"Press 1 for menu, press 2…"',  neu: 'Speak naturally' },
  { label: 'Cost',            old: '$0.05–0.10/min',                 neu: '$0 (native ASR)' },
  { label: 'Works offline?',  old: '✗ Cloud-dependent',              neu: '✓ Always' },
  { label: 'Training needed', old: 'Yes — staff & customers',        neu: 'Everyone can talk' },
]

export default function VoiceSection() {
  return (
    <section id="voice" className="section-pad bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start reveal">

          {/* Left — copy + command examples */}
          <div>
            <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#F4A261] mb-3">
              Voice Takeaway
            </p>
            <h2 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.9rem)] tracking-tight
                           leading-tight mb-4 text-[#1F2937]">
              Phone orders that don't need{' '}
              <span className="text-[#1E3A5F]">a phone person.</span>
            </h2>
            <p className="text-[#4B5563] font-light leading-relaxed mb-2">
              When you're flat out making coffee, the phone rings.
              With TalkPOS, your customer speaks naturally to their own phone —
              the order appears on your screen. No IVR hell. No staff needed.
            </p>
            <div className="bg-[#FFF7ED] border border-[#F4A261]/30 rounded-xl px-4 py-3 mb-8 text-sm">
              <span className="font-semibold text-[#C2410C]">How it works: </span>
              <span className="text-[#4B5563]">Customer calls → hears "Say 'order' to place an automated order" →
              speaks naturally to their own phone → order queued → SMS payment link sent.</span>
            </div>

            <p className="font-bold text-sm mb-4 text-[#1F2937]">Example orders:</p>
            <div className="space-y-3">
              {commands.map((c, i) => (
                <div key={i}
                  className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl p-4
                             hover:border-[#F4A261]/50 transition-colors">
                  <div className="text-xs text-[#F4A261] font-bold tracking-wide mb-1">{c.wake}</div>
                  <div className="text-[0.85rem] text-[#1F2937] italic font-light mb-2">{c.text}</div>
                  <div className="flex gap-1.5 flex-wrap">
                    {c.tags.map((t) => (
                      <span key={t.label}
                        className={`text-[0.68rem] px-2 py-0.5 rounded-full font-semibold border ${t.style}`}>
                        {t.label}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — live demo card + comparison table */}
          <div className="space-y-5">
            {/* Demo card */}
            <div className="bg-[#1A1A2E] border border-white/10 rounded-2xl overflow-hidden
                            shadow-[0_24px_60px_rgba(30,58,95,0.2)]">
              <div className="bg-[#1E3A5F] px-5 py-3.5 flex items-center gap-3">
                <div className="w-8 h-8 bg-[#F4A261] rounded-full flex items-center justify-center
                                text-sm mic-ring flex-shrink-0">
                  📞
                </div>
                <div>
                  <div className="font-bold text-[0.82rem] text-white">TalkPOS Voice</div>
                  <div className="text-xs text-[#4ADE80] font-semibold">🟢 Listening…</div>
                </div>
              </div>

              <div className="px-5 py-4 bg-white/[0.05] border-b border-white/[0.16] min-h-[80px]">
                <div className="text-[0.65rem] text-white/48 uppercase tracking-widest mb-1.5">
                  Customer speaking
                </div>
                <div className="text-[0.9rem] italic font-light text-white">
                  "Two large flat whites and a ham and cheese croissant"
                  <span className="inline-block w-0.5 h-3.5 bg-[#F4A261] ml-0.5 animate-blink align-middle" />
                </div>
              </div>

              <div className="px-5 py-4">
                <div className="text-[0.65rem] text-white/48 uppercase tracking-widest mb-3">
                  Recognised
                </div>
                <div className="flex flex-wrap gap-2">
                  {chips.map((c) => (
                    <span key={c.label}
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${c.style}`}>
                      {c.label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mx-5 mb-4 bg-[#2E7D32]/10 border border-[#2E7D32]/25 rounded-xl
                              px-3.5 py-2.5 flex items-center gap-3">
                <div className="flex-1">
                  <div className="text-[0.65rem] text-white/60 font-semibold mb-1">Auto-confirm in 5s or tap to verify</div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#2E7D32] rounded-full animate-countdown w-full" />
                  </div>
                </div>
                <div className="text-xs text-[#4ADE80] font-semibold whitespace-nowrap">✓ Confirm</div>
              </div>
            </div>

            {/* Comparison table */}
            <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-2xl overflow-hidden">
              <div className="grid grid-cols-3 bg-[#E5E7EB]/60 border-b border-[#E5E7EB]">
                <div className="px-3 py-2.5 text-[0.68rem] font-black text-[#4B5563] uppercase tracking-wide"></div>
                <div className="px-3 py-2.5 text-[0.68rem] font-black text-[#DC2626]/70 uppercase tracking-wide text-center">Traditional IVR</div>
                <div className="px-3 py-2.5 text-[0.68rem] font-black text-[#1E3A5F] uppercase tracking-wide text-center">TalkPOS Voice</div>
              </div>
              {comparison.map((row, i) => (
                <div key={row.label}
                  className={`grid grid-cols-3 ${i < comparison.length - 1 ? 'border-b border-[#E5E7EB]' : ''}`}>
                  <div className="px-3 py-2.5 text-[0.72rem] text-[#4B5563] font-medium">{row.label}</div>
                  <div className="px-3 py-2.5 text-[0.7rem] text-[#DC2626]/70 text-center">{row.old}</div>
                  <div className="px-3 py-2.5 text-[0.7rem] text-[#2E7D32] font-semibold text-center">{row.neu}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}