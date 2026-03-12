// src/components/ROICalculator.tsx — Interactive savings calculator
'use client'
import { useState } from 'react'

const presets = [
  { label: '☕ Small Café',  wage: 30, hours: 40,  transactions: 60  },
  { label: '🍺 Pub',         wage: 32, hours: 80,  transactions: 120 },
  { label: '🚚 Food Truck',  wage: 28, hours: 20,  transactions: 80  },
]

export default function ROICalculator() {
  const [wage,  setWage]  = useState(30)
  const [hours, setHours] = useState(40)
  const [txns,  setTxns]  = useState(60)
  const [avg,   setAvg]   = useState(22)

  const monthlyLabourSaving = wage * hours * 4.33
  const monthlyPayIDSaving  = txns * 30 * (avg * 0.016 - 0.50)
  const monthlySavings      = Math.round(monthlyLabourSaving + Math.max(0, monthlyPayIDSaving))
  const annualSavings       = monthlySavings * 12
  const payback             = monthlySavings > 0 ? Math.ceil(39 / monthlySavings * 100) / 100 : 0

  return (
    <section className="section-pad bg-[#1A1A2E] text-white">
      <div className="max-w-[900px] mx-auto">

        <div className="text-center reveal mb-12">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#F4A261] mb-3">
            ROI Calculator
          </p>
          <h2 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.9rem)] tracking-tight
                         leading-tight text-white mb-3">
            See what you'll save.
          </h2>
          <p className="text-white/70 font-light">
            Adjust the sliders below for your business. See your monthly and annual savings instantly.
          </p>
        </div>

        {/* Presets */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 reveal">
          {presets.map((p) => (
            <button key={p.label}
              onClick={() => { setWage(p.wage); setHours(p.hours); setTxns(p.transactions) }}
              className="px-5 py-2.5 rounded-xl border border-white/15 text-sm font-semibold
                         text-white/70 hover:border-[#F4A261]/50 hover:text-[#F4A261]
                         hover:bg-[#F4A261]/5 transition-all">
              {p.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 reveal">
          {/* Inputs */}
          <div className="bg-white/[0.08] border border-white/10 rounded-2xl p-7 space-y-7">

            {[
              { label: 'Average hourly wage',          val: wage,  set: setWage,  min: 20, max: 50,  step: 1,  prefix: '$', suffix: '/hr',   tip: `$${wage}/hr` },
              { label: 'Staff hours saved per week',   val: hours, set: setHours, min: 5,  max: 120, step: 5,  prefix: '',  suffix: 'hrs/wk', tip: `${hours} hrs` },
              { label: 'Daily orders via QR/Voice',    val: txns,  set: setTxns,  min: 10, max: 300, step: 10, prefix: '',  suffix: '/day',   tip: `${txns}/day` },
              { label: 'Average transaction value',    val: avg,   set: setAvg,   min: 5,  max: 100, step: 1,  prefix: '$', suffix: '',       tip: `$${avg}` },
            ].map((field) => (
              <div key={field.label}>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[0.82rem] text-white/70 font-medium">{field.label}</label>
                  <span className="text-[0.82rem] font-bold text-[#F4A261]">
                    {field.prefix}{field.tip}{field.suffix && field.suffix !== '/hr' && field.suffix !== '/day' ? ` ${field.suffix}` : field.suffix}
                  </span>
                </div>
                <input type="range"
                  min={field.min} max={field.max} step={field.step}
                  value={field.val}
                  onChange={(e) => field.set(Number(e.target.value))}
                  className="w-full h-1.5 rounded-full appearance-none cursor-pointer
                             bg-white/10 accent-[#F4A261]"
                />
                <div className="flex justify-between text-[0.68rem] text-white/42 mt-1">
                  <span>{field.prefix}{field.min}{field.suffix === '/hr' || field.suffix === '/day' ? field.suffix : ''}</span>
                  <span>{field.prefix}{field.max}{field.suffix === '/hr' || field.suffix === '/day' ? field.suffix : ''}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Results */}
          <div className="flex flex-col gap-4">
            {/* Monthly */}
            <div className="bg-[#F4A261]/10 border border-[#F4A261]/25 rounded-2xl p-6 flex-1
                            hover:border-[#F4A261]/40 transition-colors">
              <div className="text-[0.7rem] font-bold uppercase tracking-widest text-[#F4A261]/70 mb-2">
                Monthly savings
              </div>
              <div className="font-display font-black text-[clamp(2rem,4vw,3.5rem)] leading-none text-[#F4A261]">
                ${monthlySavings.toLocaleString()}
              </div>
              <div className="text-white/48 text-sm mt-2 space-y-1">
                <div>Labour: ${Math.round(monthlyLabourSaving).toLocaleString()}/mo</div>
                {monthlyPayIDSaving > 0 && <div>PayID fees: ${Math.round(monthlyPayIDSaving).toLocaleString()}/mo</div>}
              </div>
            </div>

            {/* Annual */}
            <div className="bg-[#2E7D32]/10 border border-[#2E7D32]/25 rounded-2xl p-6 flex-1
                            hover:border-[#2E7D32]/40 transition-colors">
              <div className="text-[0.7rem] font-bold uppercase tracking-widest text-[#4ADE80]/70 mb-2">
                Annual savings
              </div>
              <div className="font-display font-black text-[clamp(2rem,4vw,3.5rem)] leading-none text-[#4ADE80]">
                ${annualSavings.toLocaleString()}
              </div>
            </div>

            {/* Payback */}
            <div className="bg-[#1E3A5F]/40 border border-[#1E3A5F]/40 rounded-2xl p-5 flex items-center gap-4">
              <div className="text-3xl">⏱</div>
              <div>
                <div className="text-[0.7rem] font-bold uppercase tracking-widest text-white/60 mb-0.5">
                  Payback period
                </div>
                <div className="font-display font-black text-white text-xl">
                  {payback < 0.1 ? '< 1 day' : payback < 1 ? `${Math.round(payback * 30)} days` : `${payback.toFixed(1)} months`}
                </div>
              </div>
            </div>

            <a href="#pricing"
              className="block text-center bg-[#F4A261] text-[#1A1A2E] font-bold py-3.5 rounded-xl
                         hover:bg-[#E8934A] hover:shadow-[0_8px_24px_rgba(244,162,97,0.4)]
                         transition-all text-sm">
              Start Saving — from $39/month →
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}