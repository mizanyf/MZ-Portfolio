"use client";

import React, { useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import assetsLancipImg from "../../assets/assetslancip.png";
import toolsTitleImg from "../../public/assets/tools/Tools.png";
import spreedsheetImg from "../../public/assets/tools/Spreedsheet.png";
import slidesImg from "../../public/assets/tools/Slides.png";
import antigravityImg from "../../public/assets/tools/Antigravity.png";
import figmaImg from "../../public/assets/tools/Figma.png";
import githubImg from "../../public/assets/tools/Github.png";
import canvaImg from "../../public/assets/tools/Canva.png";
import chatgptImg from "../../public/assets/tools/Chatgpt.png";
import gdocsImg from "../../public/assets/tools/Gdocs.png";
import vscodeImg from "../../public/assets/tools/Vscode.png";
import capcutImg from "../../public/assets/tools/Capcut.png";
import stitchImg from "../../public/assets/tools/Stitch.png";

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

interface TechItemConfig {
  name: TechName;
  /** Random initial tilt angle (degrees) for each framework logo */
  baseTiltDeg: number;
  /** Star-like calm idle animation class */
  idleAnimClass: "animate-about-star-back" | "animate-about-star-front";
  /** Staggered idle animation delay (ms) */
  delayMs: number;
  /** Random/varied subtle scroll rotation factor */
  scrollRotateFactor: number;
  /** Max scroll rotation clamp (deg) */
  maxRotateDeg: number;
}

interface SkillCategory {
  id: string;
  title: string;
  items: TechItemConfig[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    items: [
      {
        name: "Dart",
        baseTiltDeg: -11,
        idleAnimClass: "animate-about-star-back",
        delayMs: 0,
        scrollRotateFactor: 0.019,
        maxRotateDeg: 11,
      },
      {
        name: "Flutter",
        baseTiltDeg: 10,
        idleAnimClass: "animate-about-star-front",
        delayMs: 400,
        scrollRotateFactor: -0.021,
        maxRotateDeg: 12,
      },
    ],
  },
  {
    id: "frontend-dev",
    title: "Frontend Development",
    items: [
      {
        name: "HTML",
        baseTiltDeg: -10,
        idleAnimClass: "animate-about-star-back",
        delayMs: 100,
        scrollRotateFactor: 0.017,
        maxRotateDeg: 11,
      },
      {
        name: "CSS",
        baseTiltDeg: 8,
        idleAnimClass: "animate-about-star-front",
        delayMs: 450,
        scrollRotateFactor: -0.022,
        maxRotateDeg: 12,
      },
      {
        name: "JavaScript",
        baseTiltDeg: -11,
        idleAnimClass: "animate-about-star-back",
        delayMs: 250,
        scrollRotateFactor: 0.02,
        maxRotateDeg: 12,
      },
      {
        name: "React",
        baseTiltDeg: 9,
        idleAnimClass: "animate-about-star-front",
        delayMs: 600,
        scrollRotateFactor: -0.018,
        maxRotateDeg: 11,
      },
      {
        name: "Next.js",
        baseTiltDeg: -8,
        idleAnimClass: "animate-about-star-back",
        delayMs: 300,
        scrollRotateFactor: 0.015,
        maxRotateDeg: 10,
      },
      {
        name: "Tailwind CSS",
        baseTiltDeg: 11,
        idleAnimClass: "animate-about-star-front",
        delayMs: 750,
        scrollRotateFactor: -0.023,
        maxRotateDeg: 13,
      },
    ],
  },
  {
    id: "backend-db",
    title: "Backend Development & Database",
    items: [
      {
        name: "PHP",
        baseTiltDeg: -9,
        idleAnimClass: "animate-about-star-front",
        delayMs: 150,
        scrollRotateFactor: -0.019,
        maxRotateDeg: 11,
      },
      {
        name: "Laravel",
        baseTiltDeg: 10,
        idleAnimClass: "animate-about-star-back",
        delayMs: 500,
        scrollRotateFactor: 0.022,
        maxRotateDeg: 12,
      },
      {
        name: "MySQL",
        baseTiltDeg: -10,
        idleAnimClass: "animate-about-star-front",
        delayMs: 200,
        scrollRotateFactor: -0.016,
        maxRotateDeg: 10,
      },
      {
        name: "MariaDB",
        baseTiltDeg: 9,
        idleAnimClass: "animate-about-star-back",
        delayMs: 650,
        scrollRotateFactor: 0.021,
        maxRotateDeg: 12,
      },
      {
        name: "TiDB",
        baseTiltDeg: -11,
        idleAnimClass: "animate-about-star-front",
        delayMs: 350,
        scrollRotateFactor: -0.02,
        maxRotateDeg: 12,
      },
      {
        name: "Supabase",
        baseTiltDeg: 10,
        idleAnimClass: "animate-about-star-back",
        delayMs: 800,
        scrollRotateFactor: 0.018,
        maxRotateDeg: 11,
      },
    ],
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
          <rect width="112" height="112" x="8" y="8" rx="26" fill="#20232A" />
          <circle cx="64" cy="64" r="9.2" fill="#61DAFB" />
          <g fill="none" stroke="#61DAFB" strokeWidth="4.6">
            <ellipse cx="64" cy="64" rx="42" ry="16" />
            <ellipse
              cx="64"
              cy="64"
              rx="42"
              ry="16"
              transform="rotate(60 64 64)"
            />
            <ellipse
              cx="64"
              cy="64"
              rx="42"
              ry="16"
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
          <rect width="112" height="112" x="8" y="8" rx="26" fill="#0F172A" />
          <path
            fill="#38BDF8"
            d="M64 38c-12.4 0-20.2 6.2-23.2 18.5 4.6-6.2 10.1-8.5 16.2-7 3.5.9 6.1 3.4 8.9 6.2 4.6 4.6 9.8 10 21.3 10 12.4 0 20.2-6.2 23.2-18.5-4.6 6.2-10.1 8.5-16.2 7-3.5-.9-6.1-3.4-8.9-6.2C80.7 43.4 75.5 38 64 38zM40.8 65.8c-12.4 0-20.2 6.2-23.2 18.5 4.6-6.2 10.1-8.5 16.2-7 3.5.9 6.1 3.4 8.9 6.2 4.6 4.6 9.8 10 21.3 10 12.4 0 20.2-6.2 23.2-18.5-4.6 6.2-10.1 8.5-16.2 7-3.5-.9-6.1-3.4-8.9-6.2-4.6-4.6-9.8-10-21.3-10z"
          />
        </svg>
      );

    case "PHP":
      return (
        <svg viewBox="0 0 128 128" className="h-full w-full" aria-hidden="true">
          <ellipse cx="64" cy="64" rx="58" ry="34" fill="#777BB4" />
          <path
            fill="#FFFFFF"
            d="M32.5 76.5l5.4-27.5h13.2c5.8 0 9.6 3.3 8.5 9.1-1.2 6.2-5.8 9.6-12.1 9.6h-6.1l-1.7 8.8h-7.2zm10.2-14.3h4.6c2.9 0 4.9-1.6 5.4-4.3.5-2.6-1-3.9-3.9-3.9h-4.5l-1.6 8.2zm20.1 14.3l6.8-34.5h7.1l-1.9 9.7h5.9c5.3 0 8.1 2.8 7.1 7.9l-3.3 16.9h-7.2l3-15.3c.5-2.4-.4-3.5-2.8-3.5h-4.9l-3.7 18.8h-6.1zm26.9 7l6.8-34.5h13.2c5.8 0 9.6 3.3 8.5 9.1-1.2 6.2-5.8 9.6-12.1 9.6h-6.1l-3.1 15.8h-7.2zm10.2-21.3h4.6c2.9 0 4.9-1.6 5.4-4.3.5-2.6-1-3.9-3.9-3.9h-4.5l-1.6 8.2z"
          />
        </svg>
      );

    case "Laravel":
      return (
        <svg viewBox="0 0 128 128" className="h-full w-full" aria-hidden="true">
          <rect width="112" height="112" x="8" y="8" rx="26" fill="#FF2D20" />
          <path
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="4.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M30 42l17-10 17 10v36l17-10V50l17-10 16 10v19L64 97 30 78V42zm17 10L30 42m17 10l17-10m-17 10v36m34-26l17-10m-17 10l-17-10m17 10v19m-17 9l17-10"
          />
        </svg>
      );

    case "MySQL":
      return (
        <svg viewBox="0 0 128 128" className="h-full w-full" aria-hidden="true">
          <rect width="112" height="112" x="8" y="8" rx="26" fill="#FFFFFF" />
          <path
            fill="#00758F"
            d="M90.5 56.2c-3.8-10.2-12.8-22.4-25.6-29.4-4.2-2.3-9.3-4.3-13.2-3.8-2 .3-2.8 1.8-1.6 4.1 1.9 3.8 5.3 8.2 7 12.9-5.8-1.9-13.1-1.7-18.1 1.5-3.1 2-4.6 5.1-3.5 7.6 1 2.3 3.8 3 6.8 2.8 4.1-.3 8.7-.8 12.8.8 3.2 1.4 6.3 4.2 8.5 7.8-4.1 1.2-8 4.1-9.5 8-.7 1.9-.5 3.7 1.1 4.1 1.8.5 3.7-1.2 5.5-2.5 2.9-2.2 6.3-3.2 9.9-2.3 4.9 1.4 9.5 5.8 13.6 10.5 1.6 1.9 3.3 1.1 2.9-1.3-.8-4.2-3.2-8.8-5.8-12.5 5 .4 10.1-.2 13.6-2.5 1.9-1.3 2-3.1-.3-4.1-2.6-1.3-5.4-1.3-7.6-1.9z"
          />
          <text
            x="64"
            y="102"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontWeight="800"
            fontSize="22"
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
          <rect width="112" height="112" x="8" y="8" rx="26" fill="#FFFFFF" />
          <path
            fill="#003545"
            d="M26 72c10-3.6 19.8-12.6 26.1-24.3 4.5-8.1 8.1-17.1 15.3-21.6 5.4-3.6 12.6-2.7 17.1.9 2.7 1.8 6.3 2.7 9.9 1.8 3.6-.9 6.3.9 6.3 3.6 0 3.6-3.6 7.2-7.2 9.9-5.4 3.6-9 9.9-9.9 17.1-.9 8.1 1.8 16.2 7.2 21.6 3.6 3.6 9 5.4 13.5 7.2-12.6 3.6-26.1.9-36.9-5.4-6.3 5.4-15.3 8.1-24.3 7.2-6.3-.9-12.6-3.6-17.1-9v-9z"
          />
          <circle cx="73.5" cy="30.5" r="2.3" fill="#FFFFFF" />
          <text
            x="64"
            y="103"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontWeight="700"
            fontSize="18.5"
            fill="#003545"
          >
            Maria<tspan fill="#C0765A">DB</tspan>
          </text>
        </svg>
      );

    case "TiDB":
      return (
        <svg viewBox="0 0 128 128" className="h-full w-full" aria-hidden="true">
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
          <rect width="112" height="112" x="8" y="8" rx="26" fill="#18181B" />
          <path
            fill="#249361"
            d="M70.2 104.5c-2.3 2.9-7 1.3-7.1-2.4l-.8-48.6h32.8c5.9 0 9.3 6.9 5.6 11.5L70.2 104.5z"
          />
          <path
            fill="#3ECF8E"
            d="M57.8 23.5c2.3-2.9 7-1.3 7.1 2.4l.4 48.6H32.9c-5.9 0-9.3-6.9-5.6-11.5L57.8 23.5z"
          />
        </svg>
      );
  }
}

