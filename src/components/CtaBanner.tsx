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
          <a
            href="https://wa.me/61412783123?text=Hi%2C%20I%27d%20like%20to%20book%20a%20TalkPOS%20demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-bold
                       px-6 py-3.5 rounded-xl border-2 border-[#25D366]
                       bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-all text-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.852L.057 23.7a.5.5 0 00.611.625l5.98-1.56A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.504-5.23-1.385l-.374-.217-3.893 1.016 1.035-3.788-.237-.389A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            WhatsApp Us
          </a>
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