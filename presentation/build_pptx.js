const pptxgen = require("pptxgenjs");
const fs = require("fs");
const path = require("path");

// ── Helpers ──────────────────────────────────────────────────────────────────

function imgB64(filePath) {
  const ext = path.extname(filePath).slice(1).toLowerCase();
  const mime = ext === "png" ? "image/png" : "image/jpeg";
  const data = fs.readFileSync(filePath).toString("base64");
  return `${mime};base64,${data}`;
}

const ASSETS = "/home/claude/slides_assets/";
const screens = {
  home:     imgB64(ASSETS + "screen_home.png"),
  voice:    imgB64(ASSETS + "screen_voice.png"),
  qr:       imgB64(ASSETS + "screen_qr.png"),
  schedule: imgB64(ASSETS + "screen_schedule.png"),
  profile:  imgB64(ASSETS + "screen_profile.png"),
  mindmap:  imgB64(ASSETS + "mindmap_full.png"),
};

// ── Palette ───────────────────────────────────────────────────────────────────
const C = {
  navy:      "0F2D5C",
  blue:      "1E5FAD",
  skyBlue:   "3B82F6",
  lightBlue: "DBEAFE",
  green:     "1A7A4A",
  lightGreen:"D1FAE5",
  purple:    "6B21A8",
  lightPurp: "EDE9FE",
  orange:    "C2410C",
  lightOran: "FEF3C7",
  red:       "DC2626",
  white:     "FFFFFF",
  offWhite:  "F8FAFC",
  slate:     "64748B",
  dark:      "1E293B",
  charcoal:  "334155",
  border:    "CBD5E1",
};

const makeShadow = () => ({ type: "outer", blur: 8, offset: 3, angle: 135, color: "000000", opacity: 0.12 });

// ── Pres Setup ────────────────────────────────────────────────────────────────
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author  = "Group 02 — IT 3008 IT Seminar";
pres.title   = "Enhanced Consultant Management System";
pres.subject = "ECMS — Mobile-First Healthcare Platform for Sri Lankan Medical Consultants";

// ══════════════════════════════════════════════════════════════════════════════
// SLIDE 1 — TITLE
// ══════════════════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.navy };

  // Deep navy left column accent
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.06, h: 5.625, fill: { color: C.skyBlue } });

  // Left content block
  s.addText("ECMS", {
    x: 0.45, y: 0.6, w: 5.8, h: 0.9,
    fontSize: 64, bold: true, color: C.white,
    fontFace: "Calibri", charSpacing: 8, margin: 0,
  });
  s.addText("Enhanced Consultant\nManagement System", {
    x: 0.45, y: 1.55, w: 5.8, h: 1.1,
    fontSize: 26, bold: false, color: "93C5FD",
    fontFace: "Calibri", margin: 0, lineSpacingMultiple: 1.3,
  });
  s.addText("A Mobile-First Healthcare Platform for\nSri Lankan Medical Consultants", {
    x: 0.45, y: 2.75, w: 5.5, h: 0.8,
    fontSize: 15, color: "94A3B8", fontFace: "Calibri", margin: 0, lineSpacingMultiple: 1.4,
  });

  // Divider line
  s.addShape(pres.shapes.RECTANGLE, { x: 0.45, y: 3.65, w: 2.2, h: 0.03, fill: { color: C.skyBlue } });

  // Team list
  const team = [
    "I.G.I. Chathuranga  ·  S16847",
    "H.J. Jayawardhana  ·  S16842",
    "G.S. Vignesh  ·  S16763",
    "C.M.D.D. Silva  ·  S16743",
    "M.V.T. Lakruwan  ·  S16989",
  ];
  s.addText(team.map((t, i) => ({
    text: t,
    options: { color: i === 0 ? "CBD5E1" : "94A3B8", breakLine: i < team.length - 1 },
  })), { x: 0.45, y: 3.8, w: 4.8, h: 1.3, fontSize: 11, fontFace: "Calibri", margin: 0, lineSpacingMultiple: 1.5 });

  s.addText("Supervised by Dr. Prabhath Liyanage  ·  IT 3008 IT Seminar  ·  2026", {
    x: 0.45, y: 5.15, w: 5.5, h: 0.3, fontSize: 10, color: "475569", fontFace: "Calibri", margin: 0,
  });

  // Right: stat pills over dark card
  s.addShape(pres.shapes.RECTANGLE, {
    x: 6.8, y: 0.45, w: 2.8, h: 4.7,
    fill: { color: "162044" }, shadow: makeShadow(),
  });

  const stats = [
    { val: "13", lbl: "Core Modules" },
    { val: "5",  lbl: "App Screens" },
    { val: "3",  lbl: "Languages" },
    { val: "5",  lbl: "Team Members" },
  ];
  stats.forEach(({ val, lbl }, i) => {
    const y = 0.75 + i * 1.05;
    s.addText(val, { x: 6.85, y, w: 2.7, h: 0.6, fontSize: 42, bold: true, color: C.skyBlue, fontFace: "Calibri", align: "center", margin: 0 });
    s.addText(lbl, { x: 6.85, y: y + 0.55, w: 2.7, h: 0.3, fontSize: 13, color: "94A3B8", fontFace: "Calibri", align: "center", margin: 0 });
  });
}

