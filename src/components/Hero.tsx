import React from 'react';
import { ACADEMY_CONFIG } from '../data/academyData';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative px-4 sm:px-6 lg:px-12 pt-6 sm:pt-10 lg:pt-16 pb-10 lg:pb-20 max-w-7xl mx-auto w-full"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Narrative & Action Column */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-6">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-semibold uppercase tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
            <span>ADMISSIONS OPEN · SESSION {ACADEMY_CONFIG.admissionsSession}</span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-[56px] text-tertiary tracking-tight font-extrabold leading-[1.15] lg:leading-[1.1]">
            Your Ambition.{' '}
            <span className="text-secondary-container">Our Guidance.</span>
            <br />
            Your Success.
          </h1>

          {/* Pedagogical Description */}
          <p className="text-sm sm:text-base lg:text-lg text-on-surface-variant max-w-xl leading-relaxed font-normal">
            Comprehensive, concept-first coaching designed to empower aspiring engineers and doctors. Structured mentorship, rigorous problem-solving, and personalized daily doubt resolution for JEE, NEET, and Olympiads.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
            <a
              href="#courses"
              className="inline-flex items-center justify-center gap-2 bg-secondary-container hover:bg-secondary text-white font-semibold text-sm px-7 py-3.5 rounded-lg shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              <span>Explore Courses</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>

            {/* Desktop: Talk to an Academic Advisor */}
            <a
              href="#enquire"
              className="hidden sm:inline-flex items-center justify-center gap-2 bg-surface-container hover:bg-surface-container-high text-primary font-semibold text-sm px-6 py-3.5 rounded-lg transition-colors active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">support_agent</span>
              <span>Talk to an Academic Advisor</span>
            </a>

            {/* Mobile: Call Admissions directly */}
            <a
              href={`tel:${ACADEMY_CONFIG.phoneCallNumber}`}
              className="sm:hidden inline-flex items-center justify-center gap-2 bg-surface-container-high text-primary font-semibold text-sm px-6 py-3 rounded-lg active:scale-95 transition-colors"
            >
              <span className="material-symbols-outlined text-base">call</span>
              <span>Call Admissions</span>
            </a>
          </div>

          {/* Mobile-only Classroom Photo in place to match mobile screenshot rhythm */}
          <div className="w-full lg:hidden rounded-xl overflow-hidden shadow-sm bg-surface-container mt-2 mb-1 relative">
            <img
              src={ACADEMY_CONFIG.assets.classroomPhoto}
              alt="Apex Academy live modern classroom instruction"
              className="w-full h-52 sm:h-64 object-cover"
              loading="eager"
            />
            <div className="absolute bottom-2.5 right-2.5 bg-primary/90 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-[10px] sm:text-xs font-semibold flex items-center gap-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Live Classrooms · Kota &amp; Delhi Methodology</span>
            </div>
          </div>

          {/* 3 Benefit Anchors */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 sm:pt-6 w-full">
            <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-lg bg-surface-container-lowest sm:bg-surface-container-low shadow-sm sm:shadow-none border border-surface-container-highest/60 sm:border-transparent flex items-center sm:items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary-fixed flex items-center justify-center shrink-0 text-primary">
                <span className="material-symbols-outlined text-lg sm:text-[20px] text-primary">verified</span>
              </div>
              <div className="flex flex-col">
                <p className="text-xs sm:text-sm font-bold text-primary">Experienced Faculty</p>
                <p className="text-[11px] sm:text-xs text-on-surface-variant">Top IIT &amp; AIIMS mentor pool with 12+ yrs exp</p>
              </div>
            </div>

            <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-lg bg-surface-container-lowest sm:bg-surface-container-low shadow-sm sm:shadow-none border border-surface-container-highest/60 sm:border-transparent flex items-center sm:items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary-fixed flex items-center justify-center shrink-0 text-primary">
                <span className="material-symbols-outlined text-lg sm:text-[20px] text-primary">calendar_clock</span>
              </div>
              <div className="flex flex-col">
                <p className="text-xs sm:text-sm font-bold text-primary">Structured Phase Plans</p>
                <p className="text-[11px] sm:text-xs text-on-surface-variant">Balanced pacing avoiding syllabus fatigue</p>
              </div>
            </div>

            <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-lg bg-surface-container-lowest sm:bg-surface-container-low shadow-sm sm:shadow-none border border-surface-container-highest/60 sm:border-transparent flex items-center sm:items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary-fixed flex items-center justify-center shrink-0 text-primary">
                <span className="material-symbols-outlined text-lg sm:text-[20px] text-primary">psychology_alt</span>
              </div>
              <div className="flex flex-col">
                <p className="text-xs sm:text-sm font-bold text-primary">Dedicated Doubt Desks</p>
                <p className="text-[11px] sm:text-xs text-on-surface-variant">Daily 1-on-1 post-class mentorship support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop-only Classroom Visual Spread (lg:block) */}
        <div className="hidden lg:block lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden bg-surface-container-highest shadow-xl border border-surface-container-high/40">
            <img
              src={ACADEMY_CONFIG.assets.classroomPhoto}
              alt="Apex Academy senior faculty mentoring students during physics derivation"
              className="w-full h-[480px] object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-tertiary/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
              <div className="inline-flex items-center gap-2 bg-primary-container/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-surface shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Live Classrooms · Kota &amp; Delhi Methodology</span>
              </div>
              <span className="text-xs text-surface-variant/80 font-medium bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
                Phase 01 Intake
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
