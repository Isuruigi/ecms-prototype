import React, { useState } from 'react'
import {
  Mic, Home, QrCode, Calendar, User, CheckCircle, AlertTriangle,
  ChevronRight, Bell, Settings, Pill, FileText, DollarSign,
  TrendingUp, Clock, Plus, Search, Shield, Activity,
} from 'lucide-react'

// ─── Data ────────────────────────────────────────────────────────────────────

const PATIENTS_TODAY = [
  { name: 'Nimal Perera',    time: '10:00 AM', status: 'waiting',   id: 'P-001234', blood: 'O+' },
  { name: 'Saman Silva',     time: '10:30 AM', status: 'completed', id: 'P-001235', blood: 'A+' },
  { name: 'Kumari Fernando', time: '11:00 AM', status: 'upcoming',  id: 'P-001236', blood: 'B+' },
  { name: 'Priya Jayasena',  time: '11:30 AM', status: 'upcoming',  id: 'P-001237', blood: 'AB-' },
]

const APPOINTMENTS = [
  { time: '09:00', patient: 'Nimal Perera',    status: 'done' },
  { time: '09:30', patient: 'Saman Silva',     status: 'done' },
  { time: '10:00', patient: 'Kumari Fernando', status: 'progress' },
  { time: '10:30', patient: 'Available Slot',  status: 'free' },
  { time: '11:00', patient: 'Priya Jayasena',  status: 'upcoming' },
  { time: '11:30', patient: 'Roshan Wijesiri', status: 'upcoming' },
]

const WEEKLY_REVENUE = [
  { day: 'Mon', amount: 95000 },
  { day: 'Tue', amount: 112000 },
  { day: 'Wed', amount: 125000 },
  { day: 'Thu', amount: 88000 },
  { day: 'Fri', amount: 140000 },
  { day: 'Sat', amount: 103000 },
  { day: 'Sun', amount: 72000 },
]

// ─── Shared UI Atoms ─────────────────────────────────────────────────────────

const StatusBadge = ({ status }) => {
  const map = {
    completed: { label: 'Done',    cls: 'bg-green-100 text-green-700' },
    waiting:   { label: 'Waiting', cls: 'bg-orange-100 text-orange-700' },
    upcoming:  { label: 'Next',    cls: 'bg-blue-100 text-blue-700' },
  }
  const s = map[status] || map.upcoming
  return (
    <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${s.cls}`}>
      {s.label}
    </span>
  )
}

const Avatar = ({ name, size = 'md' }) => {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2)
  const sz = size === 'lg' ? 'w-20 h-20 text-2xl' : size === 'sm' ? 'w-9 h-9 text-xs' : 'w-12 h-12 text-base'
  return (
    <div className={`${sz} bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}>
      {initials}
    </div>
  )
}

// ─── Screen: Home ─────────────────────────────────────────────────────────────

