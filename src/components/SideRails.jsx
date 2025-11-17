import { useState } from 'react'
import { Home, ShoppingCart, Leaf, Beef, Beer, Cigarette, MoveRight, Gamepad2, Landmark, Stamp, ScanText, BadgeInfo } from 'lucide-react'
import AgeGate from './AgeGate'

const leftMenu = [
  { key: 'home', label: 'Home', icon: Home },
  { key: 'grocery', label: 'Grocery', icon: ShoppingCart },
  { key: 'produce', label: 'Produce', icon: Leaf },
  { key: 'meats', label: 'Meats', icon: Beef },
  { key: 'beer', label: 'Beer · IPA · THC', icon: Beer, requiresAge: true },
  { key: 'tobacco', label: 'Tobacco', icon: Cigarette, requiresAge: true },
  { key: 'vapes', label: 'Vapes', icon: MoveRight, requiresAge: true },
]

const rightMenu = [
  { key: 'check-cashing', label: 'Check Cashing', icon: Landmark },
  { key: 'lottery', label: 'Lottery', icon: Gamepad2 },
  { key: 'amusements', label: 'Amusement Games', icon: Gamepad2 },
  { key: 'money', label: 'Money Orders/Transfer', icon: Landmark },
  { key: 'notary', label: 'Notary', icon: Stamp },
  { key: 'scan-email', label: 'Scan & Email', icon: ScanText },
]

function RailButton({ item, active, onClick }) {
  const Icon = item.icon
  return (
    <button
      onClick={onClick}
      className={`group flex items-center gap-3 px-3 py-2 rounded-full w-full bg-white/70 hover:bg-white shadow-sm hover:shadow-md border border-white/40 backdrop-blur-md transition focus:outline-none ${active ? 'ring-2 ring-emerald-500' : ''}`}
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow">
        <Icon size={18} />
      </span>
      <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">{item.label}</span>
    </button>
  )
}

function SideRails({ onSelect, activeSection }) {
  const [ageOpen, setAgeOpen] = useState(false)
  const [pendingItem, setPendingItem] = useState(null)
  const [ageVerified, setAgeVerified] = useState(false)

  const handleClick = (item) => {
    if (item.requiresAge && !ageVerified) {
      setPendingItem(item)
      setAgeOpen(true)
      return
    }
    onSelect(item.key)
  }

  const confirmAge = () => {
    setAgeVerified(true)
    setAgeOpen(false)
    if (pendingItem) onSelect(pendingItem.key)
  }

  return (
    <>
      <AgeGate open={ageOpen} onClose={() => setAgeOpen(false)} onConfirm={confirmAge} />

      {/* Left rail */}
      <div className="fixed left-3 top-4 bottom-4 z-30 hidden md:flex flex-col justify-between">
        <div className="flex flex-col gap-3 w-56">
          <div className="flex items-center gap-3 px-3 py-2 rounded-full bg-white/80 border border-white/50 shadow backdrop-blur-md">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-fuchsia-600 text-white shadow">
              <BadgeInfo size={18} />
            </span>
            <span className="font-extrabold tracking-tight">Tabo’s Piggly Wiggly</span>
          </div>
          {leftMenu.map((item) => (
            <RailButton
              key={item.key}
              item={item}
              active={activeSection === item.key}
              onClick={() => handleClick(item)}
            />
          ))}
        </div>
        <div className="text-xs text-gray-500 px-2">Community-first since 19XX</div>
      </div>

      {/* Right rail */}
      <div className="fixed right-3 top-4 bottom-4 z-30 hidden md:flex items-start">
        <div className="flex flex-col gap-3 w-64">
          {rightMenu.map((item) => (
            <RailButton
              key={item.key}
              item={item}
              active={activeSection === item.key}
              onClick={() => onSelect(item.key)}
            />
          ))}
        </div>
      </div>

      {/* Mobile sticky edge tabs */}
      <div className="md:hidden fixed inset-x-0 bottom-3 z-30 px-3">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {[...leftMenu, ...rightMenu].map((item) => (
            <button
              key={item.key}
              onClick={() => handleClick(item)}
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 backdrop-blur-md border border-white/50 shadow text-sm"
            >
              <item.icon size={16} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default SideRails
