'use client'
// src/components/KitchenDisplay.tsx — AU version

const screens = [
  {
    id: 'kds',
    icon: '📺',
    title: 'Kitchen Display (KDS)',
    subtitle: 'Replaces docket printers',
    color: '#F4A261',
    desc: "Orders fire instantly to the kitchen screen the moment they're placed — QR, counter, voice or Uber Eats. Kitchen taps Done when the plate is ready. No shouting, no lost dockets.",
    tags: ['Up to 12 screens', 'No printer needed', 'Auto priority queue'],
    orders: [
      { id: 'T04', items: ['Flat White ×2', 'Avo Toast ×1'], time: '2 min', status: 'cooking', color: '#F4A261' },
      { id: 'T07', items: ['Chicken Parma ×2', 'Chips ×2'], time: '8 min', status: 'ready', color: '#2E7D32' },
      { id: 'TKW', items: ['"Two schnitzels please"'], time: 'New', status: 'new', color: '#FF6B35' },
    ],
  },
  {
    id: 'customer',
    icon: '🪟',
    title: 'Customer Display',
    subtitle: 'Facing the counter',
    color: '#2E7D32',
    desc: 'Customers see their order confirmed in real time — items, price, payment method. Reduces "did you get my order?" interruptions so you stay focused on making food.',
    tags: ['Shows live total', 'Confirms each item', 'Promo/ad support'],
    orders: [
      { id: '', items: ['Long Black — $5.00', 'Ham & Cheese Toastie — $9.50'], time: '', status: 'confirm', color: '#2E7D32' },
    ],
  },
  {
    id: 'queue',
    icon: '🔢',
    title: 'Queue Board',
    subtitle: 'Wall TV or large screen',
    color: '#60A5FA',
    desc: 'Number-call display on any TV or monitor — customers collect their own order when their number shows. Perfect for busy counters, food courts, and self-serve setups.',
    tags: ['Any HDMI TV', 'Audio call option', 'Self-serve ready'],
    orders: [
      { id: '47', items: ['Now ready — collect!'], time: '', status: 'ready', color: '#2E7D32' },
      { id: '48', items: ['Preparing…'], time: '', status: 'cooking', color: '#F4A261' },
      { id: '49', items: ['Preparing…'], time: '', status: 'cooking', color: '#F4A261' },
    ],
  },
]

export default function KitchenDisplay() {
  return (
    <section id="kitchen-display" className="py-24 px-5 md:px-14 bg-[#0A1628]">
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <div className="text-center max-w-[640px] mx-auto reveal mb-14">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#F4A261] mb-3">
            Display System
          </p>
          <h2 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.9rem)] tracking-tight
                         leading-tight text-white mb-4">
            Kitchen knows. Customer knows.
            <br />
            <span className="text-[#F4A261]">No shouting required.</span>
          </h2>
          <p className="text-white/60 font-light leading-relaxed">
            TalkPOS supports up to 12 simultaneous screens — kitchen display, customer-facing,
            and queue boards. All sync in real time over your local WiFi. No internet needed.
          </p>
        </div>

        {/* 3 screen types */}
        <div className="grid md:grid-cols-3 gap-6 reveal mb-10">
          {screens.map((s) => (
            <div key={s.id}
              className="bg-[#1E3A5F]/30 border border-white/[0.08] rounded-2xl overflow-hidden
                         hover:-translate-y-1 transition-all duration-200">

              {/* Screen mockup */}
              <div className="bg-[#0a1220] p-4 border-b border-white/[0.06]">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{s.icon}</span>
                    <div>
                      <div className="font-bold text-[0.80rem] text-white">{s.title}</div>
                      <div className="text-[0.62rem] text-white/40">{s.subtitle}</div>
                    </div>
                  </div>
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: s.color }} />
                </div>

                {/* Mini order cards */}
                <div className="space-y-2">
                  {s.orders.map((o, i) => (
                    <div key={i}
                      className="rounded-lg px-3 py-2 flex items-center justify-between"
                      style={{ background: `${o.color}12`, border: `1px solid ${o.color}30` }}>
                      {o.id && (
                        <div className="font-display font-black text-sm mr-3" style={{ color: o.color }}>
                          {o.id}
                        </div>
                      )}
                      <div className="flex-1">
                        {o.items.map((item, j) => (
                          <div key={j} className="text-[0.70rem] text-white/80">{item}</div>
                        ))}
                      </div>
                      {o.time && (
                        <div className="text-[0.65rem] font-bold ml-2" style={{ color: o.color }}>{o.time}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="p-5">
                <p className="text-[0.80rem] text-white/60 leading-relaxed font-light mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span key={tag}
                      className="text-[0.65rem] font-semibold px-2.5 py-1 rounded-full border"
                      style={{ color: s.color, borderColor: `${s.color}40`, background: `${s.color}10` }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Photo row */}
        <div className="grid md:grid-cols-3 gap-4 reveal mb-10">
          {[
            { img: '/images/kitchen-display.jpg',  caption: 'Kitchen display — orders fire instantly, priority sorted', fallbackBg: 'linear-gradient(135deg,#92400E 0%,#F4A261 100%)' },
            { img: '/images/customer-display.jpg', caption: 'Customer display — live confirmation, total, payment',     fallbackBg: 'linear-gradient(135deg,#14532D 0%,#2E7D32 100%)' },
            { img: '/images/queue-display.jpg',    caption: 'Queue board — number call on any wall TV',                 fallbackBg: 'linear-gradient(135deg,#1E3A5F 0%,#60A5FA 100%)' },
          ].map((p) => (
            <div key={p.img}
              className="rounded-2xl overflow-hidden relative group h-[180px]"
              style={{ background: p.fallbackBg }}
            >
              <img
                src={p.img}
                alt={p.caption}
                className="absolute inset-0 w-full h-full object-cover brightness-[0.85]
                           group-hover:brightness-[1.0] transition-all duration-500"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 px-4 pb-3">
                <p className="text-[0.72rem] text-white/80 leading-snug">{p.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
          {[
            { val: '12',      unit: ' screens',  label: 'Max simultaneous',    col: 'text-[#F4A261]' },
            { val: '<0.5',    unit: 's',         label: 'Order fire latency',  col: 'text-[#2E7D32]' },
            { val: '100%',    unit: '',          label: 'Works offline',        col: 'text-[#60A5FA]' },
            { val: 'Any',     unit: ' Android',  label: 'TV or tablet screen', col: 'text-white' },
          ].map((s) => (
            <div key={s.label}
              className="bg-[#1E3A5F]/30 border border-white/[0.08] rounded-2xl p-5 text-center">
              <div className={`font-display font-black text-2xl mb-1 ${s.col}`}>
                {s.val}<span className="text-base">{s.unit}</span>
              </div>
              <div className="text-[0.76rem] text-white/50">{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}