// src/components/Hero.tsx — AU version
import Link from 'next/link'
import { PILOT_MAILTO, pilot } from '@/content'

// Facts only: no savings figures, prices or setup-time promises.
const stats = [
  { num: '1',       suffix: ' app',      label: 'Till, kitchen, stock and books' },
  { num: '4',       suffix: ' jobs',     label: 'Register, waiter, kiosk, kitchen' },
  { num: 'Android', suffix: ' + iOS',    label: 'Phones and tablets you already have' },
  { num: 'Canberra', suffix: '',         label: 'Pilot starting now' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center
                 px-page pt-28 pb-56 overflow-hidden bg-[#1A1A2E]"
    >
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        {/* Our own illustrative image: original file kept unedited, cropped by CSS only */}
        <img
          src="/images/talkpos_food_counter.jpeg"
          alt="Hands passing a takeaway coffee across a café counter, next to a tablet on a stand."
          className="absolute inset-0 w-full h-full object-cover opacity-45"
          style={{ objectPosition: '70% center' }}
        />
        {/* Left gradient — desktop only, mobile uses bottom gradient only */}
        <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#1A1A2E]/95 via-[#1A1A2E]/40 to-transparent hidden md:block" style={{ width: '50%' }} />
        {/* Bottom gradient — both */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A2E]/30 via-transparent to-[#1A1A2E]/95" />
        {/* Mobile top gradient so navbar area stays dark */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A2E]/70 via-[#1A1A2E]/20 to-transparent md:hidden" style={{ height: '40%' }} />
        {/* Subtle amber top accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F4A261] via-[#1E3A5F] to-transparent opacity-80" />
      </div>

      {/* The caption must stay visible on the image, not only in the alt text */}
      <div className="absolute right-0 top-[72px] z-10 rounded-bl-xl bg-[#1A1A2E]/85 px-3 py-1.5
                      text-xs font-bold text-white/90">
        Illustrative image, AI-generated
      </div>

      {/* ── Content left ── */}
      <div className="relative z-10 mt-[200px] md:mt-[180px]">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase
                        text-[#F4A261] border border-[#F4A261]/35 px-3.5 py-1.5 rounded-full
                        bg-[#F4A261]/8 mb-6 animate-fade-up">
          <span className="w-1.5 h-1.5 bg-[#F4A261] rounded-full animate-pulse" />
          🇦🇺 Built for Australian Hospitality
        </div>

        <h1 className="font-display font-black text-[clamp(1.75rem,3.5vw,4.5rem)] leading-[1.1]
                       tracking-tight mb-5 text-white animate-fade-up-delay-1">
          Your till, kitchen{' '}
          <br />
          and books.{' '}
          <span className="text-[#F4A261]">One app.</span>
        </h1>

        <p className="text-white/80 text-[clamp(0.9rem,1.1vw,1.2rem)] leading-relaxed max-w-xl mb-8 font-light
                      animate-fade-up-delay-2">
          TalkPOS is the till for cafés and takeaways that also runs the back office:{' '}
          <strong className="text-white font-semibold">orders to the kitchen, stock, staff PINs, and your sales and
          expenses with their GST</strong>, in one place. Rosters, payroll and Xero and MYOB import/export are coming.
        </p>

        {/* ── Row 1: Pilot + See how it works ── */}
        <div className="flex flex-wrap gap-3 mb-5 animate-fade-up-delay-3">
          <a
            href={PILOT_MAILTO}
            className="inline-flex items-center gap-2 bg-[#F4A261] text-[#1A1A2E] font-bold
                       px-6 py-3 rounded-xl hover:-translate-y-0.5
                       hover:shadow-[0_12px_36px_rgba(244,162,97,0.4)] transition-all"
          >
            {pilot.button}
          </a>
          <Link
            href="#how-it-works"
            className="inline-flex items-center gap-2 text-white font-semibold
                       px-6 py-3 rounded-xl border border-white/60
                       hover:border-white hover:bg-white/[0.12] transition-all"
          >
            See how it works →
          </Link>
        </div>

        {/* ── Row 2: Plain facts ── */}
        <div className="flex flex-col gap-2 animate-fade-up-delay-4">
          {[
            'Customers pay with your own card terminal or cash, straight to you',
            'Runs on Android phones and tablets, iPhone and iPad',
            'Your books stay up to date as you sell',
          ].map((b) => (
            <div key={b} className="flex items-center gap-2 text-sm text-white/75 font-medium">
              <span className="w-2 h-2 bg-[#2E7D32] rounded-full flex-shrink-0" />
              {b}
            </div>
          ))}
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10
                      border-t border-white/[0.16]
                      bg-[#1A1A2E]/80 backdrop-blur-md">
        <div className="mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.16]" style={{ maxWidth: '89.6rem' }}>
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-5 px-8 flex flex-col items-center justify-center text-center
                          ${i < 2 ? 'border-b border-white/[0.16] md:border-b-0' : ''}`}
            >
              <div className="font-display font-black tracking-[-0.04em] leading-none mb-1 text-white" style={{ fontSize: 'clamp(1.32rem, 1.92vw, 2.4rem)' }}>
                {s.num}<span className="text-[#F4A261]">{s.suffix}</span>
              </div>
              <div className="text-[0.78rem] md:text-sm text-white/80 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}