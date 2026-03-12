// src/components/PageShell.tsx
import Navbar from './Navbar'
import Footer from './Footer'

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-[#0D0D0D] text-[#F5F0E8]">
        {children}
      </main>
      <Footer />
    </>
  )
}
