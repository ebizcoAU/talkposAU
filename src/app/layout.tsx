import type { Metadata } from 'next'
import { DM_Sans, Syne } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dmsans',
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne',
})

// metadataBase stops Next from resolving og:image against localhost:3000.
// The site is served at talkpos.com.au once DNS moves; set NEXT_PUBLIC_SITE_URL to preview elsewhere.
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://talkpos.com.au'),
  title: 'TalkPOS Australia — till, kitchen, stock and books in one app',
  description:
    'TalkPOS is the till for cafés and takeaways: orders straight to the kitchen, stock, and your sales and expenses with their GST in one place. Rosters, payroll and Xero and MYOB import/export are coming.',
  keywords: [
    'pos australia', 'cafe pos', 'takeaway pos', 'kitchen display',
    'self-order kiosk', 'restaurant stock', 'hospitality software',
  ],
  openGraph: {
    title: 'TalkPOS Australia — your till, kitchen and books. One app.',
    description: 'The till for cafés and takeaways. Join the Canberra pilot.',
    siteName: 'TalkPOS Australia',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'TalkPOS' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU" className={`${dmSans.variable} ${syne.variable}`}>
      <body className="font-sans bg-[#F8F9FA] text-[#1F2937]">{children}</body>
    </html>
  )
}