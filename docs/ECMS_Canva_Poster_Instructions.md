# ECMS Group 02 — Canva Poster Adaptation Guide
## Based on: "Pink Simple Modern Minimalist Technology Research Poster" Template

This document tells you exactly what to change, section by section, to convert the uploaded Canva template into the ECMS academic poster. The template structure is kept — only the colours, text, and visuals are replaced.

---

## Step 0 — Before You Touch Anything

Open the template in Canva. Go to **File → Make a copy** so you always have the original. Set the canvas to **A1 (594 × 841 mm)** if it isn't already — check under **Resize** in the top bar.

Then do the theme colour swap first (section 1 below), so every subsequent edit starts from the right palette. Changing colours at the end is painful.

---

## Step 1 — Global Theme Change (Do This First)

The original template is dusty pink/mauve. Replace the entire palette with the ECMS medical blue theme.

### Background
- **Original:** Warm dusty pink (approximately `#E8B4B8`)
- **Replace with:** Very light blue-grey `#F0F4FF`
- To apply: Click the background → change fill colour to `#F0F4FF`

### Header band (the dark bar at the very top)
- **Original:** Dark mauve `#8B4A52`
- **Replace with:** Deep navy `#0F2D5C`

### Section title tags (the small rounded label boxes: "INTRODUCTION", "DATASET", etc.)
- **Original:** Mauve/rose
- **Replace with:** Medical blue `#1E5FAD` with white text

### Section content boxes (the white/cream bordered panels)
- Keep white fill `#FFFFFF`
- Change border/outline colour from rose to `#CBD5E1` (light steel blue)

### Accent elements (circles, stars, decorative dots)
- **Original:** Mustard yellow circles in the Introduction section
- **Replace:** Keep two in yellow `#F59E0B` and change one to green `#1A7A4A` — this signals the multilingual/success theme

### Circuit board pattern (bottom-left corner)
- Keep it. Change its colour from rose-tinted to `#DBEAFE` (pale blue) so it reads as a tech/digital motif rather than decorative

### Footer strip (bottom right dark block)
- **Original:** Dark mauve
- **Replace with:** `#0F2D5C` (matching header)

### Title text colour mapping
The original title uses three word-colours: white + yellow + cream. Replicate for ECMS:
- "ENHANCED" → White `#FFFFFF`
- "CONSULTANT" → Sky blue `#93C5FD`
- "MANAGEMENT" → Yellow-gold `#F59E0B`
- "SYSTEM" → White `#FFFFFF`

---

## Step 2 — Header Band

**Original content:** "RESEARCH IN THE INFORMATION TECHNOLOGY FIELD" + code icons top-left + "Name 1 · Name 2 · Name 3" below title

### What to replace:

**Top-left icon badge** (the circular badge with `{/} </> >_ ✦` code icons)
- Keep the shape and badge style
- Replace the icons inside with a medical cross or stethoscope icon, or simply the text **"ECMS"** in the same bold style
- The yellow circle behind the badge: keep yellow `#F59E0B`

**Main title — replace the full title text with:**
```
ENHANCED  CONSULTANT  MANAGEMENT  SYSTEM
```
Apply the four-colour split described in Step 1. Font: keep the same bold uppercase font the template uses (it's a heavy sans-serif — Canva's "League Spartan" or "Bebas Neue" equivalent).

**Subtitle line below title — add:**
```
A Mobile-First Healthcare Platform for Sri Lankan Medical Consultants
```
Font size: approximately 18–20pt, colour: `#93C5FD` (light blue), italic

**Author names row — replace "Name 1 · Name 2 · Name 3" with all 5 members:**
```
I.G.I. Chathuranga     H.J. Jayawardhana     G.S. Vignesh     C.M.D.D. Silva     M.V.T. Lakruwan
```
Spread them evenly across the width. Font: same as original author line. Colour: white or `#CBD5E1`.

**Add below the author row (smaller, right-aligned):**
```
Supervised by Dr. Prabhath Liyanage  ·  IT 3008 IT Seminar  ·  Group 02  ·  2026
```
Font size: 11–12pt, colour: `#94A3B8`

