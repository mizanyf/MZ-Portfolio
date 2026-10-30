"use client";

import React from "react";
import Image from "next/image";
import assetsLancipImg from "../../assets/assetslancip.png";

type TechName =
  | "Dart"
  | "Flutter"
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "React"
  | "Next.js"
  | "Tailwind CSS"
  | "PHP"
  | "Laravel"
  | "MySQL"
  | "MariaDB"
  | "TiDB"
  | "Supabase";

interface SkillCategory {
  id: string;
  title: string;
  description: string;
  items: TechName[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications with native performance and modern UI.",
    items: ["Dart", "Flutter"],
  },
  {
    id: "frontend-dev",
    title: "Frontend Development",
    description:
      "Responsive, interactive, and accessible web interfaces built with modern frameworks.",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    id: "backend-db",
    title: "Backend Development & Database",
    description:
      "Scalable server-side architecture, RESTful APIs, and reliable database management.",
    items: ["PHP", "Laravel", "MySQL", "MariaDB", "TiDB", "Supabase"],
  },
];

function OfficialTechLogo({ name }: { name: TechName }) {
  switch (name) {
    case "Dart":
      return (
        <svg viewBox="0 0 128 128" className="h-full w-full" aria-hidden="true">
          <path
            fill="#01579B"
            d="M26.5 26.5L12 64l18.5 18.5 12-56z"
          />
          <path
            fill="#40C4FF"
            d="M26.5 26.5L64 12l38.5 38.5v45L82.5 112 26.5 56V26.5z"
          />
          <path
            fill="#29B6F6"
            d="M26.5 26.5v56l31 31h45v-18L26.5 26.5z"
          />
          <path
            fill="#00B0FF"
            d="M64 12L26.5 26.5h56L102.5 50.5 64 12z"
          />
          <path
            fill="#0088D1"
            d="M26.5 82.5L57.5 113.5h45L82.5 93.5h-56v-11z"
          />
        </svg>
      );

    case "Flutter":
      return (
        <svg viewBox="0 0 128 128" className="h-full w-full" aria-hidden="true">
          <path
            fill="#47C5FB"
            d="M78.6 10L20.4 68.2l18 18L114.6 10H78.6z"
          />
          <path
            fill="#47C5FB"
            d="M78.2 63.4L47 94.6l18.2 18.4 17.9-17.9 31.5-31.7H78.2z"
          />
          <path
            fill="#00569E"
            d="M65.2 113l13.7 13.7h35.7L83.1 95.1 65.2 113z"
          />
          <path
            fill="#00B5F8"
            d="M47.2 94.8l18-18 17.9 18.3-17.9 17.9-18-18.2z"
          />
        </svg>
      );

    case "HTML":
      return (
        <svg viewBox="0 0 128 128" className="h-full w-full" aria-hidden="true">
          <path
            fill="#E44D26"
            d="M19 114L9 6h110l-10 108-45 12-45-12z"
          />
          <path
            fill="#F16529"
            d="M64 117l36.5-10.1L109 15H64v102z"
          />
          <path
            fill="#EBEBEB"
            d="M64 55H45.8l-1.3-14H64V27H30.7l3.7 42H64V55zm0 36.2l-.2.1-15.4-4.2-1-11.1H33.5l1.9 21.8 28.4 7.9.2-.1V91.2z"
          />
          <path
            fill="#FFFFFF"
            d="M64 55v14h16.9l-1.6 18.1-15.3 4.1v14.5l28.2-7.8 2.1-23.9.3-5H64zm0-28v14h33.1l1.1-14H64z"
          />
        </svg>
      );

    case "CSS":
      return (
        <svg viewBox="0 0 128 128" className="h-full w-full" aria-hidden="true">
          <path
            fill="#1572B6"
            d="M19 114L9 6h110l-10 108-45 12-45-12z"
          />
          <path
            fill="#33A9DC"
            d="M64 117l36.5-10.1L109 15H64v102z"
          />
          <path
            fill="#FFFFFF"
            d="M64 54h18.4l1.3-14H64V26h34l-3.6 42H64V54z"
          />
          <path
            fill="#EBEBEB"
            d="M64 91.2l-.2.1-15.4-4.2-1-11.1H33.5l1.9 21.8 28.4 7.9.2-.1V91.2zM47.1 54l1.3 14H64V54H47.1zM44.6 26l1.3 14H64V26H44.6z"
          />
          <path
            fill="#FFFFFF"
            d="M80.9 68l-1.6 19.1-15.3 4.1v14.5l28.2-7.8 2.4-29.9H80.9z"
          />
        </svg>
      );

    case "JavaScript":
      return (
        <svg viewBox="0 0 128 128" className="h-full w-full" aria-hidden="true">
          <rect width="112" height="112" x="8" y="8" rx="14" fill="#F7DF1E" />
          <path
            fill="#000000"
            d="M67.8 98.4c2.4 3.9 5.5 6.8 11 6.8 4.6 0 7.6-2.3 7.6-5.5 0-3.8-3-5.2-8.2-7.4l-2.8-1.2c-8.1-3.5-13.5-7.8-13.5-17 0-8.5 6.5-14.9 16.6-14.9 7.2 0 12.4 2.5 16.1 9.1l-8.8 5.6c-1.9-3.5-4-4.9-7.3-4.9-3.3 0-5.4 2.1-5.4 4.9 0 3.4 2.1 4.8 7 6.9l2.8 1.2c9.6 4.1 15 8.3 15 17.8 0 10.2-8 15.8-18.7 15.8-10.5 0-17.3-5-20.6-11.5l9.2-5.7zm-35.8.9c1.8 3.2 3.4 5.9 7.3 5.9 3.7 0 6.1-1.5 6.1-7.1V59.8h11.4v38.5c0 11.7-6.8 17-16.8 17-9 0-14.2-4.7-16.9-10.3l8.9-5.7z"
          />
        </svg>
      );

    case "React":
      return (
        <svg viewBox="0 0 128 128" className="h-full w-full" aria-hidden="true">
          <circle cx="64" cy="64" r="11.4" fill="#61DAFB" />
          <g fill="none" stroke="#61DAFB" strokeWidth="5.5">
            <ellipse cx="64" cy="64" rx="54" ry="20.6" />
            <ellipse
              cx="64"
              cy="64"
              rx="54"
              ry="20.6"
              transform="rotate(60 64 64)"
            />
            <ellipse
              cx="64"
              cy="64"
              rx="54"
              ry="20.6"
              transform="rotate(120 64 64)"
            />
          </g>
        </svg>
      );

    case "Next.js":
      return (
        <svg viewBox="0 0 128 128" className="h-full w-full" aria-hidden="true">
          <circle cx="64" cy="64" r="56" fill="#000000" />
          <path
            fill="#FFFFFF"
            d="M99.5 104.2L49.1 39H39v49.9h8.4V50.5l45.4 58.8c2.4-1.5 4.6-3.2 6.7-5.1z"
          />
          <rect width="8.4" height="50" x="80.8" y="39" fill="#FFFFFF" />
        </svg>
      );

    case "Tailwind CSS":
      return (
        <svg viewBox="0 0 128 128" className="h-full w-full" aria-hidden="true">
          <path
            fill="#06B6D4"
            d="M64 32c-15.5 0-25.2 7.7-29 23.2 5.8-7.7 12.6-10.6 20.3-8.7 4.4 1.1 7.6 4.3 11.1 7.8 5.7 5.8 12.3 12.5 26.6 12.5 15.5 0 25.2-7.7 29-23.2-5.8 7.7-12.6 10.6-20.3 8.7-4.4-1.1-7.6-4.3-11.1-7.8C84.9 38.7 78.3 32 64 32zM35 66.8C19.5 66.8 9.8 74.5 6 90c5.8-7.7 12.6-10.6 20.3-8.7 4.4 1.1 7.6 4.3 11.1 7.8C43.1 94.9 49.7 101.6 64 101.6c15.5 0 25.2-7.7 29-23.2-5.8 7.7-12.6 10.6-20.3 8.7-4.4-1.1-7.6-4.3-11.1-7.8-5.7-5.8-12.3-12.5-26.6-12.5z"
          />
        </svg>
      );

    case "PHP":
      return (
        <svg viewBox="0 0 128 128" className="h-full w-full" aria-hidden="true">
          <ellipse cx="64" cy="64" rx="58" ry="32" fill="#777BB4" />
          <path
            fill="#FFFFFF"
            d="M32.5 76.5l5.4-27.5h13.2c5.8 0 9.6 3.3 8.5 9.1-1.2 6.2-5.8 9.6-12.1 9.6h-6.1l-1.7 8.8h-7.2zm10.2-14.3h4.6c2.9 0 4.9-1.6 5.4-4.3.5-2.6-1-3.9-3.9-3.9h-4.5l-1.6 8.2zm20.1 14.3l6.8-34.5h7.1l-1.9 9.7h5.9c5.3 0 8.1 2.8 7.1 7.9l-3.3 16.9h-7.2l3-15.3c.5-2.4-.4-3.5-2.8-3.5h-4.9l-3.7 18.8h-6.1zm26.9 7l6.8-34.5h13.2c5.8 0 9.6 3.3 8.5 9.1-1.2 6.2-5.8 9.6-12.1 9.6h-6.1l-3.1 15.8h-7.2zm10.2-21.3h4.6c2.9 0 4.9-1.6 5.4-4.3.5-2.6-1-3.9-3.9-3.9h-4.5l-1.6 8.2z"
          />
        </svg>
      );

    case "Laravel":
      return (
        <svg viewBox="0 0 128 128" className="h-full w-full" aria-hidden="true">
          <path
            fill="none"
            stroke="#FF2D20"
            strokeWidth="5.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M22 34l21-12 21 12v46l21-12V44l21-12 20 12v24L64 104 22 80V34zm21 12L22 34m21 12l21-12m-21 12v46m42-34l21-12m-21 12l-21-12m21 12v24m-21 12l21-12"
          />
        </svg>
      );

    case "MySQL":
      return (
        <svg viewBox="0 0 128 128" className="h-full w-full" aria-hidden="true">
          {/* MySQL Dolphin Silhouette & Brand Typography */}
          <path
            fill="#00758F"
            d="M93.5 58.2c-4.2-11.2-14.2-24.8-28.4-32.6-4.7-2.6-10.3-4.8-14.7-4.2-2.2.3-3.1 2-1.8 4.6 2.1 4.2 5.9 9.1 7.8 14.3-6.4-2.1-14.5-1.9-20.1 1.7-3.4 2.2-5.1 5.6-3.9 8.4 1.1 2.5 4.2 3.3 7.6 3.1 4.6-.3 9.7-.9 14.2.9 3.6 1.5 7 4.7 9.4 8.7-4.6 1.3-8.9 4.5-10.6 8.9-.8 2.1-.6 4.1 1.2 4.6 2 .5 4.1-1.3 6.1-2.8 3.2-2.4 7-3.6 11-2.5 5.4 1.5 10.6 6.4 15.1 11.7 1.8 2.1 3.7 1.2 3.2-1.4-.9-4.7-3.6-9.8-6.4-13.9 5.5.4 11.2-.2 15.1-2.8 2.1-1.4 2.2-3.4-.3-4.6-2.9-1.4-6-1.4-8.5-2.1z"
          />
          <text
            x="64"
            y="108"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontWeight="800"
            fontSize="24"
            fill="#00758F"
          >
            My
            <tspan fill="#F29111">SQL</tspan>
          </text>
        </svg>
      );

    case "MariaDB":
      return (
        <svg viewBox="0 0 128 128" className="h-full w-full" aria-hidden="true">
          {/* MariaDB Sea Lion Emblem */}
          <path
            fill="#003545"
            d="M22 76c11-4 22-14 29-27 5-9 9-19 17-24 6-4 14-3 19 1 3 2 7 3 11 2 4-1 7 1 7 4 0 4-4 8-8 11-6 4-10 11-11 19-1 9 2 18 8 24 4 4 10 6 15 8-14 4-29 1-41-6-7 6-17 9-27 8-7-1-14-4-19-10v-10z"
          />
          <circle cx="75" cy="30" r="2.5" fill="#FFFFFF" />
          <text
            x="64"
            y="110"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontWeight="700"
            fontSize="20"
            fill="#003545"
          >
            Maria<tspan fill="#C0765A">DB</tspan>
          </text>
        </svg>
      );

    case "TiDB":
      return (
        <svg viewBox="0 0 128 128" className="h-full w-full" aria-hidden="true">
          {/* Official TiDB Red Hexagonal Cube with White 'T' & 'i' */}
          <polygon
            points="64,10 110,36.5 110,91.5 64,118 18,91.5 18,36.5"
            fill="#E31B23"
          />
          <polygon
            points="64,26 41,39.5 41,54 56,45.2 56,95 72,85.8 72,45.2 87,36.5 87,22"
            fill="#FFFFFF"
          />
          <polygon points="82,56 96,48 96,82 82,90" fill="#FFFFFF" />
        </svg>
      );

    case "Supabase":
      return (
        <svg viewBox="0 0 128 128" className="h-full w-full" aria-hidden="true">
          <path
            fill="#249361"
            d="M71.7 115.3c-2.9 3.6-8.7 1.6-8.8-3l-1-60.8h41c7.4 0 11.6 8.6 7 14.4L71.7 115.3z"
          />
          <path
            fill="#3ECF8E"
            d="M56.3 12.7c2.9-3.6 8.7-1.6 8.8 3l.5 60.8H25.1c-7.4 0-11.6-8.6-7-14.4L56.3 12.7z"
          />
        </svg>
      );
  }
}

