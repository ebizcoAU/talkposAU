// src/components/CtaBanner.tsx — AU version
import Link from 'next/link'

export default function CtaBanner() {
  return (
    <section className="relative section-pad text-center overflow-hidden bg-[#1A1A2E]">

      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/cta-bg.jpg"
          alt="Australian small business precinct"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A2E]/20 via-[#1A1A2E]/25 to-[#1A1A2E]/35" />
      </div>

      {/* IMAGE PLACEHOLDER — shown if no photo yet */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="text-center max-w-md opacity-20">
          <p className="text-white/60 text-[0.65rem] leading-relaxed font-mono">
            IMAGE PROMPT: Aerial drone shot of a lively Australian city café precinct at golden hour (5:30 PM).
            Multiple small food businesses visible — a café with outdoor seating, a food truck, a bakery with a short queue.
            People relaxed, end-of-day energy. Rich amber sky and deep navy-blue tones. Warm celebration of small business culture.
            No people in close focus — environment is the subject. Commercial property photography, wide angle lens.
          </p>
        </div>
      </div>

      {/* Top amber accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F4A261] to-transparent" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase
                        text-[#F4A261] border border-[#F4A261]/35 px-3.5 py-1.5 rounded-full
                        bg-[#F4A261]/8 mb-6">
          <span className="w-1.5 h-1.5 bg-[#F4A261] rounded-full animate-pulse" />
          🇦🇺 Built for Australian Hospitality
        </div>

        <h2 className="font-display font-black text-[clamp(1.8rem,3.5vw,3rem)] tracking-tight
                       leading-tight text-white mb-4">
          Ready to run the rush{' '}
          <span className="text-[#F4A261]">by yourself?</span>
        </h2>

        <p className="text-white/60 font-light leading-relaxed mb-8 text-[clamp(0.9rem,1.1vw,1.1rem)]">
          Join Australian hospitality businesses already using TalkPOS.
          Start free. No lock-in. Cancel anytime.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Link href="#pricing"
            className="inline-flex items-center gap-2 bg-[#F4A261] text-[#1A1A2E] font-bold
                       px-8 py-3.5 rounded-xl hover:-translate-y-0.5
                       hover:shadow-[0_12px_36px_rgba(244,162,97,0.5)]
                       transition-all text-sm">
            🚀 Start Free Trial
          </Link>
          <Link href="#how-it-works"
            className="inline-flex items-center gap-2 text-white font-medium
                       px-6 py-3.5 rounded-xl border border-white/20
                       hover:border-white/50 hover:bg-white/[0.06] transition-all text-sm">
            Book a Demo →
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
          {['No credit card required', 'ATO-ready from day one', 'Setup in under 30 minutes'].map((b) => (
            <div key={b} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#2E7D32] rounded-full flex-shrink-0" />
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}