function FloatingTechItem({
  item,
  isLarge = false,
  scrollDeltaY,
}: {
  item: TechItemConfig;
  isLarge?: boolean;
  scrollDeltaY: number;
}) {
  const rawRotation = scrollDeltaY * item.scrollRotateFactor;
  const clampedScrollRotation = Math.max(
    -item.maxRotateDeg,
    Math.min(item.maxRotateDeg, rawRotation)
  );

  return (
    <div
      style={{
        transform: `rotate(${clampedScrollRotation}deg)`,
      }}
      className="group flex flex-col items-center justify-center p-2 text-center transition-transform duration-500 ease-out will-change-transform"
    >
      {/* Inner Star-Like Calm Breathing Layer */}
      <div
        style={{ animationDelay: `${item.delayMs}ms` }}
        className={`flex flex-col items-center justify-center ${item.idleAnimClass}`}
      >
        {/* Tilted Floating Logo with Blue Drop-Shadow Behind It (Tools Concept) */}
        <div
          style={{
            transform: `rotate(${item.baseTiltDeg}deg)`,
          }}
          className={`flex items-center justify-center drop-shadow-[0_12px_20px_rgba(71,132,255,0.42)] transition-transform duration-300 ease-out group-hover:scale-112 ${
            isLarge
              ? "h-17 w-17 sm:h-21 sm:w-21"
              : "h-13 w-13 sm:h-15 sm:w-15"
          }`}
        >
          <OfficialTechLogo name={item.name} />
        </div>

        {/* Framework / Technology Name Below Logo */}
        <span className="font-poppins mt-3 text-xs sm:text-[13px] font-semibold tracking-tight text-[#193A75] whitespace-nowrap drop-shadow-[0_2px_8px_rgba(71,132,255,0.18)] transition-colors duration-200 group-hover:text-[#4784FF]">
          {item.name}
        </span>
      </div>
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
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [scrollDeltaY, setScrollDeltaY] = useState<number>(0);
  const isTwoItems = category.items.length === 2;

  useEffect(() => {
    let rafId = 0;

    const updateCardScroll = () => {
      const el = cardRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const cardCenterY = rect.top + rect.height / 2;
      const viewportCenterY = vh * 0.5;
      setScrollDeltaY(cardCenterY - viewportCenterY);
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateCardScroll);
    };

    rafId = requestAnimationFrame(updateCardScroll);

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`flex flex-col items-center justify-between rounded-3xl border border-white/90 bg-white/65 p-6 sm:p-8 text-center ring-1 ring-[#DCE9FF] shadow-[0_12px_40px_rgba(71,132,255,0.10)] backdrop-blur-md backdrop-saturate-150 transition-all duration-300 hover:shadow-[0_16px_48px_rgba(71,132,255,0.16)] ${
        isThirdCard
          ? "md:col-span-2 md:mx-auto md:w-full md:max-w-[calc(50%-0.75rem)] lg:col-span-1 lg:max-w-none"
          : ""
      }`}
    >
      {/* Category Header (Centered, No Bio/Description Text) */}
      <div className="flex flex-col items-center text-center">
        <h3 className="font-poppins text-lg sm:text-xl font-bold text-[#4784FF]">
          {category.title}
        </h3>
      </div>

      {/* Neat Ordered Grid Inside Glassmorphism Box with Random Tilt & Scroll Rotation */}
      <div
        className={`mt-6 mb-auto grid w-full justify-items-center items-center ${
          isTwoItems
            ? "grid-cols-2 gap-6 sm:gap-8 max-w-[260px] mx-auto my-auto py-6"
            : "grid-cols-3 gap-x-3 gap-y-7 sm:gap-x-5 sm:gap-y-8 my-auto py-3"
        }`}
      >
        {category.items.map((techItem) => (
          <FloatingTechItem
            key={techItem.name}
            item={techItem}
            isLarge={isTwoItems}
            scrollDeltaY={scrollDeltaY}
          />
        ))}
      </div>
    </div>
  );
}