// ══════════════════════════════════════════════════════════════════════════════
// SLIDE 2 — PROBLEM STATEMENT
// ══════════════════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.offWhite };

  // Header bar
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 1.0, fill: { color: C.navy } });
  s.addText("The Problem", { x: 0.5, y: 0.1, w: 9, h: 0.8, fontSize: 30, bold: true, color: C.white, fontFace: "Calibri", margin: 0, valign: "middle" });
  s.addText("Why Sri Lanka's healthcare system needs ECMS", { x: 0.5, y: 0.55, w: 9, h: 0.4, fontSize: 13, color: "93C5FD", fontFace: "Calibri", margin: 0 });

  const problems = [
    { icon: "📋", title: "Paper-Based Workflows", desc: "Consultants still rely on handwritten prescriptions, manual scheduling, and physical patient files that cannot be accessed at the point of care." },
    { icon: "🌐", title: "No Unified Platform", desc: "No single system integrates appointments, prescriptions, patient history, and payments for Sri Lankan consultants." },
    { icon: "🗣️", title: "Language Barriers", desc: "Existing systems support only English — excluding the majority of doctors and patients who communicate in Sinhala or Tamil." },
    { icon: "💊", title: "Unsafe Prescribing", desc: "Patient allergy history and past prescriptions are inaccessible at consultation, creating risk of harmful drug interactions." },
    { icon: "💰", title: "Manual Revenue Tracking", desc: "No digital financial records — consultants manually track fees, resulting in errors, disputes, and no analytics." },
  ];

  problems.forEach(({ icon, title, desc }, i) => {
    const col = i < 3 ? 0 : 1;
    const row = i < 3 ? i : i - 3;
    const x = 0.35 + col * 4.95;
    const y = 1.2 + row * 1.38;
    const w = 4.5;

    s.addShape(pres.shapes.RECTANGLE, { x, y, w, h: 1.2, fill: { color: C.white }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.06, h: 1.2, fill: { color: C.red } });

    s.addText(`${icon}  ${title}`, { x: x + 0.15, y: y + 0.1, w: w - 0.2, h: 0.35, fontSize: 13, bold: true, color: C.dark, fontFace: "Calibri", margin: 0 });
    s.addText(desc, { x: x + 0.15, y: y + 0.45, w: w - 0.25, h: 0.7, fontSize: 10.5, color: C.slate, fontFace: "Calibri", margin: 0, lineSpacingMultiple: 1.3 });
  });

  // Stats strip
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.0, w: 10, h: 0.625, fill: { color: "E8F0FE" } });
  const infraStats = [
    "56.3% internet penetration",
    "47% smartphone ownership",
    "80.6% rural population",
    "1,700 medical professionals emigrated in 2022–23",
  ];
  infraStats.forEach((t, i) => {
    s.addText(`• ${t}`, { x: 0.3 + i * 2.4, y: 5.1, w: 2.3, h: 0.4, fontSize: 9.5, color: C.navy, fontFace: "Calibri", margin: 0 });
  });
}

// ══════════════════════════════════════════════════════════════════════════════
// SLIDE 3 — OUR SOLUTION
// ══════════════════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.navy };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.skyBlue } });

  s.addText("Our Solution", {
    x: 0.5, y: 0.25, w: 9, h: 0.7, fontSize: 36, bold: true, color: C.white, fontFace: "Calibri", margin: 0,
  });
  s.addText("One app. Every workflow. Every language.", {
    x: 0.5, y: 0.95, w: 9, h: 0.4, fontSize: 16, color: "93C5FD", fontFace: "Calibri", italic: true, margin: 0,
  });

  // Central description
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 1.5, w: 9.2, h: 0.95, fill: { color: "162044" } });
  s.addText(
    "ECMS is a fully integrated, role-based mobile platform that handles the complete consultant lifecycle — from appointment scheduling and QR-based patient check-in, to voice-powered e-prescriptions in Sinhala, Tamil, and English, real-time payment processing, and daily earnings analytics.",
    { x: 0.55, y: 1.57, w: 8.9, h: 0.8, fontSize: 13, color: "CBD5E1", fontFace: "Calibri", margin: 0, lineSpacingMultiple: 1.4 }
  );

  // Feature pillars
  const pillars = [
    { icon: "🎤", title: "Voice Rx", desc: "Speak prescriptions in Sinhala, Tamil, or English — NLP converts to digital format instantly" },
    { icon: "📱", title: "QR Check-in", desc: "Encrypted unique QR per patient — scan on arrival to load full medical history & alerts" },
    { icon: "💳", title: "Payments", desc: "PayHere & Stripe integration, eZcash/mCash support, auto invoices, digital receipts" },
    { icon: "📅", title: "Scheduling", desc: "Set slots, lock sessions, block dates — hospital and patient notified automatically" },
  ];

  pillars.forEach(({ icon, title, desc }, i) => {
    const x = 0.35 + i * 2.35;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 2.65, w: 2.15, h: 2.6, fill: { color: "162044" }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x, y: 2.65, w: 2.15, h: 0.06, fill: { color: C.skyBlue } });

    s.addText(icon, { x, y: 2.75, w: 2.15, h: 0.5, fontSize: 26, align: "center", margin: 0 });
    s.addText(title, { x, y: 3.3, w: 2.15, h: 0.4, fontSize: 14, bold: true, color: C.white, fontFace: "Calibri", align: "center", margin: 0 });
    s.addText(desc, { x: x + 0.1, y: 3.75, w: 1.95, h: 1.35, fontSize: 10.5, color: "94A3B8", fontFace: "Calibri", margin: 0, lineSpacingMultiple: 1.35, align: "center" });
  });
}

