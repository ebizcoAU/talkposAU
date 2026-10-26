// src/components/HowItWorks.tsx — AU: four steps from menu to books
import { books } from '@/content'

const steps = [
  {
    num: '01',
    icon: '🍽️',
    title: 'Add your menu',
    subtitle: 'Once, in Inventory → Menu',
    desc: 'Type each dish and its price once, and choose which kitchen screen it goes to.',
    accent: '#1E3A5F',
    bg: 'bg-[#EFF6FF]',
    border: 'border-[#1E3A5F]/15',
    pill: 'bg-[#1E3A5F]/8 text-[#1E3A5F] border-[#1E3A5F]/20',
  },
  {
    num: '02',
    icon: '📶',
    title: 'Pair your devices',
    subtitle: 'On your shop Wi-Fi',
    desc: 'Scan the QR code to add a phone or tablet, then give it a job: register, waiter, kiosk or kitchen screen.',
    accent: '#F4A261',
    bg: 'bg-[#FFF7ED]',
    border: 'border-[#F4A261]/30',
    pill: 'bg-[#F4A261]/10 text-[#C2410C] border-[#F4A261]/30',
  },
  {
    num: '03',
    icon: '🧾',
    title: 'Ring up the sale',
    subtitle: 'Till, waiter tablet or kiosk',
    desc: 'Big, clear buttons, one tap per item. The order goes straight to the kitchen screen.',
    accent: '#2E7D32',
    bg: 'bg-[#F0FDF4]',
    border: 'border-[#2E7D32]/15',
    pill: 'bg-[#2E7D32]/8 text-[#2E7D32] border-[#2E7D32]/20',
  },
  {
    num: '04',
    icon: '📒',
    title: 'Books kept',
    subtitle: 'As you go',
    desc: books,
    accent: '#FF6B35',
    bg: 'bg-[#FFF4EE]',
    border: 'border-[#FF6B35]/25',
    pill: 'bg-[#FF6B35]/10 text-[#C2410C] border-[#FF6B35]/25',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad bg-white">
      <div className="max-w-[1100px] mx-auto">

        <div className="text-center max-w-[620px] mx-auto reveal mb-14">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#F4A261] mb-3">
            How It Works
          </p>
          <h2 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.9rem)] tracking-tight
                         leading-tight text-[#1F2937]">
            From menu to books.{' '}
            <span className="text-[#1E3A5F]">Four steps.</span>
          </h2>
          <p className="text-[#4B5563] font-light mt-4 leading-relaxed">
            Set up your menu and devices once. After that, every sale goes to the
            kitchen and into your books on its own.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 reveal">
          {steps.map((s) => (
            <div key={s.num}
              className={`relative rounded-2xl p-7 border-2 ${s.bg} ${s.border}
                          hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]
                          transition-all duration-200`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="text-[0.65rem] font-black tracking-[0.2em] text-[#4B5563]">{s.num}</div>
                <div className="text-3xl">{s.icon}</div>
              </div>

              <h3 className="font-display font-bold text-xl text-[#1F2937] mb-1 leading-tight">
                {s.title}
              </h3>
              <div className={`inline-block text-[0.67rem] font-semibold px-2.5 py-1 rounded-full border mb-3 ${s.pill}`}>
                {s.subtitle}
              </div>
              <p className="text-[0.85rem] text-[#4B5563] leading-relaxed font-light">
                {s.desc}
              </p>

              <div className="mt-6 h-0.5 w-12 rounded-full" style={{ backgroundColor: s.accent }} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}