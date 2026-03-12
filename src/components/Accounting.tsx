// src/components/Accounting.tsx — Complete Business Accounting
// Lead story: 3 ways to record expenses · AI categorisation · outputs: BAS + P&L + Cash Flow
'use client'
import { useState } from 'react'

// ─── Input method demo data ───────────────────────────────────────────────────
const methods = [
  {
    id:      'photo',
    icon:    '📷',
    label:   'Photo / OCR',
    tagline: 'Snap the invoice',
    color:   '#1E3A5F',
    bg:      'bg-[#EFF6FF]',
    border:  'border-[#1E3A5F]/25',
    scenario: 'Delivery docket arrives from Aussie Poultry',
    input:   'Photo of paper invoice',
    steps: [
      { icon: '📷', text: 'Snap the docket' },
      { icon: '🤖', text: 'AI reads: supplier · items · GST · total' },
      { icon: '✅', text: 'One tap confirm → logged' },
    ],
    result: {
      supplier: 'Aussie Poultry',
      amount:   '$142.50',
      items:    '15kg chicken wings',
      category: 'Meat & Poultry · COGS',
      gst:      '$12.95 claimable',
      time:     '8 seconds',
    },
  },
  {
    id:      'voice',
    icon:    '🎙️',
    label:   'Voice',
    tagline: 'Just say it',
    color:   '#F4A261',
    bg:      'bg-[#FFF7ED]',
    border:  'border-[#F4A261]/30',
    scenario: 'Quick cash buy at Coles on the way in',
    input:   '"Spent forty-five on tomatoes at Coles"',
    steps: [
      { icon: '🎙️', text: 'Speak while driving or plating food' },
      { icon: '🤖', text: 'AI parses: $45 · Produce · Coles' },
      { icon: '✅', text: 'Confirm → COGS updated' },
    ],
    result: {
      supplier: 'Coles',
      amount:   '$45.00',
      items:    'Tomatoes (produce)',
      category: 'Produce · COGS',
      gst:      '$4.09 claimable',
      time:     '5 seconds',
    },
  },
  {
    id:      'type',
    icon:    '⌨️',
    label:   'Quick-type',
    tagline: 'Type a few words',
    color:   '#2E7D32',
    bg:      'bg-[#F0FDF4]',
    border:  'border-[#2E7D32]/25',
    scenario: 'Monthly power bill just arrived by email',
    input:   '"power 420"',
    steps: [
      { icon: '⌨️', text: 'Type "power 420"' },
      { icon: '🤖', text: 'AI suggests: AGL · Utilities · copy last?' },
      { icon: '✅', text: 'One tap → BAS updated' },
    ],
    result: {
      supplier: 'AGL Energy',
      amount:   '$420.00',
      items:    'Electricity — March',
      category: 'Utilities · Overhead',
      gst:      '$38.18 claimable',
      time:     '6 seconds',
    },
  },
]

// ─── AI categorisation examples by industry ──────────────────────────────────
const industries = [
  {
    name: 'Café',
    emoji: '☕',
    cogs:     ['Coffee & beans', 'Milk & dairy', 'Bread & pastry', 'Disposables (cups/lids)'],
    overhead: ['Rent', 'Power', 'Coffee machine maintenance', 'POS subscription'],
  },
  {
    name: 'Pub',
    emoji: '🍺',
    cogs:     ['Draught beer kegs', 'Spirits & wine', 'Chicken & meat', 'Frozen meals'],
    overhead: ['Liquor licence', 'RSA training', 'Security', 'Gaming licence'],
  },
  {
    name: 'Fish & Chips',
    emoji: '🐟',
    cogs:     ['Fresh fish (flake/whiting)', 'Potatoes', 'Cooking oil', 'Packaging'],
    overhead: ['Oil disposal', 'Cold storage power', 'Fryer maintenance', 'Rent'],
  },
  {
    name: 'Food Truck',
    emoji: '🚚',
    cogs:     ['Ingredients (varies)', 'Packaging & napkins', 'Gas (cooking)', 'Ice'],
    overhead: ['Fuel', 'Market stall fees', 'Generator', 'Insurance'],
  },
]