// ══════════════════════════════════════════════════════════════════════════════
// SLIDE 4 — ALL 5 SCREENS (App UI Overview)
// ══════════════════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: "0D1B2A" };

  s.addText("Mobile App — 5 Interactive Screens", {
    x: 0.5, y: 0.18, w: 9, h: 0.5, fontSize: 24, bold: true, color: C.white, fontFace: "Calibri", margin: 0,
  });
  s.addText("Built with React · Tailwind CSS · Lucide Icons", {
    x: 0.5, y: 0.68, w: 9, h: 0.28, fontSize: 12, color: "64748B", fontFace: "Calibri", margin: 0,
  });

  const appScreens = [
    { key: "home",     label: "Home Dashboard",  sub: "Earnings & quick actions" },
    { key: "voice",    label: "Voice Prescription", sub: "Multilingual speech-to-Rx" },
    { key: "qr",       label: "QR Check-in",     sub: "Encrypted patient records" },
    { key: "schedule", label: "Daily Schedule",  sub: "Colour-coded slots" },
    { key: "profile",  label: "Doctor Profile",  sub: "Stats & settings" },
  ];

  const phoneW = 1.52, phoneH = 2.8;
  const totalW = appScreens.length * phoneW + (appScreens.length - 1) * 0.26;
  const startX = (10 - totalW) / 2;

  appScreens.forEach(({ key, label, sub }, i) => {
    const x = startX + i * (phoneW + 0.26);
    const y = 1.1;

    // Phone outer frame
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: phoneW, h: phoneH, fill: { color: "0F172A" }, shadow: makeShadow() });
    // Screen area
    s.addImage({ data: screens[key], x: x + 0.07, y: y + 0.12, w: phoneW - 0.14, h: phoneH - 0.24, sizing: { type: "cover", w: phoneW - 0.14, h: phoneH - 0.24 } });
    // Notch
    s.addShape(pres.shapes.RECTANGLE, { x: x + phoneW * 0.28, y, w: phoneW * 0.44, h: 0.12, fill: { color: "0F172A" } });

    // Caption
    s.addText(label, { x: x - 0.05, y: y + phoneH + 0.08, w: phoneW + 0.1, h: 0.24, fontSize: 10, bold: true, color: C.white, fontFace: "Calibri", align: "center", margin: 0 });
    s.addText(sub,   { x: x - 0.05, y: y + phoneH + 0.32, w: phoneW + 0.1, h: 0.2,  fontSize: 9, color: "64748B", fontFace: "Calibri", align: "center", italic: true, margin: 0 });
  });
}

// ══════════════════════════════════════════════════════════════════════════════
// SLIDE 5 — HOME DASHBOARD (Deep Dive)
// ══════════════════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.offWhite };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 1.0, fill: { color: C.blue } });
  s.addText("Screen 1 — Home Dashboard", { x: 0.5, y: 0.1, w: 7, h: 0.5, fontSize: 26, bold: true, color: C.white, fontFace: "Calibri", margin: 0 });
  s.addText("Real-time earnings, patient queue, and quick actions at a glance", { x: 0.5, y: 0.6, w: 7, h: 0.3, fontSize: 12, color: C.lightBlue, fontFace: "Calibri", margin: 0 });

  // Phone mockup
  const pw = 2.1, ph = 3.85;
  s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y: 1.15, w: pw, h: ph, fill: { color: "1E293B" }, shadow: makeShadow() });
  s.addImage({ data: screens.home, x: 0.48, y: 1.27, w: pw - 0.26, h: ph - 0.24 });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.35 + pw * 0.28, y: 1.15, w: pw * 0.44, h: 0.14, fill: { color: "1E293B" } });

  // Feature annotations
  const features = [
    { title: "Earnings Header",       desc: "Real-time today's earnings (LKR 125,000), patient count, and daily percentage change vs yesterday." },
    { title: "Quick Action Cards",    desc: "4 contextual action tiles — Voice Rx, QR Scan, Medicine DB, and Schedule. Single tap to navigate." },
    { title: "Patient Status Queue",  desc: "Today's patient list with name, time, ID, and live status badges: Waiting, Done, or Next." },
    { title: "Weekly Revenue Chart",  desc: "Mini bar chart summarising 7-day earnings. Total LKR 735,000 with 8% week-on-week growth indicator." },
  ];

  features.forEach(({ title, desc }, i) => {
    const x = 2.85;
    const y = 1.2 + i * 1.1;
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 6.8, h: 1.0, fill: { color: C.white }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.05, h: 1.0, fill: { color: C.blue } });

    s.addText(`${i + 1}. ${title}`, { x: x + 0.15, y: y + 0.08, w: 6.5, h: 0.3, fontSize: 13, bold: true, color: C.dark, fontFace: "Calibri", margin: 0 });
    s.addText(desc, { x: x + 0.15, y: y + 0.4, w: 6.5, h: 0.55, fontSize: 11, color: C.slate, fontFace: "Calibri", margin: 0, lineSpacingMultiple: 1.3 });
  });
}

