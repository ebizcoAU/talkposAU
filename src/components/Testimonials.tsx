// src/components/Testimonials.tsx — AU version

const testimonials = [
  {
    initials: 'SJ',
    name:     'Sarah J.',
    role:     'Café Owner — Melbourne, VIC',
    text:     'I run my café by myself now. Phone orders used to stress me out. Now customers just talk and the order appears on screen. Complete game changer for solo operators.',
    bg:       'from-[#1E3A5F] to-[#F4A261]',
  },
  {
    initials: 'MT',
    name:     'Mark T.',
    role:     'Pub Manager — Sydney, NSW',
    text:     'The compliance piece sold me. My accountant sleeps better knowing every transaction is cryptographically locked. The ATO audit-readiness alone is worth the subscription.',
    bg:       'from-[#2E7D32] to-[#1E3A5F]',
  },
  {
    initials: 'LR',
    name:     'Lisa R.',
    role:     'Fish & Chip Shop — Brisbane, QLD',
    text:     'PayID saves me hundreds in fees every month. Customers actually prefer it — no card surcharge, instant payment. And the QR ordering means I can run the counter alone during the 12pm rush.',
    bg:       'from-[#F4A261] to-[#E85D04]',
  },
]

export default function Testimonials() {
  return (
    <section id="reviews" className="section-pad bg-[#F8F9FA]">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center max-w-[500px] mx-auto reveal mb-14">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#F4A261] mb-3">
            Social Proof
          </p>
          <h2 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.9rem)] tracking-tight
                         leading-tight text-[#1F2937]">
            Loved by Australian small business.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 reveal">
          {testimonials.map((t) => (
            <div key={t.name}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-7
                         hover:border-[#1E3A5F]/20 hover:-translate-y-1
                         hover:shadow-[0_12px_32px_rgba(30,58,95,0.08)]
                         transition-all duration-200">
              <div className="text-[#F4A261] text-xs tracking-[2px] mb-3.5">★★★★★</div>
              <p className="text-[0.87rem] text-[#4B5563] leading-relaxed font-light italic mb-5">
                "{t.text}"
              </p>
              <div className="flex items-center gap-2.5">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.bg}
                                flex items-center justify-center font-black text-[0.8rem]
                                text-white flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-[0.82rem] font-bold text-[#1F2937]">{t.name}</div>
                  <div className="text-[0.68rem] text-[#4B5563] mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}