const HomeScreen = ({ navigate }) => (
  <div className="h-full bg-gray-50 overflow-y-auto pb-24">
    {/* Header */}
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 pt-10 pb-6 rounded-b-3xl shadow-lg">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-xs text-blue-200 mb-0.5">Good Morning</p>
          <h2 className="text-xl font-bold">Dr. Kumar Fernando</h2>
          <p className="text-xs text-blue-200 mt-0.5">MBBS, MD · SLMC: 12345</p>
        </div>
        <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-orange-400 rounded-full" />
        </button>
      </div>
      <div className="bg-white/15 backdrop-blur rounded-2xl px-4 py-4">
        <p className="text-xs text-blue-200 mb-1">Today's Earnings</p>
        <p className="text-3xl font-black">LKR 125,000</p>
        <p className="text-xs text-blue-200 mt-1">23 patients · +12% vs yesterday</p>
      </div>
    </div>

    {/* Quick Actions */}
    <div className="px-4 pt-5">
      <p className="text-sm font-bold text-gray-900 mb-3">Quick Actions</p>
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: 'Voice Rx',  sub: 'Create prescription', icon: Mic,      color: 'blue',   screen: 'voice' },
          { label: 'QR Scan',   sub: 'Check-in patient',    icon: QrCode,   color: 'green',  screen: 'qr' },
          { label: 'Medicine',  sub: 'Database',             icon: Pill,     color: 'purple', screen: null },
          { label: 'Schedule',  sub: 'Today: 8 patients',   icon: Calendar, color: 'orange', screen: 'calendar' },
        ].map(({ label, sub, icon: Icon, color, screen }) => (
          <button
            key={label}
            onClick={() => screen && navigate(screen)}
            className="bg-white rounded-2xl p-4 shadow-sm text-left active:scale-95 transition-transform"
          >
            <div className={`w-11 h-11 bg-${color}-100 rounded-xl flex items-center justify-center mb-3`}>
              <Icon className={`w-5 h-5 text-${color}-600`} />
            </div>
            <p className="font-bold text-gray-900 text-sm">{label}</p>
            <p className="text-xs text-gray-500 mt-0.5">{sub}</p>
          </button>
        ))}
      </div>
    </div>

    {/* Today's Patients */}
    <div className="px-4 pt-5">
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-bold text-gray-900">Today's Patients</p>
        <button className="text-xs text-blue-600 font-semibold">View All</button>
      </div>
      <div className="space-y-2">
        {PATIENTS_TODAY.map((p) => (
          <div key={p.id} className="bg-white rounded-2xl px-4 py-3 shadow-sm flex items-center gap-3">
            <Avatar name={p.name} />
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 text-sm truncate">{p.name}</p>
              <p className="text-xs text-gray-500">{p.time} · {p.id}</p>
            </div>
            <StatusBadge status={p.status} />
          </div>
        ))}
      </div>
    </div>

    {/* Weekly Revenue */}
    <div className="px-4 pt-5 pb-2">
      <p className="text-sm font-bold text-gray-900 mb-3">This Week</p>
      <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl px-5 py-4 text-white shadow-lg">
        <p className="text-xs text-green-200 mb-1">Total Earnings</p>
        <p className="text-3xl font-black">LKR 735,000</p>
        <p className="text-xs text-green-200 mt-1">147 patients · +8% growth</p>
        {/* Mini bar chart */}
        <div className="flex items-end gap-1.5 mt-4 h-10">
          {WEEKLY_REVENUE.map(({ day, amount }) => {
            const max = Math.max(...WEEKLY_REVENUE.map(r => r.amount))
            const h = Math.round((amount / max) * 100)
            return (
              <div key={day} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full bg-white/30 rounded-sm"
                  style={{ height: `${h}%`, minHeight: 4 }}
                />
                <span className="text-[8px] text-green-200">{day}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  </div>
)

// ─── Screen: Voice Prescription ───────────────────────────────────────────────

// Language config — experimental flag controls UI behaviour
const LANGS = [
  {
    id: 'sinhala',
    native: 'සිංහල',
    label: 'Sinhala',
    experimental: true,
    note: 'STT engine for Sinhala is under active development. Recognition accuracy may be limited for medical terminology.',
  },
  {
    id: 'tamil',
    native: 'தமிழ்',
    label: 'Tamil',
    experimental: true,
    note: 'STT engine for Tamil is under active development. Recognition accuracy may be limited for medical terminology.',
  },
  {
    id: 'english',
    native: 'English',
    label: 'English',
    experimental: false,
    note: null,
  },
]

const ExperimentalBadge = () => (
  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 border border-amber-300 text-amber-700 text-[10px] font-bold uppercase tracking-wide">
    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
    Experimental
  </span>
)

const VoiceScreen = () => {
  const [lang, setLang] = useState('english')
  const [recording, setRecording] = useState(false)
  const [rx, setRx] = useState('')
  const [showExpModal, setShowExpModal] = useState(false)
  const [pendingLang, setPendingLang] = useState(null)

  const selectedLang = LANGS.find(l => l.id === lang)
  const isExperimental = selectedLang?.experimental

  const handleLangSelect = (l) => {
    if (l.experimental) {
      setPendingLang(l)
      setShowExpModal(true)
    } else {
      setLang(l.id)
      setRx('')
    }
  }

  const confirmExpLang = () => {
    setLang(pendingLang.id)
    setRx('')
    setShowExpModal(false)
    setPendingLang(null)
  }

  const startRecord = () => {
    setRecording(true)
    setRx('')
    // English gives a clean prescription output
    // Experimental languages simulate partial/uncertain recognition
    const timeout = isExperimental ? 4000 : 3000
    setTimeout(() => {
      setRecording(false)
      if (isExperimental) {
        setRx(
          lang === 'sinhala'
            ? '⚠ Partial recognition — please review carefully\n\nParacetamol 500mg [confirmed]\n1 tablet — 3× daily\nDuration: 5 days\n\n[Term unclear — medical review required]\nDosage not confirmed — edit before sending'
            : '⚠ Partial recognition — please review carefully\n\nParacetamol 500mg [confirmed]\n1 tablet — 3× daily\nDuration: 5 days\n\n[Term unclear — medical review required]\nDosage not confirmed — edit before sending'
        )
      } else {
        setRx('Paracetamol 500mg\n1 tablet — 3× daily, after meals\nDuration: 5 days\n\nAmoxicillin 250mg\n1 capsule — 2× daily\nDuration: 7 days\n\nORS Sachets\n1 sachet after each loose motion')
      }
    }, timeout)
  }

  return (
    <div className="h-full bg-gray-50 overflow-y-auto pb-24 relative">

      {/* ── Experimental confirmation modal ── */}
      {showExpModal && pendingLang && (
        <div className="absolute inset-0 z-50 bg-black/40 flex items-end">
          <div className="w-full bg-white rounded-t-3xl p-5 shadow-2xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                <span className="text-amber-600 text-base">⚗</span>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">Experimental Feature</p>
                <ExperimentalBadge />
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-1">
              <span className="font-semibold text-gray-800">{pendingLang.native} ({pendingLang.label})</span> voice recognition is currently in experimental mode.
            </p>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              {pendingLang.note} A full STT engine (Google Cloud Speech or OpenAI Whisper) for {pendingLang.label} medical terminology is planned for a future release. Always review generated output before approving.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => { setShowExpModal(false); setPendingLang(null) }}
                className="py-3 rounded-xl bg-gray-100 text-gray-700 text-sm font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={confirmExpLang}
                className="py-3 rounded-xl bg-amber-500 text-white text-sm font-bold"
              >
                Continue Anyway
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-white px-5 pt-10 pb-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-gray-900">Voice Prescription</h1>
            <p className="text-xs text-gray-500 mt-0.5">Speak naturally in your language</p>
          </div>
          <button className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center">
            <Settings className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>

      <div className="p-4 space-y-4">

        {/* Language Selector */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <p className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-3">Select Language</p>
          <div className="space-y-2">
            {LANGS.map((l) => (
              <button
                key={l.id}
                onClick={() => handleLangSelect(l)}
                className={`w-full px-4 py-3 rounded-xl border-2 flex items-center justify-between transition-all ${
                  lang === l.id
                    ? l.experimental
                      ? 'border-amber-400 bg-amber-50'
                      : 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">🇱🇰</span>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-gray-900 text-sm">{l.native}</p>
                      {l.experimental && <ExperimentalBadge />}
                    </div>
                    <p className="text-xs text-gray-500">{l.label}</p>
                  </div>
                </div>
                {lang === l.id && (
                  l.experimental
                    ? <span className="text-amber-500 text-base">⚗</span>
                    : <CheckCircle className="w-5 h-5 text-blue-500" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Experimental warning banner — shown when an experimental lang is active */}
        {isExperimental && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3 flex gap-3 items-start">
            <span className="text-amber-500 text-base mt-0.5 flex-shrink-0">⚠</span>
            <div>
              <p className="text-xs font-bold text-amber-800 mb-0.5">
                {selectedLang.label} STT — Experimental Mode
              </p>
              <p className="text-xs text-amber-700 leading-relaxed">
                {selectedLang.note} Always review and edit the generated output before approving.
              </p>
            </div>
          </div>
        )}

        {/* Recording block */}
        <div className={`rounded-3xl p-6 text-white shadow-xl ${
          isExperimental
            ? 'bg-gradient-to-br from-amber-500 to-amber-600'
            : 'bg-gradient-to-br from-blue-600 to-blue-700'
        }`}>
          <div className="text-center mb-5">
            {isExperimental && !recording && (
              <div className="inline-flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-xs font-semibold">Experimental Mode Active</span>
              </div>
            )}
            <p className="text-sm font-semibold opacity-90">
              {recording
                ? `🔴 Recording in ${selectedLang.label}…`
                : `Ready — ${selectedLang.label}`}
            </p>
            <p className="text-xs opacity-60 mt-1">
              {recording
                ? isExperimental
                  ? 'Processing — accuracy may vary'
                  : 'Listening for prescriptions'
                : isExperimental
                  ? 'Output requires manual review'
                  : 'Tap to begin speaking'}
            </p>
          </div>

          {recording && (
            <div className="flex items-center justify-center gap-1 h-14 mb-5">
              {Array.from({ length: 28 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-white rounded-full waveform-bar"
                  style={{
                    height: `${25 + Math.random() * 75}%`,
                    animationDelay: `${i * 0.06}s`,
                    animationDuration: `${0.8 + Math.random() * 0.6}s`,
                    opacity: isExperimental ? 0.6 : 1,
                  }}
                />
              ))}
            </div>
          )}

          <button
            onClick={recording ? () => setRecording(false) : startRecord}
            className={`w-full py-4 rounded-2xl font-bold text-base shadow-2xl transition-all active:scale-95 ${
              recording ? 'bg-red-500' : 'bg-white'
            } ${isExperimental && !recording ? 'text-amber-600' : recording ? 'text-white' : 'text-blue-600'}`}
          >
            {recording ? '⏹  Stop Recording' : '🎤  Start Recording'}
          </button>
        </div>

        {/* Prescription Output */}
        {rx && (
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <FileText className={`w-4 h-4 ${isExperimental ? 'text-amber-500' : 'text-blue-600'}`} />
                <p className="text-sm font-bold text-gray-900">Generated Prescription</p>
              </div>
              {isExperimental && <ExperimentalBadge />}
            </div>

            {isExperimental && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 mb-3 flex items-start gap-2">
                <span className="text-amber-500 text-xs mt-0.5">⚠</span>
                <p className="text-xs text-amber-700">
                  Output may contain unrecognised terms. Review every line before approving.
                </p>
              </div>
            )}

            <pre className={`rounded-xl p-3 text-xs font-mono whitespace-pre-wrap leading-relaxed mb-4 ${
              isExperimental ? 'bg-amber-50 text-amber-900' : 'bg-gray-50 text-gray-700'
            }`}>
              {rx}
            </pre>

            {isExperimental ? (
              <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3.5 rounded-xl font-bold text-sm shadow-lg mb-2">
                ✎ Review & Edit Before Sending
              </button>
            ) : (
              <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3.5 rounded-xl font-bold text-sm shadow-lg mb-2">
                ✓ Approve & Send to Pharmacy
              </button>
            )}
            <div className="grid grid-cols-2 gap-2">
              <button className="bg-gray-100 text-gray-700 py-2.5 rounded-xl text-sm font-semibold">Edit</button>
              <button
                onClick={() => setRx('')}
                className="bg-gray-100 text-gray-700 py-2.5 rounded-xl text-sm font-semibold"
              >
                Clear
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Screen: QR Scanner ───────────────────────────────────────────────────────

const QRScreen = () => {
  const [scanned, setScanned] = useState(true)

  return (
    <div className="h-full bg-gray-50 overflow-y-auto pb-24">
      <div className="bg-white px-5 pt-10 pb-4 shadow-sm">
        <h1 className="text-lg font-bold text-gray-900">Patient Check-in</h1>
        <p className="text-xs text-gray-500 mt-0.5">Scan QR code to load patient record</p>
      </div>

      <div className="p-4 space-y-4">
        {/* Scanner Viewport */}
        <div className="bg-white rounded-3xl p-5 shadow-sm">
          <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-blue-300 mb-4">
            <QrCode className="w-24 h-24 text-blue-400 mb-3" />
            <p className="text-sm font-semibold text-blue-600">Position QR Code Here</p>
            <p className="text-xs text-blue-400 mt-1">Camera will auto-detect</p>
          </div>
          <button
            onClick={() => setScanned(true)}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-2xl font-bold text-sm shadow-lg"
          >
            📷 Start Camera Scan
          </button>
        </div>

        {scanned && (
          <>
            {/* Patient Info Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-5 text-white shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                  NP
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold">Nimal Perera</h3>
                  <p className="text-xs text-blue-200">ID: P-2024-001234</p>
                  <p className="text-xs text-blue-200">Reg: 15 Mar 2022</p>
                </div>
                <div className="px-2.5 py-1 bg-white/20 rounded-lg text-xs font-bold">
                  ✓ Verified
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'Age',     value: '45 yrs' },
                  { label: 'Blood',   value: 'O+' },
                  { label: 'Visits',  value: '14' },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-white/10 rounded-xl p-2.5 text-center">
                    <p className="text-xs text-blue-200">{label}</p>
                    <p className="text-base font-bold mt-0.5">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Allergy Alert */}
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-4 h-4 text-white" />
                </div>
                <p className="font-bold text-red-900 text-sm">Allergy Warnings</p>
              </div>
              <div className="bg-white rounded-xl p-3 border border-red-100 space-y-1">
                {['Penicillin — severe reaction', 'Sulfa drugs — rash'].map(a => (
                  <p key={a} className="text-sm font-semibold text-gray-800">⚠ {a}</p>
                ))}
              </div>
            </div>

            {/* Recent Visits */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <p className="text-sm font-bold text-gray-900 mb-3">Recent Visits</p>
              <div className="space-y-2">
                {[
                  { date: '10 Feb 2026', reason: 'Upper respiratory tract infection' },
                  { date: '25 Jan 2026', reason: 'Diabetes follow-up' },
                  { date: '10 Jan 2026', reason: 'Annual health checkup' },
                ].map((v) => (
                  <div key={v.date} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{v.reason}</p>
                      <p className="text-xs text-gray-500">{v.date}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

// ─── Screen: Schedule ─────────────────────────────────────────────────────────

const CalendarScreen = () => (
  <div className="h-full bg-gray-50 overflow-y-auto pb-24">
    <div className="bg-white px-5 pt-10 pb-4 shadow-sm">
      <h1 className="text-lg font-bold text-gray-900">Today's Schedule</h1>
      <p className="text-xs text-gray-500 mt-0.5">Wednesday, 18 Feb 2026</p>
    </div>

    <div className="p-4 space-y-4">
      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { value: '8', label: 'Total',   color: 'blue' },
          { value: '5', label: 'Done',    color: 'green' },
          { value: '3', label: 'Pending', color: 'orange' },
        ].map(({ value, label, color }) => (
          <div key={label} className={`bg-${color}-50 rounded-2xl p-3 text-center`}>
            <p className={`text-2xl font-black text-${color}-600`}>{value}</p>
            <p className="text-xs text-gray-500 mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Appointment List */}
      <div className="space-y-2">
        {APPOINTMENTS.map((apt) => {
          const styles = {
            done:     'bg-green-50 border-green-200',
            progress: 'bg-blue-50 border-blue-200',
            free:     'bg-gray-50 border-gray-200',
            upcoming: 'bg-white border-gray-200',
          }
          const statusLabels = {
            done:     { text: '✓ Completed',  color: 'text-green-600' },
            progress: { text: '◉ In Progress', color: 'text-blue-600' },
            free:     { text: 'Available',    color: 'text-gray-400' },
            upcoming: { text: '○ Upcoming',   color: 'text-orange-600' },
          }
          const sl = statusLabels[apt.status]
          return (
            <div key={apt.time} className={`rounded-2xl p-4 border-2 shadow-sm ${styles[apt.status]}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-center w-14 flex-shrink-0">
                    <p className="text-xl font-black text-gray-900">{apt.time}</p>
                    <p className="text-xs text-gray-400">30 min</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{apt.patient}</p>
                    <p className={`text-xs font-semibold ${sl.color}`}>{sl.text}</p>
                  </div>
                </div>
                {apt.status === 'free' && (
                  <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-bold">
                    Book
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </div>
)

// ─── Screen: Profile ──────────────────────────────────────────────────────────

const ProfileScreen = () => (
  <div className="h-full bg-gray-50 overflow-y-auto pb-24">
    {/* Profile Header */}
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 px-5 pt-10 pb-6 text-white">
      <div className="flex items-center gap-4 mb-5">
        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl font-black">
          KF
        </div>
        <div>
          <h2 className="text-lg font-black">Dr. Kumar Fernando</h2>
          <p className="text-xs text-blue-200 mt-0.5">MBBS, MD — General Medicine</p>
          <p className="text-xs text-blue-200">SLMC Reg: 12345</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { value: '682',   label: 'Patients' },
          { value: '96.8%', label: 'Rating' },
          { value: '3.2M',  label: 'Earnings' },
        ].map(({ value, label }) => (
          <div key={label} className="bg-white/10 rounded-xl p-3 text-center">
            <p className="text-xl font-black">{value}</p>
            <p className="text-xs text-blue-200 mt-0.5">{label}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Menu */}
    <div className="p-4 space-y-2">
      {[
        { icon: Settings,  label: 'Settings',        sub: 'App preferences',      color: 'blue' },
        { icon: Bell,      label: 'Notifications',   sub: '3 new alerts',          color: 'orange' },
        { icon: FileText,  label: 'Reports',         sub: 'Monthly summaries',    color: 'purple' },
        { icon: DollarSign,label: 'Payment History', sub: 'Transactions & receipts', color: 'green' },
        { icon: Shield,    label: 'Security',        sub: 'Login & access control', color: 'red' },
        { icon: Activity,  label: 'Analytics',       sub: 'Earnings & patient stats', color: 'teal' },
      ].map(({ icon: Icon, label, sub, color }) => (
        <button key={label} className="w-full bg-white rounded-2xl px-4 py-3.5 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 bg-${color}-100 rounded-xl flex items-center justify-center`}>
              <Icon className={`w-5 h-5 text-${color}-600`} />
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900 text-sm">{label}</p>
              <p className="text-xs text-gray-500">{sub}</p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </button>
      ))}
    </div>

    {/* Sign Out */}
    <div className="px-4 pb-4">
      <button className="w-full bg-red-50 border border-red-200 text-red-600 py-3 rounded-2xl font-bold text-sm">
        Sign Out
      </button>
    </div>
  </div>
)

// ─── Bottom Nav ───────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { id: 'home',     icon: Home,     label: 'Home' },
  { id: 'voice',    icon: Mic,      label: 'Voice' },
  { id: 'qr',       icon: QrCode,   label: 'QR Scan' },
  { id: 'calendar', icon: Calendar, label: 'Schedule' },
  { id: 'profile',  icon: User,     label: 'Profile' },
]

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function MobileApp() {
  const [screen, setScreen] = useState('home')

  const screens = {
    home:     <HomeScreen navigate={setScreen} />,
    voice:    <VoiceScreen />,
    qr:       <QRScreen />,
    calendar: <CalendarScreen />,
    profile:  <ProfileScreen />,
  }

  return (
    <div className="relative w-full h-full bg-white flex flex-col">
      {/* Screen Content */}
      <div className="flex-1 overflow-hidden">
        {screens[screen]}
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-gray-200 safe-area-bottom z-40">
        <div className="grid grid-cols-5 px-1 py-2">
          {NAV_ITEMS.map(({ id, icon: Icon, label }) => {
            const active = screen === id
            return (
              <button
                key={id}
                onClick={() => setScreen(id)}
                className={`flex flex-col items-center justify-center py-1.5 rounded-xl transition-all ${
                  active ? 'bg-blue-50' : ''
                }`}
              >
                <Icon className={`w-5 h-5 mb-0.5 ${active ? 'text-blue-600' : 'text-gray-400'}`} />
                <span className={`text-[10px] font-semibold ${active ? 'text-blue-600' : 'text-gray-400'}`}>
                  {label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