// ══════════════════════════════════════════════════════════════════════════════
// SLIDE 6 — VOICE PRESCRIPTION
// ══════════════════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.offWhite };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 1.0, fill: { color: C.navy } });
  s.addText("Screen 2 — Voice Prescription", { x: 0.5, y: 0.1, w: 7, h: 0.5, fontSize: 26, bold: true, color: C.white, fontFace: "Calibri", margin: 0 });
  s.addText("Sinhala · Tamil · English  |  Real-time speech-to-text  |  Medical NLP", { x: 0.5, y: 0.6, w: 8, h: 0.3, fontSize: 12, color: "93C5FD", fontFace: "Calibri", margin: 0 });

  const pw = 2.1, ph = 3.85;
  s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y: 1.15, w: pw, h: ph, fill: { color: "1E293B" }, shadow: makeShadow() });
  s.addImage({ data: screens.voice, x: 0.48, y: 1.27, w: pw - 0.26, h: ph - 0.24 });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.35 + pw * 0.28, y: 1.15, w: pw * 0.44, h: 0.14, fill: { color: "1E293B" } });

  // NLP pipeline diagram on right
  s.addText("Voice-to-Prescription Pipeline", { x: 2.85, y: 1.2, w: 6.8, h: 0.35, fontSize: 14, bold: true, color: C.dark, fontFace: "Calibri", margin: 0 });

  const pipeline = ["🎤 Voice Input", "🔊 STT Engine", "🧠 Medical NLP", "📄 Rx Draft"];
  const pipeColors = [C.blue, C.green, C.purple, C.orange];
  pipeline.forEach((step, i) => {
    const x = 2.9 + i * 1.65;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.65, w: 1.45, h: 0.55, fill: { color: pipeColors[i] }, shadow: makeShadow() });
    s.addText(step, { x, y: 1.65, w: 1.45, h: 0.55, fontSize: 10, bold: true, color: C.white, fontFace: "Calibri", align: "center", valign: "middle", margin: 0 });
    if (i < pipeline.length - 1) {
      s.addShape(pres.shapes.RECTANGLE, { x: x + 1.45, y: 1.85, w: 0.2, h: 0.12, fill: { color: C.slate } });
    }
  });

  const features = [
    { title: "Language Selector", desc: "Three large tap-friendly buttons for Sinhala (සිංහල), Tamil (தமிழ்), and English. Selected language is highlighted with a checkmark." },
    { title: "Animated Waveform", desc: "Live CSS waveform animation provides visual feedback while the microphone is active — confirms recording is in progress." },
    { title: "Generated Prescription", desc: "Converted output shown in a monospace block with drug name, dosage, frequency, and duration — ready to review." },
    { title: "Approve & Send", desc: "One-tap approval sends the prescription to the hospital pharmacy system and the patient's phone simultaneously." },
  ];

  features.forEach(({ title, desc }, i) => {
    const x = 2.85;
    const y = 2.4 + i * 0.82;
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 6.8, h: 0.75, fill: { color: C.white }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.05, h: 0.75, fill: { color: C.navy } });
    s.addText(`${i + 1}. ${title}`, { x: x + 0.15, y: y + 0.05, w: 6.5, h: 0.25, fontSize: 12, bold: true, color: C.dark, fontFace: "Calibri", margin: 0 });
    s.addText(desc, { x: x + 0.15, y: y + 0.3, w: 6.5, h: 0.42, fontSize: 10.5, color: C.slate, fontFace: "Calibri", margin: 0, lineSpacingMultiple: 1.25 });
  });
}

// ══════════════════════════════════════════════════════════════════════════════
// SLIDE 7 — QR PATIENT CHECK-IN
// ══════════════════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.offWhite };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 1.0, fill: { color: "14532D" } });
  s.addText("Screen 3 — QR Patient Check-in", { x: 0.5, y: 0.1, w: 7, h: 0.5, fontSize: 26, bold: true, color: C.white, fontFace: "Calibri", margin: 0 });
  s.addText("Encrypted patient QR  |  Instant record access  |  Allergy alerts", { x: 0.5, y: 0.6, w: 8, h: 0.3, fontSize: 12, color: "86EFAC", fontFace: "Calibri", margin: 0 });

  const pw = 2.1, ph = 3.85;
  s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y: 1.15, w: pw, h: ph, fill: { color: "1E293B" }, shadow: makeShadow() });
  s.addImage({ data: screens.qr, x: 0.48, y: 1.27, w: pw - 0.26, h: ph - 0.24 });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.35 + pw * 0.28, y: 1.15, w: pw * 0.44, h: 0.14, fill: { color: "1E293B" } });

  const features = [
    { title: "Camera QR Scanner",     desc: "Full-viewport camera preview with real-time QR detection. Tap once to activate — no manual ID entry needed.", color: C.green },
    { title: "Patient Record Card",   desc: "Instant card loads with name, ID, age, blood type, and a ✓ Verified badge — pulled from the encrypted QR payload.", color: C.blue },
    { title: "Allergy Warning Panel", desc: "Critical drug allergies (e.g. Penicillin, Sulfa) displayed in a high-contrast red alert block, impossible to overlook.", color: C.red },
    { title: "Consultation History",  desc: "Last three visits with date and reason — scrollable. Tap any row to load the full prescription from that visit.", color: C.purple },
  ];

  features.forEach(({ title, desc, color }, i) => {
    const x = 2.85;
    const y = 1.2 + i * 1.08;
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 6.8, h: 0.98, fill: { color: C.white }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.05, h: 0.98, fill: { color } });
    s.addText(`${i + 1}. ${title}`, { x: x + 0.15, y: y + 0.07, w: 6.5, h: 0.28, fontSize: 13, bold: true, color: C.dark, fontFace: "Calibri", margin: 0 });
    s.addText(desc, { x: x + 0.15, y: y + 0.38, w: 6.5, h: 0.56, fontSize: 11, color: C.slate, fontFace: "Calibri", margin: 0, lineSpacingMultiple: 1.3 });
  });
}

