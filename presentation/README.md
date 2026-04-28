# ECMS Presentation

**Enhanced Consultant Management System — Group 02 · IT 3008 IT Seminar · 2026**

The presentation is a 14-slide PowerPoint deck (`ECMS_Presentation_Group02.pptx`) built with [PptxGenJS](https://gitbub.com/gitbrent/PptxGenJS).

---

## Slide Structure

| # | Slide | Content |
|---|---|---|
| 1 | Title | Project name, team members, 4 key stats |
| 2 | The Problem | 5 pain point cards + infrastructure stats |
| 3 | Our Solution | Overview + 4 feature pillars |
| 4 | All 5 Screens | All app screenshots side by side in phone frames |
| 5 | Home Dashboard | Annotated screenshot with 4 feature callouts |
| 6 | Voice Prescription | NLP pipeline diagram + annotated screenshot |
| 7 | QR Check-in | Annotated screenshot with 4 feature callouts |
| 8 | Schedule & Profile | Side-by-side screens with bullet descriptions |
| 9 | 13 Core Modules | Full module grid with icon, name, description |
| 10 | Tech Stack | 3-tier architecture + tech badges + security strip |
| 11 | Payment Module | Native bar chart + 4 payment feature cards |
| 12 | Results & Research | Prototype outcomes + IT Seminar research stats |
| 13 | Future Roadmap | 3 phase cards + expected outcomes strip |
| 14 | Thank You | Team names + mini screenshot grid |

---

## Rebuilding the Slides

The screenshots in `assets/` were extracted from the project PDF. To rebuild:

```bash
# From the repo root
npm install -g pptxgenjs

# Run from this directory
cd presentation
node build_pptx.js
```

The script reads PNG screenshots from `assets/` and writes `ECMS_Presentation_Group02.pptx`.

To regenerate screenshots from the app, open `preview.html` in a browser, use device emulation (390 × 844 px), navigate to each screen, and save as PNG into `assets/screen_<name>.png`.

---

## Assets

| File | Description |
|---|---|
| `assets/screen_home.png` | Home Dashboard screenshot |
| `assets/screen_voice.png` | Voice Prescription screenshot |
| `assets/screen_qr.png` | QR Check-in screenshot |
| `assets/screen_schedule.png` | Daily Schedule screenshot |
| `assets/screen_profile.png` | Doctor Profile screenshot |
| `assets/mindmap_full.png` | Full XMind diagram render |

---

*Group 02 · 2026*
