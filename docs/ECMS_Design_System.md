# ECMS — Design System & Brand Guide
## Enhanced Consultant Management System
### Group 02 · IT 3008 IT Seminar · 2026

---

## 1. Company / Project Name & Blurb

**Project Name:** Enhanced Consultant Management System (ECMS)

**One-line:** A mobile-first healthcare platform that unifies appointment scheduling, voice prescriptions, QR patient check-in, and payment processing for Sri Lankan medical consultants.

**Academic context:** IT 3008 IT Seminar — Group 02, 2026. Supervised by Dr. Prabhath Liyanage.

**Team:**
- I.G.I. Chathuranga — S16847 — Project Lead & UI Developer
- H.J. Jayawardhana — S16842 — Feature Analyst
- G.S. Vignesh — S16763 — Backend / Payment Module
- C.M.D.D. Silva — S16743 — Clinical Systems Designer
- M.V.T. Lakruwan — S16989 — QR & Records Module

**What ECMS is:**
Sri Lanka has over 5,000 registered consultants on platforms like eChannelling and Doc990, yet no single system covers the full clinical and financial workflow for the consultant themselves. ECMS solves this with 13 integrated modules — from voice-powered e-prescriptions in Sinhala, Tamil, and English, to encrypted QR patient records, PayHere/Stripe payments, and a daily transaction dashboard — all in one React Native mobile app.

**This design system covers:** the research poster (A1 print), the 14-slide PowerPoint presentation, the React mobile prototype, and any future documentation or academic materials produced by Group 02.

---

## 2. Design System — Colour Palette

These are the only colours used across all ECMS outputs. Never introduce new colours.

### Primary Colours

| Role | Name | Hex | When to use |
|---|---|---|---|
| Brand primary | Medical Blue | `#1E5FAD` | Headers, section titles, primary buttons, borders |
| Brand dark | Deep Navy | `#0F2D5C` | Poster/slide header bands, footer bands, dark cards |
| Sky accent | Sky Blue | `#3B82F6` | Hover states, stat numbers, highlight text |
| Light tint | Ice Blue | `#DBEAFE` | Background tints, circuit pattern fill, tag backgrounds |

### Semantic Colours

| Role | Name | Hex | When to use |
|---|---|---|---|
| Success / Completed | Clinical Green | `#1A7A4A` | Done states, results ticks, Medicine/QR card borders |
| Alert / Allergy | Warning Red | `#DC2626` | Allergy alerts, problem bullets, critical warnings only |
| Pending / Schedule | Warm Orange | `#EA580C` | Pending states, payment card borders, schedule indicators |
| AI / Voice / NLP | Deep Purple | `#6B21A8` | Voice prescription feature, NLP pipeline boxes |
| Accent / Gold | Mustard Gold | `#F59E0B` | Title word accents, decorative circles, stat pill borders |

### Neutral Colours

| Role | Hex |
|---|---|
| Page background | `#F0F4FF` |
| Card / panel fill | `#FFFFFF` |
| Light surface | `#F8FAFC` |
| Border / divider | `#CBD5E1` |
| Body text | `#1E293B` |
| Secondary text | `#64748B` |
| Muted / captions | `#94A3B8` |

### Colour Do's and Don'ts

**Do:**
- Use `#1E5FAD` as the dominant colour — it should cover roughly 40% of visual weight
- Use `#DC2626` only for allergy alerts and problem statement bullets — never decoratively
- Use `#1A7A4A` only for success/completed states and results section ticks
- Pair `#0F2D5C` backgrounds with white `#FFFFFF` or `#93C5FD` text only

**Don't:**
- Do not use the original template pink (`#E8B4B8`) anywhere in the final poster
- Do not use purple for anything other than Voice/AI/NLP features
- Do not introduce grey gradients — use flat fills from this palette

---

## 3. Typography

### Fonts

