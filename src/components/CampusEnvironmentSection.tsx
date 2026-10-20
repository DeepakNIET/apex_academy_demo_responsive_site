import React from 'react';
import { ACADEMY_CONFIG, CAMPUS_PILLARS } from '../data/academyData';

export const CampusEnvironmentSection: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-12 py-12 lg:py-24 bg-surface-container-low w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left / Top on mobile: Photo Spread */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="rounded-xl overflow-hidden bg-surface-container-highest shadow-md border border-surface-container-high/40">
              <img
                src={ACADEMY_CONFIG.assets.libraryPhoto}
                alt="Central Research and Study Library at Apex Academy"
                className="w-full h-48 sm:h-72 lg:h-[460px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-2.5 sm:mt-3 flex items-center justify-between text-on-surface-variant text-xs sm:text-sm">
              <span>Central Research &amp; Study Annex, Sector 006 Campus</span>
              <span className="text-secondary-container font-semibold">
                Acoustically Isolated
              </span>
            </div>
          </div>

          {/* Right / Top on mobile: Campus Pillars */}
          <div className="lg:col-span-6 flex flex-col space-y-4 sm:space-y-6 order-1 lg:order-2">
            <div>
              <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                CAMPUS ENVIRONMENT
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-tertiary tracking-tight mt-1 sm:mt-2">
                High Expectations with Empathetic Guidance
              </h2>
            </div>

            <p className="text-xs sm:text-base text-on-surface-variant leading-relaxed font-normal">
              We believe true examination mastery thrives in tranquil, distraction-free surroundings where scholarly discipline is supported by emotional well-being and clear communication.
            </p>

            <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
              <div className="p-3.5 sm:p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container-highest/60 flex items-start gap-3.5">
                <span className="px-2.5 py-1 rounded-md bg-primary-fixed text-primary font-bold text-xs sm:text-sm shrink-0 mt-0.5">
                  40:1
                </span>
                <div>
                  <h3 className="text-xs sm:text-sm lg:text-base font-bold text-primary">
                    Strict Batch Size Ceiling
                  </h3>
                  <p className="text-[12px] sm:text-sm text-on-surface-variant leading-relaxed mt-0.5">
                    Strict 40-student batch ceiling to ensure interactive problem-solving and immediate teacher awareness.
                  </p>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container-highest/60 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-md bg-secondary-fixed flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-lg sm:text-xl text-secondary">
                    local_library
                  </span>
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm lg:text-base font-bold text-primary">
                    Quiet Self-Study Library Pods
                  </h3>
                  <p className="text-[12px] sm:text-sm text-on-surface-variant leading-relaxed mt-0.5">
                    Open daily until 9:30 PM with zero-distraction individual cubicles and resident faculty supervisor presence.
                  </p>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container-highest/60 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-md bg-primary-fixed flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-lg sm:text-xl text-primary">
                    family_restroom
                  </span>
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm lg:text-base font-bold text-primary">
                    Transparent Parent Engagement
                  </h3>
                  <p className="text-[12px] sm:text-sm text-on-surface-variant leading-relaxed mt-0.5">
                    Fortnightly written progress summaries, attendance logs, and scheduled in-person parent consultation windows.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[11px] sm:text-xs text-on-surface-variant/80 italic pt-1">
              Note: Illustrative demo curriculum &amp; campus structure; Apex Academy maintains transparent metrics without sensationalist rankings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