// ─── Output tabs ──────────────────────────────────────────────────────────────
const plRevenue = [
  { cat: 'Food sales',     val: 42800 },
  { cat: 'Beverage sales', val: 18200 },
  { cat: 'Retail',         val:  3500 },
]
const plCogs = [
  { cat: 'Food COGS',     val: 14980, pct: 35 },
  { cat: 'Beverage COGS', val:  4550, pct: 25 },
  { cat: 'Retail COGS',   val:  2100, pct: 60 },
]
const plOpex = [
  { cat: 'Wages',     val: 18400 },
  { cat: 'Rent',      val:  3800 },
  { cat: 'Power',     val:   420 },
  { cat: 'Insurance', val:   350 },
  { cat: 'Card fees', val:  1032 },
  { cat: 'Other',     val:   380 },
]
const TOTAL_REV  = plRevenue.reduce((s, r) => s + r.val, 0)
const TOTAL_COGSP= plCogs.reduce((s, c) => s + c.val, 0)
const GROSS_P    = TOTAL_REV - TOTAL_COGSP
const TOTAL_OPEX = plOpex.reduce((s, o) => s + o.val, 0)
const NET_P      = GROSS_P - TOTAL_OPEX

const bills = [
  { due: '28 Mar', item: 'Rent — March',          amount: 3800, status: 'upcoming' },
  { due: '15 Mar', item: 'Power — Feb',            amount:  420, status: 'paid'    },
  { due: '18 Mar', item: 'Poultry invoice #4421',  amount: 1240, status: 'sched'   },
  { due: '21 Apr', item: 'BAS (GST)',              amount: 2100, status: 'upcoming' },
]

const fmt = (n: number) => '$' + n.toLocaleString()
const pct = (a: number, b: number) => Math.round((a / b) * 100)

const statusStyle: Record<string, string> = {
  upcoming: 'text-[#C2410C] bg-orange-50 border-orange-200',
  paid:     'text-[#2E7D32] bg-green-50  border-green-200',
  sched:    'text-[#1E3A5F] bg-blue-50   border-blue-200',
}
const statusLabel: Record<string, string> = {
  upcoming: '⏳ Upcoming', paid: '✓ Paid', sched: '⏳ Scheduled',
}

type OutTab = 'pl' | 'bas' | 'cashflow'

