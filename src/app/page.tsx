"use client";

import { useState } from "react";
import Image from "next/image";

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

export default function Home() {
  const [activeMenu, setActiveMenu] = useState<NavItem>("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleSelectMenu = (item: NavItem) => {
    setActiveMenu(item);
    setIsMobileMenuOpen(false);
  };

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

      {/* Hero Section: Multi-Layer Composition (White BG + Left Asset + Right Asset + Simple Animated Portfolio Typography) */}
      <section className="relative flex h-dvh min-h-screen w-full items-center justify-center bg-[#FFFFFF] overflow-hidden">
        {/* Layer 1A: Left Wave Asset (Pinned to Left Edge, Simple Breathing Scale) */}
        <div
          style={{ left: "min(0px, calc(30vw - 55dvh))" }}
          className="pointer-events-none absolute top-0 z-0 h-dvh w-[177.78dvh] select-none animate-wave-left"
        >
          <Image
            src="/assets/landingpages/assetskiri.png"
            alt="Portfolio Left Wave Decoration"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-contain object-left mix-blend-multiply select-none"
          />
        </div>

        {/* Layer 1B: Right Wave Asset (Pinned to Right Edge, Simple Breathing Scale) */}
        <div
          style={{ right: "min(0px, calc(30vw - 55dvh))" }}
          className="pointer-events-none absolute top-0 z-0 h-dvh w-[177.78dvh] select-none animate-wave-right"
        >
          <Image
            src="/assets/landingpages/assetskanan.png"
            alt="Portfolio Right Wave Decoration"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-contain object-right mix-blend-multiply select-none"
          />
        </div>

        {/* Layer 2: Center Portfolio Typography (Proportional on Mobile, Zoom, and Desktop) */}
        <div className="relative z-10 flex h-full w-full items-center justify-center pointer-events-none">
          <div className="relative aspect-video shrink-0 w-[195vw] sm:w-[170vw] md:w-[145vw] lg:w-[max(120vw,160dvh)] xl:w-[max(100vw,175dvh)] max-w-none select-none transition-all duration-300">
            {PORTFOLIO_LAYERS.map((layer) => (
              <div
                key={layer.id}
                style={{ clipPath: layer.clipPath }}
                className={`absolute inset-0 ${layer.animClass}`}
              >
                <Image
                  src="/assets/landingpages/portofolio.png"
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
      </section>

      {/* Blank White Section for Scroll Testing */}
      <section
        aria-label="Blank Scroll Test Section"
        className="min-h-screen w-full bg-[#FFFFFF]"
      />
    </main>
  );
}
