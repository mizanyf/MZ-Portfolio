"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import assetsKiriImg from "../../assets/landinpages/assetskiri.png";
import assetsKananImg from "../../assets/landinpages/assetskanan.png";
import portofolioImg from "../../assets/landinpages/portofolio.png";
import aboutMeTitleImg from "../../assets/aboutme/aboutme.png";
import fotoMeImg from "../../assets/aboutme/fotome.png";
import bintangImg from "../../assets/aboutme/bintang.png";
import TechnicalSkillsSection from "../components/TechnicalSkillsSection";

const NAV_ITEMS = [
  "Home",
  "About",
  "Skills",
  "Mobile Apps",
  "Web Projects",
  "Design",
  "Photography",
  "Videography",
  "Certificates",
  "Contact",
] as const;

type NavItem = (typeof NAV_ITEMS)[number];

const PORTFOLIO_LAYERS = [
  {
    id: "port-with-star",
    alt: "@mizanyf Port*",
    animClass: "animate-porto-top",
    clipPath:
      "polygon(0% 0%, 100% 0%, 100% 54%, 59.65% 54%, 59.65% 52.13%, 51.51% 52.13%, 51.51% 50.83%, 49.09% 56.25%, 49.09% 52.13%, 0% 52.13%)",
  },
  {
    id: "folio-bottom",
    alt: "Flutter Developer folio 2026 Version.",
    animClass: "animate-porto-bottom",
    clipPath:
      "polygon(0% 52.13%, 49.09% 52.13%, 49.09% 56.25%, 51.51% 50.83%, 51.51% 52.13%, 59.65% 52.13%, 59.65% 54%, 100% 54%, 100% 100%, 0% 100%)",
  },
] as const;