// ─── Component ────────────────────────────────────────────────────────────────
export default function Accounting() {
  const [activeMethod, setActiveMethod] = useState(0)
  const [activeIndustry, setActiveIndustry] = useState(0)
  const [outTab, setOutTab] = useState<OutTab>('pl')

  const m  = methods[activeMethod]
  const ind = industries[activeIndustry]

  return (
    <section id="accounting" className="section-pad bg-[#F8F4EF]">
      <div className="max-w-[1100px] mx-auto">

        {/* ── §1  Hero header ── */}
        <div className="text-center max-w-[660px] mx-auto reveal mb-14">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#F4A261] mb-3">
            Complete Business Accounting
          </p>
          <h2 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.9rem)] tracking-tight
                         leading-tight text-[#1F2937] mb-4">
            Record any expense in{' '}
            <span className="text-[#1E3A5F]">under 15 seconds.</span>
          </h2>
          <p className="text-[#4B5563] font-light leading-relaxed mb-5">
            Three ways to capture costs. AI that already knows your business.
            Every dollar in AND every dollar out — so you know your{' '}
            <strong className="text-[#2E7D32] font-semibold">actual profit</strong>,
            not just your revenue.
          </p>
          <div className="inline-flex items-center gap-2.5 bg-[#1E3A5F] text-white text-sm
                          font-bold px-5 py-2.5 rounded-full shadow-lg">
            <span className="text-[#F4A261]">✓</span>
            No Xero · No MYOB · No QuickBooks · No bookkeeper
          </div>
        </div>

        {/* ── §2  3 Input methods — hero story ── */}
        <div className="grid md:grid-cols-2 gap-12 items-start reveal mb-20">

          {/* Left — method selector + copy */}
          <div>
            <p className="font-bold text-sm text-[#1F2937] mb-4">
              Choose how you record it — all three always available:
            </p>

            {/* Method tabs */}
            <div className="flex gap-2 mb-6">
              {methods.map((me, i) => (
                <button key={me.id} onClick={() => setActiveMethod(i)}
                  className={`flex-1 flex flex-col items-center gap-1 py-3 px-2 rounded-xl border
                              text-xs font-bold transition-all
                              ${activeMethod === i
                                ? 'bg-[#1E3A5F] text-white border-[#1E3A5F] shadow-md'
                                : 'bg-white text-[#4B5563] border-[#E5E7EB] hover:border-[#1E3A5F]/30'}`}>
                  <span className="text-lg">{me.icon}</span>
                  {me.label}
                </button>
              ))}
            </div>

            {/* Active method detail */}
            <div className={`rounded-2xl border p-5 mb-6 ${m.bg} ${m.border}`}>
              <div className="text-[0.73rem] font-black uppercase tracking-wide mb-2"
                   style={{ color: m.color }}>
                Scenario: {m.scenario}
              </div>
              {m.id === 'voice' && (
                <div className="italic text-[#1F2937] font-light text-sm mb-4 bg-white/60
                                rounded-xl px-4 py-2.5 border border-white/80">
                  {m.input}
                </div>
              )}
              {m.id !== 'voice' && (
                <div className="text-[#4B5563] text-sm mb-4">{m.input}</div>
              )}
              <div className="space-y-2.5">
                {m.steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white border border-white/80 shadow-sm
                                    flex items-center justify-center text-base flex-shrink-0">
                      {step.icon}
                    </div>
                    <div className="text-sm text-[#4B5563]">{step.text}</div>
                    {i < m.steps.length - 1 && (
                      <div className="ml-auto text-[#6B7280] text-xs">→</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Example transactions */}
            <p className="font-bold text-sm text-[#1F2937] mb-3">More examples:</p>
            <div className="space-y-2.5">
              {[
                { input: '"chicken 142 aussie poultry"', result: 'Meat · COGS · $142 · GST $12.95' },
                { input: '"rent 3800"',                  result: 'Rent · Overhead · $3,800 · GST $0' },
                { input: '"wages sarah fri"',            result: 'Wages · Labour · payroll flagged' },
                { input: 'Snap: Officeworks receipt',   result: 'Packaging · COGS · $38.50 · GST $3.50' },
                { input: '🛵 Uber Eats order auto-logged', result: 'Commission $13.00 → Platform Fees · P&L updated' },
              ].map((ex) => (
                <div key={ex.input}
                     className="bg-white border border-[#E5E7EB] rounded-xl px-4 py-3
                                hover:border-[#F4A261]/40 transition-colors">
                  <div className="text-sm italic text-[#1F2937] font-light mb-1">{ex.input}</div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#2E7D32] text-xs font-bold">🤖 AI →</span>
                    <span className="text-[0.73rem] text-[#4B5563]">{ex.result}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — live result card */}
          <div className="space-y-5">

            {/* AI result mockup */}
            <div className="bg-[#1A1A2E] border border-white/[0.14] rounded-2xl overflow-hidden
                            shadow-[0_24px_60px_rgba(30,58,95,0.25)]">

              {/* Header */}
              <div className="bg-[#1E3A5F] px-5 py-3.5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-base
                                flex-shrink-0 bg-[#F4A261]">
                  {m.icon}
                </div>
                <div>
                  <div className="text-white font-bold text-sm">TalkPOS Expense Entry</div>
                  <div className="text-[#4ADE80] text-xs font-semibold">🤖 AI recognised</div>
                </div>
                <div className="ml-auto text-[0.68rem] text-white/60 bg-white/[0.08]
                                border border-white/[0.14] rounded-full px-2.5 py-1 font-bold">
                  {m.result.time}
                </div>
              </div>

              {/* Input echo */}
              <div className="px-5 py-3 bg-white/[0.05] border-b border-white/[0.14]">
                <div className="text-[0.68rem] text-white/60 uppercase tracking-widest mb-1">
                  {m.id === 'photo' ? 'Scanned from invoice' :
                   m.id === 'voice' ? 'You said' : 'You typed'}
                </div>
                <div className="text-white text-sm italic font-light">{m.input}</div>
              </div>

              {/* AI parsed fields */}
              <div className="px-5 py-4 space-y-2.5">
                <div className="text-[0.68rem] text-white/60 uppercase tracking-widest mb-3">
                  AI extracted:
                </div>
                {[
                  { label: 'Supplier',  val: m.result.supplier },
                  { label: 'Amount',    val: m.result.amount   },
                  { label: 'Items',     val: m.result.items    },
                  { label: 'Category', val: m.result.category },
                  { label: 'GST',      val: m.result.gst      },
                ].map((f) => (
                  <div key={f.label} className="flex justify-between items-center">
                    <span className="text-white/60 text-xs">{f.label}</span>
                    <span className="text-white text-xs font-semibold bg-white/[0.08]
                                     border border-white/[0.14] rounded-lg px-2.5 py-1">
                      {f.val}
                    </span>
                  </div>
                ))}
              </div>

              {/* Confirm row */}
              <div className="mx-4 mb-4 bg-[#2E7D32]/15 border border-[#2E7D32]/30 rounded-xl
                              px-4 py-3 flex items-center gap-3">
                <div className="flex-1">
                  <div className="text-[0.68rem] text-white/60 mb-1.5">
                    Auto-confirm in 5s or tap to edit
                  </div>
                  <div className="h-1.5 bg-white/[0.10] rounded-full overflow-hidden">
                    <div className="h-full bg-[#4ADE80] rounded-full animate-countdown w-full" />
                  </div>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <button className="text-xs font-bold text-[#4ADE80] border border-[#4ADE80]/40
                                     bg-[#2E7D32]/20 rounded-lg px-3 py-1.5">✓ Save</button>
                  <button className="text-xs font-bold text-white/60 border border-white/[0.14]
                                     bg-white/[0.05] rounded-lg px-3 py-1.5">Edit</button>
                </div>
              </div>

              {/* What updates */}
              <div className="px-5 pb-4">
                <div className="text-[0.68rem] text-white/48 uppercase tracking-widest mb-2">
                  This updates in real time:
                </div>
                <div className="flex gap-2 flex-wrap">
                  {['📊 P&L', '🏛️ BAS', '💰 Cash flow', '🔢 COGS'].map((t) => (
                    <span key={t}
                          className="text-[0.68rem] font-bold text-[#F4A261] bg-[#F4A261]/10
                                     border border-[#F4A261]/25 rounded-full px-2.5 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Speed callout */}
            <div className="grid grid-cols-3 gap-3">
              {methods.map((me, i) => (
                <div key={me.id}
                     onClick={() => setActiveMethod(i)}
                     className={`rounded-xl border p-3.5 text-center cursor-pointer transition-all
                       ${activeMethod === i
                         ? 'bg-[#1E3A5F] border-[#1E3A5F] shadow-md'
                         : 'bg-white border-[#E5E7EB] hover:border-[#1E3A5F]/30'}`}>
                  <div className="text-2xl mb-1">{me.icon}</div>
                  <div className={`text-[0.68rem] font-bold
                    ${activeMethod === i ? 'text-white' : 'text-[#1F2937]'}`}>
                    {me.label}
                  </div>
                  <div className={`text-[0.64rem] mt-0.5
                    ${activeMethod === i ? 'text-white/70' : 'text-[#4B5563]'}`}>
                    {me.result.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── §3  AI categorisation by industry ── */}
        <div className="reveal mb-20">
          <div className="text-center max-w-[560px] mx-auto mb-8">
            <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#F4A261] mb-2">
              AI That Knows Your Business
            </p>
            <h3 className="font-display font-black text-[clamp(1.4rem,2.5vw,2rem)]
                           tracking-tight text-[#1F2937] mb-3">
              Categories auto-loaded for your industry.
              <span className="text-[#1E3A5F]"> Then learns your habits.</span>
            </h3>
            <p className="text-[#4B5563] text-sm font-light leading-relaxed">
              TalkPOS reads your industry template, your menu, and your ABN registration.
              Pre-loads the expense categories you'll actually use — then refines them
              as you record.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Industry selector */}
            <div className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden
                            shadow-[0_4px_20px_rgba(30,58,95,0.06)]">
              <div className="bg-[#1E3A5F] px-5 py-3.5">
                <div className="text-white font-display font-black text-sm">
                  Industry Profile Detection
                </div>
                <div className="text-white/60 text-xs mt-0.5">
                  Pre-loaded on onboarding from your ABN + template
                </div>
              </div>
              <div className="divide-y divide-[#E5E7EB]">
                {industries.map((ind, i) => (
                  <button key={ind.name} onClick={() => setActiveIndustry(i)}
                    className={`w-full text-left px-5 py-3.5 flex items-center gap-3 transition-colors
                      ${activeIndustry === i
                        ? 'bg-[#EFF6FF] border-l-4 border-l-[#1E3A5F]'
                        : 'hover:bg-[#F8F9FA] border-l-4 border-l-transparent'}`}>
                    <span className="text-2xl">{ind.emoji}</span>
                    <div>
                      <div className={`font-bold text-sm
                        ${activeIndustry === i ? 'text-[#1E3A5F]' : 'text-[#1F2937]'}`}>
                        {ind.name}
                      </div>
                      <div className="text-[0.68rem] text-[#4B5563]">
                        {ind.cogs.length + ind.overhead.length} pre-loaded categories
                      </div>
                    </div>
                    {activeIndustry === i && (
                      <span className="ml-auto text-[#1E3A5F] font-bold text-xs">Selected ✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Active industry categories */}
            <div className="space-y-4">
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5
                              shadow-[0_4px_20px_rgba(30,58,95,0.06)]">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{ind.emoji}</span>
                  <div>
                    <div className="font-bold text-[#1F2937] text-sm">{ind.name}</div>
                    <div className="text-[0.68rem] text-[#4B5563]">AI-detected expense categories</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-[0.68rem] font-black text-[#D32F2F] uppercase tracking-wide mb-2">
                      COGS (Cost of Goods Sold)
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {ind.cogs.map((c) => (
                        <span key={c}
                              className="text-[0.73rem] font-semibold px-2.5 py-1 rounded-full
                                         bg-red-50 border border-red-200 text-[#D32F2F]">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-[0.68rem] font-black text-[#1E3A5F] uppercase tracking-wide mb-2">
                      Overheads
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {ind.overhead.map((o) => (
                        <span key={o}
                              className="text-[0.73rem] font-semibold px-2.5 py-1 rounded-full
                                         bg-[#EFF6FF] border border-[#1E3A5F]/20 text-[#1E3A5F]">
                          {o}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A2E] rounded-2xl p-5 text-white">
                <div className="font-bold text-[#F4A261] text-sm mb-3">
                  🤖 Then it learns your habits
                </div>
                <ul className="space-y-2 text-sm text-white/70">
                  {[
                    '"Aussie Poultry" → always Meat · COGS',
                    '"Tuesday ~$140" → auto-suggest Poultry restock',
                    '"AGL" → always Utilities · Overhead',
                    'New supplier? AI guesses from ABN lookup',
                    'Wrong category? Correct once — remembered forever',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-[#F4A261] flex-shrink-0">→</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ── §4  The three outputs ── */}
        <div className="reveal">
          <div className="text-center max-w-[500px] mx-auto mb-8">
            <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#F4A261] mb-2">
              Three Outputs · One Source of Truth
            </p>
            <h3 className="font-display font-black text-[clamp(1.4rem,2.5vw,2rem)]
                           tracking-tight text-[#1F2937]">
              Every expense you record updates all three — instantly.
            </h3>
          </div>

          {/* Output tabs */}
          <div className="flex justify-center gap-2 mb-6">
            {([
              { id: 'pl',       label: '📊 P&L Statement',    },
              { id: 'bas',      label: '🏛️ BAS Report',       },
              { id: 'cashflow', label: '💰 Cash Flow',         },
            ] as { id: OutTab; label: string }[]).map((t) => (
              <button key={t.id} onClick={() => setOutTab(t.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all
                  ${outTab === t.id
                    ? 'bg-[#1E3A5F] text-white border-[#1E3A5F] shadow-md'
                    : 'bg-white text-[#4B5563] border-[#E5E7EB] hover:border-[#1E3A5F]/30'}`}>
                {t.label}
              </button>
            ))}
          </div>

          {/* ── P&L ── */}
          {outTab === 'pl' && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden
                              shadow-[0_4px_20px_rgba(30,58,95,0.07)]">
                <div className="bg-[#1E3A5F] px-6 py-4">
                  <div className="text-white font-display font-black text-base">
                    Profit & Loss — March 2026
                  </div>
                  <div className="text-white/60 text-sm">Month to date · Updates every transaction</div>
                </div>
                <div className="px-6 py-5 space-y-4 text-sm">
                  <div>
                    <div className="text-[0.68rem] font-black text-[#6B7280] uppercase tracking-wide mb-2">
                      Revenue
                    </div>
                    {plRevenue.map(r => (
                      <div key={r.cat} className="flex justify-between py-1">
                        <span className="text-[#4B5563]">{r.cat}</span>
                        <span className="font-semibold text-[#1F2937]">{fmt(r.val)}</span>
                      </div>
                    ))}
                    <div className="flex justify-between pt-2 mt-1 border-t border-[#E5E7EB] font-bold">
                      <span className="text-[#1F2937]">Total Revenue</span>
                      <span className="text-[#1E3A5F] font-display font-black">{fmt(TOTAL_REV)}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-[0.68rem] font-black text-[#6B7280] uppercase tracking-wide mb-2">
                      Cost of Goods Sold
                    </div>
                    {plCogs.map(c => (
                      <div key={c.cat} className="flex justify-between py-1">
                        <span className="text-[#4B5563]">{c.cat} <span className="text-[#6B7280]">({c.pct}%)</span></span>
                        <span className="font-semibold text-[#D32F2F]">−{fmt(c.val)}</span>
                      </div>
                    ))}
                    <div className="flex justify-between pt-2 mt-1 border-t border-[#E5E7EB] font-bold">
                      <span className="text-[#1F2937]">Gross Profit</span>
                      <span className="text-[#2E7D32] font-display font-black">
                        {fmt(GROSS_P)} <span className="text-sm font-normal">({pct(GROSS_P,TOTAL_REV)}%)</span>
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="text-[0.68rem] font-black text-[#6B7280] uppercase tracking-wide mb-2">
                      Operating Expenses
                    </div>
                    {plOpex.map(o => (
                      <div key={o.cat} className="flex justify-between py-1">
                        <span className="text-[#4B5563]">{o.cat}</span>
                        <span className="font-semibold text-[#D32F2F]">−{fmt(o.val)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-[#F0FDF4] border border-[#2E7D32]/25 rounded-xl px-4 py-3
                                  flex justify-between items-center">
                    <div>
                      <div className="text-[0.68rem] text-[#2E7D32] font-bold uppercase">Net Profit</div>
                      <div className="font-display font-black text-[#2E7D32] text-2xl">{fmt(NET_P)}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-display font-black text-[#2E7D32] text-4xl">
                        {pct(NET_P,TOTAL_REV)}%
                      </div>
                      <div className="text-[0.68rem] text-[#2E7D32] font-bold uppercase">margin</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-[#EFF6FF] border border-[#1E3A5F]/15 rounded-2xl p-5">
                  <div className="font-bold text-[#1E3A5F] mb-2">
                    Why this replaces Xero
                  </div>
                  <ul className="space-y-2 text-sm text-[#4B5563]">
                    {[
                      'Updates live — every sale, every expense you enter',
                      'Drill into any line — see every transaction behind it',
                      'Compare this month vs last month vs same time last year',
                      'Export to PDF or CSV — your accountant can read it directly',
                      'No manual journal entries. No reconciliation ritual.',
                    ].map(t => (
                      <li key={t} className="flex gap-2">
                        <span className="text-[#2E7D32] flex-shrink-0 font-bold">✓</span>{t}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Delivery commission breakdown */}
                <div className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden">
                  <div className="bg-[#FF6B35] px-5 py-3">
                    <div className="text-white font-bold text-sm">🛵 Delivery Platform P&L</div>
                    <div className="text-white/80 text-xs">Commission auto-deducted per order</div>
                  </div>
                  <div className="divide-y divide-[#E5E7EB]">
                    <div className="grid grid-cols-4 px-4 py-2 bg-[#F8F9FA]">
                      {['Platform','Gross','Commission','Net'].map(h => (
                        <div key={h} className="text-[0.64rem] font-black text-[#6B7280] uppercase">{h}</div>
                      ))}
                    </div>
                    {[
                      { platform: '🟠 Uber Eats', gross: '$4,200', comm: '−$1,260 (30%)', net: '$2,940' },
                      { platform: '🔴 DoorDash',  gross: '$2,800', comm: '−$700 (25%)',   net: '$2,100' },
                      { platform: '🟡 Menulog',   gross: '$1,900', comm: '−$380 (20%)',   net: '$1,520' },
                    ].map(r => (
                      <div key={r.platform} className="grid grid-cols-4 px-4 py-2.5 text-xs items-center">
                        <span className="font-medium text-[#1F2937]">{r.platform}</span>
                        <span className="text-[#4B5563]">{r.gross}</span>
                        <span className="text-[#D32F2F] font-semibold">{r.comm}</span>
                        <span className="text-[#2E7D32] font-bold">{r.net}</span>
                      </div>
                    ))}
                    <div className="grid grid-cols-4 px-4 py-2.5 bg-[#F0FDF4] text-xs font-bold">
                      <span className="text-[#1F2937]">Total</span>
                      <span className="text-[#1F2937]">$8,900</span>
                      <span className="text-[#D32F2F]">−$2,340</span>
                      <span className="text-[#2E7D32]">$6,560</span>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-[#FFF4EE] border-t border-[#FF6B35]/15">
                    <p className="text-[0.73rem] text-[#4B5563]">
                      <strong className="text-[#FF6B35]">$2,340 in commissions</strong> this month —
                      auto-logged as Platform Fees expense. Your P&L always shows real delivery profit.
                    </p>
                  </div>
                </div>
                <div className="bg-[#1A1A2E] rounded-2xl p-5 text-white">
                  <div className="font-bold text-[#F4A261] text-sm mb-2">
                    The math for a solo café owner
                  </div>
                  <div className="space-y-1.5 text-sm">
                    {[
                      { label: 'Xero Growing + POS',     val: '$85 + $79 = $164/mo', red: true  },
                      { label: 'TalkPOS Pro — all of it', val: '$79/mo total',         red: false },
                    ].map(r => (
                      <div key={r.label}
                           className={`flex justify-between rounded-xl px-3 py-2
                             ${r.red ? 'bg-[#D32F2F]/15 border border-[#D32F2F]/25'
                                     : 'bg-[#2E7D32]/20 border border-[#4ADE80]/30'}`}>
                        <span className="text-white/80 text-xs">{r.label}</span>
                        <span className={`font-bold text-xs ${r.red ? 'text-[#F87171]' : 'text-[#4ADE80]'}`}>
                          {r.val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── BAS ── */}
          {outTab === 'bas' && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden
                              shadow-[0_4px_20px_rgba(30,58,95,0.07)]">
                <div className="bg-[#1E3A5F] px-6 py-4 flex justify-between items-center">
                  <div>
                    <div className="text-white font-display font-black text-base">BAS Summary</div>
                    <div className="text-white/60 text-sm">Jan–Mar 2026 · Auto-compiled</div>
                  </div>
                  <div className="bg-[#2E7D32]/20 border border-[#4ADE80]/30 rounded-full
                                  px-3 py-1 text-[#4ADE80] text-[0.73rem] font-bold">
                    ✓ ATO Ready
                  </div>
                </div>
                <div className="px-6 py-5 space-y-4">
                  {[
                    { group: 'GST on Sales', items: [
                      { label: 'Total sales (G10)',   val: '$124,500', color: 'text-[#1F2937]' },
                      { label: 'GST collected (G11)', val: '$12,450',  color: 'text-[#D32F2F]' },
                    ]},
                    { group: 'GST on Purchases', items: [
                      { label: 'Total purchases (G20)', val: '$78,300', color: 'text-[#1F2937]' },
                      { label: 'GST paid (G21)',        val: '$7,830',  color: 'text-[#2E7D32]' },
                    ]},
                    { group: 'Payroll', items: [
                      { label: 'PAYG withholding (W1)', val: '$8,240', color: 'text-[#1F2937]' },
                      { label: 'PAYG instalment (W2)',  val: '$2,100', color: 'text-[#1F2937]' },
                    ]},
                  ].map(sec => (
                    <div key={sec.group}>
                      <div className="text-[0.68rem] font-black text-[#6B7280] uppercase tracking-wide mb-2">
                        {sec.group}
                      </div>
                      <div className="bg-[#F8F9FA] rounded-xl divide-y divide-[#E5E7EB]">
                        {sec.items.map(item => (
                          <div key={item.label} className="flex justify-between px-4 py-2.5">
                            <span className="text-sm text-[#4B5563]">{item.label}</span>
                            <span className={`text-sm font-bold ${item.color}`}>{item.val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="bg-[#FEF2F2] border border-red-200 rounded-xl px-4 py-3
                                  flex justify-between items-center">
                    <span className="font-bold text-[#D32F2F] text-sm">Net GST Payable</span>
                    <span className="font-display font-black text-[#D32F2F] text-2xl">$4,620</span>
                  </div>
                </div>
                <div className="px-6 pb-5 grid grid-cols-3 gap-2">
                  {[
                    { label: '📤 Export to ATO',         cls: 'bg-[#1E3A5F] text-white' },
                    { label: '📄 Download PDF',           cls: 'bg-white text-[#1E3A5F] border border-[#1E3A5F]/30' },
                    { label: '✉️ Accountant access',      cls: 'bg-white text-[#4B5563] border border-[#E5E7EB]' },
                  ].map(btn => (
                    <button key={btn.label}
                      className={`py-2.5 rounded-xl text-[0.73rem] font-bold
                                  hover:opacity-85 transition-opacity ${btn.cls}`}>
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="bg-[#EFF6FF] border border-[#1E3A5F]/15 rounded-2xl p-6 space-y-4">
                <div className="font-bold text-[#1E3A5F]">No more BAS panic</div>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  Because every expense you enter is already GST-tagged, your BAS compiles
                  itself in the background — all quarter long. When lodgement is due,
                  you're not hunting for receipts. You tap Export.
                </p>
                <ul className="space-y-2 text-sm text-[#4B5563]">
                  {[
                    'GST auto-split on every expense you enter',
                    'Claimable vs non-claimable tracked separately',
                    'Accountant gets free view-only access — no Xero needed',
                    'ATO pre-fill compatible format',
                  ].map(t => (
                    <li key={t} className="flex gap-2">
                      <span className="text-[#2E7D32] font-bold flex-shrink-0">✓</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* ── CASH FLOW ── */}
          {outTab === 'cashflow' && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden
                              shadow-[0_4px_20px_rgba(30,58,95,0.07)]">
                <div className="bg-[#1E3A5F] px-6 py-4">
                  <div className="text-white font-display font-black text-base">Upcoming Bills</div>
                  <div className="text-white/60 text-sm">Know what you owe before it bites</div>
                </div>
                <div className="divide-y divide-[#E5E7EB]">
                  <div className="grid grid-cols-4 px-5 py-2.5 bg-[#F8F9FA]">
                    {['Due','Bill','Amount','Status'].map(h => (
                      <div key={h} className="text-[0.68rem] font-black text-[#6B7280] uppercase">{h}</div>
                    ))}
                  </div>
                  {bills.map(b => (
                    <div key={b.item} className="grid grid-cols-4 px-5 py-3.5 items-center">
                      <div className="text-sm text-[#4B5563]">{b.due}</div>
                      <div className="text-sm font-medium text-[#1F2937] pr-1">{b.item}</div>
                      <div className="text-sm font-bold text-[#1F2937]">{fmt(b.amount)}</div>
                      <span className={`text-[0.68rem] font-bold px-2 py-0.5 rounded-full border w-fit
                                        ${statusStyle[b.status]}`}>
                        {statusLabel[b.status]}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="px-6 py-4">
                  <div className="text-[0.73rem] font-black text-[#6B7280] uppercase tracking-wide mb-3">
                    7-Day Forecast
                  </div>
                  <div className="space-y-2 text-sm">
                    {[
                      { label: 'Cash in bank today',  val: '+$4,200', color: 'text-[#1E3A5F]' },
                      { label: 'Expected sales',       val: '+$8,500', color: 'text-[#2E7D32]' },
                      { label: 'Bills due',            val: '−$2,340', color: 'text-[#D32F2F]' },
                      { label: 'Payroll (Fri)',        val: '−$3,200', color: 'text-[#D32F2F]' },
                    ].map(r => (
                      <div key={r.label} className="flex justify-between">
                        <span className="text-[#4B5563]">{r.label}</span>
                        <span className={`font-bold ${r.color}`}>{r.val}</span>
                      </div>
                    ))}
                    <div className="border-t border-[#E5E7EB] pt-2 flex justify-between font-bold">
                      <span className="text-[#1F2937]">Projected balance</span>
                      <span className="text-[#2E7D32] font-display font-black text-xl">$7,160</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-[#FFF7ED] border border-[#F4A261]/40 rounded-2xl p-5">
                  <div className="font-bold text-[#C2410C] mb-2">⚠️ GST due April 21</div>
                  <p className="text-sm text-[#4B5563] leading-relaxed">
                    <strong>$2,100</strong> BAS payment coming. TalkPOS suggests setting aside{' '}
                    <strong>$300/week</strong> from now — and can auto-reserve it from weekly takings.
                  </p>
                </div>
                <div className="bg-[#EFF6FF] border border-[#1E3A5F]/15 rounded-2xl p-5">
                  <div className="font-bold text-[#1E3A5F] mb-3">
                    Cash flow is just expenses + revenue combined
                  </div>
                  <p className="text-sm text-[#4B5563] leading-relaxed">
                    Every expense you enter — whether it's a supplier invoice, a power bill, or
                    a quick cash buy — feeds into your cash flow forecast automatically.
                    No separate setup. No syncing with a bank feed.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}