interface FloatingToolItem {
  id: string;
  alt: string;
  src: StaticImageData;
  /** Wide, symmetrically balanced position and size classes on the 16:9 desktop stage */
  positionClass: string;
  /** Scale adjustment for mobile 2-column grid (compensates for transparent PNG canvas padding) */
  mobileScaleClass?: string;
  /** Mobile zigzag alignment ("left" | "right" | "center") */
  mobileSide: "left" | "right" | "center";
  /** Mobile organic indent class (e.g. "ml-2", "mr-6", etc.) */
  mobileIndentClass: string;
  /** Organic subtle tilt angle on mobile (degrees) */
  mobileTiltDeg: number;
  /** Which star-like calm idle animation to use */
  idleAnimClass: "animate-about-star-back" | "animate-about-star-front";
  /** Animation delay for organic staggered floating */
  delayMs: number;
  /** Unique scroll rotation speed factor (deg per px of scroll offset, varied & subtle) */
  scrollRotateFactor: number;
  /** Maximum rotation clamp in degrees so it never rotates too much */
  maxRotateDeg: number;
  /** Optional white rounded-square tile wrapper rotation (for ChatGPT & CapCut) */
  tileRotationDeg?: number;
}

const FLOATING_TOOLS: FloatingToolItem[] = [
  // Pair 1 (Top Outer — Wide Left & Right): Center X = 7.8% (Left) vs 92.2% (Right)
  {
    id: "spreadsheet",
    alt: "Google Sheets",
    src: spreedsheetImg,
    positionClass: "left-[2.2%] top-[5.5%] w-[11.2%] aspect-[609/736]",
    mobileSide: "left",
    mobileIndentClass: "ml-2 sm:ml-4",
    mobileTiltDeg: -9,
    idleAnimClass: "animate-about-star-back",
    delayMs: 0,
    scrollRotateFactor: 0.018,
    maxRotateDeg: 11,
  },
  {
    id: "slides",
    alt: "Google Slides",
    src: slidesImg,
    positionClass: "left-[79.9%] top-[-4.5%] w-[24.6%] aspect-[1097/906]",
    mobileScaleClass: "scale-[1.75]",
    mobileSide: "right",
    mobileIndentClass: "mr-2 sm:mr-4",
    mobileTiltDeg: 10,
    idleAnimClass: "animate-about-star-front",
    delayMs: 350,
    scrollRotateFactor: -0.022,
    maxRotateDeg: 13,
  },

  // Pair 2 (Middle Outer — Wide Left & Right): Center X = 9.3% (Left) vs 90.7% (Right)
  {
    id: "antigravity",
    alt: "Antigravity",
    src: antigravityImg,
    positionClass: "left-[3.0%] top-[36.5%] w-[12.6%] aspect-square",
    mobileSide: "left",
    mobileIndentClass: "ml-7 sm:ml-9",
    mobileTiltDeg: -11,
    idleAnimClass: "animate-about-star-front",
    delayMs: 700,
    scrollRotateFactor: -0.015,
    maxRotateDeg: 10,
  },
  {
    id: "chatgpt",
    alt: "ChatGPT",
    src: chatgptImg,
    positionClass: "left-[84.9%] top-[36.5%] w-[11.6%] aspect-square",
    mobileSide: "right",
    mobileIndentClass: "mr-1 sm:mr-3",
    mobileTiltDeg: 8,
    idleAnimClass: "animate-about-star-front",
    delayMs: 150,
    scrollRotateFactor: 0.021,
    maxRotateDeg: 12,
    tileRotationDeg: -14,
  },

  // Pair 3 (Middle Inner): Center X = 26.2% (Left) vs 73.8% (Right)
  {
    id: "figma",
    alt: "Figma",
    src: figmaImg,
    positionClass: "left-[19.2%] top-[43.0%] w-[14.0%] aspect-square",
    mobileScaleClass: "scale-[1.18]",
    mobileSide: "left",
    mobileIndentClass: "ml-1 sm:ml-3",
    mobileTiltDeg: 12,
    idleAnimClass: "animate-about-star-back",
    delayMs: 200,
    scrollRotateFactor: 0.024,
    maxRotateDeg: 14,
  },
  {
    id: "canva",
    alt: "Canva",
    src: canvaImg,
    positionClass: "left-[66.9%] top-[43.0%] w-[13.8%] aspect-square",
    mobileSide: "right",
    mobileIndentClass: "mr-8 sm:mr-10",
    mobileTiltDeg: -10,
    idleAnimClass: "animate-about-star-back",
    delayMs: 850,
    scrollRotateFactor: -0.017,
    maxRotateDeg: 11,
  },

  // Pair 4 (Bottom Outer — Wide Left & Right): Center X = 11.3% (Left) vs 88.7% (Right)
  {
    id: "gdocs",
    alt: "Google Docs",
    src: gdocsImg,
    positionClass: "left-[-0.2%] top-[63.5%] w-[23.0%] aspect-[1346/906]",
    mobileScaleClass: "scale-[1.75]",
    mobileSide: "left",
    mobileIndentClass: "ml-4 sm:ml-6",
    mobileTiltDeg: -8,
    idleAnimClass: "animate-about-star-back",
    delayMs: 450,
    scrollRotateFactor: -0.02,
    maxRotateDeg: 12,
  },
  {
    id: "stitch",
    alt: "Stitch",
    src: stitchImg,
    positionClass: "left-[82.4%] top-[63.5%] w-[12.6%] aspect-square",
    mobileSide: "right",
    mobileIndentClass: "mr-3 sm:mr-5",
    mobileTiltDeg: 11,
    idleAnimClass: "animate-about-star-front",
    delayMs: 950,
    scrollRotateFactor: 0.016,
    maxRotateDeg: 10,
  },

  // Pair 5 (Bottom Inner): Center X = 36.3% (Left) vs 63.7% (Right)
  {
    id: "vscode",
    alt: "VS Code",
    src: vscodeImg,
    positionClass: "left-[29.2%] top-[64.5%] w-[14.2%] aspect-square",
    mobileSide: "left",
    mobileIndentClass: "ml-8 sm:ml-10",
    mobileTiltDeg: -12,
    idleAnimClass: "animate-about-star-front",
    delayMs: 650,
    scrollRotateFactor: 0.019,
    maxRotateDeg: 12,
  },
  {
    id: "capcut",
    alt: "CapCut",
    src: capcutImg,
    positionClass: "left-[57.7%] top-[66.5%] w-[12.0%] aspect-square",
    mobileSide: "right",
    mobileIndentClass: "mr-4 sm:mr-6",
    mobileTiltDeg: 9,
    idleAnimClass: "animate-about-star-back",
    delayMs: 300,
    scrollRotateFactor: -0.023,
    maxRotateDeg: 13,
    tileRotationDeg: -9,
  },

  // Center: Center X = 50.0% (Desktop) / Left Zigzag (Mobile)
  {
    id: "github",
    alt: "GitHub",
    src: githubImg,
    positionClass: "left-[38.0%] top-[43.5%] w-[24.0%] aspect-[1346/906]",
    mobileScaleClass: "scale-[1.88]",
    mobileSide: "left",
    mobileIndentClass: "ml-4 sm:ml-6 pt-2",
    mobileTiltDeg: -7,
    idleAnimClass: "animate-about-star-front",
    delayMs: 500,
    scrollRotateFactor: 0.014,
    maxRotateDeg: 9,
  },
];

