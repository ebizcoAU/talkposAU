// src/components/Footer.tsx — AU version
import Link from 'next/link'

const cols = [
  {
    title: 'Product',
    links: [
      { label: 'Features',        href: '#features'    },
      { label: 'Pricing',         href: '#pricing'     },
      { label: 'Templates',       href: '#templates'   },
      { label: 'ATO Compliance',  href: '#compliance'  },
      { label: 'Blog',            href: '/blog'        },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Centre',      href: '/help'           },
      { label: 'Video Guides',     href: '/video-guides'   },
      { label: 'System Status',    href: '/status'         },
      { label: 'Contact Us',       href: '/contact'        },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy',       href: '/privacy'    },
      { label: 'Terms of Service',     href: '/terms'      },
      { label: 'Compliance Statement', href: '/compliance' },
      { label: 'ABN: 44 091 466 858',  href: '#'           },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E5E7EB]">
      <div className="grid md:grid-cols-4 gap-12 px-page py-14">
        {/* Brand */}
        <div>
          <div className="font-display font-black text-xl mb-2.5 text-[#1F2937]">
            Talk<span className="text-[#1E3A5F]">POS</span>
          </div>
          <p className="text-[0.8rem] text-[#4B5563] leading-relaxed max-w-[240px] font-light mb-4">
            Run your hospitality business smarter. QR ordering, voice takeaway, and ATO-ready
            compliance — from $39/month.
          </p>
          <div className="space-y-1.5">
            <a href="mailto:admin@ebizco.com.au"
              className="flex items-center gap-2 text-[0.75rem] text-[#4B5563] hover:text-[#1E3A5F] transition-colors">
              ✉️ admin@ebizco.com.au
            </a>
            <a href="tel:+61412783123"
              className="flex items-center gap-2 text-[0.75rem] text-[#4B5563] hover:text-[#1E3A5F] transition-colors">
              📞 +61 412 783 123
            </a>
            <a href="https://wa.me/61412783123?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20TalkPOS" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-[0.75rem] text-[#4B5563] hover:text-[#25D366] transition-colors">
              💬 WhatsApp: +61 412 783 123
            </a>
          </div>
          {/* Social links */}
          <div className="flex gap-3 mt-4">
            {['LinkedIn', 'Facebook', 'Instagram'].map((s) => (
              <a key={s} href="#"
                className="text-[0.7rem] text-[#4B5563] hover:text-[#1E3A5F]
                           border border-[#E5E7EB] px-2.5 py-1 rounded-lg transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {cols.map((col) => (
          <div key={col.title}>
            <div className="text-[0.72rem] font-bold tracking-[0.08em] uppercase text-[#4B5563] mb-4">
              {col.title}
            </div>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}
                    className="text-[0.82rem] text-[#4B5563] hover:text-[#1E3A5F] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-[#E5E7EB] px-page py-5 flex flex-wrap justify-between
                      gap-2 text-[0.75rem] text-[#4B5563]">
        <span>
          © 2026 TalkPOS Australia —{' '}
          <a href="https://ebizco.com.au" target="_blank" rel="noopener noreferrer"
            className="hover:text-[#1E3A5F] transition-colors">
            Ebizco Australia Pty Ltd
          </a>{' '}
          (ABN 44 091 466 858). All rights reserved.
        </span>
        <span>Made with ❤️ for Australian small business 🇦🇺</span>
      </div>
    </footer>
  )
}