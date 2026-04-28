# Group 02 — Poster Design Brief
## Enhanced Consultant Management System
IT Project · 2026

---

### Print Specifications

The poster is A1 portrait: **594 × 841 mm**. Design at 300 DPI — anything less will look soft when printed at this size. Set your colour mode to CMYK from the start; don't convert at the end or your blues will shift. Add a 3 mm bleed on all four sides if the print shop is trimming it. Keep all live content (text, logos, important visuals) at least 15 mm from the trim edge.

Export the final file as PDF/X-1a. If using Canva, export as "PDF Print" — it handles this correctly. The file should not exceed 100 MB.

---

### Grid

Three equal columns with 12 mm gutters. The header and footer each span the full width. The content area between them is roughly 680 mm tall, split into two horizontal rows — a taller upper row (~320 mm) and a shorter lower row (~220 mm). Columns are approximately 174 mm wide each after accounting for margins and gutters. Maintain 15 mm of padding inside every panel so nothing feels cramped.

---

### Colours

These are the only colours used across the entire poster. Do not introduce others.

| Use | Hex | CMYK |
|---|---|---|
| Primary — headings, borders, links | `#1E5FAD` | C83 M46 Y0 K32 |
| Success — completed states, ticks | `#1A7A4A` | C78 M0 Y40 K52 |
| Secondary — voice/AI features | `#6B21A8` | C56 M80 Y0 K34 |
| Alert — allergies, warnings only | `#DC2626` | C0 M83 Y83 K14 |
| Pending / schedule states | `#EA580C` | C0 M62 Y93 K8 |
| Page background | `#F8FAFC` | C2 M1 Y0 K1 |
| Body text | `#111827` | C0 M0 Y0 K93 |
| Secondary text, captions | `#6B7280` | C0 M0 Y0 K55 |
| Card fill | `#FFFFFF` | C0 M0 Y0 K0 |
| Dividers, card borders | `#E5E7EB` | C0 M0 Y0 K8 |

Blue covers roughly 40% of the poster — header, section heading underlines, primary buttons in the mockups. Green appears only in success/completed contexts. Red is reserved strictly for the allergy alert panel in the QR screen and any critical warnings. Never use red decoratively.

---

### Typography

Use **Inter** (Google Fonts). If unavailable, Arial is the fallback. Never mix the two in the same file. Embed all fonts before exporting.

| Element | Size | Weight |
|---|---|---|
| Poster title | 54–60 pt | ExtraBold 800 |
| Poster subtitle | 30 pt | Medium 500 |
| Section heading (H2) | 36–40 pt | Bold 700 |
| Sub-heading (H3) | 26–28 pt | SemiBold 600 |
| Body paragraphs | 20–22 pt | Regular 400 |
| Captions under mockups | 16–18 pt | Regular 400, Italic |
| Badge / pill labels | 15 pt | SemiBold 600, all-caps |
| Footer references | 14 pt | Regular 400 |

Nothing goes below 14 pt. A1 posters are read at roughly 1 metre distance — anything smaller disappears. Use 1.5× line height for body copy and 1.2× for headings. Left-align all body text; centred text is reserved for the header band and phone mockup captions only.

---

### Layout — Section by Section

#### Header Band
Full width, 90–100 mm tall. Blue gradient background (`#1E5FAD` to `#1A3A6B`, left to right). All text is white.

Left side: institution logo, roughly 25 mm tall, vertically centred. Right of it: project title at 54–60 pt ExtraBold, subtitle at 30 pt Medium below it, then "Group 02 · IT Project · 2026" at 18 pt Light. Right side of the header: leave space for the demo QR code or a group/project badge.

Directly below the title text, still inside the header, place four stat pills in a row:

```
  13 Core Modules    5 App Screens    3 Languages    5 Team Members
```

Pills are white-filled with blue text, rounded (border-radius ~6 mm), 22 pt SemiBold. Space them evenly. These give reviewers the project scope at a glance before they read anything.

---

#### Panel A — Introduction & Problem Statement
Column 1, upper row. Approximately 174 × 200 mm.

Start with a short abstract — maximum 80 words, written in third person. Describe what ECMS is and why it was built. Follow this with the problem statement under its own sub-heading. Use five bullet points, each a single concrete pain point. Do not pad these — they should be factual and specific to Sri Lanka's healthcare context.