| Use | Font | Weight | Size (poster A1) | Size (slides) |
|---|---|---|---|---|
| Poster main title | **Inter** ExtraBold | 800 | 54–60pt | 44–54pt |
| Poster subtitle | Inter Medium | 500 | 28–30pt | 22–26pt |
| Section headings (H2) | Inter Bold | 700 | 36–40pt | 28–32pt |
| Sub-headings (H3) | Inter SemiBold | 600 | 26–28pt | 18–22pt |
| Body paragraphs | Inter Regular | 400 | 20–22pt | 13–15pt |
| Captions / labels | Inter Regular Italic | 400 | 16–18pt | 10–12pt |
| Badge / pill text | Inter SemiBold | 600 | 14–16pt UPPERCASE | 10pt UPPERCASE |
| Table body | Inter Regular | 400 | 16–18pt | 10–11pt |
| Footer / refs | Inter Regular | 400 | 13–15pt | 9–10pt |

**Canva equivalent:** If Inter is not available in your Canva plan, use **Montserrat** as the first alternative, then **Poppins**. Do not use Arial or Roboto — they make the poster look generic.

**Fallback for code/IDs:** Use **JetBrains Mono** or **Courier New** for any inline code, transaction IDs, or index numbers.

### Type Rules

- Minimum body text on A1 print: **20pt**. Nothing smaller than 13pt anywhere.
- Minimum body text on slides: **11pt**. Nothing smaller than 9pt for captions.
- Line height: 1.5× for body paragraphs, 1.2× for headings.
- Alignment: Left-align all body text. Centre only poster title, stat callouts, and phone mockup captions.
- Letter spacing: +1–2% on all UPPERCASE headings and badge labels.
- Do not use justified alignment — at poster scale it creates awkward rivers.

---

## 4. Logo & Wordmark

ECMS does not have a formal logo. Use the following wordmark treatment consistently:

**Full wordmark:**
```
ECMS
Enhanced Consultant Management System
```
- "ECMS" — Inter ExtraBold, `#1E5FAD`, large (display size)
- Full name below — Inter Medium, `#64748B`, smaller

**Short form:** Use just **"ECMS"** in Inter ExtraBold `#1E5FAD` when space is tight (e.g., top-left of slides).

**On dark backgrounds** (header bands, dark cards): Use white `#FFFFFF` for "ECMS" and `#93C5FD` for the subtitle.

**The Canva template icon badge** (the circular badge with code symbols `{/} </> >_ ✦` in the top-left of the header):
- Keep the badge shape
- Replace the code symbols with the letters **"ECMS"** in Inter ExtraBold, white
- Keep the gold (`#F59E0B`) circle behind it
- This serves as the ECMS visual identity mark on the poster

---

## 5. Spacing & Layout System

### Poster (A1 — 594 × 841 mm)

| Element | Value |
|---|---|
| Canvas size | 594 × 841 mm portrait |
| Edge margin (all sides) | 15 mm |
| Bleed (print only) | 3 mm |
| Column gutter | 12 mm |
| Column count | 3 (each ~174 mm wide after gutters) |
| Panel internal padding | 12–15 mm |
| Card internal padding | 8–10 mm |
| Gap between cards | 6–8 mm |
| Section heading to content | 8 mm below |
| Between section panels | 10–12 mm |

### Slides (16:9 — 10" × 5.625")

| Element | Value |
|---|---|
| Slide margins | 0.4–0.5" all sides |
| Content gutter | 0.15–0.2" |
| Card padding | 0.1–0.12" |
| Between cards | 0.08–0.1" |

### Canva Grid Settings

When working in Canva, go to **File → View Settings → Rulers and Guides** and set:
- Horizontal guides at: 100mm (below header), 740mm (above footer)
- Vertical guide at: 297mm (centre column divider)
This snaps your content to the three-section structure.

---

## 6. Component Library (Recurring Patterns)

These elements appear repeatedly. Build them once, then duplicate.

### Section Title Tag
The small rounded label that reads "INTRODUCTION", "DATASET" etc. in the template.

- Shape: Rounded rectangle, corner radius 6mm
- Fill: `#1E5FAD`
- Text: Inter Bold, white, 20–22pt (poster) or 13pt (slides), UPPERCASE, +2% letter spacing
- Padding: 6mm horizontal, 4mm vertical
- Shadow: none — the flat fill is enough

### Content Panel / Card
The white bordered boxes that hold each section's content.

- Fill: `#FFFFFF`
- Border: 1.5pt solid `#CBD5E1`
- Corner radius: 8–10mm (poster), 6mm (slides)
- Shadow (optional): 0px 4px 12px `#00000014`
- Left accent border (for feature/annotation cards): 5px solid, colour varies by category

