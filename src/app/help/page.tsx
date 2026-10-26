// src/app/help/page.tsx
import PageShell from '@/components/PageShell'
import type { Metadata } from 'next'
import { CONTACT_EMAIL, books, faq } from '@/content'

export const metadata: Metadata = {
  title: 'Help — TalkPOS Australia',
  description: 'How to set up TalkPOS, and answers to common questions.',
}

const setup = [
  { icon: '🍽️', title: 'Add your menu',     body: 'Type each dish and its price once, and choose which kitchen screen it goes to.' },
  { icon: '👥', title: 'Add your staff',    body: 'Add each staff member, so they can sign in with a PIN on shared devices.' },
  { icon: '📶', title: 'Pair your devices', body: 'On your shop Wi-Fi, scan the QR code to add a phone or tablet, then give it a job: register, waiter, kiosk or kitchen screen.' },
  { icon: '🧾', title: 'Start selling',     body: books },
]

export default function HelpPage() {
  return (
    <PageShell>
      <div className="max-w-[1000px] mx-auto px-5 py-16">

        {/* Header */}
        <div className="text-center max-w-[560px] mx-auto mb-12">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#F4A261] mb-3">Help</p>
          <h1 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.9rem)] tracking-tight
                         leading-tight text-[#1F2937] mb-4">
            How can we help?
          </h1>
          <p className="text-[#4B5563] font-light leading-relaxed">
            How to get set up, and answers to the questions people ask most.
          </p>
        </div>

        {/* Getting set up */}
        <h2 className="font-display font-bold text-xl text-[#1F2937] mb-5">Getting set up</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {setup.map((s, i) => (
            <div key={s.title} className="bg-white border border-[#E5E7EB] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{s.icon}</span>
                <span className="text-[0.65rem] font-black tracking-[0.2em] text-[#4B5563]">0{i + 1}</span>
              </div>
              <div className="font-display font-bold text-[#1F2937] mb-1">{s.title}</div>
              <p className="text-[0.85rem] text-[#4B5563] leading-relaxed font-light">{s.body}</p>
            </div>
          ))}
        </div>

        {/* iPad note */}
        <div className="bg-[#EFF6FF] border border-[#1E3A5F]/15 rounded-2xl p-6 mb-14">
          <div className="font-display font-bold text-[#1E3A5F] mb-2">Using an iPad as your register?</div>
          <p className="text-[0.85rem] text-[#4B5563] leading-relaxed">
            Keep TalkPOS open on the screen. An iPad pauses apps that are in the background, and your kitchen
            screens, waiter phones and kiosk then lose touch with the register. Don’t switch to another app for
            long, and don’t use the same iPad as the register for a second POS app. Android phones and tablets
            keep the register running in the background, with a small notification to show it’s on.
          </p>
        </div>

        {/* FAQ */}
        <h2 className="font-display font-bold text-xl text-[#1F2937] mb-5">Common questions</h2>
        <div className="divide-y divide-[#E5E7EB] border-y border-[#E5E7EB] mb-16">
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

        {/* Still need help */}
        <div className="bg-[#1E3A5F] rounded-2xl p-8 text-center text-white">
          <div className="text-3xl mb-3">💬</div>
          <h2 className="font-display font-bold text-xl mb-2">Still stuck?</h2>
          <p className="text-white/70 text-sm font-light mb-6">
            Send us an email and a real person will reply.
          </p>
          <a href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 bg-[#F4A261] text-[#1A1A2E] font-bold
                       px-6 py-3 rounded-xl hover:-translate-y-0.5 transition-all text-sm">
            ✉️ {CONTACT_EMAIL}
          </a>
        </div>

      </div>
    </PageShell>
  )
}
