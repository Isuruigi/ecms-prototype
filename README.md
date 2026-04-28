# Enhanced Consultant Management System (ECMS)

[![Deploy to GitHub Pages](https://github.com/isuruigi/ecms-prototype/actions/workflows/deploy.yml/badge.svg)](https://github.com/isuruigi/ecms-prototype/actions/workflows/deploy.yml)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-1E5FAD?style=flat&logo=github)](https://isuruigi.github.io/ecms-prototype/)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38BDF8?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)

> **IT 3008 IT Seminar · Group 02 · 2026**
> Supervised by Dr. Prabhath Liyanage

A mobile-first healthcare platform prototype for Sri Lankan medical consultants — unifying appointment scheduling, QR-based patient check-in, voice-powered e-prescriptions, real-time payment tracking, and daily earnings analytics in a single role-based application.

---

## Live Demo

**[Open the live demo](https://isuruigi.github.io/ecms-prototype/)**

> The demo runs entirely in the browser — no backend or login required.

---

## The Five Screens

| Screen | What it shows |
|---|---|
| **Home Dashboard** | Real-time earnings (LKR 125,000), 4 quick-action cards, patient queue with live status badges, weekly revenue mini chart |
| **Voice Prescription** | Language selector (English / Sinhala / Tamil), animated recording waveform, generated prescription output |
| **QR Patient Check-in** | Camera viewport, encrypted patient record card, allergy alert panel, recent visit history |
| **Daily Schedule** | Stats row (Total / Done / Pending), colour-coded appointment list, booking button for free slots |
| **Doctor Profile** | Consultant credentials, 3 key metrics, navigation to Settings / Notifications / Reports / Payments |

---

## Voice Language Status

| Language | Status | Notes |
|---|---|---|
| English | Operational | Full simulated STT pipeline |
| Sinhala (සිංහල) | Experimental | Triggers review modal; output flagged for human review |
| Tamil (தமிழ்) | Experimental | Triggers review modal; output flagged for human review |

Full production STT via Google Cloud Speech or OpenAI Whisper is planned for Phase 1 of the roadmap.

---

## Repository Structure

```
ecms-prototype/
│
├── .github/
│   └── workflows/
│       └── deploy.yml          ← Auto-deploy to GitHub Pages on push to main
│
├── src/
│   ├── components/
│   │   └── MobileApp.jsx       ← All 5 screens + experimental voice logic
│   ├── App.jsx                 ← Phone frame + desktop project sidebar
│   ├── main.jsx                ← React entry point
│   └── index.css               ← Tailwind directives + waveform animation
│
├── presentation/
│   ├── ECMS_Presentation_Group02.pptx
│   ├── build_pptx.js
│   ├── README.md
│   └── assets/
│       ├── screen_home.png
│       ├── screen_voice.png
│       ├── screen_qr.png
│       ├── screen_schedule.png
│       ├── screen_profile.png
│       └── mindmap_full.png
│
├── docs/
│   ├── POSTER_INSTRUCTIONS.md
│   ├── ECMS_Canva_Poster_Instructions.md
│   ├── ECMS_Design_System.md
│   └── MOBILE_APP_GUIDE.md
│
├── public/
│   └── favicon.svg
│
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── .gitignore
```

---

## Getting Started Locally

You need Node.js 18 or later.

```bash
git clone https://github.com/isuruigi/ecms-prototype.git
cd ecms-prototype
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). The phone mockup with all 5 interactive screens loads immediately.

```bash
# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## Deploying to GitHub Pages

The repository includes `.github/workflows/deploy.yml` which deploys automatically on every push to `main`.

**One-time setup (do this after creating the repo):**

1. Go to your repository → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Click **Save**

Every push to `main` will now build and deploy automatically. Your live URL will be:

```
https://isuruigi.github.io/ecms-prototype/
```

To trigger a manual deploy without pushing code: **Actions tab** → **Deploy to GitHub Pages** → **Run workflow**.

---

## Manual Deploy (Alternative)

```bash
npm run build
# Upload the dist/ folder to any static host.
```

- **Netlify:** Drag `dist/` to [app.netlify.com/drop](https://app.netlify.com/drop)
- **Vercel:** `npx vercel --prod` (set output directory to `dist`)
- **Cloudflare Pages:** Connect repo, build command `npm run build`, output `dist`

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 18 |
| Bundler | Vite 5 |
| Styling | Tailwind CSS 3 |
| Icons | Lucide React |
| Fonts | Inter (Google Fonts) |
| CI/CD | GitHub Actions |
| Hosting | GitHub Pages |

**Planned — not yet wired to live APIs:**

| Feature | Technology |
|---|---|
| Voice STT — English | Google Cloud Speech-to-Text |
| Voice STT — Sinhala / Tamil | OpenAI Whisper (fine-tuned) |
| Payments | PayHere (Sri Lanka) + Stripe (International) |
| EHR Connectivity | Hospital API integration |
| Doctor Verification | SLMC API |

---

## Team

| Name | Index No | Role |
|---|---|---|
| I.G.I. Chathuranga | S16847 | Project Lead & UI Developer |
| H.J. Jayawardhana | S16842 | Feature Analyst |
| G.S. Vignesh | S16763 | Backend / Payment Module |
| C.M.D.D. Silva | S16743 | Clinical Systems Designer |
| M.V.T. Lakruwan | S16989 | QR & Records Module |

**Supervised by:** Dr. Prabhath Liyanage · IT 3008 IT Seminar

---

## Roadmap

**Phase 1 — 0 to 6 months**
- Live STT via Google Cloud Speech / OpenAI Whisper
- Hospital EHR system connectivity
- SLMC API for real-time doctor verification

**Phase 2 — 6 to 12 months**
- Telemedicine module with auto-generated consultation notes
- AI-powered drug interaction checker in the medicine database
- Offline-first architecture for low-connectivity areas

**Phase 3 — 12 to 24 months**
- Wearable device data import (blood pressure, glucose)
- Multi-hospital / multi-consultant central admin dashboard
- Full OPD digitisation and government hospital integration

---

## 13 Core Modules

| # | Module | Key Capability |
|---|---|---|
| 1 | Schedule Management | Set/block/lock slots, auto-notify hospital and patients |
| 2 | Appointment Handling | Daily list, real-time tracking, mark complete / no-show |
| 3 | Patient Medical Records | Prescriptions, labs, history, allergies in one view |
| 4 | E-Prescriptions | Digital Rx to patient phone and hospital pharmacy |
| 5 | Clinical Documentation | Consultation notes, lab requests, follow-up dates |
| 6 | Notifications | Session reminders, cancellation alerts, hospital messaging |
| 7 | Security | Secure login, digital signatures, role-based access control |
| 8 | Payment Collection | Cash, card, eZcash/mCash, receipts, transaction IDs |
| 9 | Transaction Dashboard | Revenue charts, payment filters, export to PDF/Excel |
| 10 | Voice Command Rx | STT in Sinhala/Tamil/English, templates, auto-fill |
| 11 | Medicine Drag & Drop DB | Inbuilt DB, smart search, drag-to-prescription |
| 12 | Patient History + QR | Encrypted QR, offline access, GDPR compliant |
| 13 | Patient Payment Gateway | PayHere, Stripe, PCI-DSS, auto invoice, SSL |

---

## Disclaimer

All patient names, earnings figures, appointment data, and consultation records in this prototype are entirely illustrative mock data. No real patient information is used, stored, or transmitted.

---

*Group 02 · Enhanced Consultant Management System · IT 3008 IT Seminar · 2026*