// ══════════════════════════════════════════════════════════════════════════════
// SLIDE 8 — SCHEDULE & PROFILE
// ══════════════════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.offWhite };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 1.0, fill: { color: C.orange } });
  s.addText("Screens 4 & 5 — Schedule and Doctor Profile", { x: 0.5, y: 0.1, w: 9, h: 0.5, fontSize: 24, bold: true, color: C.white, fontFace: "Calibri", margin: 0 });
  s.addText("Daily appointment management and consultant credentials hub", { x: 0.5, y: 0.6, w: 9, h: 0.3, fontSize: 12, color: "FEF3C7", fontFace: "Calibri", margin: 0 });

  // Two phones side by side
  const pw = 2.0, ph = 3.65;

  ["schedule", "profile"].forEach((key, i) => {
    const x = 0.3 + i * 2.6;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.15, w: pw, h: ph, fill: { color: "1E293B" }, shadow: makeShadow() });
    s.addImage({ data: screens[key], x: x + 0.13, y: 1.27, w: pw - 0.26, h: ph - 0.24 });
    s.addShape(pres.shapes.RECTANGLE, { x: x + pw * 0.28, y: 1.15, w: pw * 0.44, h: 0.14, fill: { color: "1E293B" } });
  });

  // Schedule features
  s.addText("Schedule", { x: 5.3, y: 1.15, w: 2, h: 0.35, fontSize: 15, bold: true, color: C.dark, fontFace: "Calibri", margin: 0 });
  const schedFeatures = [
    "3 stat cards — Total, Done, Pending with colour coding",
    "Appointment rows colour-coded by status: ✓ done, ◉ in-progress, ○ upcoming",
    "Book button on empty slots for walk-in additions",
    "30-minute time slots displayed with patient name",
  ];
  s.addText(schedFeatures.map((t, i) => ({ text: t, options: { bullet: true, breakLine: i < schedFeatures.length - 1 } })),
    { x: 5.3, y: 1.55, w: 4.45, h: 1.6, fontSize: 11, color: C.slate, fontFace: "Calibri", lineSpacingMultiple: 1.4, margin: 0 });

  // Profile features
  s.addText("Doctor Profile", { x: 5.3, y: 3.3, w: 2.5, h: 0.35, fontSize: 15, bold: true, color: C.dark, fontFace: "Calibri", margin: 0 });
  const profileFeatures = [
    "Credentials card: MBBS, MD, SLMC registration number",
    "3 live stats: 682 patients · 96.8% rating · LKR 3.2M earnings",
    "Navigation to Settings, Notifications, Reports, Payments",
    "Security and Analytics sub-sections",
  ];
  s.addText(profileFeatures.map((t, i) => ({ text: t, options: { bullet: true, breakLine: i < profileFeatures.length - 1 } })),
    { x: 5.3, y: 3.7, w: 4.45, h: 1.6, fontSize: 11, color: C.slate, fontFace: "Calibri", lineSpacingMultiple: 1.4, margin: 0 });
}

// ══════════════════════════════════════════════════════════════════════════════
// SLIDE 9 — 13 MODULES OVERVIEW
// ══════════════════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: "0D1B2A" };

  s.addText("13 Core Modules", { x: 0.5, y: 0.18, w: 9, h: 0.5, fontSize: 30, bold: true, color: C.white, fontFace: "Calibri", margin: 0 });
  s.addText("Complete feature specification — system design and documented", { x: 0.5, y: 0.68, w: 9, h: 0.3, fontSize: 13, color: "64748B", fontFace: "Calibri", margin: 0 });

  const modules = [
    { icon: "📅", name: "Schedule Mgmt",      color: C.blue,   desc: "Set/block/lock slots, auto-notify" },
    { icon: "📋", name: "Appointments",        color: C.blue,   desc: "Track, mark, add emergency" },
    { icon: "🏥", name: "Medical Records",     color: C.green,  desc: "Prescriptions, labs, history" },
    { icon: "💊", name: "E-Prescriptions",     color: C.green,  desc: "Digital Rx to phone & pharmacy" },
    { icon: "📝", name: "Clinical Docs",       color: C.green,  desc: "Notes, lab requests, follow-ups" },
    { icon: "🔔", name: "Notifications",       color: C.orange, desc: "Reminders, cancellations, alerts" },
    { icon: "🔒", name: "Security",            color: C.slate,  desc: "Login, digital signatures, RBAC" },
    { icon: "💳", name: "Payment Collection",  color: "B45309", desc: "Cash, card, eZcash, mCash" },
    { icon: "📊", name: "Transaction Dash",    color: "B45309", desc: "Revenue charts, export PDF/Excel" },
    { icon: "🎤", name: "Voice Command Rx",    color: C.purple, desc: "3 languages, templates, auto-fill" },
    { icon: "💉", name: "Medicine DB",         color: C.purple, desc: "Drag & drop, search, dosage" },
    { icon: "📱", name: "QR Patient History",  color: "0F766E", desc: "Encrypted QR, offline access" },
    { icon: "🌐", name: "Payment Gateway",     color: "0F766E", desc: "PayHere, Stripe, PCI-DSS" },
  ];

  const cols = 5, rows = 3;
  const cardW = 1.72, cardH = 1.35, gapX = 0.18, gapY = 0.15;
  const startX = (10 - (cols * cardW + (cols - 1) * gapX)) / 2;
  const startY = 1.1;

  modules.forEach(({ icon, name, color, desc }, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = startX + col * (cardW + gapX);
    const y = startY + row * (cardH + gapY);

    s.addShape(pres.shapes.RECTANGLE, { x, y, w: cardW, h: cardH, fill: { color: "162044" }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: cardW, h: 0.04, fill: { color } });

    s.addText(icon, { x, y: y + 0.1, w: cardW, h: 0.38, fontSize: 22, align: "center", margin: 0 });
    s.addText(name, { x: x + 0.05, y: y + 0.5, w: cardW - 0.1, h: 0.32, fontSize: 10, bold: true, color: C.white, fontFace: "Calibri", align: "center", margin: 0 });
    s.addText(desc, { x: x + 0.05, y: y + 0.82, w: cardW - 0.1, h: 0.46, fontSize: 9, color: "64748B", fontFace: "Calibri", align: "center", margin: 0, lineSpacingMultiple: 1.2 });
  });
}

