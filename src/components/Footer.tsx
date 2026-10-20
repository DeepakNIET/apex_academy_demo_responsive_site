import React from 'react';
import { ACADEMY_CONFIG } from '../data/academyData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-primary-container text-white mt-12 sm:mt-16 lg:mt-24 shadow-[0_-1px_12px_rgba(0,0,0,0.06)] border-t border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-12 lg:pt-16 pb-12">
        {/* DESKTOP 5-COLUMN GRID (Hidden on small screens, shown md+) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand & Mission (2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center p-1 shadow-sm shrink-0">
                <img
                  src={ACADEMY_CONFIG.assets.logo}
                  alt="Apex Academy Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight leading-tight">
                  {ACADEMY_CONFIG.name}
                </span>
                <span className="text-xs text-secondary-fixed tracking-wider uppercase font-semibold">
                  {ACADEMY_CONFIG.fullSubtitle}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-on-primary-container max-w-sm leading-relaxed">
              Premier coaching institution dedicated to JEE Advanced, NEET-UG, and National Olympiads. Architecting scholarly rigor and disciplined analytical thinking since 2008.
            </p>

            <div className="pt-2 text-on-primary-container space-y-2 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-secondary-container text-lg shrink-0 mt-0.5">
                  location_on
                </span>
                <span>{ACADEMY_CONFIG.addressAnnex}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-container text-lg shrink-0">
                  call
                </span>
                <a
                  href={`tel:${ACADEMY_CONFIG.phoneCallNumber}`}
                  className="hover:text-white transition-colors"
                >
                  {ACADEMY_CONFIG.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-container text-lg shrink-0">
                  mail
                </span>
                <a
                  href={`mailto:${ACADEMY_CONFIG.email}`}
                  className="hover:text-white transition-colors"
                >
                  {ACADEMY_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-container text-lg shrink-0">
                  chat
                </span>
                <a
                  href={`https://wa.me/${ACADEMY_CONFIG.whatsappNumber}?text=${ACADEMY_CONFIG.whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {ACADEMY_CONFIG.whatsappDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Course Pathways */}
          <div className="space-y-3.5">
            <h4 className="text-sm font-bold text-white uppercase tracking-[0.12em]">
              Course Pathways
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-on-primary-container">
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  JEE Main &amp; Advanced
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  NEET Preparation
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Foundation Courses
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Admissions */}
          <div className="space-y-3.5">
            <h4 className="text-sm font-bold text-white uppercase tracking-[0.12em]">
              Admissions
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-on-primary-container">
              <li>
                <a href="#enquire" className="hover:text-white transition-colors">
                  Scholarship Assessment Test
                </a>
              </li>
              <li>
                <a href="#enquire" className="hover:text-white transition-colors">
                  Fee Structure &amp; Aid
                </a>
              </li>
              <li>
                <a href="#enquire" className="hover:text-white transition-colors">
                  Counselling Registration
                </a>
              </li>
              <li>
                <a href="#enquire" className="hover:text-white transition-colors">
                  Campus Desk Locator
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Institutional Trust */}
          <div className="space-y-3.5">
            <h4 className="text-sm font-bold text-white uppercase tracking-[0.12em]">
              Institutional Trust
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-on-primary-container">
              <li>
                <a href="#why-apex" className="hover:text-white transition-colors">
                  Academic Advisory Board
                </a>
              </li>
              <li>
                <a href="#faculty" className="hover:text-white transition-colors">
                  Senior Research Mentors
                </a>
              </li>
              <li>
                <a href="#why-apex" className="hover:text-white transition-colors">
                  Results Auditing &amp; Integrity
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">
                  Student Support &amp; Enquiries
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* MOBILE COMPACT MARKETING FOOTER (Shown on <md) */}
        <div className="md:hidden flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-white flex items-center justify-center p-1 shrink-0">
                <img
                  src={ACADEMY_CONFIG.assets.logo}
                  alt="Apex Logo Icon"
                  className="h-full w-auto object-contain"
                />
              </div>
              <span className="text-base font-bold tracking-tight text-white">
                {ACADEMY_CONFIG.name}
              </span>
            </div>
            <p className="text-xs text-on-primary-container leading-relaxed">
              Premier institute for IIT-JEE, NEET (UG), and junior Olympiad foundation. Focused on conceptual clarity, rigorous assessment, and individual mentorship.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-secondary-fixed uppercase tracking-wider text-[11px]">
                Programs
              </span>
              <a href="#courses" className="text-on-primary-container hover:text-white transition-colors">
                JEE Main &amp; Advanced
              </a>
              <a href="#courses" className="text-on-primary-container hover:text-white transition-colors">
                NEET Preparation
              </a>
              <a href="#courses" className="text-on-primary-container hover:text-white transition-colors">
                Foundation Courses
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-bold text-secondary-fixed uppercase tracking-wider text-[11px]">
                Academy
              </span>
              <a href="#why-apex" className="text-on-primary-container hover:text-white transition-colors">
                Why Choose Apex
              </a>
              <a href="#faculty" className="text-on-primary-container hover:text-white transition-colors">
                Faculty Team
              </a>
              <a href="#faqs" className="text-on-primary-container hover:text-white transition-colors">
                Admissions FAQ
              </a>
              <a href="#enquire" className="text-secondary-fixed hover:underline font-semibold">
                Admissions Desk
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 text-xs text-on-primary-container flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-secondary-container">call</span>
              <a href={`tel:${ACADEMY_CONFIG.phoneCallNumber}`} className="hover:text-white font-medium">
                {ACADEMY_CONFIG.helplineDisplay}
              </a>
            </div>
            <div className="flex items-center gap-2 min-w-0">
              <span className="material-symbols-outlined text-sm text-secondary-container shrink-0">mail</span>
              <a href={`mailto:${ACADEMY_CONFIG.email}`} className="hover:text-white font-medium truncate break-all">
                {ACADEMY_CONFIG.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-secondary-container">chat</span>
              <a
                href={`https://wa.me/${ACADEMY_CONFIG.whatsappNumber}?text=${ACADEMY_CONFIG.whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white font-medium"
              >
                WhatsApp: {ACADEMY_CONFIG.whatsappDisplay}
              </a>
            </div>
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-sm text-secondary-container shrink-0 mt-0.5">location_on</span>
              <span>{ACADEMY_CONFIG.addressMain}</span>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & DISCLAIMERS */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-on-primary-container text-xs">
          <div className="flex flex-col space-y-1 text-center md:text-left">
            <p>© 2026 Apex Academy Educational Trust. All rights reserved.</p>
            <p className="text-[11px] text-on-primary-container/70 italic">
              Fictional institute created for portfolio demonstration.
            </p>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-on-primary-container">
            <a href="#home" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#home" className="hover:text-white transition-colors">
              Terms of Admission
            </a>
            <a href="#home" className="hover:text-white transition-colors">
              Accreditation Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
