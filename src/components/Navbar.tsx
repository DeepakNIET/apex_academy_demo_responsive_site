import React, { useState, useEffect } from 'react';
import { ACADEMY_CONFIG } from '../data/academyData';

interface NavbarProps {
  scrollProgress: number;
}

export const Navbar: React.FC<NavbarProps> = ({ scrollProgress }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f9f9f6]/95 backdrop-blur-md border-b border-[#e2e3e0]/60 transition-all pt-safe shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        {/* DESKTOP HEADER (lg:flex) */}
        <div className="hidden lg:flex h-20 max-w-7xl mx-auto px-6 lg:px-12 items-center justify-between gap-6">
          <div className="flex items-center gap-3 shrink-0">
            <a href="#home" className="flex items-center gap-3 group text-inherit">
              <img
                src={ACADEMY_CONFIG.assets.logo}
                alt="Apex Academy Logo"
                className="w-10 h-10 object-contain shrink-0 group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl text-primary leading-tight tracking-tight">
                  {ACADEMY_CONFIG.name}
                </span>
                <span className="text-[11px] text-secondary-container tracking-wider uppercase font-bold">
                  {ACADEMY_CONFIG.fullSubtitle}
                </span>
              </div>
            </a>
          </div>

          <nav className="flex items-center gap-8" aria-label="Main Navigation">
            <a
              href="#courses"
              className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors py-1"
            >
              Courses
            </a>
            <a
              href="#why-apex"
              className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors py-1"
            >
              Why Apex
            </a>
            <a
              href="#faculty"
              className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors py-1"
            >
              Faculty
            </a>
            <a
              href="#enquire"
              className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors py-1"
            >
              Admissions
            </a>
            <a
              href="#faqs"
              className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors py-1"
            >
              FAQ
            </a>
            <a
              href={`tel:${ACADEMY_CONFIG.phoneCallNumber}`}
              className="text-xs font-semibold text-primary flex items-center gap-1.5 py-1 px-2.5 rounded-md bg-surface-container-high/60 hover:bg-surface-container-high transition-colors"
              title="Call Admissions Desk"
            >
              <span className="material-symbols-outlined text-sm text-secondary-container">call</span>
              <span>{ACADEMY_CONFIG.phoneDisplay}</span>
            </a>
          </nav>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href="#enquire"
              className="inline-flex items-center justify-center bg-secondary-container hover:bg-secondary text-white font-semibold text-sm px-6 py-2.5 rounded-lg shadow-sm hover:shadow transition-all active:scale-98"
            >
              Enquire Now
            </a>
          </div>
        </div>

        {/* TABLET HEADER (hidden md:flex lg:hidden) - Enhanced gap & professional alignment strictly for tablets */}
        <div className="hidden md:flex lg:hidden h-16 px-6 md:px-8 w-full items-center justify-between">
          {/* Left Brand Component */}
          <a href="#home" className="flex items-center gap-3 shrink-0" onClick={closeMenu}>
            <img
              src={ACADEMY_CONFIG.assets.logo}
              alt="Apex Academy Logo"
              className="w-9 h-9 object-contain shrink-0"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-primary tracking-tight leading-none">
                {ACADEMY_CONFIG.name}
              </span>
              <span className="text-[11px] text-secondary-container font-semibold uppercase tracking-wider mt-1">
                {ACADEMY_CONFIG.shortSubtitle}
              </span>
            </div>
          </a>

          {/* Right Action Component with spacious tablet-friendly gap */}
          <div className="flex items-center gap-3.5 shrink-0">
            <a
              href={`tel:${ACADEMY_CONFIG.phoneCallNumber}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-primary text-xs font-semibold transition-colors border border-surface-container-highest/60"
              title="Call Admissions Desk"
            >
              <span className="material-symbols-outlined text-sm text-secondary-container">call</span>
              <span>{ACADEMY_CONFIG.phoneDisplay}</span>
            </a>
            <a
              href="#enquire"
              className="h-9 px-4 rounded-lg bg-secondary-container hover:bg-secondary text-white text-xs font-semibold flex items-center justify-center transition-colors shadow-sm active:scale-95"
            >
              Enquire Now
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              aria-expanded={mobileMenuOpen}
              className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary hover:bg-surface-container-high transition-colors active:scale-95 cursor-pointer"
            >
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE HEADER (flex md:hidden) */}
        <div className="flex md:hidden h-14 px-4 items-center justify-between max-w-lg mx-auto">
          {/* Logo & Brand Name */}
          <a href="#home" className="flex items-center gap-2.5" onClick={closeMenu}>
            <img
              src={ACADEMY_CONFIG.assets.logo}
              alt="Apex Academy Logo"
              className="h-8 w-8 object-contain shrink-0"
            />
            <div className="flex flex-col">
              <span className="text-base text-primary font-bold tracking-tight leading-none">
                {ACADEMY_CONFIG.name}
              </span>
              <span className="text-[11px] text-on-surface-variant font-medium leading-none mt-1">
                {ACADEMY_CONFIG.shortSubtitle}
              </span>
            </div>
          </a>

          {/* Right CTAs: Orange Enquire Button + Clean Hamburger Button */}
          <div className="flex items-center gap-2">
            <a
              href="#enquire"
              className="h-8 px-3 rounded-md bg-secondary-container hover:bg-secondary text-white text-xs font-semibold flex items-center justify-center transition-colors shadow-sm active:scale-95"
            >
              Enquire
            </a>
            <button
              id="menu-btn"
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              aria-expanded={mobileMenuOpen}
              className="w-9 h-9 rounded-md bg-surface-container flex items-center justify-center text-primary hover:bg-surface-container-high transition-colors active:scale-95 cursor-pointer"
            >
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* NAVBAR SCROLL-PROGRESS INDICATOR (Synchronized) */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#E2E8F0]/50 pointer-events-none overflow-hidden"
        >
          <div
            id="navbar-progress-bar"
            className="h-full bg-secondary-container transition-all duration-75 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* MOBILE NAVIGATION DRAWER & BACKDROP OVERLAY */}
      <div
        id="drawer-overlay"
        onClick={closeMenu}
        aria-hidden="true"
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      <aside
        id="nav-drawer"
        aria-label="Mobile Navigation Drawer"
        className={`fixed top-0 right-0 z-50 w-80 max-w-[88vw] h-full bg-surface-container-lowest shadow-2xl transition-transform duration-300 ease-in-out flex flex-col pt-safe lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 border-b border-surface-container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={ACADEMY_CONFIG.assets.logo}
              alt="Logo"
              className="w-6 h-6 object-contain"
            />
            <span className="font-bold text-primary text-sm tracking-tight">Navigation</span>
          </div>
          <button
            id="close-drawer"
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 flex flex-col gap-1 text-sm font-semibold text-primary">
          <a
            href="#home"
            onClick={closeMenu}
            className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors"
          >
            <span className="material-symbols-outlined text-secondary-container text-xl">home</span> Home
          </a>
          <a
            href="#courses"
            onClick={closeMenu}
            className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors"
          >
            <span className="material-symbols-outlined text-secondary-container text-xl">auto_stories</span> Courses
          </a>
          <a
            href="#why-apex"
            onClick={closeMenu}
            className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors"
          >
            <span className="material-symbols-outlined text-secondary-container text-xl">verified</span> Why Apex
          </a>
          <a
            href="#faculty"
            onClick={closeMenu}
            className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors"
          >
            <span className="material-symbols-outlined text-secondary-container text-xl">school</span> Faculty
          </a>
          <a
            href="#faqs"
            onClick={closeMenu}
            className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors"
          >
            <span className="material-symbols-outlined text-secondary-container text-xl">quiz</span> FAQ
          </a>
          <a
            href="#enquire"
            onClick={closeMenu}
            className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors text-secondary"
          >
            <span className="material-symbols-outlined text-secondary-container text-xl">edit_note</span> Admissions &amp; Enquire
          </a>

          <div className="mt-4 pt-4 border-t border-surface-container flex flex-col gap-2">
            <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider px-2.5">
              Admissions Helpline
            </span>
            <a
              href={`tel:${ACADEMY_CONFIG.phoneCallNumber}`}
              className="flex items-center gap-3 p-2.5 rounded-lg bg-surface-container-low text-primary text-xs font-medium hover:bg-surface-container transition-colors min-w-0"
            >
              <span className="material-symbols-outlined text-secondary-container text-base shrink-0">call</span>
              <span className="truncate">{ACADEMY_CONFIG.helplineDisplay}</span>
            </a>
            <a
              href={`mailto:${ACADEMY_CONFIG.email}`}
              className="flex items-center gap-3 p-2.5 rounded-lg bg-surface-container-low text-primary hover:bg-surface-container transition-colors min-w-0"
              title={ACADEMY_CONFIG.email}
            >
              <span className="material-symbols-outlined text-secondary-container text-base shrink-0">mail</span>
              <span className="text-[11.5px] sm:text-xs font-medium truncate leading-tight">
                {ACADEMY_CONFIG.email}
              </span>
            </a>
            <a
              href={`https://wa.me/${ACADEMY_CONFIG.whatsappNumber}?text=${ACADEMY_CONFIG.whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-medium hover:bg-emerald-100 transition-colors min-w-0"
            >
              <span className="material-symbols-outlined text-emerald-600 text-base shrink-0">chat</span>
              <span className="truncate">Chat on WhatsApp ({ACADEMY_CONFIG.whatsappDisplay})</span>
            </a>
          </div>
        </nav>

        <div className="p-4 border-t border-surface-container bg-surface-container-low">
          <a
            href="#enquire"
            onClick={closeMenu}
            className="w-full h-10 rounded-lg bg-secondary-container hover:bg-secondary text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-colors"
          >
            <span>Request Call Back</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </a>
        </div>
      </aside>
    </>
  );
};