function TechItemCard({ name }: { name: TechName }) {
  return (
    <div className="group flex w-full max-w-[125px] flex-col items-center justify-center gap-2.5 rounded-2xl border border-[#DCE9FF] bg-white/80 p-3.5 sm:p-4 text-center shadow-[0_4px_18px_rgba(71,132,255,0.06)] backdrop-blur-xs transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:border-[#4784FF] hover:bg-white hover:shadow-[0_10px_28px_rgba(71,132,255,0.16)]">
      <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center transition-transform duration-300 ease-out group-hover:scale-110">
        <OfficialTechLogo name={name} />
      </div>
      <span className="font-poppins text-xs sm:text-[13px] font-semibold tracking-tight text-[#193A75] transition-colors duration-200 group-hover:text-[#4784FF]">
        {name}
      </span>
    </div>
  );
}

function SkillCategoryCard({
  category,
  isThirdCard,
}: {
  category: SkillCategory;
  isThirdCard: boolean;
}) {
  const isTwoItems = category.items.length === 2;

  return (
    <div
      className={`flex flex-col items-center justify-between rounded-3xl border border-white/90 bg-white/65 p-6 sm:p-8 text-center ring-1 ring-[#DCE9FF] shadow-[0_12px_40px_rgba(71,132,255,0.10)] backdrop-blur-md backdrop-saturate-150 transition-all duration-300 hover:shadow-[0_16px_48px_rgba(71,132,255,0.16)] ${
        isThirdCard
          ? "md:col-span-2 md:mx-auto md:w-full md:max-w-[calc(50%-0.75rem)] lg:col-span-1 lg:max-w-none"
          : ""
      }`}
    >
      {/* Category Header (Centered) */}
      <div className="flex flex-col items-center text-center">
        <h3 className="font-poppins text-lg sm:text-xl font-bold text-[#4784FF]">
          {category.title}
        </h3>
        <p className="font-poppins italic mt-1.5 max-w-xs text-xs sm:text-sm font-normal leading-relaxed text-[#527FD6]">
          {category.description}
        </p>
      </div>

      {/* Symmetric Centered Logo Grid */}
      <div
        className={`mt-6 mb-auto grid w-full justify-items-center gap-3.5 sm:gap-4 ${
          isTwoItems
            ? "grid-cols-2 max-w-[270px] mx-auto my-auto py-4"
            : "grid-cols-2 sm:grid-cols-3"
        }`}
      >
        {category.items.map((tech) => (
          <TechItemCard key={tech} name={tech} />
        ))}
      </div>
    </div>
  );
}

function ModernBlueWaveBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
    >
      {/* Left Modern Flowing Blue-Cyan Gradient Wave (Landing Page Inspired) */}
      <div className="absolute -left-16 sm:-left-10 lg:-left-4 top-0 h-full w-[58vw] max-w-[680px] animate-wave-left opacity-95">
        <svg
          viewBox="0 0 600 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full object-cover object-left"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="skillsWaveLeftPrimary"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.65" />
              <stop offset="40%" stopColor="#4784FF" stopOpacity="0.45" />
              <stop offset="75%" stopColor="#38BDF8" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            <linearGradient
              id="skillsWaveLeftCyan"
              x1="0%"
              y1="30%"
              x2="95%"
              y2="85%"
            >
              <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.52" />
              <stop offset="45%" stopColor="#38BDF8" stopOpacity="0.38" />
              <stop offset="80%" stopColor="#7DD3FC" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            <linearGradient
              id="skillsWaveLeftCrest"
              x1="0%"
              y1="10%"
              x2="90%"
              y2="90%"
            >
              <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#4784FF" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0" />
            </linearGradient>

            <filter
              id="skillsBlurSoftLeft"
              x="-25%"
              y="-25%"
              width="150%"
              height="150%"
            >
              <feGaussianBlur stdDeviation="28" />
            </filter>

            <filter
              id="skillsBlurSilkLeft"
              x="-15%"
              y="-15%"
              width="130%"
              height="130%"
            >
              <feGaussianBlur stdDeviation="12" />
            </filter>
          </defs>

          {/* Ambient Outer Mesh Wave */}
          <path
            d="M-80 20 C160 80, 320 220, 210 470 C110 700, 310 820, 440 990 L-80 1000 Z"
            fill="url(#skillsWaveLeftPrimary)"
            filter="url(#skillsBlurSoftLeft)"
          />

          {/* Silky Middle Cyan-Blue Ribbon Fold */}
          <path
            d="M-60 120 C140 190, 250 340, 150 560 C60 760, 230 870, 360 1000 L-60 1000 Z"
            fill="url(#skillsWaveLeftCyan)"
            filter="url(#skillsBlurSilkLeft)"
          />

          {/* Sharp Modern Fluid Highlight Crest */}
          <path
            d="M-40 0 C180 70, 240 240, 120 440 C10 620, 160 790, 290 960 C170 860, 30 710, 80 490 C130 280, 80 130, -40 0 Z"
            fill="url(#skillsWaveLeftCrest)"
            filter="url(#skillsBlurSilkLeft)"
          />
        </svg>
      </div>

      {/* Right Modern Flowing Blue Gradient Wave (Landing Page Inspired) */}
      <div className="absolute -right-16 sm:-right-10 lg:-right-4 top-0 h-full w-[58vw] max-w-[680px] animate-wave-right opacity-95">
        <svg
          viewBox="0 0 600 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full object-cover object-right"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="skillsWaveRightPrimary"
              x1="100%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.6" />
              <stop offset="40%" stopColor="#4784FF" stopOpacity="0.44" />
              <stop offset="75%" stopColor="#60A5FA" stopOpacity="0.24" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            <linearGradient
              id="skillsWaveRightSky"
              x1="100%"
              y1="25%"
              x2="10%"
              y2="90%"
            >
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#4784FF" stopOpacity="0.34" />
              <stop offset="85%" stopColor="#93C5FD" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            <linearGradient
              id="skillsWaveRightCrest"
              x1="100%"
              y1="15%"
              x2="15%"
              y2="85%"
            >
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.46" />
              <stop offset="55%" stopColor="#38BDF8" stopOpacity="0.26" />
              <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0" />
            </linearGradient>

            <filter
              id="skillsBlurSoftRight"
              x="-25%"
              y="-25%"
              width="150%"
              height="150%"
            >
              <feGaussianBlur stdDeviation="28" />
            </filter>

            <filter
              id="skillsBlurSilkRight"
              x="-15%"
              y="-15%"
              width="130%"
              height="130%"
            >
              <feGaussianBlur stdDeviation="12" />
            </filter>
          </defs>

          {/* Ambient Outer Right Wave */}
          <path
            d="M680 0 C430 70, 290 250, 390 500 C490 740, 310 860, 170 1000 L680 1000 Z"
            fill="url(#skillsWaveRightPrimary)"
            filter="url(#skillsBlurSoftRight)"
          />

          {/* Silky Inner Sky-Blue Wave Ribbon */}
          <path
            d="M660 90 C460 180, 350 360, 450 580 C540 780, 380 890, 250 1000 L660 1000 Z"
            fill="url(#skillsWaveRightSky)"
            filter="url(#skillsBlurSilkRight)"
          />

          {/* Fluid Modern Ribbon Crest */}
          <path
            d="M640 30 C430 110, 370 290, 480 490 C580 670, 430 830, 310 980 C430 870, 560 720, 520 510 C470 310, 520 150, 640 30 Z"
            fill="url(#skillsWaveRightCrest)"
            filter="url(#skillsBlurSilkRight)"
          />
        </svg>
      </div>

      {/* Top & Bottom Soft White Vignettes for Seamless Section Blending */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF]/75 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/75 to-transparent" />
    </div>
  );
}