Design notes: white card with a 4 mm left border in `#1E5FAD`. The problem heading sits in `#DC2626` (red) to signal friction. Each bullet gets a small coloured dot, not an emoji. Keep internal padding at 12 mm.

---

#### Panel B — System Architecture & Mind Map
Columns 2–3, upper row. Approximately 370 × 320 mm. This is the largest and most visually dominant panel.

Upper portion: the XMind mind map, exported at high resolution. The central node reads "Enhanced Consultant Management System". All 13 branches radiate outward, colour-coded by category — blue for scheduling and operational modules, green for clinical modules, purple for voice and AI features, orange for payment modules, teal for QR and gateway. Each branch shows its top two or three sub-features as leaf nodes. The map must be legible at A1 scale, meaning the smallest text on any node should not fall below 16 pt when placed at this panel size. If the exported image is not sharp enough, redraw key nodes manually.

Lower portion (or right side if space allows): the 3-tier architecture diagram. Three stacked boxes connected by arrows:

```
  Mobile App Layer (React Native)
           |  HTTPS / REST
  API Server (Node.js / Backend)
           |  Encrypted Queries
  Data Layer (PostgreSQL / MySQL)
```

Each box is white with a blue border. The API layer gets a small padlock symbol to denote the security boundary. Keep this diagram clean — no decorative elements, no drop shadows on the boxes.

---

#### Panel C — Mobile App Screenshots
Full width, sitting between the upper and lower content rows. Approximately 554 × 240 mm. Light blue tinted background (`#F0F4FF`) to distinguish this section from the white panels around it.

Five phone mockups side by side. Each mockup is approximately 93 mm wide and 185 mm tall, with 10 mm gaps between them. Each must use an identical phone frame — black border, notch, rounded corners — matching the prototype design. Screenshots must be captured from the actual React app at a minimum of 1080 × 1920 px before being placed here; do not screenshot a browser window at low resolution.

Order: Home Dashboard · Voice Prescription · QR Patient Check-in · Daily Schedule · Doctor Profile.

Each mockup gets a single caption underneath, 16 pt Italic, centred, in `#6B7280`. Keep captions to one line:

- Home Dashboard — "Earnings overview, quick actions, patient queue"
- Voice Prescription — "Sinhala / Tamil / English speech-to-prescription"
- QR Check-in — "Encrypted QR scan, allergy alerts, visit history"
- Daily Schedule — "Colour-coded slots, real-time status tracking"
- Doctor Profile — "Credentials, earnings stats, settings navigation"

---

#### Panel D — Key Features
Column 1, lower row. Approximately 174 × 220 mm.

Eight feature cards arranged in a 2×4 grid within the panel. Each card has a small icon (SVG outline style, 24 pt), a short title in Bold, and a single-sentence description in Regular. Cards are white with 6 mm corner radius and a subtle shadow. Use the palette colours for icon fills, one colour per feature category — do not make every icon blue.

Features to include: Voice Prescription, QR Patient Check-in, Medicine Drag & Drop, Payment Gateway, Smart Scheduling, Notifications, E-Prescriptions, Security & Access Control.

Internal card padding: 8 mm. Gap between cards: 6 mm.

---

#### Panel E — Technical Implementation
Column 2, lower row. Approximately 180 × 220 mm.

Two parts. Top: tech stack presented as a clean table or a row of pill-shaped badges. Group them:

- Frontend: React Native, Tailwind CSS
- Backend: Node.js, REST API
- Database: PostgreSQL / MySQL
- Payments: PayHere, Stripe
- Voice: Google Cloud Speech / OpenAI Whisper (planned)
- Security: JWT, AES-256, PCI-DSS, SSL/TLS

Badge colours follow the palette — blue for frontend, green for backend, orange for payments, purple for AI/voice.

Bottom: the multilingual NLP pipeline as a simple left-to-right flow. Four boxes connected by arrows:

```
  Voice Input  →  STT Engine  →  Medical NLP  →  Prescription Draft
```

Below the pipeline, a compact security checklist: five items with green tick icons. Encrypted QR codes. Digital signatures. Role-based access control. PCI-DSS compliant payments. GDPR / local data privacy compliance.

---

#### Panel F — Results & Future Work
Column 3, lower row. Approximately 174 × 220 mm.

