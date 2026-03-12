'use client'
// src/components/TheProblem.tsx — AU Labour Crisis section

const statCards = [
  { num: '$30–35', label: 'Average casual wage per hour', color: '#1E3A5F', icon: '💸' },
  { num: '42%',    label: 'Of cafes operating with 1–2 staff', color: '#F4A261', icon: '👥' },
  { num: '63%',    label: 'Say staff shortages hurt revenue', color: '#DC2626', icon: '📉' },
  { num: '$8.2B',  label: 'Lost revenue due to under-staffing', color: '#2E7D32', icon: '🏦' },
]

export default function TheProblem() {
  return (
    <section className="section-pad bg-[#F8F9FA]">
      <div className="max-w-[1100px] mx-auto">

        {/* Heading */}
        <div className="text-center max-w-[640px] mx-auto reveal mb-14">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#F4A261] mb-3">
            The Reality
          </p>
          <h2 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.9rem)] tracking-tight leading-tight
                         text-[#1F2937] mb-4">
            The Australian hospitality crisis is real.
          </h2>
          <p className="text-[#4B5563] font-light leading-relaxed">
            You can't find staff. And when you do, you can't afford them.
            The lunch rush shouldn't feel like a disaster.
            It's time to work smarter, not harder.
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal mb-14">
          {statCards.map((s) => (
            <div key={s.label}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-6 text-center
                         hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(30,58,95,0.1)]
                         transition-all duration-200">
              <div className="text-2xl mb-2">{s.icon}</div>
              <div className="font-display font-black text-[clamp(1.4rem,2.5vw,2.2rem)] leading-none mb-2"
                   style={{ color: s.color }}>
                {s.num}
              </div>
              <div className="text-[0.72rem] text-[#4B5563] leading-tight">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Café man image */}
        <div className="reveal rounded-2xl overflow-hidden border border-[#E5E7EB]
                        min-h-[280px] md:min-h-[360px] relative bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE]">
          <img
            src="/images/cafeman.jpg"
            alt="Australian café owner — stressed without TalkPOS vs calm with TalkPOS"
            className="w-full h-full object-cover absolute inset-0"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
          />
        </div>

        {/* CTA */}
        <div className="text-center mt-10 reveal">
          <a href="#how-it-works"
            className="inline-flex items-center gap-2 text-[#1E3A5F] font-bold text-sm
                       hover:gap-3 transition-all">
            See how TalkPOS fixes this →
          </a>
        </div>

      </div>
    </section>
  )
}