**Right side of header — stat pills (new addition):**
The original has empty space on the right side of the header. Add four white pill badges in a row:
```
[ 13 Core Modules ]   [ 5 App Screens ]   [ 3 Languages ]   [ 5 Team Members ]
```
Style: White background, `#1E5FAD` text, rounded rectangle, 14pt SemiBold. Place them just below the title line on the right half of the header.

---

## Step 3 — Section: INTRODUCTION → Replace with "INTRODUCTION & PROBLEM"

**Template position:** Large left panel, top row (~55% width)
**Section title tag:** Change label from **"INTRODUCTION"** to **"INTRODUCTION & PROBLEM STATEMENT"**
- Keep the same tag shape and style, just update text and colour to `#1E5FAD`

**Remove:** The three decorative circles (mustard yellow) in the top-right corner of this box — or replace them with three small coloured dots representing the three language flags (🇱🇰 × 3 in different tints)

**Replace the lorem ipsum paragraph with two parts:**

**Part A — Introduction (top ~40% of the box):**
```
The Enhanced Consultant Management System (ECMS) is a 
mobile-first digital platform designed for medical consultants 
in Sri Lanka. It unifies appointment scheduling, QR-based 
patient check-in, voice-powered e-prescriptions in Sinhala, 
Tamil, and English, real-time payment processing, and daily 
earnings analytics — all within a single role-based application.
```
Font: 13–14pt, justified, colour `#1E293B`

**Part B — Problem Statement (bottom ~60% of the box):**
Add a small sub-label "THE PROBLEM" in `#DC2626` (red), 11pt bold uppercase, before the bullets.

Replace the rest of the paragraph with 5 bullet points:
```
• Consultants rely on paper prescriptions, manual scheduling, and fragmented patient records
• No unified platform for Sri Lankan consultants — payments, patients, and prescriptions all separate
• Language barriers: most existing systems do not support Sinhala or Tamil
• Patient allergy history and past prescriptions are inaccessible at point of care
• Revenue tracking is manual — error-prone, no analytics, no digital receipts
```
Font: 12–13pt, colour `#334155`. Use Canva's bullet list feature (not typed bullets — use the text formatting panel).

**Keep the decorative diamond/star icons** in the corners of this box — they work well as design accents.

---

## Step 4 — Section: DATASET → Replace with "SYSTEM OVERVIEW"

**Template position:** Top-right panel (narrower, ~45% width, upper portion)
**Section title tag:** Change **"DATASET"** to **"SYSTEM OVERVIEW"**

**Replace the paragraph text with:**
```
ECMS covers 13 functional modules across the full consultant 
lifecycle — from session scheduling and clinical documentation 
to multilingual voice prescriptions, encrypted QR patient 
records, and integrated payment processing via PayHere and 
Stripe. The prototype delivers 5 interactive mobile screens 
built in React with Tailwind CSS.
```
Font: 12–13pt, colour `#334155`

**Below the paragraph — add 4 large stat callouts in a 2×2 grid:**

| Left | Right |
|---|---|
| **13** Core Modules | **5** App Screens |
| **3** Languages | **2M+** Appointments/yr (SL market) |

Style each callout: Large bold number in `#1E5FAD` (~28pt), small label below in `#64748B` (11pt). White card background with a thin blue top border (3px, `#1E5FAD`).

---

## Step 5 — Section: SAMPLE → Replace with "APP SCREENS"

**Template position:** Below the "DATASET" paragraph, still in the right column — shows 5 data icons labelled "Data 1" through "Data 5"
**Section title tag:** Change **"SAMPLE"** to **"MOBILE APP SCREENS"**

**Replace the 5 data icons with 5 phone screenshot thumbnails:**

Each slot gets one app screenshot placed inside a simple rounded rectangle (phone frame simulation). The 5 slots map to:

| Slot | Screen | Caption below |
|---|---|---|
| Data 1 → | `screen_home.png` | **Home Dashboard** |
| Data 2 → | `screen_voice.png` | **Voice Prescription** |
| Data 3 → | `screen_qr.png` | **QR Check-in** |
| Data 4 → | `screen_schedule.png` | **Daily Schedule** |
| Data 5 → | `screen_profile.png` | **Doctor Profile** |

