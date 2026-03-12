// src/app/page.tsx — TalkPOS Australia
import Navbar        from '@/components/Navbar'
import Hero          from '@/components/Hero'
import TheProblem    from '@/components/TheProblem'
import HowItWorks    from '@/components/HowItWorks'
import Features      from '@/components/Features'
import SoloOperator  from '@/components/SoloOperator'
import VoiceSection  from '@/components/VoiceSection'
import TrustedPOS    from '@/components/TrustedPOS'
import Accounting    from '@/components/Accounting'
import Payments      from '@/components/Payments'
import OfflineFirst  from '@/components/OfflineFirst'
import Templates     from '@/components/Templates'
import KitchenDisplay from '@/components/KitchenDisplay'
import ROICalculator from '@/components/ROICalculator'
import Payroll       from '@/components/Payroll'
import Testimonials  from '@/components/Testimonials'
import Pricing       from '@/components/Pricing'
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
        <TheProblem />
        <HowItWorks />
        <Features />
        <SoloOperator />
        <VoiceSection />
        <TrustedPOS />
        <Accounting />
        <Payments />
        <OfflineFirst />
        <Templates />
        <KitchenDisplay />
        <ROICalculator />
        <Payroll />
        <Testimonials />
        <Pricing />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}