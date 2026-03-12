// src/app/video-guides/page.tsx
import PageShell from '@/components/PageShell'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Video Guides — TalkPOS Australia',
  description: 'Step-by-step video tutorials to get the most out of TalkPOS Australia.',
}

const videos = [
  {
    id: 'getting-started',
    title: 'Getting Started in 10 Minutes',
    duration: '10:24',
    category: 'Onboarding',
    desc: 'From sign-up to your first live order — complete setup walkthrough.',
    thumb: '🚀',
    color: '#1E3A5F',
  },
  {
    id: 'qr-setup',
    title: 'Setting Up QR Table Ordering',
    duration: '6:15',
    category: 'QR Ordering',
    desc: 'Generate QR codes, assign table numbers, and customise your ordering page.',
    thumb: '📱',
    color: '#F4A261',
  },
  {
    id: 'voice-ordering',
    title: 'Voice Takeaway Orders',
    duration: '4:50',
    category: 'Voice',
    desc: 'How to take phone orders using voice — step by step demo.',
    thumb: '🎙️',
    color: '#2E7D32',
  },
  {
    id: 'payid',
    title: 'Accepting PayID Payments',
    duration: '3:40',
    category: 'Payments',
    desc: 'Connect your PayID and start accepting instant bank transfers at the counter.',
    thumb: '💳',
    color: '#7C3AED',
  },
  {
    id: 'kitchen-display',
    title: 'Kitchen Display System Setup',
    duration: '7:10',
    category: 'Hardware',
    desc: 'Mount your Android TV, connect to your network, and fire orders to the kitchen.',
    thumb: '📺',
    color: '#0891B2',
  },
  {
    id: 'ato-reports',
    title: 'Running ATO Compliance Reports',
    duration: '5:30',
    category: 'Compliance',
    desc: 'Export your GST summary, view your audit trail, and share with your accountant.',
    thumb: '📊',
    color: '#DC2626',
  },
  {
    id: 'solo-operator',
    title: 'Solo Operator Lunch Rush Demo',
    duration: '8:00',
    category: 'Workflows',
    desc: 'Live demo: one person handling QR orders, voice calls, and counter checkout simultaneously.',
    thumb: '⚡',
    color: '#F4A261',
  },
  {
    id: 'offline',
    title: 'Offline Mode Explained',
    duration: '4:20',
    category: 'Hardware',
    desc: 'How TalkPOS keeps running during internet outages — and syncs automatically when back online.',
    thumb: '📶',
    color: '#2E7D32',
  },
  {
    id: 'payroll',
    title: 'Single Touch Payroll (STP)',
    duration: '6:55',
    category: 'Compliance',
    desc: 'Connect to the ATO, run your payroll, and submit STP reports in minutes.',
    thumb: '👥',
    color: '#1E3A5F',
  },
]

const categories = ['All', 'Onboarding', 'QR Ordering', 'Voice', 'Payments', 'Hardware', 'Compliance', 'Workflows']

export default function VideoGuidesPage() {
  return (
    <PageShell>
      <div className="max-w-[1100px] mx-auto px-5 py-16">

        {/* Header */}
        <div className="text-center max-w-[560px] mx-auto mb-12">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#F4A261] mb-3">
            Video Guides
          </p>
          <h1 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.9rem)] tracking-tight
                         leading-tight text-[#1F2937] mb-4">
            Learn TalkPOS visually.
          </h1>
          <p className="text-[#4B5563] font-light leading-relaxed">
            Short, practical videos covering every feature. No fluff — just the steps you need.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((c, i) => (
            <span key={c}
              className={`text-xs font-semibold px-4 py-2 rounded-full cursor-pointer transition-all
                          ${i === 0
                            ? 'bg-[#1E3A5F] text-white'
                            : 'bg-white border border-[#E5E7EB] text-[#4B5563] hover:border-[#1E3A5F]/40'}`}>
              {c}
            </span>
          ))}
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v) => (
            <div key={v.id}
              className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden
                         hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(30,58,95,0.10)]
                         transition-all duration-200 cursor-pointer group">

              {/* Thumbnail */}
              <div className="h-44 flex items-center justify-center relative"
                   style={{ background: `linear-gradient(135deg, ${v.color}22, ${v.color}44)` }}>
                <span className="text-6xl">{v.thumb}</span>
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0
                                group-hover:opacity-100 transition-opacity bg-black/10">
                  <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <span className="text-2xl ml-1">▶</span>
                  </div>
                </div>
                {/* Duration badge */}
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-[0.65rem]
                                font-bold px-2 py-0.5 rounded">
                  {v.duration}
                </div>
                {/* Category badge */}
                <div className="absolute top-3 left-3 text-[0.65rem] font-bold px-2.5 py-1
                                rounded-full text-white"
                     style={{ background: v.color }}>
                  {v.category}
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <h3 className="font-display font-bold text-[#1F2937] text-[0.95rem] mb-2 leading-snug">
                  {v.title}
                </h3>
                <p className="text-[0.78rem] text-[#4B5563] font-light leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-[#4B5563] text-sm mb-4">Can't find what you need?</p>
          <a href="mailto:admin@ebizco.com.au"
            className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white font-bold
                       px-6 py-3 rounded-xl hover:-translate-y-0.5 transition-all text-sm">
            ✉️ Request a tutorial
          </a>
        </div>

      </div>
    </PageShell>
  )
}