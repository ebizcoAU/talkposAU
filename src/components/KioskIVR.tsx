// src/components/KioskIVR.tsx — Multimodal Voice + Screen Ordering Station

// Simulates a live ordering conversation — voice drives the screen in real time
const conversation = [
  {
    step: 1,
    speaker: 'ivr',
    label: 'TalkPOS',
    text: 'Welcome! What would you like to order today?',
    screen: null,
    screenNote: 'Menu displayed on screen',
  },
  {
    step: 2,
    speaker: 'customer',
    label: 'Customer',
    text: 'I want 2 hamburgers and 2 Cokes please.',
    screen: [
      { qty: 2, item: 'Hamburger', price: 12.50 },
      { qty: 2, item: 'Coke',      price: 4.00  },
    ],
    screenNote: 'Screen updates instantly as customer speaks',
  },
  {
    step: 3,
    speaker: 'ivr',
    label: 'TalkPOS',
    text: 'Got it — 2 Hamburgers and 2 Cokes. Your total is $33.00. Would you like to pay by card, Apple Pay, or PayID?',
    screen: [
      { qty: 2, item: 'Hamburger', price: 12.50 },
      { qty: 2, item: 'Coke',      price: 4.00  },
    ],
    screenNote: 'Payment options appear on screen',
  },
  {
    step: 4,
    speaker: 'customer',
    label: 'Customer',
    text: 'Can I pay cash?',
    screen: null,
    screenNote: null,
  },
  {
    step: 5,
    speaker: 'ivr',
    label: 'TalkPOS',
    text: 'Sorry, we don\'t accept cash at this station — card, Apple Pay or PayID only. Tap your card or phone to pay.',
    screen: null,
    screenNote: 'Tap-to-pay prompt shown on screen',
  },
  {
    step: 6,
    speaker: 'customer',
    label: 'Customer',
    text: 'Ok, Apple Pay.',
    screen: null,
    screenNote: null,
  },
  {
    step: 7,
    speaker: 'ivr',
    label: 'TalkPOS',
    text: 'Payment confirmed — thank you! Your order number is 42. We\'ll call your number when it\'s ready.',
    screen: null,
    screenNote: 'Order receipt shown on screen',
  },
]

const capabilities = [
  {
    icon: '🎙️',
    title: 'Voice drives the screen',
    desc: 'As the customer speaks, the screen updates in real time. They see exactly what they\'re ordering — no surprises at payment.',
  },
  {
    icon: '👆',
    title: 'Touch works too — always',
    desc: 'Customer can tap to add, remove or modify at any point. Voice and touch work simultaneously — never one or the other.',
  },
  {
    icon: '🔁',
    title: 'IVR confirms before charging',
    desc: 'The AI reads the order back, states the total, and asks how they\'d like to pay — before anything is processed.',
  },
  {
    icon: '💳',
    title: 'Payment guided by voice',
    desc: 'Card, Apple Pay, Google Pay, PayID. The IVR guides the customer through payment. No cash means no cash-handling risk.',
  },
  {
    icon: '🌐',
    title: 'Multilingual',
    desc: 'Serves in English, Vietnamese, Mandarin and more. Detects language automatically — no customer has to press a language button.',
  },
  {
    icon: '♿',
    title: 'Accessible by design',
    desc: 'Voice means no fine motor skills required. Screen means no hearing required. The most inclusive ordering experience available.',
  },
]

const stations = [
  { id: 1, type: 'Voice + Screen', icon: '🖥️', status: 'Confirming order', statusColor: 'text-[#F4A261]', dot: 'bg-[#F4A261]', bg: 'bg-[#EFF6FF]', border: 'border-[#1E3A5F]/20', accent: 'text-[#1E3A5F]', bar: 'bg-[#1E3A5F]' },
  { id: 2, type: 'Voice + Screen', icon: '🖥️', status: 'Payment in progress', statusColor: 'text-[#2E7D32]', dot: 'bg-[#2E7D32]', bg: 'bg-[#EFF6FF]', border: 'border-[#1E3A5F]/20', accent: 'text-[#1E3A5F]', bar: 'bg-[#1E3A5F]' },
  { id: 3, type: 'Voice + Screen', icon: '🖥️', status: 'Order complete', statusColor: 'text-[#2E7D32]', dot: 'bg-[#2E7D32]', bg: 'bg-[#EFF6FF]', border: 'border-[#1E3A5F]/20', accent: 'text-[#1E3A5F]', bar: 'bg-[#1E3A5F]' },
  { id: 4, type: 'Voice + Screen', icon: '🖥️', status: 'AI listening…', statusColor: 'text-[#F4A261]', dot: 'bg-[#F4A261] animate-pulse', bg: 'bg-[#EFF6FF]', border: 'border-[#1E3A5F]/20', accent: 'text-[#1E3A5F]', bar: 'bg-[#F4A261]' },
]

