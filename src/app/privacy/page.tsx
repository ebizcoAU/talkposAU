// src/app/privacy/page.tsx — text supplied as-is; [brackets] are filled in before deploy.
import PageShell from '@/components/PageShell'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy — TalkPOS Australia',
  description: 'How talkpos.com.au handles server logs and pilot emails.',
}

const link = 'text-[#1E3A5F] underline hover:text-[#162d4a]'

export default function PrivacyPage() {
  return (
    <PageShell>
      <div className="max-w-[760px] mx-auto px-5 py-16">

        <div className="mb-12">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#F4A261] mb-3">Legal</p>
          <h1 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.6rem)] tracking-tight
                         leading-tight text-[#1F2937] mb-3">
            Privacy: talkpos.com.au
          </h1>
          <p className="text-[#6B7280] text-sm">Last updated: [DEPLOY DATE]</p>
        </div>

        <div className="space-y-6 text-[0.95rem] text-[#4B5563] leading-relaxed">
          <p>
            This website is run by EBIZCO AUSTRALIA PTY. LTD. (ABN 44 091 466 858), 29 Farrer Street,
            Braddon ACT 2612.
          </p>
          <p>
            <strong className="text-[#1F2937]">This website:</strong> there are no accounts, no tracking or
            analytics cookies and no ads. Our web host records standard server logs (IP address, browser, page
            and time) for security. Host: [PROVIDER, COUNTRY]; logs are kept [N] days, then deleted.
          </p>
          <p>
            <strong className="text-[#1F2937]">Pilot emails:</strong> if you email us about the Canberra pilot,
            we receive your name, venue, suburb and email address, and anything else you write. We use them only
            to contact you about the pilot. If you don’t join, we delete your email when the places are filled,
            or within 12 months at the latest. Our email is hosted by [EMAIL PROVIDER, COUNTRY].
          </p>
          <p>
            <strong className="text-[#1F2937]">The TalkPOS app:</strong> if you use TalkPOS, your venue’s data is
            covered by the TalkPOS privacy notice (<a className={link} href="https://ebizco.com.au/privacy/talkpos">https://ebizco.com.au/privacy/talkpos</a>),
            and your own account by the TalkKim Privacy Policy (<a className={link} href="https://ebizco.com.au/privacy/talkkim">https://ebizco.com.au/privacy/talkkim</a>).
            To delete your account: <a className={link} href="https://ebizco.com.au/delete-account">https://ebizco.com.au/delete-account</a>.
          </p>
          <p>
            We don’t sell data or show ads. For access, correction or complaints, email{' '}
            <a className={link} href="mailto:admin@ebizco.com.au">admin@ebizco.com.au</a>. We reply within 30 days.
            You can also complain to the OAIC (<a className={link} href="https://www.oaic.gov.au">oaic.gov.au</a>).
          </p>
        </div>

      </div>
    </PageShell>
  )
}