### Stat Callout Pill
Used in the header band and overview sections.

- Fill: `#FFFFFF`
- Text: large number in `#1E5FAD` (28–32pt Bold), label below in `#64748B` (11pt)
- Border: 1.5pt `#1E5FAD`
- Corner radius: 20mm (fully rounded)
- Dimensions: ~60mm wide × 35mm tall (poster)

### Phone Frame Mockup
Used wherever app screenshots are placed.

- Outer frame: `#1E293B` (near-black), rounded rectangle, corner radius 10–12mm
- Frame border width: 6–8px
- Notch: small dark rounded rectangle centred at top, width ~35% of frame
- Screen area: screenshot image fills inside the frame
- No drop shadow needed — the dark frame provides enough contrast

### Feature Card (Modules section)
- Fill: `#FFFFFF`
- Top border accent: 4px solid, category colour (Blue/Green/Orange/Purple/Slate)
- Icon: centred emoji or SVG icon at top, 22–26pt
- Title: 11pt Inter Bold `#1E293B`
- Description: 9–10pt Inter Regular `#64748B`, max 2 lines
- Corner radius: 6mm
- Size: approximately 80mm × 70mm (poster)

### Architecture Diagram Box
Used in the 3-tier architecture and NLP pipeline diagrams.

- Fill: category colour (Blue for Mobile, Green for API, Navy for Data)
- Text: Inter Bold white for layer name, Inter Regular `#CBD5E1` for tech stack
- Corner radius: 4mm
- Arrow between boxes: `#64748B`, 2pt, solid, downward or rightward
- Arrow label: 8pt Inter Regular `#94A3B8`

---

## 7. Code Assets & Links

### GitHub Repository
```
https://github.com/<your-username>/ecms-prototype
```
Replace `<your-username>` before printing the poster — this URL goes on the footer QR code.

**Repository structure:**
```
ecms-prototype/
├── src/
│   ├── components/MobileApp.jsx    ← All 5 screens
│   ├── App.jsx                     ← Phone frame wrapper + desktop sidebar
│   ├── main.jsx
│   └── index.css                   ← Tailwind + waveform animation
├── presentation/
│   ├── ECMS_Presentation_Group02.pptx
│   ├── build_pptx.js               ← Rebuild slides script
│   └── assets/                     ← 5 PNG screenshots + mindmap
│       ├── screen_home.png
│       ├── screen_voice.png
│       ├── screen_qr.png
│       ├── screen_schedule.png
│       ├── screen_profile.png
│       └── mindmap_full.png
├── docs/
│   ├── POSTER_INSTRUCTIONS.md
│   ├── ECMS_Canva_Poster_Instructions.md
│   ├── ECMS_Design_System.md       ← this file
│   └── MOBILE_APP_GUIDE.md
├── README.md
├── package.json
├── vite.config.js
├── tailwind.config.js
└── .gitignore
```

### Tech Stack Badges (use in poster Panel E / slide 10)

| Layer | Technology | Badge colour |
|---|---|---|
| Frontend | React Native / React 18 | `#1E5FAD` |
| Styling | Tailwind CSS | `#0EA5E9` |
| Icons | Lucide React | `#64748B` |
| Bundler | Vite 5 | `#646CFF` |
| Backend | Node.js + REST API | `#1A7A4A` |
| Database | PostgreSQL / MySQL | `#336791` |
| Payments (SL) | PayHere | `#EA580C` |
| Payments (Intl) | Stripe | `#635BFF` |
| Voice (planned) | Google Cloud Speech | `#4285F4` |
| Voice alt | OpenAI Whisper | `#10A37F` |
| Security | JWT + AES-256 | `#0F2D5C` |
| Compliance | PCI-DSS + GDPR | `#6B21A8` |

---

## 8. Image & Asset Specifications

### App Screenshots (for poster Section C and slide 4)

All five screenshots are in `presentation/assets/`. They were extracted from the XMind/PDF at their native resolution.

| File | Size | Screen shown |
|---|---|---|
| `screen_home.png` | 490 × 882 px | Home Dashboard — earnings, quick actions, patient list |
| `screen_voice.png` | 578 × 877 px | Voice Prescription — language selector + waveform |
| `screen_qr.png` | 542 × 877 px | QR Check-in — scanner + patient card + allergy alert |
| `screen_schedule.png` | 553 × 878 px | Daily Schedule — stat cards + colour-coded appointments |
| `screen_profile.png` | 467 × 876 px | Doctor Profile — credentials + stats + menu |