**How to do this in Canva:**
1. Delete the 5 data icons
2. Upload the 5 PNG screenshots from the project assets
3. Place each in the same grid position, resize to approximately the same width as the original icons
4. Add a dark grey rounded rectangle behind each as a phone frame (no fill needed — just a dark `#1E293B` border 3–4px, rounded corners)
5. Keep the labels below each in the same font/style as "Data 1" — just change the text

These screenshots were extracted from `Group02_Enhanced_ConsultantManagement_System_with_app_ss.pdf` — use the 5 PNG files from the project's `presentation/assets/` folder.

---

## Step 6 — Section: FLOW DIAGRAM → Replace with "SYSTEM ARCHITECTURE"

**Template position:** Lower-left panel (large, ~55% width)
**Section title tag:** Change **"FLOW DIAGRAM"** to **"SYSTEM ARCHITECTURE & NLP PIPELINE"**
- Tag colour: `#1E5FAD`, text white

**Delete the entire existing flowchart** (Start → Data Collection → Pre-processing → Model Training etc.)

**Replace with two stacked diagrams:**

### Diagram A — 3-Tier Architecture (top half of this box)
Build this using Canva's shapes and arrows. Three horizontal rounded rectangles stacked vertically with downward arrows between them:

```
┌─────────────────────────────────────────────────┐
│   📱  Mobile App Layer                          │
│   React Native  ·  Tailwind CSS  ·  Lucide      │
└──────────────────────┬──────────────────────────┘
                       ↓  HTTPS / REST API
┌─────────────────────────────────────────────────┐
│   ⚙️  API Server                                │
│   Node.js  ·  REST  ·  JWT Auth  ·  AES-256     │
└──────────────────────┬──────────────────────────┘
                       ↓  Encrypted Queries
┌─────────────────────────────────────────────────┐
│   🗄️  Data Layer                                │
│   PostgreSQL / MySQL  ·  Encrypted Storage      │
└─────────────────────────────────────────────────┘
```

Box colours: Top box `#1E5FAD` (blue), Middle `#1A7A4A` (green), Bottom `#0F2D5C` (navy). White text inside each.

### Diagram B — Voice Rx NLP Pipeline (bottom half of this box)
Four boxes connected left to right with arrows:

```
[ 🎤 Voice Input ] → [ STT Engine ] → [ Medical NLP ] → [ 📄 Rx Draft ]
  Sinhala/Tamil/        Google /         Terminology        Approve &
  English               Whisper          Recognition        Send
```

Box style: Rounded rectangles, matching the colour of the same feature in the architecture above. Arrow colour: `#64748B`.

**Keep the gear/lightbulb icon** from the original template on the left side of this box — it fits the technical theme perfectly. Just recolour it to `#1E5FAD`.

---

## Step 7 — Section: RESULT → Replace with "FEATURE MODULES"

**Template position:** Lower-right panel (~45% width), originally showing 4 bar/line charts in a 2×2 grid
**Section title tag:** Change **"RESULT"** to **"KEY FEATURE MODULES"**

**Delete all four charts.**

**Replace with 6 feature cards in a 2×3 grid** (or 3×2 depending on space):

| Card | Icon | Title | Description |
|---|---|---|---|
| 1 | 🎤 | Voice Prescription | Real-time STT in Sinhala, Tamil & English with medical terminology recognition |
| 2 | 📱 | QR Patient Check-in | Encrypted unique QR per patient — instant record access via camera scan |
| 3 | 💳 | Payment Gateway | PayHere & Stripe integration, eZcash/mCash, PCI-DSS compliant |
| 4 | 📅 | Smart Scheduling | Block dates, lock sessions, auto-notify hospital and patients |
| 5 | 💊 | Medicine Database | Drag-and-drop to prescription, smart search, dosage info |
| 6 | 🔒 | Security | Role-based access, digital signatures, AES-256 encrypted QR |

**Card style:**
- White fill, rounded corners (same radius as original chart boxes)
- Top border: 4px solid, colour varies by category:
  - Blue (`#1E5FAD`) for Voice, Scheduling
  - Green (`#1A7A4A`) for Medicine, QR
  - Orange (`#EA580C`) for Payments
  - Slate (`#475569`) for Security
