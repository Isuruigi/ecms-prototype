import MobileApp from './components/MobileApp.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-page flex items-center justify-center p-6">
      <div className="w-[390px] h-[844px] bg-white border-[10px] border-deep-navy rounded-[52px] overflow-hidden shadow-2xl relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-8 bg-deep-navy rounded-b-3xl z-20" />
        <MobileApp />
      </div>
    </div>
  )
}