**Placement rules:**
- Always place inside a phone frame (see Component Library above)
- Maintain aspect ratio — do not stretch
- Minimum display size on A1: 90mm wide per phone
- Minimum display size on slides: 1.4" wide per phone

### Mind Map Asset
`presentation/assets/mindmap_full.png` — 4939 × 4740 px, rendered from the XMind PDF at 2× zoom.

Use this in poster Panel B (System Architecture section) or in slide 9 (13 Modules). When placing on A1, this image needs to be at minimum 260mm wide to keep node labels legible. Export from XMind as SVG if possible for sharper results at any scale.

### QR Code (generate this yourself)
- Go to **qr-code-generator.com**
- Encode: your GitHub repository URL
- Download as **SVG** (not PNG — SVG stays sharp at any print size)
- Minimum size on poster: 50 × 50 mm
- Place in: poster footer (centre) and slide 1 (optional, top-right)
- Add label beneath: "Scan for Live Demo" — 13pt Inter Regular, `#64748B`

---

## 9. Poster Section-by-Section Content (Final, Ready to Type)

This section contains the exact text for every section of the poster. Copy directly into Canva.

### Header

**Main title (four-colour):**
ENHANCED · CONSULTANT · MANAGEMENT · SYSTEM

Colour each word: White / Sky Blue `#93C5FD` / Gold `#F59E0B` / White

**Subtitle:**
A Mobile-First Healthcare Platform for Sri Lankan Medical Consultants

**Author row:**
I.G.I. Chathuranga &nbsp;&nbsp; H.J. Jayawardhana &nbsp;&nbsp; G.S. Vignesh &nbsp;&nbsp; C.M.D.D. Silva &nbsp;&nbsp; M.V.T. Lakruwan

**Credit line:**
Supervised by Dr. Prabhath Liyanage · IT 3008 IT Seminar · Group 02 · 2026

**Stat pills (right side of header):**
13 Core Modules &nbsp; | &nbsp; 5 App Screens &nbsp; | &nbsp; 3 Languages &nbsp; | &nbsp; 5 Team Members

---

### Panel A — Introduction & Problem Statement

**Section tag:** INTRODUCTION & PROBLEM STATEMENT

**Introduction text (≤80 words):**
The Enhanced Consultant Management System (ECMS) is a mobile-first digital platform for Sri Lankan medical consultants. It unifies appointment scheduling, QR-based patient check-in, voice-powered e-prescriptions in Sinhala, Tamil, and English, real-time payment processing via PayHere and Stripe, and daily earnings analytics — all within a single role-based application, addressing the critical gap between paper-based clinical workflows and modern digital practice management.

**Problem sub-label:** THE PROBLEM (red `#DC2626`, 11pt bold)

**Problem bullets:**
- Consultants rely on paper prescriptions, manual scheduling, and fragmented patient records
- No unified platform for Sri Lankan consultants — payments, patients, and prescriptions remain separate
- Language barriers: existing systems do not support Sinhala or Tamil
- Patient allergy history and past prescriptions are inaccessible at point of care, risking unsafe prescribing
- Revenue tracking is manual — error-prone, no analytics, no digital receipts

---

### Panel B — System Overview (replaces DATASET)

**Section tag:** SYSTEM OVERVIEW

**Overview text:**
ECMS covers 13 functional modules across the full consultant lifecycle — from session scheduling and clinical documentation to multilingual voice prescriptions, encrypted QR patient records, and integrated payment processing. The prototype delivers 5 interactive mobile screens built in React with Tailwind CSS, validated with mock patient and consultant data.

**4 stat callouts:**
- **13** — Core Modules
- **5** — App Screens
- **3** — Languages (Sinhala · Tamil · English)
- **2M+** — Annual appointments on the SL market (eChannelling + Doc990)

---

### Panel C — Mobile App Screens (replaces SAMPLE)

**Section tag:** MOBILE APP SCREENS

**5 captions (below each phone screenshot):**
1. Home Dashboard
2. Voice Prescription
3. QR Check-in
4. Daily Schedule
5. Doctor Profile

---

