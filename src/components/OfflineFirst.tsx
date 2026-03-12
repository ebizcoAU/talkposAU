// src/components/OfflineFirst.tsx — AU version

const syncSteps = [
  { icon: '📱', label: 'Transaction on your phone',  sub: 'SQLite local — instant',         color: '#1E3A5F' },
  { icon: '📦', label: 'Queued for sync',             sub: 'Stored safely offline',           color: '#F4A261' },
  { icon: '🌐', label: 'WiFi / 4G detected',          sub: 'Auto-syncs in background',        color: '#2E7D32' },
  { icon: '☁️', label: 'Nexus Cloud',                 sub: 'Backed up & analytics ready',     color: '#1E3A5F' },
]

export default function OfflineFirst() {
  return (
    <section id="offline" className="section-pad bg-white">
      <div className="max-w-[1100px] mx-auto">

        <div className="text-center max-w-[580px] mx-auto reveal mb-14">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#F4A261] mb-3">
            Offline-First Architecture
          </p>
          <h2 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.9rem)] tracking-tight
                         leading-tight text-[#1F2937] mb-4">
            Works 100% when{' '}
            <span className="text-[#2E7D32]">there's no internet.</span>
          </h2>
          <p className="text-[#4B5563] font-light leading-relaxed">
            Regional café with patchy NBN. Food truck at a festival. Market stall in a dead zone.
            TalkPOS runs entirely on-device — connectivity is optional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start reveal">

          {/* Left — sync flow + edge server */}
          <div>
            <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-2xl p-6 mb-5">
              <div className="text-[0.65rem] font-bold text-[#4B5563] uppercase tracking-wide mb-5">
                Data sync flow
              </div>
              <div className="relative">
                {syncSteps.map((s, i) => (
                  <div key={s.label}>
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl
                                      flex-shrink-0 border"
                           style={{ background: `${s.color}10`, borderColor: `${s.color}25` }}>
                        {s.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-[0.85rem] text-[#1F2937]">{s.label}</div>
                        <div className="text-[0.68rem] text-[#4B5563]">{s.sub}</div>
                      </div>
                      <div className="w-2 h-2 rounded-full flex-shrink-0"
                           style={{ background: s.color }} />
                    </div>
                    {i < syncSteps.length - 1 && (
                      <div className="ml-[22px] w-px h-5 bg-[#E5E7EB] my-1" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Edge server */}
            <div className="bg-[#FFF7ED] border border-[#F4A261]/30 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F4A261]/10 border border-[#F4A261]/30
                                flex items-center justify-center text-2xl flex-shrink-0">
                  🖥️
                </div>
                <div>
                  <div className="font-display font-black text-[0.95rem] mb-1.5 text-[#1F2937]">
                    Edge Server (Enterprise)
                  </div>
                  <p className="text-[0.78rem] text-[#4B5563] leading-relaxed mb-3 font-light">
                    Android mini PC installed on-site. Syncs to Nexus Cloud when online —
                    runs fully standalone when offline. Connects up to 32 devices on the local network.
                    ~$600 one-time cost.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Standalone offline', 'Sync 32 devices LAN', 'Nexus Cloud backup', 'Auto-sync'].map((t) => (
                      <span key={t}
                        className="text-[0.65rem] font-bold text-[#C2410C] bg-[#F4A261]/10
                                   border border-[#F4A261]/25 px-2 py-0.5 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — specs */}
          <div className="space-y-4">
            {[
              { icon: '🗄️', color: '#1E3A5F', title: 'Data lives on your device',   desc: 'Full database on-device — transactions, orders, inventory, staff. No server required to operate.' },
              { icon: '🔄', color: '#2E7D32', title: 'Background auto-sync',         desc: 'When WiFi or 4G is detected, the app quietly pushes data to Nexus Cloud. Queue never lost, even if you close the app.' },
              { icon: '🔒', color: '#1E3A5F', title: '100% private by default',      desc: 'Your business data stays on your device. Nexus Cloud backup is encrypted. Export anytime as CSV.' },
              { icon: '💾', color: '#F4A261', title: 'Disaster recovery',             desc: 'Lost your phone? Restore everything from your cloud backup using your ABN and phone number.' },
            ].map((f) => (
              <div key={f.title}
                className="flex gap-4 bg-[#F8F9FA] border border-[#E5E7EB] rounded-2xl p-5
                           hover:border-[#1E3A5F]/20 hover:bg-white
                           hover:shadow-[0_4px_16px_rgba(30,58,95,0.06)] transition-all">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg
                                flex-shrink-0 border"
                     style={{ background: `${f.color}10`, borderColor: `${f.color}25` }}>
                  {f.icon}
                </div>
                <div>
                  <div className="font-bold text-[0.88rem] mb-1 text-[#1F2937]">{f.title}</div>
                  <p className="text-[0.78rem] text-[#4B5563] font-light leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}