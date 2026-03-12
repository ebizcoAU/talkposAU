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

export const metadata: Metadata = {
  title: 'TalkPOS Australia — Run the Lunch Rush with One Person',
  description:
    'QR ordering, voice takeaway, and ATO-ready compliance in one platform. The all-in-one POS that lets you run your café, pub or food truck single-handedly.',
  keywords: [
    'pos australia', 'cafe pos', 'qr ordering', 'payid pos',
    'ato compliant pos', 'voice ordering', 'hospitality software',
    'solo operator cafe', 'food truck pos',
  ],
  openGraph: {
    title: 'TalkPOS Australia — Your cafe. Your rules. One operator.',
    description: 'QR ordering, voice takeaway, ATO-ready compliance. From $39/month.',
    images: [{ url: '/images/og-image.jpg' }],
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