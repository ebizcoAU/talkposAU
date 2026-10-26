// src/components/Faq.tsx — common questions, shared with /help
import { faq } from '@/content'

export default function Faq() {
  return (
    <section id="faq" className="section-pad bg-white">
      <div className="max-w-[760px] mx-auto">
        <div className="text-center reveal mb-10">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#F4A261] mb-3">FAQ</p>
          <h2 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.9rem)] tracking-tight
                         leading-tight text-[#1F2937]">
            Questions people ask
          </h2>
        </div>
        <div className="reveal divide-y divide-[#E5E7EB] border-y border-[#E5E7EB]">
          {faq.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="cursor-pointer list-none flex justify-between items-center gap-4
                                  font-display font-bold text-[#1F2937]">
                {f.q}
                <span className="text-[#1E3A5F] transition-transform group-open:rotate-45 text-xl">+</span>
              </summary>
              <p className="mt-3 text-[0.9rem] text-[#4B5563] leading-relaxed font-light">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