export default function KioskIVR() {
  return (
    <section id="kiosk-ivr" className="section-pad bg-[#1A1A2E]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-0">

        {/* Heading */}
        <div className="text-center max-w-[720px] mx-auto reveal mb-12">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#F4A261] mb-3">
            Voice + Screen — Unified Ordering
          </p>
          <h2 className="font-display font-black text-[clamp(1.6rem,3.5vw,2.9rem)] tracking-tight
                         leading-tight text-white mb-4">
            The customer speaks.{' '}
            <span className="text-[#F4A261]">The screen responds.</span>
            <br />No hands required.
          </h2>
          <p className="text-white/60 font-light leading-relaxed text-[0.95rem]">
            TalkPOS kiosks are not touch-only and not voice-only.
            The AI speaks to the customer while the screen shows exactly what they're ordering — live, as they talk.
            They can touch to adjust, or just speak. Either way, the experience is the same.
          </p>
        </div>

        {/* Live conversation demo */}
        <div className="reveal mb-12">
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">

            {/* Demo header */}
            <div className="bg-[#1E3A5F] px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#4ADE80] animate-pulse" />
                <span className="text-white font-bold text-sm">TalkPOS Station — Live Order</span>
              </div>
              <span className="text-white/50 text-xs">Voice + Screen active</span>
            </div>

            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">

              {/* Left — conversation transcript */}
              <div className="p-5">
                <div className="text-[0.68rem] font-black tracking-widest uppercase
                                text-white/40 mb-4">
                  Voice conversation
                </div>
                <div className="space-y-3">
                  {conversation.map((c) => (
                    <div key={c.step}
                      className={`flex gap-3 ${c.speaker === 'customer' ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center
                                      text-[0.6rem] font-black flex-shrink-0
                                      ${c.speaker === 'ivr'
                                        ? 'bg-[#F4A261] text-[#1A1A2E]'
                                        : 'bg-white/15 text-white'}`}>
                        {c.speaker === 'ivr' ? 'AI' : 'C'}
                      </div>
                      <div className={`flex-1 ${c.speaker === 'customer' ? 'text-right' : ''}`}>
                        <div className={`text-[0.65rem] font-bold mb-1
                                        ${c.speaker === 'ivr' ? 'text-[#F4A261]' : 'text-white/50'}`}>
                          {c.label}
                        </div>
                        <div className={`inline-block px-3 py-2 rounded-xl text-[0.8rem] leading-snug
                                        ${c.speaker === 'ivr'
                                          ? 'bg-[#1E3A5F]/60 text-white/90'
                                          : 'bg-white/10 text-white/80'}`}>
                          {c.text}
                        </div>
                        {c.screenNote && (
                          <div className="text-[0.65rem] text-[#F4A261]/60 mt-1 italic">
                            ↳ {c.screenNote}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — screen state after step 3 */}
              <div className="p-5">
                <div className="text-[0.68rem] font-black tracking-widest uppercase
                                text-white/40 mb-4">
                  What the screen shows
                </div>

                {/* Simulated kiosk screen */}
                <div className="bg-white rounded-xl overflow-hidden border border-white/20">
                  <div className="bg-[#1E3A5F] px-4 py-2.5 flex items-center justify-between">
                    <span className="text-white font-bold text-sm">Your Order</span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
                      <span className="text-white/70 text-xs">Listening</span>
                    </div>
                  </div>

                  {/* Order items — appear as customer speaks */}
                  <div className="p-4">
                    {[
                      { qty: 2, item: 'Hamburger', price: 12.50 },
                      { qty: 2, item: 'Coke',      price: 4.00  },
                    ].map((row) => (
                      <div key={row.item}
                        className="flex items-center justify-between py-2.5
                                   border-b border-[#E5E7EB] last:border-0">
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-lg bg-[#1E3A5F]/10
                                          flex items-center justify-center
                                          text-[0.75rem] font-black text-[#1E3A5F]">
                            {row.qty}×
                          </div>
                          <span className="text-[0.88rem] text-[#1F2937] font-medium">
                            {row.item}
                          </span>
                        </div>
                        <span className="text-[0.88rem] text-[#1F2937] font-bold">
                          ${(row.qty * row.price).toFixed(2)}
                        </span>
                      </div>
                    ))}

                    {/* Total */}
                    <div className="flex items-center justify-between pt-3 mt-1">
                      <span className="text-sm font-black text-[#1F2937]">Total</span>
                      <span className="text-lg font-black text-[#1E3A5F]">$33.00</span>
                    </div>
                  </div>

                  {/* Payment options */}
                  <div className="px-4 pb-4 grid grid-cols-3 gap-2">
                    {[
                      { label: 'Card',       color: 'bg-[#1E3A5F] text-white' },
                      { label: 'Apple Pay',  color: 'bg-[#1F2937] text-white' },
                      { label: 'PayID',      color: 'bg-[#2E7D32] text-white' },
                    ].map((p) => (
                      <div key={p.label}
                        className={`${p.color} rounded-lg py-2 text-center text-[0.72rem] font-bold`}>
                        {p.label}
                      </div>
                    ))}
                  </div>

                  {/* No cash notice */}
                  <div className="mx-4 mb-4 bg-[#FEF2F2] border border-[#DC2626]/20
                                  rounded-lg px-3 py-2 text-center">
                    <span className="text-[0.72rem] text-[#DC2626] font-semibold">
                      ✗ Cash not accepted at this station
                    </span>
                  </div>
                </div>

                <p className="text-[0.72rem] text-white/30 text-center mt-3 italic">
                  Screen updates live as the customer speaks — or they can tap to adjust
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Capability cards — 1 col mobile, 2 col sm, 3 col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 reveal mb-10">
          {capabilities.map((c) => (
            <div key={c.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-5
                         hover:bg-white/8 transition-colors">
              <div className="text-2xl mb-3">{c.icon}</div>
              <div className="font-bold text-white text-[0.95rem] mb-2">{c.title}</div>
              <p className="text-[0.82rem] text-white/55 leading-relaxed font-light">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* 4 stations row — 1 col mobile, 2 col sm, 4 col lg */}
        <div className="reveal mb-10">
          <div className="text-center mb-5">
            <p className="text-[#F4A261] font-bold text-sm">
              Run 4 stations simultaneously — 4 customers ordering at once, zero counter staff
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {stations.map((s) => (
              <div key={s.id}
                className={`${s.bg} border ${s.border} rounded-xl p-4 relative overflow-hidden`}>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[0.65rem] font-black tracking-widest uppercase ${s.accent}`}>
                    Station {s.id}
                  </span>
                  <span className="text-[0.65rem] font-bold px-2 py-0.5 rounded-full
                                   bg-[#1E3A5F]/10 text-[#1E3A5F]">
                    {s.type}
                  </span>
                </div>
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg
                                border ${s.border} bg-white/60 mb-3`}>
                  {s.icon}
                </div>
                <div className="flex items-center gap-1.5">
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${s.dot}`} />
                  <span className={`text-[0.7rem] font-semibold ${s.statusColor}`}>{s.status}</span>
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${s.bar}`} />
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4
                          bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm text-center">
            <span className="text-white/60 font-medium">All 4 stations</span>
            <span className="text-[#F4A261] font-bold">→</span>
            <span className="text-[#F4A261] font-bold">Kitchen display</span>
            <span className="text-[#F4A261] font-bold">→</span>
            <span className="text-white/60 font-medium">Staff cook &amp; serve only</span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center reveal">
          <p className="text-white/40 text-[0.8rem] mb-5">
            Perfect for cafés, food courts, pub bistros, university canteens, airport outlets, hotels
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/61412783123?text=Hi%2C%20I%27d%20like%20to%20see%20the%20voice%20%2B%20screen%20kiosk%20demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white
                         font-bold px-8 py-3.5 rounded-xl hover:-translate-y-0.5
                         hover:shadow-[0_12px_36px_rgba(37,211,102,0.3)]
                         transition-all text-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.852L.057 23.7a.5.5 0 00.611.625l5.98-1.56A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.504-5.23-1.385l-.374-.217-3.893 1.016 1.035-3.788-.237-.389A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              See a live demo
            </a>
            <a href="#pricing"
              className="inline-flex items-center justify-center gap-2 text-white font-medium
                         px-6 py-3.5 rounded-xl border border-white/20
                         hover:border-white/50 hover:bg-white/[0.06] transition-all text-sm">
              View pricing →
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}