function ToolsShowcase() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [scrollDeltaY, setScrollDeltaY] = useState<number>(0);

  useEffect(() => {
    let rafId = 0;

    const updateScrollState = () => {
      const el = stageRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const stageCenterY = rect.top + rect.height / 2;
      const viewportCenterY = vh * 0.5;
      setScrollDeltaY(stageCenterY - viewportCenterY);
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateScrollState);
    };

    rafId = requestAnimationFrame(updateScrollState);

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <div
      ref={stageRef}
      className="relative z-10 mt-6 sm:mt-8 lg:mt-10 mx-auto w-full max-w-[1780px] px-2 sm:px-4"
    >
      {/* Desktop & Tablet (>= md): Full-Width 16:9 Stage Spreading Icons Wide Left & Right */}
      <div className="relative mx-auto hidden md:block w-full aspect-video select-none">
        {/* Center "*Tools*" Title Asset (Moved Slightly Higher & Completely Still) */}
        <div className="pointer-events-none absolute left-[11.0%] top-[-6.5%] z-10 w-[78.0%] aspect-[1920/1024]">
          <Image
            src={toolsTitleImg}
            alt="Tools"
            fill
            unoptimized
            sizes="(max-width: 1780px) 80vw, 1380px"
            className="object-contain object-center select-none"
          />
        </div>

        {/* Floating Tool Logos: Subtle Random Scroll Rotation */}
        {FLOATING_TOOLS.map((tool) => {
          const rawRotation = scrollDeltaY * tool.scrollRotateFactor;
          const clampedRotation = Math.max(
            -tool.maxRotateDeg,
            Math.min(tool.maxRotateDeg, rawRotation)
          );

          return (
            <div
              key={tool.id}
              style={{
                transform: `rotate(${clampedRotation}deg)`,
              }}
              className={`absolute z-20 ${tool.positionClass} transition-transform duration-500 ease-out will-change-transform`}
            >
              {/* Inner Star-Like Calm Breathing/Rocking Layer */}
              <div
                style={{ animationDelay: `${tool.delayMs}ms` }}
                className={`relative h-full w-full ${tool.idleAnimClass}`}
              >
                {tool.tileRotationDeg !== undefined ? (
                  <div
                    style={{
                      transform: `rotate(${tool.tileRotationDeg}deg)`,
                    }}
                    className="relative h-full w-full overflow-hidden rounded-[23%] bg-white shadow-[0_14px_30px_rgba(71,132,255,0.40),0_4px_12px_rgba(71,132,255,0.22)] ring-1 ring-[#4784FF]/25 transition-transform duration-300 hover:scale-105"
                  >
                    <div
                      style={{
                        transform: `rotate(${-tool.tileRotationDeg}deg) scale(1.18)`,
                      }}
                      className="relative h-full w-full"
                    >
                      <Image
                        src={tool.src}
                        alt={tool.alt}
                        fill
                        unoptimized
                        sizes="180px"
                        className="object-contain object-center select-none"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="relative h-full w-full drop-shadow-[0_14px_22px_rgba(71,132,255,0.42)] transition-transform duration-300 hover:scale-105">
                    <Image
                      src={tool.src}
                      alt={tool.alt}
                      fill
                      unoptimized
                      sizes="240px"
                      className="object-contain object-center select-none"
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile (< md): Organic Alternating Zigzag Stream (Kanan - Kiri - Kanan - Kiri) */}
      <div className="md:hidden flex flex-col items-center w-full pt-4 pb-14 select-none overflow-hidden">
        {/* "*Tools*" Title Asset on Mobile */}
        <div className="pointer-events-none relative w-[92%] max-w-[360px] aspect-[1920/1024] -mb-2">
          <Image
            src={toolsTitleImg}
            alt="Tools"
            fill
            unoptimized
            sizes="92vw"
            className="object-contain object-center select-none"
          />
        </div>

        {/* Alternating Winding List of Large Tool Icons with Organic Indents */}
        <div className="flex flex-col w-full max-w-[350px] mx-auto px-4 -space-y-6 sm:-space-y-7 pt-4">
          {FLOATING_TOOLS.map((tool) => {
            const rawRotation = scrollDeltaY * tool.scrollRotateFactor;
            const clampedRotation = Math.max(
              -tool.maxRotateDeg,
              Math.min(tool.maxRotateDeg, rawRotation)
            );
            const totalRotation = tool.mobileTiltDeg + clampedRotation;

            const alignmentClass =
              tool.mobileSide === "left"
                ? "self-start"
                : tool.mobileSide === "right"
                ? "self-end"
                : "self-center";

            return (
              <div
                key={tool.id}
                style={{
                  transform: `rotate(${totalRotation}deg)`,
                }}
                className={`relative h-24 w-24 sm:h-28 sm:w-28 flex items-center justify-center transition-transform duration-500 ease-out will-change-transform ${alignmentClass} ${tool.mobileIndentClass}`}
              >
                <div
                  style={{ animationDelay: `${tool.delayMs}ms` }}
                  className={`relative h-full w-full ${tool.idleAnimClass}`}
                >
                  {tool.tileRotationDeg !== undefined ? (
                    <div
                      style={{
                        transform: `rotate(${tool.tileRotationDeg}deg)`,
                      }}
                      className="relative h-full w-full overflow-hidden rounded-[23%] bg-white shadow-[0_14px_30px_rgba(71,132,255,0.40),0_4px_12px_rgba(71,132,255,0.22)] ring-1 ring-[#4784FF]/25"
                    >
                      <div
                        style={{
                          transform: `rotate(${-tool.tileRotationDeg}deg) scale(1.18)`,
                        }}
                        className="relative h-full w-full"
                      >
                        <Image
                          src={tool.src}
                          alt={tool.alt}
                          fill
                          unoptimized
                          sizes="130px"
                          className="object-contain object-center select-none"
                        />
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`relative h-full w-full drop-shadow-[0_14px_22px_rgba(71,132,255,0.42)] ${
                        tool.mobileScaleClass ?? ""
                      }`}
                    >
                      <Image
                        src={tool.src}
                        alt={tool.alt}
                        fill
                        unoptimized
                        sizes="150px"
                        className="object-contain object-center select-none"
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
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

      {/* Full-Width Tools Showcase Directly Below Technical Skills */}
      <ToolsShowcase />
    </section>
  );
}

