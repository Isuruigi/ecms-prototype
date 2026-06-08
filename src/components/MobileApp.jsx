import { useState } from 'react'
import { Home, Mic, QrCode, CalendarDays, User } from 'lucide-react'
import HomeScreen from './screens/HomeScreen.jsx'
import VoiceScreen from './screens/VoiceScreen.jsx'
import QRScreen from './screens/QRScreen.jsx'
import ScheduleScreen from './screens/ScheduleScreen.jsx'
import ProfileScreen from './screens/ProfileScreen.jsx'

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'voice', label: 'Voice', icon: Mic },
  { id: 'qr', label: 'QR', icon: QrCode },
  { id: 'schedule', label: 'Schedule', icon: CalendarDays },
  { id: 'profile', label: 'Profile', icon: User },
]

const SCREENS = {
  home: HomeScreen,
  voice: VoiceScreen,
  qr: QRScreen,
  schedule: ScheduleScreen,
  profile: ProfileScreen,
}

export default function MobileApp() {
  const [screen, setScreen] = useState('home')
  const ActiveScreen = SCREENS[screen]

  return (
    <div className="h-full bg-light-surface flex flex-col pt-8">
      <div className="flex-1 overflow-auto">
        <ActiveScreen />
      </div>
      <nav className="grid grid-cols-5 border-t border-border bg-white">
        {NAV_ITEMS.map(({ id, label, icon: Icon }) => {
          const isActive = id === screen
          return (
            <button
              key={id}
              type="button"
              onClick={() => setScreen(id)}
              className={`flex flex-col items-center gap-1 py-3 text-xs font-medium transition ${
                isActive ? 'text-medical-blue' : 'text-secondary-text'
              }`}
            >
              <Icon size={18} />
              <span>{label}</span>
            </button>
          )
        })}
      </nav>
    </div>
  )
}
