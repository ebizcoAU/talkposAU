// src/components/CtaBanner.tsx — AU version
import { PILOT_MAILTO, pilot } from '@/content'

export default function CtaBanner() {
  return (
    <section className="relative section-pad text-center overflow-hidden bg-[#1A1A2E]">

      {/* Plain brand background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1E3A5F] via-[#1A1A2E] to-[#1A1A2E]" />

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
          Run the counter and the books{' '}
          <span className="text-[#F4A261]">from one app.</span>
        </h2>

        <p className="text-white/70 font-light leading-relaxed mb-8 text-[clamp(0.9rem,1.1vw,1.1rem)]">
          {pilot.lead} Email us your name, venue and suburb, and a real person will reply.
        </p>

        <a href={PILOT_MAILTO}
          className="inline-flex items-center gap-2 bg-[#F4A261] text-[#1A1A2E] font-bold
                     px-8 py-3.5 rounded-xl hover:-translate-y-0.5
                     hover:shadow-[0_12px_36px_rgba(244,162,97,0.5)]
                     transition-all text-sm">
          {pilot.button}
        </a>
      </div>
    </section>
  )
}