function SocialAndActionButtons({ isMobile = false }: { isMobile?: boolean }) {
  const iconBtnClass = isMobile
    ? "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-[#527FD6] bg-white text-[#527FD6] transition-all duration-200 hover:border-[#4784FF] hover:bg-[#4784FF] hover:text-white active:scale-95"
    : "flex h-9 w-9 lg:h-10 lg:w-10 cursor-pointer items-center justify-center rounded-xl border border-[#527FD6] bg-white text-[#527FD6] transition-all duration-200 hover:border-[#4784FF] hover:bg-[#4784FF] hover:text-white active:scale-95";

  const iconSvgClass = isMobile
    ? "h-5 w-5"
    : "h-5 w-5 lg:h-6 lg:w-6";

  const actionBtnBase = isMobile
    ? "font-poppins not-italic inline-flex cursor-pointer items-center justify-center rounded-xl px-3.5 py-2 text-xs font-medium whitespace-nowrap transition-all duration-200 active:scale-95"
    : "font-poppins not-italic inline-flex cursor-pointer items-center justify-center rounded-xl px-3 py-1.5 lg:px-4 lg:py-2 text-[clamp(10px,1vw,15px)] font-medium whitespace-nowrap transition-all duration-200 active:scale-95";

  return (
    <div
      className={`${
        isMobile ? "mt-0.5 gap-3" : "mt-4 lg:mt-5 gap-4 lg:gap-5"
      } flex flex-col items-end`}
    >
      {/* Row 1: Social Media Logo Buttons with Wider Spacing Between Icons */}
      <div className="flex items-center justify-end gap-3.5 lg:gap-4.5">
        {/* Instagram (@mizanyf) */}
        <a
          href="https://www.instagram.com/mizanyf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram @mizanyf"
          className={iconBtnClass}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={iconSvgClass}
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>

        {/* LinkedIn (www.linkedin.com/in/mizanyh) */}
        <a
          href="https://www.linkedin.com/in/mizanyh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn mizanyh"
          className={iconBtnClass}
        >
          <svg
            viewBox="2 2 20 20"
            fill="currentColor"
            className={iconSvgClass}
          >
            <path d="M19.6 2H4.4A2.4 2.4 0 0 0 2 4.4v15.2A2.4 2.4 0 0 0 4.4 22h15.2a2.4 2.4 0 0 0 2.4-2.4V4.4A2.4 2.4 0 0 0 19.6 2zM8.3 18.7H5.3V9.5h3v9.2zM6.8 8.2a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zm12 10.5h-3v-4.8c0-1.15-.02-2.62-1.6-2.62-1.6 0-1.85 1.25-1.85 2.54v4.88h-3V9.5h2.88v1.26h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v4.9z" />
          </svg>
        </a>

        {/* GitHub (@mizanyf) */}
        <a
          href="https://github.com/mizanyf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub @mizanyf"
          className={iconBtnClass}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={iconSvgClass}
          >
            <path d="M12 2A10 10 0 0 0 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49v-1.73c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.05 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.32.1-2.71 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85 0 1.71.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.39.2 2.45.1 2.71.64.71 1.03 1.62 1.03 2.73 0 3.92-2.34 4.79-4.57 5.04.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.25 10 10 0 0 0 12 2z" />
          </svg>
        </a>

        {/* YouTube (Button Only, No Link) */}
        <button
          type="button"
          aria-label="YouTube"
          className={iconBtnClass}
        >
          <svg
            viewBox="1.5 3.5 21 17"
            fill="currentColor"
            className={iconSvgClass}
          >
            <path d="M21.58 7.19a2.75 2.75 0 0 0-1.94-1.94C17.93 4.8 12 4.8 12 4.8s-5.93 0-7.64.45a2.75 2.75 0 0 0-1.94 1.94C2 8.9 2 12 2 12s0 3.1.42 4.81a2.75 2.75 0 0 0 1.94 1.94c1.71.45 7.64.45 7.64.45s5.93 0 7.64-.45a2.75 2.75 0 0 0 1.94-1.94C22 15.1 22 12 22 12s0-3.1-.42-4.81zM10 15.15V8.85L15.5 12 10 15.15z" />
          </svg>
        </button>
      </div>

      {/* Row 2: Action Buttons (Lihat Proyek, Download CV, Email) Lined Up Side-by-Side */}
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-end gap-2 lg:gap-2.5">
        {/* Lihat Proyek (Blue BG, White Text, No Link Yet) */}
        <button
          type="button"
          className={`${actionBtnBase} border border-[#4784FF] bg-[#4784FF] text-white shadow-[0_4px_12px_rgba(71,132,255,0.25)] hover:bg-[#3670E8]`}
        >
          Lihat Proyek
        </button>

        {/* Download CV (White BG, Blue Stroke, Blue Text) */}
        <a
          href="/cv"
          download="CV_Mochammad Al Mizan Ya Hafidl_UB.pdf"
          className={`${actionBtnBase} border border-[#527FD6] bg-white text-[#4784FF] hover:border-[#4784FF] hover:bg-[#F0F7FF]`}
        >
          Download CV
        </a>

        {/* Email (White BG, Blue Stroke, Blue Text -> yalmizan@gmail.com) */}
        <a
          href="mailto:yalmizan@gmail.com"
          className={`${actionBtnBase} border border-[#527FD6] bg-white text-[#4784FF] hover:border-[#4784FF] hover:bg-[#F0F7FF]`}
        >
          Email
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeMenu, setActiveMenu] = useState<NavItem>("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);
  const [aboutProgress, setAboutProgress] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    let rafId = 0;

    const handleScroll = () => {
      setScrollY(window.scrollY);
      const isMob = window.innerWidth < 768;
      setIsMobile(isMob);

      // Measure the actual 16:9 stage where the photo and stars live
      const stageEl =
        document.getElementById("about-stage") ||
        document.getElementById("about");
      if (stageEl) {
        const rect = stageEl.getBoundingClientRect();
        const vh = window.innerHeight || 1;

        // Accurate vertical center of the photo and stars on both desktop and mobile
        const starsCenterY = rect.top + rect.height * 0.5;
        const ratio = starsCenterY / vh;

        let rawProgress = 0;

        if (isMob) {
          // Dedicated Mobile Tuning:
          // Triggers immediately when the photo starts peeking into the bottom of the screen (ratio 1.18)
          // and reaches full emergence by ratio 0.65 (in lower-middle screen, no deep scrolling needed!)
          if (ratio >= -0.15 && ratio <= 0.65) {
            rawProgress = 1.0;
          } else if (ratio > 0.65 && ratio < 1.18) {
            const t = (1.18 - ratio) / (1.18 - 0.65);
            rawProgress = t * t * (3 - 2 * t);
          } else if (ratio < -0.15 && ratio > -0.4) {
            const t = (ratio - -0.4) / (-0.15 - -0.4);
            rawProgress = t * t * (3 - 2 * t);
          } else {
            rawProgress = 0.0;
          }
        } else {
          // Desktop Tuning:
          if (ratio >= 0.02 && ratio <= 0.46) {
            rawProgress = 1.0;
          } else if (ratio > 0.46 && ratio < 1.02) {
            const t = (1.02 - ratio) / (1.02 - 0.46);
            rawProgress = t * t * (3 - 2 * t);
          } else if (ratio < 0.02 && ratio > -0.22) {
            const t = (ratio - -0.22) / (0.02 - -0.22);
            rawProgress = t * t * (3 - 2 * t);
          } else {
            rawProgress = 0.0;
          }
        }

        setAboutProgress(rawProgress);
      }
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    rafId = requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  const handleSelectMenu = (item: NavItem) => {
    setActiveMenu(item);
    setIsMobileMenuOpen(false);
    if (item === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (item === "About") {
      const ubEl = document.getElementById("about-ub-text");
      const aboutEl = document.getElementById("about");
      if (ubEl && window.innerWidth >= 768) {
        const ubRect = ubEl.getBoundingClientRect();
        const vh = window.innerHeight;
        // Position "Universitas Brawijaya" right at the bottom of the viewport (20px from bottom edge)
        const targetScrollY = window.scrollY + ubRect.bottom - vh + 20;
        window.scrollTo({
          top: Math.max(0, targetScrollY),
          behavior: "smooth",
        });
      } else if (aboutEl) {
        aboutEl.scrollIntoView({ behavior: "smooth" });
      }
    } else if (item === "Skills") {
      const skillsEl = document.getElementById("skills");
      if (skillsEl) {
        skillsEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Halftone stars emerge when About section is viewed, and shrink slightly towards center of fotome (the person) when scrolled away
  const leftStarTransX = (1 - aboutProgress) * 14.0;
  const leftStarTransY = (1 - aboutProgress) * -17.0;
  const rightStarTransX = (1 - aboutProgress) * -11.0;
  const rightStarTransY = (1 - aboutProgress) * -28.0;

  // Subtle shrink ("menciut sedikit saja" - down to 82% scale & 70% opacity rather than disappearing)
  const starScale = 0.82 + aboutProgress * 0.18;
  const starOpacity = 0.7 + aboutProgress * 0.3;

  // Faster responsive transition on mobile, cinematic slow bloom on desktop
  const starTransition = isMobile
    ? "transform 650ms cubic-bezier(0.16, 1, 0.3, 1), opacity 650ms cubic-bezier(0.16, 1, 0.3, 1)"
    : "transform 1000ms cubic-bezier(0.16, 1, 0.3, 1), opacity 1000ms cubic-bezier(0.16, 1, 0.3, 1)";

  return (
    <main className="relative min-h-screen w-full bg-[#FFFFFF] overflow-x-hidden">
      {/* Desktop & Tablet Navbar: Floating Center Glassmorphism */}
      <header className="fixed top-6 lg:top-8 left-1/2 -translate-x-1/2 z-50 hidden md:block w-max max-w-[calc(100vw-2rem)]">
        <nav
          aria-label="Main Navigation"
          className="flex flex-nowrap items-center justify-center gap-1 xl:gap-1.5 rounded-2xl border border-white/80 bg-white/60 p-1.5 xl:p-2 ring-1 ring-[#DCE9FF]/80 shadow-[0_8px_32px_rgba(71,132,255,0.14)] backdrop-blur-md backdrop-saturate-150 transition-all duration-300"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeMenu === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => handleSelectMenu(item)}
                aria-current={isActive ? "page" : undefined}
                className={`cursor-pointer shrink-0 rounded-xl px-2.5 py-1.5 lg:px-3.5 lg:py-1.5 xl:px-4 xl:py-2 text-[11.5px] lg:text-[13px] xl:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "bg-[#4784FF] text-white shadow-[0_4px_12px_rgba(71,132,255,0.3)]"
                    : "text-[#4784FF] hover:bg-white/75 hover:text-[#193A75]"
                }`}
              >
                {item}
              </button>
            );
          })}
        </nav>
      </header>

      {/* Mobile / Android Navbar: Top-Right Blunt-Square Glassmorphism Hamburger Button & Menu */}
      {isMobileMenuOpen && (
        <div
          aria-hidden="true"
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 z-40 md:hidden"
        />
      )}

      <header className="fixed top-4 right-4 z-50 flex flex-col items-end md:hidden">
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle Navigation Menu"
          aria-expanded={isMobileMenuOpen}
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-2xl border border-white/80 bg-white/60 ring-1 ring-[#DCE9FF]/80 shadow-[0_8px_32px_rgba(71,132,255,0.14)] backdrop-blur-md backdrop-saturate-150 transition-all duration-200 hover:bg-white/80 active:scale-95"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#4784FF]"
          >
            <path
              d="M4 6.5H20M4 12H20M4 17.5H20"
              stroke="#4784FF"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {isMobileMenuOpen && (
          <nav
            aria-label="Mobile Navigation"
            className="mt-2.5 flex w-52 flex-col gap-1 rounded-2xl border border-white/80 bg-white/75 p-2 ring-1 ring-[#DCE9FF]/80 shadow-[0_12px_36px_rgba(71,132,255,0.18)] backdrop-blur-md backdrop-saturate-150"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeMenu === item;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleSelectMenu(item)}
                  aria-current={isActive ? "page" : undefined}
                  className={`cursor-pointer rounded-xl px-3.5 py-2 text-left text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-[#4784FF] text-white shadow-[0_4px_12px_rgba(71,132,255,0.3)]"
                      : "text-[#4784FF] hover:bg-white/80 hover:text-[#193A75]"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </nav>
        )}
      </header>

      {/* Hero Section: Multi-Layer Composition */}
      <section
        id="home"
        className="relative flex h-dvh min-h-screen w-full items-center justify-center bg-[#FFFFFF] overflow-hidden"
      >
        {/* Layer 1A: Left Wave Asset */}
        <div
          style={{ left: "min(0px, calc(30vw - 55dvh))" }}
          className="pointer-events-none absolute top-0 z-0 h-dvh w-[177.78dvh] select-none animate-wave-left"
        >
          <Image
            src={assetsKiriImg}
            alt="Portfolio Left Wave Decoration"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-contain object-left mix-blend-multiply select-none"
          />
        </div>

        {/* Layer 1B: Right Wave Asset */}
        <div
          style={{ right: "min(0px, calc(30vw - 55dvh))" }}
          className="pointer-events-none absolute top-0 z-0 h-dvh w-[177.78dvh] select-none animate-wave-right"
        >
          <Image
            src={assetsKananImg}
            alt="Portfolio Right Wave Decoration"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-contain object-right mix-blend-multiply select-none"
          />
        </div>

        {/* Layer 2: Center Portfolio Typography */}
        <div className="relative z-10 flex h-full w-full items-center justify-center pointer-events-none">
          <div className="relative aspect-video shrink-0 w-[218vw] sm:w-[175vw] md:w-[145vw] lg:w-[max(120vw,160dvh)] xl:w-[max(100vw,175dvh)] max-w-none select-none transition-all duration-300 translate-x-[2.8vw] sm:translate-x-[1.5vw] md:translate-x-[1.2vw]">
            {PORTFOLIO_LAYERS.map((layer) => (
              <div
                key={layer.id}
                style={{ clipPath: layer.clipPath }}
                className={`absolute inset-0 ${layer.animClass}`}
              >
                <Image
                  src={portofolioImg}
                  alt={layer.alt}
                  width={3840}
                  height={2160}
                  priority
                  unoptimized
                  className="block h-full w-full select-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Smooth Gradient Transition Separating Landing Page & About Me */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28 sm:h-40 md:h-52 bg-gradient-to-b from-transparent via-white/80 to-[#FFFFFF]"
        />
      </section>

      {/* Soft Gradient Bridge Between Landing Page and About Me */}
      <div
        aria-hidden="true"
        className="h-12 sm:h-20 md:h-28 w-full bg-gradient-to-b from-[#FFFFFF] via-[#F5F9FF] to-[#FFFFFF]"
      />

      {/* About Me Section */}
      <section
        id="about"
        aria-label="About Me"
        className="relative z-20 w-full bg-[#FFFFFF] overflow-visible"
      >
        {/* 16:9 Stage Matching Reference Composition */}
        <div
          id="about-stage"
          className="relative mx-auto w-full max-w-[1920px] aspect-video select-none"
        >
          {/* Layer 1: "About Me *" Large Blue Title */}
          <div className="pointer-events-none absolute inset-0 z-10 -translate-y-[2%] sm:translate-y-0">
            <Image
              src={aboutMeTitleImg}
              alt="About Me"
              fill
              unoptimized
              sizes="100vw"
              className="object-contain object-center select-none"
            />
          </div>

          {/* Layer 2: Left Halftone Star (Strictly Behind Photo, Fixed Position, Slow Clockwise Scroll Rotation, Shrinks to Center Person When Scrolled Away) */}
          <div
            style={{
              transform: `translate3d(${leftStarTransX}%, ${leftStarTransY}%, 0) scale(${starScale})`,
              opacity: starOpacity,
              transition: starTransition,
            }}
            className="pointer-events-none absolute left-[11.5%] top-[52%] z-[15] w-[39%] aspect-video will-change-transform"
          >
            <div
              style={{
                transform: `rotate(${-14 + scrollY * 0.05}deg)`,
              }}
              className="relative h-full w-full transition-transform duration-500 ease-out"
            >
              <div className="relative h-full w-full animate-about-star-back">
                <Image
                  src={bintangImg}
                  alt="Decorative Star Back"
                  fill
                  unoptimized
                  sizes="45vw"
                  className="object-contain object-center select-none"
                />
              </div>
            </div>
          </div>

          {/* Layer 3: Center Portrait Photo (Slightly Smaller & Moved Up Slightly so It Gently Overlaps About Me) */}
          <div className="pointer-events-none absolute inset-0 z-20 scale-[0.92] -translate-y-[3.5%] origin-center">
            <Image
              src={fotoMeImg}
              alt="Mochammad Al Mizan Ya Hafidl"
              fill
              unoptimized
              sizes="100vw"
              className="object-contain object-center select-none"
            />
          </div>

          {/* Smooth White Bottom Gradient Over Photo & Back Star */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[25] h-[24%] bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/95 to-transparent"
          />

          {/* Layer 4: Right Halftone Star (In Front of Photo & Extending Cleanly Over Bottom Boundary, Slow Counter-Clockwise Scroll Rotation, Shrinks to Center Person When Scrolled Away) */}
          <div
            style={{
              transform: `translate3d(${rightStarTransX}%, ${rightStarTransY}%, 0) scale(${starScale})`,
              opacity: starOpacity,
              transition: starTransition,
            }}
            className="pointer-events-none absolute left-[45.5%] top-[68.5%] z-40 w-[39%] aspect-video will-change-transform"
          >
            <div
              style={{
                transform: `rotate(${12 - scrollY * 0.05}deg)`,
              }}
              className="relative h-full w-full transition-transform duration-500 ease-out"
            >
              <div className="relative h-full w-full animate-about-star-front">
                <Image
                  src={bintangImg}
                  alt="Decorative Star Front"
                  fill
                  unoptimized
                  sizes="40vw"
                  className="object-contain object-center select-none"
                />
              </div>
            </div>
          </div>

          {/* Layer 5: Desktop & Tablet Text Overlays (Poppins Italic) */}
          {/* Top-Left Greeting & Name */}
          <div className="font-poppins italic hidden md:block absolute left-[4.2%] top-[40.5%] z-30 select-text">
            <p className="text-[clamp(13px,1.72vw,32px)] font-normal leading-[1.25] text-[#4E7CD9]">
              Hello I&apos;m
            </p>
            <h2 className="text-[clamp(14px,1.82vw,34px)] font-bold leading-[1.25] text-[#4784FF]">
              Mochammad Al Mizan Ya Hafidl
            </h2>
          </div>

          {/* Middle-Left Roles List */}
          <div className="font-poppins italic hidden md:flex flex-col absolute left-[4.2%] top-[55.8%] z-30 text-[clamp(11px,1.24vw,23px)] leading-[1.34] select-text">
            <span className="font-bold text-[#4784FF]">
              Mobile App Developer
            </span>
            <span className="font-normal text-[#527FD6]">
              Front-end Developer
            </span>
            <span className="font-normal text-[#527FD6]">UI/UX Designer</span>
            <span className="font-normal text-[#527FD6]">Photographer</span>
            <span className="font-normal text-[#527FD6]">Videographer</span>
          </div>

          {/* Bottom-Left Education */}
          <div
            id="about-ub-text"
            className="font-poppins italic hidden md:flex flex-col absolute left-[4.2%] top-[83%] z-30 text-[clamp(11px,1.22vw,22px)] font-normal leading-[1.34] text-[#527FD6] select-text"
          >
            <span>D3 Teknologi Informasi</span>
            <span>Universitas Brawijaya</span>
          </div>

          {/* Middle-Right Bio Description + Social Media Logos + Action Buttons (Right-Aligned) */}
          <div className="font-poppins italic hidden md:flex flex-col items-end absolute right-[3.2%] top-[39.5%] z-30 text-right text-[clamp(10.5px,1.18vw,21.5px)] font-normal leading-[1.42] text-[#527FD6] select-text">
            <div>
              <p>I&apos;m passionate about mobile app development with Flutter,</p>
              <p>with experience in graphic design, UI/UX, photography, and</p>
              <p>videography. I enjoy combining technology and creativity</p>
              <p>to create engaging and functional digital experiences.</p>
            </div>

            <SocialAndActionButtons />
          </div>
        </div>

        {/* Mobile Text Layout (< md) */}
        <div className="font-poppins italic md:hidden relative z-30 -mt-4 flex flex-col gap-3.5 px-6 pt-0 pb-10 bg-transparent">
          <div>
            <p className="text-base font-normal text-[#4E7CD9]">
              Hello I&apos;m
            </p>
            <h2 className="text-lg font-bold text-[#4784FF]">
              Mochammad Al Mizan Ya Hafidl
            </h2>
          </div>

          <p className="text-sm font-normal leading-relaxed text-[#527FD6]">
            I&apos;m passionate about mobile app development with Flutter, with
            experience in graphic design, UI/UX, photography, and videography. I
            enjoy combining technology and creativity to create engaging and
            functional digital experiences.
          </p>

          <SocialAndActionButtons isMobile />

          <div className="mt-0.5 flex flex-wrap justify-between gap-4">
            <div className="flex flex-col text-sm leading-snug">
              <span className="font-bold text-[#4784FF]">
                Mobile App Developer
              </span>
              <span className="font-normal text-[#527FD6]">
                Front-end Developer
              </span>
              <span className="font-normal text-[#527FD6]">UI/UX Designer</span>
              <span className="font-normal text-[#527FD6]">Photographer</span>
              <span className="font-normal text-[#527FD6]">Videographer</span>
            </div>

            <div className="flex flex-col justify-end text-right text-sm font-normal leading-snug text-[#527FD6]">
              <span>D3 Teknologi Informasi</span>
              <span>Universitas Brawijaya</span>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <TechnicalSkillsSection />

      {/* Plain White Section Below Technical Skills & Tools to Test Scrolling */}
      <section
        aria-label="Blank Scroll Test Section"
        className="min-h-screen w-full bg-[#FFFFFF]"
      />
    </main>
  );
}
