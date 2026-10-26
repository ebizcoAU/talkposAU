// src/components/Pricing.tsx — AU version. Prices not published yet.
import { PILOT_MAILTO, pilot } from '@/content'

export default function Pricing() {
  return (
    <section id="pricing" className="section-pad bg-[#F8F9FA] text-center">
      <div className="max-w-[720px] mx-auto">

        <div className="reveal mb-10">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#F4A261] mb-3">Pricing</p>
          <h2 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.9rem)] tracking-tight
                         leading-tight text-[#1F2937]">
            Pricing coming soon.
          </h2>
          <p className="text-[#4B5563] font-light mt-3 leading-relaxed">
            {pilot.lead} Pilot venues hear the price first, with notice before any charge starts.
          </p>
        </div>

        <div className="reveal bg-white border-2 border-[#1E3A5F] rounded-2xl p-8 text-left
                        shadow-[0_8px_32px_rgba(30,58,95,0.12)]">
          <div className="text-[0.64rem] font-black tracking-[0.14em] uppercase text-[#4B5563] mb-3">
            Canberra pilot
          </div>
          <p className="text-[0.9rem] text-[#4B5563] leading-relaxed mb-6">{pilot.note}</p>
          <a href={PILOT_MAILTO}
            className="block w-full text-center py-3 rounded-xl font-bold text-[0.9rem]
                       bg-[#1E3A5F] text-white hover:bg-[#162d4a] transition-all">
            {pilot.button}: email admin@ebizco.com.au
          </a>
          <p className="text-[0.75rem] text-[#6B7280] mt-4">
            See our <a href="/privacy/" className="underline hover:text-[#1E3A5F]">Privacy Policy</a>.
          </p>
        </div>

      </div>
    </section>
  )
}
