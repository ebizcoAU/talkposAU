// src/app/page.tsx — TalkPOS Australia
import Navbar        from '@/components/Navbar'
import Hero          from '@/components/Hero'
import HowItWorks    from '@/components/HowItWorks'
import Features      from '@/components/Features'
import BackOffice    from '@/components/BackOffice'
import Pricing       from '@/components/Pricing'
import Faq           from '@/components/Faq'
import CtaBanner     from '@/components/CtaBanner'
import Footer        from '@/components/Footer'
import ScrollReveal  from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <BackOffice />
        <Pricing />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