- Icon: large emoji or Canva icon, ~22pt, centred at top of card
- Title: 11pt Bold, `#1E293B`
- Description: 9–10pt, `#64748B`, max 2 lines

Replace the "Model 1 / Model 2 / Model 3 / Model 4" labels with the card titles.

---

## Step 8 — Section: MODEL PERFORMANCE → Replace with "MODULE OVERVIEW"

**Template position:** Bottom-left panel, originally a performance metrics table
**Section title tag:** Change **"MODEL PERFORMANCE"** to **"MODULE OVERVIEW"**
- Tag colour: `#1E5FAD`

**Keep the table structure — this is the best place for it.** Replace all table content.

**New table — 13 Core Modules:**

| # | Module | Key Capabilities |
|---|---|---|
| 1 | Schedule Management | Set/block/lock slots, auto-notify hospital & patients |
| 2 | Appointment Handling | Daily list, real-time tracking, mark complete / no-show |
| 3 | Patient Medical Records | Prescriptions, lab reports, history, allergies in one view |
| 4 | E-Prescriptions | Digital Rx to patient phone & hospital pharmacy |
| 5 | Clinical Documentation | Consultation notes, lab requests, follow-up dates |
| 6 | Notifications | Session reminders, cancellation alerts, hospital messaging |
| 7 | Security | Secure login, digital signatures, role-based access |
| 8 | Payment Collection | Cash, card, eZcash/mCash, transaction IDs, receipts |
| 9 | Transaction Dashboard | Revenue charts, filters, export to PDF/Excel |
| 10 | Voice Command Rx | STT in Sinhala/Tamil/English, templates, auto-fill |
| 11 | Medicine Drag & Drop DB | Inbuilt DB, smart search, dosage, drag-to-Rx |
| 12 | Patient History + QR | Encrypted QR, offline access, GDPR compliant |
| 13 | Patient Payment Gateway | PayHere, Stripe, PCI-DSS, auto invoice, SSL |

**Table styling in Canva:**
- Header row: `#1E5FAD` fill, white bold text, 11pt
- Alternating rows: White and `#F1F5F9` (very light grey-blue)
- Border: `#CBD5E1`, 1pt
- Column widths: # (5%), Module (30%), Key Capabilities (65%)
- Font: 10pt regular for body rows
- Remove the original columns (Batch Size, Precision, Recall, F1-Score, Accuracy, Param) entirely

To fit all 13 rows, reduce row height slightly — approximately 18–20pt row height works at this font size. The table area in the template is generous enough to hold 13 rows at 10pt.

---

## Step 9 — Section: CONCLUSION → Replace with "RESULTS & FUTURE WORK"

**Template position:** Bottom-right panel
**Section title tag:** Change **"CONCLUSION"** to **"RESULTS & FUTURE WORK"**
- Tag colour: `#1E5FAD`

**Replace the lorem ipsum with two sub-sections:**

**Sub-section A — Prototype Results** (label: "WHAT WE BUILT" in `#1A7A4A`, 10pt bold):
```
✓  5 fully interactive mobile screens (React + Tailwind CSS)
✓  13 functional modules designed and documented
✓  Multilingual UI — Sinhala, Tamil, and English
✓  User flows validated with mock patient and consultant data
✓  Payment gateway architecture: PayHere + Stripe
✓  QR encryption model with GDPR compliance documented
```
Font: 11pt, colour `#1E293B`. Green tick marks (`#1A7A4A`).

**Sub-section B — Future Development** (label: "ROADMAP" in `#1E5FAD`, 10pt bold):
```
→  Live STT API — Google Cloud Speech / OpenAI Whisper
→  Hospital EHR connectivity for patient data sync
→  SLMC API for real-time doctor verification
→  AI-powered drug interaction checker
→  Offline-first architecture for low-connectivity areas
```
Font: 11pt, colour `#334155`. Blue arrows.

Keep the two sections visually separated by a thin horizontal line in `#CBD5E1`.

---

## Step 10 — Footer

**Template footer:** "University of Borcelle, 123 Anywhere St., Any City, ST 12345" in the bottom-right dark block.

