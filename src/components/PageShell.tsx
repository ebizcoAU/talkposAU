// src/components/PageShell.tsx
import Navbar from './Navbar'
import Footer from './Footer'

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-[#F8F9FA] text-[#1F2937]">
        {children}
      </main>
      <Footer />
    </>
  )
}
