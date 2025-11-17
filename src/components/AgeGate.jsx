import { useEffect } from 'react'

function AgeGate({ open, onClose, onConfirm }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative max-w-md w-[90%] bg-white rounded-2xl shadow-xl p-6 text-center">
        <h2 className="text-2xl font-extrabold text-gray-900">Are you 21 or older?</h2>
        <p className="mt-2 text-gray-600">You must be of legal age to view Beer, THC, Tobacco, and Vapes content.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
          >
            No
          </button>
          <button
            onClick={onConfirm}
            className="px-5 py-2 rounded-full bg-emerald-600 text-white shadow hover:bg-emerald-700 transition"
          >
            Yes, I am 21+
          </button>
        </div>
      </div>
    </div>
  )
}

export default AgeGate
