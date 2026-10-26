'use client'
// src/components/Navbar.tsx — AU version
import Link from 'next/link'
import { useState } from 'react'
import TalkingPerson from './TalkingPerson'

const links = [
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#features',     label: 'Features' },
  { href: '#compliance',   label: 'ATO Compliance' },
  { href: '#templates',    label: 'Templates' },
  { href: '#pricing',      label: 'Pricing' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-page py-4
                      bg-white/95 backdrop-blur-2xl border-b border-[#E5E7EB] shadow-sm">
        <Link href="/"
          className="flex items-center gap-2 font-display font-black text-2xl tracking-tight text-[#1F2937]"
          onClick={() => setOpen(false)}>
          <TalkingPerson size={30} headColor="#1E3A5F" waveColor="#F4A261" />
          Talk<span className="text-[#1E3A5F]">POS</span><span className="relative top-[0px] ml-[3px] inline-flex items-center" style={{lineHeight:0}}>
            <svg width="33" height="22" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display:'inline-block',borderRadius:'2px',boxShadow:'0 1px 3px rgba(0,0,0,0.25)'}}>
              {/* Blue background */}
              <rect width="60" height="30" fill="#00008B"/>
              {/* Union Jack — left canton */}
              {/* White diagonals */}
              <line x1="0" y1="0" x2="30" y2="15" stroke="white" strokeWidth="3"/>
              <line x1="30" y1="0" x2="0" y2="15" stroke="white" strokeWidth="3"/>
              {/* Red diagonals */}
              <line x1="0" y1="0" x2="30" y2="15" stroke="#CC0000" strokeWidth="1.5"/>
              <line x1="30" y1="0" x2="0" y2="15" stroke="#CC0000" strokeWidth="1.5"/>
              {/* White cross */}
              <rect x="13" y="0" width="4" height="15" fill="white"/>
              <rect x="0" y="5.5" width="30" height="4" fill="white"/>
              {/* Red cross */}
              <rect x="14" y="0" width="2" height="15" fill="#CC0000"/>
              <rect x="0" y="6.5" width="30" height="2" fill="#CC0000"/>
              {/* Commonwealth Star — bottom left */}
              <polygon points="8,17 8.7,19.2 11,19.2 9.2,20.5 9.9,22.7 8,21.4 6.1,22.7 6.8,20.5 5,19.2 7.3,19.2" fill="white"/>
              {/* Southern Cross — right side */}
              {/* Alpha Crucis (largest) */}
              <polygon points="47,20 47.5,21.6 49.1,21.6 47.8,22.5 48.3,24.1 47,23.2 45.7,24.1 46.2,22.5 44.9,21.6 46.5,21.6" fill="white"/>
              {/* Beta Crucis */}
              <polygon points="52,12 52.4,13.3 53.7,13.3 52.7,14 53.1,15.3 52,14.6 50.9,15.3 51.3,14 50.3,13.3 51.6,13.3" fill="white"/>
              {/* Gamma Crucis */}
              <polygon points="47,7 47.4,8.3 48.7,8.3 47.7,9 48.1,10.3 47,9.6 45.9,10.3 46.3,9 45.3,8.3 46.6,8.3" fill="white"/>
              {/* Delta Crucis */}
              <polygon points="53,20 53.4,21.3 54.7,21.3 53.7,22 54.1,23.3 53,22.6 51.9,23.3 52.3,22 51.3,21.3 52.6,21.3" fill="white"/>
              {/* Epsilon Crucis (small) */}
              <polygon points="50,16 50.3,17 51.3,17 50.5,17.6 50.8,18.6 50,18 49.2,18.6 49.5,17.6 48.7,17 49.7,17" fill="white"/>
            </svg>
          </span>
        </Link>

        {/* Desktop nav — lg+ only (1024px+), enough room for all items */}
        <ul className="hidden lg:flex gap-8 list-none items-center">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href}
                className="text-[#4B5563] text-sm font-medium hover:text-[#1E3A5F] transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/61412783123?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20TalkPOS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#25D366] text-sm font-bold px-4 py-2.5 rounded-lg
                         border border-[#25D366]/40 hover:bg-[#25D366]/10 transition-all">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.852L.057 23.7a.5.5 0 00.611.625l5.98-1.56A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.504-5.23-1.385l-.374-.217-3.893 1.016 1.035-3.788-.237-.389A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              WhatsApp
            </a>
          </li>
          <li>
            <Link href="#pricing"
              className="bg-[#1E3A5F] text-white text-sm font-bold px-5 py-2.5 rounded-lg
                         hover:bg-[#162d4a] hover:shadow-[0_8px_24px_rgba(30,58,95,0.3)] transition-all">
              Start Free Trial
            </Link>
          </li>
        </ul>

        {/* Hamburger — below lg */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu">
          <span className={`block w-6 h-0.5 bg-[#1F2937] transition-all duration-200 origin-center
                            ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1F2937] transition-all duration-200
                            ${open ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1F2937] transition-all duration-200 origin-center
                            ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile/tablet drawer */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-200
                       ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
        {/* Slide-in panel */}
        <div className={`absolute top-0 right-0 bottom-0 w-72 bg-white shadow-2xl flex flex-col
                         pt-20 px-6 pb-8 transition-transform duration-200
                         ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          <ul className="flex flex-col gap-1 flex-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-[#1F2937] text-base font-medium py-3 px-3 rounded-xl
                             hover:bg-[#F3F4F6] hover:text-[#1E3A5F] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/61412783123?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20TalkPOS"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block w-full text-center bg-[#25D366] text-white font-bold
                       px-5 py-3.5 rounded-xl hover:bg-[#1da851] transition-all mb-3">
            💬 WhatsApp Us
          </a>
          <Link href="#pricing"
            onClick={() => setOpen(false)}
            className="block w-full text-center bg-[#1E3A5F] text-white font-bold
                       px-5 py-3.5 rounded-xl hover:bg-[#162d4a] transition-all">
            Start Free Trial
          </Link>
        </div>
      </div>
    </>
  )
}