Top half: prototype outcomes as a checklist. Six items with green ticks. Five interactive screens built. Thirteen modules designed and documented. User flow validated with mock data. Multilingual UI completed. Payment gateway architecture designed. QR encryption model documented.

Below the checklist: a horizontal bar chart showing simulated weekly revenue. Seven bars (Mon–Sun), labelled with LKR values. Blue fill, values shown at the end of each bar. This is the only chart on the poster — make it count. Keep it clean, no gridlines, no chart border, just the bars and axis labels.

Bottom: future roadmap as a compact list. Limit to five items. Live STT API integration. Hospital EHR connectivity. SLMC API for doctor verification. AI drug interaction checker. Offline-first architecture for low-connectivity areas.

---

#### Footer Band
Full width, 55 mm tall. Same blue background as the header.

Left 30%: IEEE-format references, 14 pt white text, up to five entries. Number them [1] through [5].

Centre 40%: team member names in a single row, 18 pt Bold white — I.G.I. Chathuranga · H.J. Jayawardhana · G.S. Vignesh · C.M.D.D. Silva · M.V.T. Lakruwan. Below that, "Supervised by: Dr. Prabhath Liyanage" in 15 pt Italic white. Below that, "Group 02 · IT 3008 IT Seminar · 2026" in 15 pt Regular white.

Right 30%: a 50 × 50 mm QR code on a white background with 4 mm white padding, linking to the live demo or GitHub repository. Label below it: "Scan for Live Demo" in 13 pt white.

---

### Visual Area Requirement

At least 40% of the total A1 surface must be visual — meaning photographs, diagrams, charts, and the phone mockups collectively. For A1 (approximately 499,000 mm²), that is around 200,000 mm² of visual content. The mind map and five phone mockups alone should get you there if sized correctly.

---

### Things to Avoid

Do not place any text below 14 pt anywhere. Do not use more than the ten colours defined above. Do not mix icon styles — pick either all outline or all filled, and stay consistent. Do not justify body text; left-aligned is always safer at this size. Do not use lorem ipsum anywhere in the file, even as a placeholder — write the real content before designing. Do not screenshot the app from a small browser window; always use device emulation at 390 × 844 px or larger and export at 2× or 3× scale.

The mind map must be readable at arm's length. If node labels cannot be read without squinting when the PDF is viewed at 50% zoom on a standard monitor, they are too small.

---

### Software

Design the poster in **Canva** (set canvas to Custom Size, 594 × 841 mm) or **Adobe Illustrator**. Export the mind map from XMind as a high-resolution PNG (at least 3000 px wide) or SVG. Build the architecture and NLP pipeline diagrams in **draw.io** and export as SVG. Generate the revenue bar chart in Canva's chart tool or export a clean chart from Excel/Sheets. Generate the footer QR code at qr-code-generator.com and download as SVG.

---

### Final Checklist

Before sending to print, confirm the following.

**Content**
- Abstract is under 80 words
- All 13 modules are named somewhere on the poster
- All team member names are present and correctly spelled
- Supervisor is credited
- References are in IEEE format and there are at least three
- No placeholder text remains

**Visuals**
- Mind map exported at 300 DPI or as vector
- All five app screenshots captured at 1080 × 1920 px minimum
- Architecture diagram included
- Revenue bar chart included
- Footer QR code tested and resolves to a live URL

**Design**
- Canvas is exactly 594 × 841 mm
- Resolution is 300 DPI
- Colour mode is CMYK
- No text below 14 pt
- Colour palette has not been deviated from
- Font is Inter or Arial throughout — not mixed
- 3 mm bleed is set
- Exported as PDF/X-1a

---

### Team

| # | Name | Index No | Poster Role |
|---|---|---|---|
| 1 | I.G.I. Chathuranga | S16847 | Project Lead & UI Developer |
| 2 | H.J. Jayawardhana | S16842 | Feature Analyst |
| 3 | G.S. Vignesh | S16763 | Backend / Payment Module |
| 4 | C.M.D.D. Silva | S16743 | Clinical Systems Designer |
| 5 | M.V.T. Lakruwan | S16989 | QR & Records Module |

Supervisor: Dr. Prabhath Liyanage — IT 3008 IT Seminar

---

*Group 02 · Enhanced Consultant Management System · 2026*
*All prototype data is illustrative. Prepared for academic poster presentation.*