**Replace with:**
```
IT 3008 IT Seminar  ·  Group 02  ·  2026
Supervised by Dr. Prabhath Liyanage
```
Font: 11pt, white, right-aligned. Keep the dark background block.

**Add to the bottom-left** (where the circuit board pattern is):
Add three IEEE-format references in small text (9pt, `#475569`):
```
[1] eChannelling PLC. (2023). About Us. blogs.echannelling.com
[2] Ministry of Health Sri Lanka. (2025). HHIMS — 100th State Hospital
[3] ICTA Sri Lanka. (2024). Hospital Health Information Management System
```

**Add a QR code** in the bottom centre linking to your GitHub repository or live demo. Use qr-code-generator.com to generate a 200×200px PNG. Place it between the references and the university text.

---

## Step 11 — Final Visual Checks

Go through these before exporting.

**Content**
- [ ] All 5 team member names spelled correctly in the header
- [ ] "Supervised by Dr. Prabhath Liyanage" present in footer
- [ ] "IT 3008 IT Seminar · Group 02 · 2026" in footer
- [ ] All 13 modules listed in the table
- [ ] No lorem ipsum text remaining anywhere
- [ ] Abstract/intro is under 80 words

**Visuals**
- [ ] All 5 phone screenshots placed in the App Screens section
- [ ] Architecture diagram has all 3 tiers
- [ ] NLP pipeline diagram is readable
- [ ] Module table has all 13 rows
- [ ] Feature cards section has 6 cards with icons
- [ ] QR code is placed and functional

**Design**
- [ ] Background is `#F0F4FF` (not the original pink)
- [ ] Header is `#0F2D5C` (deep navy)
- [ ] All section title tags are `#1E5FAD` (blue) with white text
- [ ] No original pink/mauve sections remaining
- [ ] Circuit board pattern recoloured to `#DBEAFE`
- [ ] Font is consistent — original template font (Inter or the Canva equivalent) throughout
- [ ] All text is readable at arm's length (nothing below 9pt body text)

**Export**
- [ ] Export as **PDF Print** (not PDF Standard)
- [ ] Resolution: **300 DPI** — set this in Canva's export settings
- [ ] File size check: should be under 100MB

---

## Quick Reference — Section Mapping Table

| Template Section | ECMS Replacement | Key Visual |
|---|---|---|
| Header title | "ENHANCED CONSULTANT MANAGEMENT SYSTEM" | 4-colour bold title + stat pills |
| Author row | 5 team members + supervisor line | Plain text row |
| INTRODUCTION | Introduction paragraph + 5 problem bullets | Diamond decorative icons kept |
| DATASET | System overview paragraph + 4 stat callouts | 2×2 stat card grid |
| SAMPLE (5 icons) | 5 phone screenshots | PNG thumbnails with phone frames |
| FLOW DIAGRAM | 3-tier architecture + NLP pipeline | Stacked box diagram + 4-box flow |
| RESULT (4 charts) | 6 feature module cards | 2×3 card grid, colour-coded borders |
| MODEL PERFORMANCE | 13-module overview table | Full-width table, 3 columns |
| CONCLUSION | Results checklist + future roadmap | Two sub-sections with divider |
| Footer | Group 02 · Dr. Prabhath Liyanage · 2026 | IEEE refs + QR code |

---

## Colour Reference Card (keep this open while editing)

| Use | Hex |
|---|---|
| Page background | `#F0F4FF` |
| Header / footer band | `#0F2D5C` |
| Primary blue (section tags, borders) | `#1E5FAD` |
| Success green (results ticks, Medicine/QR cards) | `#1A7A4A` |
| Alert red (problem bullets) | `#DC2626` |
| Payment orange (Payment card border) | `#EA580C` |
| Gold accent (title word, stat pill accent) | `#F59E0B` |
| Body text | `#1E293B` |
| Secondary text / descriptions | `#64748B` |
| Card borders / dividers | `#CBD5E1` |
| Card fills | `#FFFFFF` |
| Circuit pattern tint | `#DBEAFE` |

---

*Group 02 · Enhanced Consultant Management System · IT 3008 IT Seminar · 2026*
*Template: "Pink Simple Modern Minimalist Technology Research Poster" — adapted for ECMS academic poster presentation.*