// ══════════════════════════════════════════════════════════════════════════════
// SLIDE 10 — TECH STACK & ARCHITECTURE
// ══════════════════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.offWhite };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 1.0, fill: { color: C.charcoal } });
  s.addText("Technical Implementation", { x: 0.5, y: 0.1, w: 9, h: 0.5, fontSize: 28, bold: true, color: C.white, fontFace: "Calibri", margin: 0 });
  s.addText("Stack · Architecture · Security Model", { x: 0.5, y: 0.6, w: 9, h: 0.3, fontSize: 13, color: "94A3B8", fontFace: "Calibri", margin: 0 });

  // 3-tier architecture
  s.addText("3-Tier Architecture", { x: 0.4, y: 1.1, w: 4.5, h: 0.35, fontSize: 14, bold: true, color: C.dark, fontFace: "Calibri", margin: 0 });

  const tiers = [
    { label: "Mobile App Layer", sub: "React Native / React  ·  Tailwind CSS", color: C.blue },
    { label: "API Server",        sub: "Node.js  ·  REST API  ·  JWT Auth",      color: C.green },
    { label: "Data Layer",        sub: "PostgreSQL / MySQL  ·  AES-256 Encrypted", color: C.navy },
  ];
  tiers.forEach(({ label, sub, color }, i) => {
    const y = 1.55 + i * 0.95;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y, w: 4.5, h: 0.8, fill: { color }, shadow: makeShadow() });
    s.addText(label, { x: 0.55, y: y + 0.08, w: 4.2, h: 0.3, fontSize: 13, bold: true, color: C.white, fontFace: "Calibri", margin: 0 });
    s.addText(sub,   { x: 0.55, y: y + 0.42, w: 4.2, h: 0.3, fontSize: 10.5, color: "CBD5E1", fontFace: "Calibri", margin: 0 });
    if (i < tiers.length - 1) {
      s.addText("↓ HTTPS / REST", { x: 1.0, y: y + 0.82, w: 3, h: 0.1, fontSize: 9, color: C.slate, fontFace: "Calibri", margin: 0 });
    }
  });

  // Tech stack badges
  s.addText("Tech Stack", { x: 5.4, y: 1.1, w: 4.2, h: 0.35, fontSize: 14, bold: true, color: C.dark, fontFace: "Calibri", margin: 0 });

  const tech = [
    { group: "Frontend",  items: ["React Native", "React 18", "Tailwind CSS", "Lucide Icons"], color: C.blue },
    { group: "Backend",   items: ["Node.js", "REST API", "JWT", "AES-256"], color: C.green },
    { group: "Payments",  items: ["PayHere (SL)", "Stripe", "eZcash", "PCI-DSS"], color: "B45309" },
    { group: "Voice/AI",  items: ["Google STT", "OpenAI Whisper", "Medical NLP"], color: C.purple },
  ];

  tech.forEach(({ group, items, color }, gi) => {
    const col = gi % 2, row = Math.floor(gi / 2);
    const x = 5.4 + col * 2.3;
    const y = 1.6 + row * 1.65;
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 2.1, h: 1.5, fill: { color: C.white }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 2.1, h: 0.3, fill: { color } });
    s.addText(group, { x, y, w: 2.1, h: 0.3, fontSize: 11, bold: true, color: C.white, fontFace: "Calibri", align: "center", valign: "middle", margin: 0 });
    s.addText(items.map((t, i) => ({ text: t, options: { bullet: true, breakLine: i < items.length - 1 } })),
      { x: x + 0.1, y: y + 0.35, w: 1.9, h: 1.1, fontSize: 10, color: C.slate, fontFace: "Calibri", margin: 0, lineSpacingMultiple: 1.35 });
  });

  // Security strip
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 4.9, w: 9.2, h: 0.55, fill: { color: C.lightGreen } });
  s.addText("🔒  Encrypted QR Codes  ·  Digital Prescription Signatures  ·  Role-Based Access Control  ·  PCI-DSS Compliant  ·  GDPR Compliant", {
    x: 0.5, y: 4.97, w: 9, h: 0.38, fontSize: 11, color: "166534", fontFace: "Calibri", align: "center", margin: 0,
  });
}

