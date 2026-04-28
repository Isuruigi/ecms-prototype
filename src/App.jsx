import React from 'react'
import MobileApp from './components/MobileApp.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-200 via-blue-50 to-slate-300 flex items-center justify-center p-6">
      {/* Desktop label */}
      <div className="hidden lg:flex flex-col items-start mr-12 max-w-xs">
        <div className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-3">Group 02 · IT 3008</div>
        <h1 className="text-3xl font-black text-slate-900 leading-tight mb-3">
          Enhanced<br />Consultant<br />Management<br />System
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed mb-6">
          A mobile-first healthcare platform for Sri Lankan medical consultants.
          Supports Sinhala, Tamil, and English.
        </p>
        <div className="space-y-2">
          {[
            '13 Core Modules',
            '5 Interactive Screens',
            '3 Languages Supported',
            'QR · Voice Rx · Payments',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              {item}
            </div>
          ))}
        </div>
        <div className="mt-8 pt-6 border-t border-slate-300 w-full">
          <div className="text-xs text-slate-400 mb-1">Team Members</div>
          {[
            'I.G.I. Chathuranga',
            'H.J. Jayawardhana',
            'G.S. Vignesh',
            'C.M.D.D. Silva',
            'M.V.T. Lakruwan',
          ].map((name) => (
            <div key={name} className="text-xs text-slate-500 py-0.5">{name}</div>
          ))}
          <div className="text-xs text-slate-400 mt-2">Supervised by Dr. Prabhath Liyanage</div>
        </div>
      </div>

      {/* Phone frame */}
      <div className="relative w-[390px] h-[844px] bg-white shadow-2xl rounded-[52px] overflow-hidden border-[10px] border-slate-900 flex-shrink-0">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-8 bg-slate-900 rounded-b-3xl z-50 flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-slate-700" />
          <div className="w-10 h-1.5 rounded-full bg-slate-700" />
        </div>
        {/* Side buttons */}
        <div className="absolute -right-3 top-28 w-2 h-16 bg-slate-900 rounded-r-sm" />
        <div className="absolute -left-3 top-20 w-2 h-10 bg-slate-900 rounded-l-sm" />
        <div className="absolute -left-3 top-36 w-2 h-10 bg-slate-900 rounded-l-sm" />
        <div className="absolute -left-3 top-52 w-2 h-10 bg-slate-900 rounded-l-sm" />
        {/* Screen */}
        <div className="w-full h-full overflow-hidden">
          <MobileApp />
        </div>
      </div>
    </div>
  )
}
