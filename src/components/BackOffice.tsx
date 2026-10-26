// src/components/BackOffice.tsx — the mini-ERP story: what runs today, what's coming
import { now, coming } from '@/content'

const today = ['The till', 'Stock', 'Venue PIN', 'Books in one place']

export default function BackOffice() {
  const nowItems = now.filter((i) => today.includes(i.title))

  return (
    <section id="back-office" className="section-pad bg-white">
      <div className="max-w-[1100px] mx-auto">

        <div className="text-center max-w-[640px] mx-auto reveal mb-14">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#F4A261] mb-3">
            Back Office
          </p>
          <h2 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.9rem)] tracking-tight
                         leading-tight text-[#1F2937]">
            One app for the whole shop,{' '}
            <span className="text-[#1E3A5F]">not just the counter.</span>
          </h2>
          <p className="text-[#4B5563] font-light mt-4 leading-relaxed">
            Sales, stock and books share one set of figures, so you’re not copying numbers
            between apps. More of the back office is on the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 reveal">
          {/* Available now */}
          <div className="rounded-2xl p-7 border-2 border-[#2E7D32]/20 bg-[#F0FDF4]">
            <div className="inline-block text-[0.67rem] font-black tracking-widest uppercase px-3 py-1 rounded-full
                            bg-[#2E7D32] text-white mb-6">
              Available now
            </div>
            <ul className="space-y-5">
              {nowItems.map((i) => (
                <li key={i.title} className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">{i.icon}</span>
                  <div>
                    <div className="font-display font-bold text-[#1F2937] mb-1">{i.title}</div>
                    <p className="text-[0.85rem] text-[#4B5563] leading-relaxed font-light">{i.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Coming */}
          <div className="rounded-2xl p-7 border-2 border-dashed border-[#F4A261]/50 bg-[#FFF7ED]">
            <div className="inline-block text-[0.67rem] font-black tracking-widest uppercase px-3 py-1 rounded-full
                            bg-[#F4A261] text-[#1A1A2E] mb-6">
              Coming
            </div>
            <ul className="space-y-5">
              {coming.map((i) => (
                <li key={i.title} className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">{i.icon}</span>
                  <div>
                    <div className="font-display font-bold text-[#1F2937] mb-1">{i.title}</div>
                    <p className="text-[0.85rem] text-[#4B5563] leading-relaxed font-light">{i.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}