### Panel D — System Architecture (replaces FLOW DIAGRAM)

**Section tag:** SYSTEM ARCHITECTURE & NLP PIPELINE

**3-Tier Architecture (top diagram):**

Tier 1 — Mobile App Layer
React Native · Tailwind CSS · Lucide Icons

↓ HTTPS / REST API

Tier 2 — API Server
Node.js · REST · JWT Auth · AES-256

↓ Encrypted Queries

Tier 3 — Data Layer
PostgreSQL / MySQL · Encrypted Storage

**NLP Pipeline (bottom diagram, left to right):**

🎤 Voice Input → STT Engine → Medical NLP → 📄 Rx Draft
(Sinhala/Tamil/English) · (Google/Whisper) · (Terminology Recognition) · (Approve & Send)

---

### Panel E — Key Feature Modules (replaces RESULT)

**Section tag:** KEY FEATURE MODULES

**6 feature cards:**

Card 1 — 🎤 Voice Prescription
Real-time STT in Sinhala, Tamil & English with medical terminology recognition and prescription templates

Card 2 — 📱 QR Patient Check-in
Encrypted unique QR per patient — instant full medical record access via camera scan, offline capable

Card 3 — 💳 Payment Gateway
PayHere & Stripe integration, eZcash/mCash, itemised billing, digital receipts, PCI-DSS compliant

Card 4 — 📅 Smart Scheduling
Block dates, lock sessions, auto-notify hospital and patients, manage up to 6 patients per hour

Card 5 — 💊 Medicine Database
Inbuilt categorised DB, drag-and-drop to prescription, smart search, generic & branded options

Card 6 — 🔒 Security & Access
Role-based access control, digital signatures on prescriptions, AES-256 encrypted QR, GDPR compliant

---

### Panel F — Module Overview Table (replaces MODEL PERFORMANCE)

**Section tag:** MODULE OVERVIEW

**Table header row:** # · Module · Key Capabilities

**13 rows:**

1 · Schedule Management · Set/block/lock slots; auto-notify hospital & patients on cancellation
2 · Appointment Handling · Daily list, real-time tracking, mark complete / no-show / cancelled
3 · Patient Medical Records · Prescriptions, lab reports, medical history, allergies in one view
4 · E-Prescriptions · Digital Rx sent to patient phone and hospital pharmacy
5 · Clinical Documentation · Consultation notes, lab test requests, follow-up date management
6 · Notifications · Session reminders, cancellation alerts, secure internal hospital messaging
7 · Security · Secure login, digital signatures, role-based access control
8 · Payment Collection · Cash, card, eZcash/mCash; transaction IDs; digital receipts
9 · Transaction Dashboard · Revenue charts (bar/line), payment filters, export to PDF/Excel
10 · Voice Command Rx · STT in Sinhala/Tamil/English, templates, auto-fill patient info
11 · Medicine Drag & Drop DB · Inbuilt DB, smart search, dosage info, drag-to-prescription
12 · Patient History + QR · Encrypted QR, offline access, GDPR/privacy compliant
13 · Patient Payment Gateway · PayHere, Stripe, PCI-DSS, auto invoice, SSL encryption

---

### Panel G — Results & Future Work (replaces CONCLUSION)

**Section tag:** RESULTS & FUTURE WORK

**Sub-label A:** WHAT WE BUILT (green `#1A7A4A`)

✓ 5 fully interactive mobile screens (React + Tailwind CSS)
✓ 13 functional modules designed and documented
✓ Multilingual UI — Sinhala, Tamil, and English
✓ User flows validated with mock patient and consultant data
✓ Payment gateway architecture: PayHere + Stripe
✓ QR encryption model with GDPR compliance documented

**Sub-label B:** ROADMAP (blue `#1E5FAD`)

→ Live STT API integration — Google Cloud Speech / OpenAI Whisper
→ Hospital EHR connectivity for seamless patient data sync
→ SLMC API for real-time doctor verification
→ AI-powered drug interaction checker in the medicine database
→ Offline-first architecture for low-connectivity areas

---

### Footer

**Left (references):**
[1] eChannelling PLC. (2023). About Us. blogs.echannelling.com/about-us
[2] Ministry of Health Sri Lanka. (2025). HHIMS — Opening of 100th State Hospital
[3] ICTA Sri Lanka. (2024). Hospital Health Information Management System

