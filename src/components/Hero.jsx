import { Phone, MapPin } from 'lucide-react'

function Hero({ onCall, onDirections }) {
  return (
    <div className="relative rounded-3xl border border-white/50 bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50 p-6 shadow-sm">
      <div className="absolute inset-0 rounded-3xl bg-white/40 backdrop-blur-sm" />
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900">Tabo’s Piggly Wiggly</h1>
          <p className="mt-2 text-gray-700 max-w-2xl">
            Friendly, community-forward grocery store with fresh produce, butcher-cut meats, and a curated beer selection
            with an emphasis on IPAs and THC products where permitted.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={onCall} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700">
            <Phone size={18} /> Call
          </button>
          <button onClick={onDirections} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-gray-900 font-semibold shadow border border-gray-200 hover:bg-gray-50">
            <MapPin size={18} /> Get Directions
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