export default function TechnicalSkillsSection() {
  return (
    <section
      id="skills"
      aria-label="Technical Skills"
      className="relative z-10 w-full bg-[#FFFFFF] py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-10 overflow-hidden"
    >
      {/* Modern Blue-Gradient Flowing Waves (Replacing the 2 Halftone Stars) */}
      <ModernBlueWaveBackdrop />

      {/* Main Centered Content Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        {/* Section Title with Official Sharp Star Asset (assetslancip.png) */}
        <div className="inline-flex items-center justify-center gap-1 sm:gap-2">
          <h2 className="font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight text-[#4784FF] leading-none">
            Technical Skills
          </h2>
          <div className="relative flex h-10 w-10 sm:h-13 sm:w-13 md:h-16 md:w-16 lg:h-[74px] lg:w-[74px] shrink-0 items-center justify-center">
            <Image
              src={assetsLancipImg}
              alt="Technical Skills Star"
              width={1920}
              height={1080}
              unoptimized
              className="pointer-events-none w-[240%] max-w-none h-auto select-none"
            />
          </div>
        </div>

        {/* Centered Subtitle in Poppins Italic Matching About Me */}
        <p className="font-poppins italic mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base md:text-lg font-normal leading-relaxed text-[#527FD6]">
          Technologies and frameworks I use to build modern mobile applications,
          interactive web interfaces, and reliable backend systems.
        </p>

        {/* Responsive Grid of 3 Glassmorphism Category Cards */}
        <div className="mt-10 sm:mt-14 grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {SKILL_CATEGORIES.map((category, index) => (
            <SkillCategoryCard
              key={category.id}
              category={category}
              isThirdCard={index === 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