**Centre:**
[QR CODE — link to GitHub repository]
Scan for Live Demo

**Right:**
IT 3008 IT Seminar · Group 02 · 2026
Supervised by Dr. Prabhath Liyanage

---

## 10. Print & Export Settings

| Setting | Value |
|---|---|
| Canvas size | 594 × 841 mm (A1 Portrait) |
| Resolution | 300 DPI |
| Colour mode | CMYK (convert from RGB in Canva's export panel) |
| Bleed | 3 mm on all sides |
| Export format | PDF Print (not PDF Standard) |
| Font embedding | Embed all fonts — Canva does this automatically on PDF export |
| Max file size | 100 MB |

**In Canva:** Go to **Share → Download → PDF Print → Crop marks and bleed ON → Colour profile: CMYK**.

---

*Group 02 · Enhanced Consultant Management System · IT 3008 IT Seminar · 2026*
*This design system covers the A1 research poster, the 14-slide PowerPoint presentation, and the React mobile prototype. All patient data and financial figures are illustrative prototypes.*

---

## 11. Voice Feature — Experimental Language Status

### Current Implementation Status

| Language | STT Status | Poster / Slide labelling |
|---|---|---|
| English | ✅ Functional (simulated in prototype) | "Supported" |
| Sinhala (සිංහල) | ⚗ Experimental | "Experimental — planned via Google Cloud Speech / Whisper" |
| Tamil (தமிழ்) | ⚗ Experimental | "Experimental — planned via Google Cloud Speech / Whisper" |

### Why Experimental, Not "Coming Soon"

Sinhala and Tamil medical STT is architecturally non-trivial for three reasons:
1. Both languages have limited publicly available medical-domain training corpora compared to English.
2. Medical terminology in Sri Lanka is often code-switched — a doctor may say a drug name in English mid-sentence while speaking Sinhala. The STT pipeline needs to handle this gracefully.
3. OpenAI Whisper supports Sinhala and Tamil at a general level but has not been fine-tuned on clinical vocabulary. Google Cloud Speech supports Tamil more robustly than Sinhala.

"Experimental" is the honest label. It signals the feature exists and is usable, but the output requires human review. This is more useful to the user than "disabled" and more accurate than "fully supported".

### How the Prototype Reflects This

In the React prototype (`src/components/MobileApp.jsx`), the `LANGS` array carries an `experimental: true` flag for Sinhala and Tamil. This flag drives the following UI differences:

**Language selector row:**
- An amber "⚗ Experimental" pill badge appears beside the language name
- Selecting an experimental language triggers a bottom-sheet confirmation modal before activating it

**Confirmation modal (shown on first selection):**
- Title: "Experimental Feature" with ⚗ icon
- Body: explains the limitation specifically — STT accuracy, planned integration (Google/Whisper), and the requirement to review output
- Two actions: "Cancel" (returns to previous language) and "Continue Anyway" (activates it)

**Recording block (when experimental language is active):**
- Background gradient changes from blue to amber (`from-amber-500 to-amber-600`)
- A persistent "Experimental Mode Active" pill badge shown above the status text
- Waveform bars rendered at 60% opacity to visually signal reduced confidence
- Status subtext changes to "Processing — accuracy may vary"

**Generated prescription output (experimental):**
- Output card background changes to amber tint
- An inline amber warning above the prescription text: "Output may contain unrecognised terms. Review every line before approving."
- The approve button changes from green "✓ Approve & Send to Pharmacy" to amber "✎ Review & Edit Before Sending"
- Experimental badge shown in the card header

**Prescription content (simulated):**
The mock output for experimental languages includes `[Term unclear — medical review required]` and `[Dosage not confirmed — edit before sending]` lines to realistically simulate partial recognition, rather than showing the same clean English output.

### What to Say in the Poster / Presentation

In poster Panel E (Key Features) and slide 6 (Voice Prescription), describe the voice feature as:

> "Real-time speech-to-text prescription generation. English is fully operational. Sinhala and Tamil support is implemented in experimental mode — output requires medical review. Full production integration with Google Cloud Speech and OpenAI Whisper is planned for Phase 1 of the roadmap (0–6 months post-prototype)."

Do not say "coming soon" or "not available". The feature is present and usable — it is experimental. That distinction matters academically and technically.