// ══════════════════════════════════════════════════════════════════════════════
// SLIDE 11 — PAYMENT MODULE
// ══════════════════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.offWhite };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 1.0, fill: { color: "78350F" } });
  s.addText("Payment & Financial Module", { x: 0.5, y: 0.1, w: 9, h: 0.5, fontSize: 28, bold: true, color: C.white, fontFace: "Calibri", margin: 0 });
  s.addText("PayHere (Sri Lanka)  ·  Stripe (International)  ·  eZcash / mCash  ·  PCI-DSS Compliant", { x: 0.5, y: 0.6, w: 9, h: 0.3, fontSize: 12, color: "FDE68A", fontFace: "Calibri", margin: 0 });

  // Revenue chart
  s.addText("Simulated Weekly Revenue (LKR)", { x: 0.4, y: 1.1, w: 5.0, h: 0.35, fontSize: 14, bold: true, color: C.dark, fontFace: "Calibri", margin: 0 });
  s.addChart(pres.charts.BAR, [{
    name: "Revenue", labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    values: [95000, 112000, 125000, 88000, 140000, 103000, 72000],
  }], {
    x: 0.4, y: 1.5, w: 5.2, h: 3.8, barDir: "col",
    chartColors: ["1E5FAD"],
    chartArea: { fill: { color: "FFFFFF" }, roundedCorners: true },
    catAxisLabelColor: "64748B", valAxisLabelColor: "64748B",
    valGridLine: { color: "E2E8F0", size: 0.5 }, catGridLine: { style: "none" },
    showValue: true, dataLabelColor: "1E293B",
    showLegend: false,
  });

  // Payment features
  const payFeats = [
    { title: "Multi-Method Payments", desc: "Cash, card, and mobile wallets (eZcash, mCash) all handled within the same session checkout." },
    { title: "Fee Breakdown",         desc: "Consultation fee, service charges, and platform commission (10–15%) shown as itemised line items." },
    { title: "Transaction IDs & Receipts", desc: "Every payment generates a unique transaction ID and sends a digital receipt to the patient instantly." },
    { title: "Payment Status Tracking", desc: "Each transaction carries a real-time status: Pending, Completed, or Failed — filterable in the dashboard." },
  ];

  payFeats.forEach(({ title, desc }, i) => {
    const y = 1.1 + i * 1.15;
    s.addShape(pres.shapes.RECTANGLE, { x: 5.85, y, w: 3.8, h: 1.05, fill: { color: C.white }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x: 5.85, y, w: 0.05, h: 1.05, fill: { color: "B45309" } });
    s.addText(`💳  ${title}`, { x: 6.0, y: y + 0.07, w: 3.5, h: 0.28, fontSize: 12, bold: true, color: C.dark, fontFace: "Calibri", margin: 0 });
    s.addText(desc, { x: 6.0, y: y + 0.4, w: 3.5, h: 0.6, fontSize: 10.5, color: C.slate, fontFace: "Calibri", margin: 0, lineSpacingMultiple: 1.3 });
  });
}

// ══════════════════════════════════════════════════════════════════════════════
// SLIDE 12 — RESULTS & RESEARCH CONTEXT
// ══════════════════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.offWhite };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 1.0, fill: { color: C.blue } });
  s.addText("Results & Research Context", { x: 0.5, y: 0.1, w: 9, h: 0.5, fontSize: 28, bold: true, color: C.white, fontFace: "Calibri", margin: 0 });
  s.addText("What we built  ·  What the research confirmed", { x: 0.5, y: 0.6, w: 9, h: 0.3, fontSize: 13, color: C.lightBlue, fontFace: "Calibri", margin: 0 });

  // Prototype results
  s.addText("Prototype Outcomes", { x: 0.4, y: 1.1, w: 4.5, h: 0.35, fontSize: 14, bold: true, color: C.dark, fontFace: "Calibri", margin: 0 });
  const outcomes = [
    "5 fully interactive mobile screens built in React",
    "13 functional modules designed and documented",
    "User flows validated with mock patient & consultant data",
    "Multilingual UI — Sinhala, Tamil, English",
    "Payment gateway architecture designed (PayHere + Stripe)",
    "QR encryption model documented with GDPR compliance",
  ];
  outcomes.forEach((text, i) => {
    const y = 1.55 + i * 0.6;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y, w: 4.5, h: 0.52, fill: { color: C.white }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y, w: 0.05, h: 0.52, fill: { color: C.green } });
    s.addText(`✓  ${text}`, { x: 0.55, y: y + 0.1, w: 4.2, h: 0.32, fontSize: 11, color: C.dark, fontFace: "Calibri", margin: 0 });
  });

  // Research findings from IT Seminar paper
  s.addText("IT Seminar Research Findings", { x: 5.3, y: 1.1, w: 4.3, h: 0.35, fontSize: 14, bold: true, color: C.dark, fontFace: "Calibri", margin: 0 });
  const findings = [
    { stat: "2M+",   desc: "appointments/year on Doc990 platform — validates market demand" },
    { stat: "9.5M",  desc: "patients on HHIMS across 100 state hospitals — scale of need" },
    { stat: "47%",   desc: "smartphone ownership — justifies multi-channel access design" },
    { stat: "85%",   desc: "of pilot hospitals reported improved care quality with digital records" },
  ];
  findings.forEach(({ stat, desc }, i) => {
    const y = 1.55 + i * 1.0;
    s.addShape(pres.shapes.RECTANGLE, { x: 5.3, y, w: 4.3, h: 0.88, fill: { color: C.white }, shadow: makeShadow() });
    s.addText(stat, { x: 5.3, y, w: 1.4, h: 0.88, fontSize: 30, bold: true, color: C.blue, fontFace: "Calibri", align: "center", valign: "middle", margin: 0 });
    s.addShape(pres.shapes.RECTANGLE, { x: 6.7, y: y + 0.1, w: 0.02, h: 0.68, fill: { color: C.border } });
    s.addText(desc, { x: 6.8, y: y + 0.18, w: 2.65, h: 0.52, fontSize: 11, color: C.slate, fontFace: "Calibri", margin: 0, lineSpacingMultiple: 1.3 });
  });
}

