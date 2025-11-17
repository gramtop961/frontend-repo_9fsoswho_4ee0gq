import { useEffect, useRef, useState } from 'react'
import SideRails from './components/SideRails'
import Sections from './components/Sections'
import Hero from './components/Hero'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const mainRef = useRef(null)

  const handleSelect = (key) => {
    setActiveSection(key)
    const el = document.getElementById(key)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const onCall = () => {
    window.location.href = 'tel:+15555551234'
  }

  const onDirections = () => {
    const q = encodeURIComponent("Tabo's Piggly Wiggly")
    window.open(`https://www.google.com/maps/search/?api=1&query=${q}`, '_blank')
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting)
        if (visible) setActiveSection(visible.target.id)
      },
      { root: null, rootMargin: '-20% 0px -70% 0px', threshold: [0, 0.2, 0.5] }
    )
    const sections = document.querySelectorAll('section[id]')
    sections.forEach((s) => observer.observe(s))
    return () => sections.forEach((s) => observer.unobserve(s))
  }, [])

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.08),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.08),transparent_40%)]">
      <SideRails onSelect={handleSelect} activeSection={activeSection} />

      <main ref={mainRef} className="relative z-10 container mx-auto px-4 md:px-24 py-6 md:py-10">
        <div className="grid grid-cols-1 gap-6">
          <div id="home" className="scroll-mt-24">
            <Hero onCall={onCall} onDirections={onDirections} />
          </div>

          {/* Category sections */}
          <section id="grocery" className="scroll-mt-24 rounded-3xl bg-white/70 backdrop-blur-sm border border-white/50 shadow-sm p-6">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Grocery</h2>
            <p className="text-gray-700">Everyday essentials, pantry staples, snacks, beverages, and more—all at neighborhood-friendly prices.</p>
          </section>

          <section id="produce" className="scroll-mt-24 rounded-3xl bg-white/70 backdrop-blur-sm border border-white/50 shadow-sm p-6">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Produce</h2>
            <p className="text-gray-700">Crisp fruits and vegetables, sourced fresh with an emphasis on local when available.</p>
          </section>

          <section id="meats" className="scroll-mt-24 rounded-3xl bg-white/70 backdrop-blur-sm border border-white/50 shadow-sm p-6">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Meats</h2>
            <p className="text-gray-700">Butcher-cut meats, custom cuts, and helpful advice from our friendly meat department.</p>
          </section>

          <section id="beer" className="scroll-mt-24 rounded-3xl bg-white/70 backdrop-blur-sm border border-white/50 shadow-sm p-6">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Beer · IPA · THC</h2>
            <p className="text-gray-700">Curated beer selection with a special focus on IPAs plus THC products where permitted. Please drink and consume responsibly.</p>
          </section>

          <section id="tobacco" className="scroll-mt-24 rounded-3xl bg-white/70 backdrop-blur-sm border border-white/50 shadow-sm p-6">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Tobacco</h2>
            <p className="text-gray-700">Cigarettes and other tobacco products. Must be 21+.</p>
          </section>

          <section id="vapes" className="scroll-mt-24 rounded-3xl bg-white/70 backdrop-blur-sm border border-white/50 shadow-sm p-6">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Vapes</h2>
            <p className="text-gray-700">Vape devices and accessories. Must be 21+.</p>
          </section>

          {/* Services sections */}
          <section id="check-cashing" className="scroll-mt-24 rounded-3xl bg-white/70 backdrop-blur-sm border border-white/50 shadow-sm p-6">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Check Cashing</h2>
            <p className="text-gray-700">Quick, friendly service—bring a valid ID and let us help you with your financial needs.</p>
          </section>

          <section id="lottery" className="scroll-mt-24 rounded-3xl bg-white/70 backdrop-blur-sm border border-white/50 shadow-sm p-6">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Lottery</h2>
            <p className="text-gray-700">Grab your lucky tickets here. Play responsibly.</p>
          </section>

          <section id="amusements" className="scroll-mt-24 rounded-3xl bg-white/70 backdrop-blur-sm border border-white/50 shadow-sm p-6">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Amusement Games</h2>
            <p className="text-gray-700">Arcade-style fun and claw machines for all ages.</p>
          </section>

          <section id="money" className="scroll-mt-24 rounded-3xl bg-white/70 backdrop-blur-sm border border-white/50 shadow-sm p-6">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Money Orders/Transfer</h2>
            <p className="text-gray-700">Convenient money orders and transfers—secure and straightforward.</p>
          </section>

          <section id="notary" className="scroll-mt-24 rounded-3xl bg-white/70 backdrop-blur-sm border border-white/50 shadow-sm p-6">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Notary</h2>
            <p className="text-gray-700">On-site notary services—fast and reliable.</p>
          </section>

          <section id="scan-email" className="scroll-mt-24 rounded-3xl bg-white/70 backdrop-blur-sm border border-white/50 shadow-sm p-6">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Scan & Email</h2>
            <p className="text-gray-700">We’ll help you scan documents and send them by email in a snap.</p>
          </section>

          {/* Mid-page stacked sections */}
          <div id="mid" className="scroll-mt-24">
            <Sections />
          </div>

          {/* Footer with address/hours/phone */}
          <footer className="rounded-3xl bg-white/70 backdrop-blur-sm border border-white/50 shadow-sm p-6">
            <div className="grid sm:grid-cols-3 gap-4 text-sm text-gray-700">
              <div>
                <h3 className="font-bold text-gray-900">Address</h3>
                <p>123 Main Street, Hometown, USA</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Hours</h3>
                <p>Mon–Sat: 7am – 10pm</p>
                <p>Sun: 8am – 9pm</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Contact</h3>
                <p>Phone: (555) 555-1234</p>
                <div className="mt-2 flex gap-2">
                  <button onClick={onCall} className="px-3 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-semibold shadow">Call</button>
                  <button onClick={onDirections} className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold shadow">Get Directions</button>
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-500">Please enjoy responsibly. Age-restricted items require valid ID. THC products available only where permitted by law.</p>
          </footer>
        </div>
      </main>
    </div>
  )
}

export default App
