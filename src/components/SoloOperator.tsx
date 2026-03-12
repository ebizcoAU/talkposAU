'use client'
// src/components/SoloOperator.tsx — AU lunch rush scenario

const timeline = [
  { time: '12:30 PM', icon: '😓', label: 'You\'re alone. Three tables, ringing phone, two walk-ins.', color: '#DC2626' },
  { time: '12:30:10', icon: '📱', label: 'Table 4 scans QR — orders & pays. You never touched it.', color: '#1E3A5F' },
  { time: '12:30:30', icon: '📞', label: 'Phone rings. "Two chicken schnitzels" → order appears on screen.', color: '#F4A261' },
  { time: '12:30:50', icon: '🖐', label: 'Counter: tap two items, customer pays with PayID.', color: '#2E7D32' },
  { time: '12:31:00', icon: '📺', label: 'Kitchen sees all three orders on the TV display.', color: '#1E3A5F' },
  { time: '12:31:40', icon: '✅', label: 'All orders handled. You\'re still making coffee.', color: '#2E7D32' },
]

export default function SoloOperator() {
  return (
    <section className="section-pad bg-[#1A1A2E] text-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left — copy + timeline */}
        <div className="reveal">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#F4A261] mb-3">
            Solo-Operator Mode
          </p>
          <h2 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.9rem)] tracking-tight
                         leading-tight mb-4 text-white">
            Run the lunch rush{' '}
            <span className="text-[#F4A261]">with one person.</span>
          </h2>
          <p className="text-white/60 font-light leading-relaxed mb-8">
            It's 12:30 PM. You're alone. Three tables want to pay. Phone is ringing.
            Two takeaways just walked in. Here's what happens next.
          </p>

          {/* Timeline */}
          <div className="space-y-0">
            {timeline.map((t, i) => (
              <div key={t.time} className="flex gap-4 items-start">
                {/* Dot + line */}
                <div className="flex flex-col items-center flex-shrink-0 pt-0.5">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm
                                  border-2 bg-[#0F1729]"
                       style={{ borderColor: t.color }}>
                    {t.icon}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-px h-8 bg-white/10 mt-1" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-6">
                  <div className="text-[0.68rem] font-mono text-white/48 mb-0.5">{t.time}</div>
                  <div className="text-[0.85rem] text-white/80 leading-relaxed">{t.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — dashboard visual */}
        <div className="reveal">
          {/* IMAGE PLACEHOLDER */}
          <div className="rounded-2xl border border-white/10 bg-[#0F1729] overflow-hidden
                          shadow-[0_32px_80px_rgba(0,0,0,0.5)]">

            <div className="bg-[#1E3A5F] px-5 py-3 flex items-center justify-between">
              <span className="text-white font-display font-black text-sm">Solo Dashboard</span>
              <span className="text-[#F4A261] text-xs font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 bg-[#4ADE80] rounded-full animate-pulse" />
                Live
              </span>
            </div>

            {/* Photo */}
            <div className="overflow-hidden bg-[#1E3A5F]/40 min-h-[220px]">
              <img
                src="/images/soloman.jpg"
                alt="Café owner tapping POS screen with 3 active orders"
                className="w-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
              />
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 divide-x divide-white/[0.06]">
              {[
                { icon: '📱', label: 'QR', val: '1 paid', color: '#60A5FA' },
                { icon: '📞', label: 'Voice', val: '1 queue', color: '#F4A261' },
                { icon: '🖐', label: 'Counter', val: '1 ready', color: '#4ADE80' },
              ].map((item) => (
                <div key={item.label} className="py-3 px-4 text-center">
                  <div className="text-lg mb-0.5">{item.icon}</div>
                  <div className="text-[0.68rem] text-white/60 uppercase tracking-wide">{item.label}</div>
                  <div className="text-[0.78rem] font-bold mt-0.5" style={{ color: item.color }}>{item.val}</div>
                </div>
              ))}
            </div>

            <div className="px-5 py-3.5 text-center bg-[#2E7D32]/10 border-t border-[#2E7D32]/20">
              <div className="text-[#4ADE80] text-[0.75rem] font-bold">⏱ 90 seconds. All handled. Zero panic.</div>
            </div>
          </div>

          <p className="text-center text-white/48 text-xs mt-4 font-light">
            * Based on a real lunch rush scenario with one operator
          </p>
        </div>

      </div>
    </section>
  )
}