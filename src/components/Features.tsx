// src/components/Features.tsx — AU version: what the app does today
import { now } from '@/content'

export default function Features() {
  return (
    <section id="features" className="section-pad bg-[#F8F9FA]">
      <div className="max-w-[1100px] mx-auto">

        <div className="text-center max-w-[620px] mx-auto reveal mb-14">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#F4A261] mb-3">
            Features
          </p>
          <h2 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.9rem)] tracking-tight
                         leading-tight text-[#1F2937]">
            The front counter{' '}
            <span className="text-[#1E3A5F]">and the back room.</span>
          </h2>
          <p className="text-[#4B5563] font-light mt-3 leading-relaxed">
            What TalkPOS does for your café or takeaway today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E7EB]
                        border border-[#E5E7EB] rounded-2xl overflow-hidden reveal">
          {now.map((f) => (
            <div key={f.title}
              className="group bg-white hover:bg-[#F8F9FA] p-8 relative transition-colors">
              <div className="absolute top-0 left-0 right-0 h-0.5
                               bg-gradient-to-r from-[#1E3A5F] to-transparent
                               opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5
                              border bg-[#1E3A5F]/8 border-[#1E3A5F]/20">
                {f.icon}
              </div>
              <div className="font-display font-bold text-base mb-2 text-[#1F2937]">{f.title}</div>
              <p className="text-[0.84rem] text-[#4B5563] leading-relaxed font-light">{f.body}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-8 grid md:grid-cols-2 gap-4 text-[0.84rem] text-[#4B5563]">
          <div className="bg-white border border-[#E5E7EB] rounded-2xl px-6 py-5">
            <span className="font-bold text-[#1F2937]">Payments stay yours.</span>{' '}
            Customers pay with your own card terminal or cash. You mark the order paid on the till.
            Your customers’ payments go straight to you, not through us.
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-2xl px-6 py-5">
            <span className="font-bold text-[#1F2937]">You stay in charge of tax.</span>{' '}
            TalkPOS doesn’t lodge your BAS. You or your accountant check your figures and lodge.
          </div>
        </div>
      </div>
    </section>
  )
}