// ══════════════════════════════════════════════════════════════════════════════
// SLIDE 13 — FUTURE ROADMAP
// ══════════════════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: "0D1B2A" };

  s.addText("Future Development Roadmap", { x: 0.5, y: 0.18, w: 9, h: 0.55, fontSize: 30, bold: true, color: C.white, fontFace: "Calibri", margin: 0 });
  s.addText("Phase-based approach from prototype to production", { x: 0.5, y: 0.73, w: 9, h: 0.3, fontSize: 13, color: "64748B", fontFace: "Calibri", margin: 0 });

  const phases = [
    {
      phase: "Phase 1", timeline: "0–6 months", color: C.blue,
      items: ["Live STT via Google Cloud Speech / OpenAI Whisper", "Hospital EHR system connectivity", "SLMC API — real-time doctor verification"],
    },
    {
      phase: "Phase 2", timeline: "6–12 months", color: C.green,
      items: ["Telemedicine module with auto-consultation notes", "AI drug interaction checker in medicine DB", "Offline-first architecture for low-connectivity areas"],
    },
    {
      phase: "Phase 3", timeline: "12–24 months", color: C.purple,
      items: ["Wearable data import (BP, glucose for chronic care)", "Multi-hospital / multi-consultant central admin", "Full OPD digitization and government hospital integration"],
    },
  ];

  phases.forEach(({ phase, timeline, color, items }, i) => {
    const x = 0.35 + i * 3.15;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.2, w: 2.95, h: 4.0, fill: { color: "162044" }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.2, w: 2.95, h: 0.06, fill: { color } });

    s.addText(phase,    { x: x + 0.12, y: 1.32, w: 2.7, h: 0.35, fontSize: 15, bold: true, color: C.white, fontFace: "Calibri", margin: 0 });
    s.addText(timeline, { x: x + 0.12, y: 1.65, w: 2.7, h: 0.28, fontSize: 11, color, fontFace: "Calibri", margin: 0 });
    s.addShape(pres.shapes.RECTANGLE, { x: x + 0.12, y: 2.0, w: 2.5, h: 0.02, fill: { color: "1E3A5F" } });

    s.addText(items.map((t, j) => ({ text: t, options: { bullet: true, breakLine: j < items.length - 1 } })),
      { x: x + 0.12, y: 2.1, w: 2.7, h: 2.8, fontSize: 11, color: "94A3B8", fontFace: "Calibri", margin: 0, lineSpacingMultiple: 1.6 });
  });

  // Expected outcomes strip
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.2, w: 10, h: 0.42, fill: { color: "162044" } });
  s.addText("Expected outcomes: 30–40% reduction in pharmacy queues  ·  Patient record access in seconds vs 15 minutes  ·  Full trilingual practice management", {
    x: 0.4, y: 5.26, w: 9.2, h: 0.3, fontSize: 10.5, color: "64748B", fontFace: "Calibri", align: "center", margin: 0,
  });
}

// ══════════════════════════════════════════════════════════════════════════════
// SLIDE 14 — THANK YOU / Q&A
// ══════════════════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.navy };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.06, h: 5.625, fill: { color: C.skyBlue } });

  s.addText("Thank You", { x: 0.45, y: 0.7, w: 6.5, h: 0.9, fontSize: 60, bold: true, color: C.white, fontFace: "Calibri", margin: 0 });
  s.addText("Questions & Discussion", { x: 0.45, y: 1.65, w: 6.5, h: 0.5, fontSize: 22, color: "93C5FD", fontFace: "Calibri", margin: 0 });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.45, y: 2.3, w: 2.0, h: 0.03, fill: { color: C.skyBlue } });

  s.addText("Group 02 — IT 3008 IT Seminar", { x: 0.45, y: 2.45, w: 6.5, h: 0.3, fontSize: 13, color: "94A3B8", fontFace: "Calibri", margin: 0 });
  s.addText("Supervised by Dr. Prabhath Liyanage", { x: 0.45, y: 2.8, w: 6.5, h: 0.3, fontSize: 13, color: "94A3B8", fontFace: "Calibri", margin: 0 });

  const team = [
    "I.G.I. Chathuranga  (S16847)",
    "H.J. Jayawardhana  (S16842)",
    "G.S. Vignesh  (S16763)",
    "C.M.D.D. Silva  (S16743)",
    "M.V.T. Lakruwan  (S16989)",
  ];
  s.addText(team.map((t, i) => ({ text: t, options: { breakLine: i < team.length - 1 } })),
    { x: 0.45, y: 3.25, w: 5.0, h: 1.8, fontSize: 12, color: "64748B", fontFace: "Calibri", margin: 0, lineSpacingMultiple: 1.6 });

  // Right side: all 5 screens mini grid
  const minis = ["home", "voice", "qr", "schedule", "profile"];
  const mw = 1.3, mh = 2.3;
  minis.forEach((key, i) => {
    const x = 6.5 + (i % 3) * (mw + 0.15);
    const y = 0.6 + Math.floor(i / 3) * (mh + 0.2);
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: mw, h: mh, fill: { color: "1E293B" }, shadow: makeShadow() });
    s.addImage({ data: screens[key], x: x + 0.08, y: y + 0.1, w: mw - 0.16, h: mh - 0.2 });
  });
}

// ── Write ─────────────────────────────────────────────────────────────────────
const outPath = "/home/claude/ECMS_Presentation_Group02.pptx";
pres.writeFile({ fileName: outPath }).then(() => {
  console.log(`✅  Written: ${outPath}`);
  console.log(`📊  Slides: 14`);
}).catch(err => { console.error(err); process.exit(1); });
