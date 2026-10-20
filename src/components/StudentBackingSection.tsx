import React from 'react';
import { STUDENT_EXPERIENCES } from '../data/academyData';

export const StudentBackingSection: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-12 py-12 lg:py-24 bg-surface-container-low w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: 3 Systematic Support Pillars */}
          <div className="lg:col-span-6 space-y-6 lg:space-y-8">
            <div>
              <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                SYSTEMATIC SUPPORT
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-tertiary tracking-tight mt-1 sm:mt-2">
                Continuous Academic Backing
              </h2>
            </div>

            <p className="text-xs sm:text-base text-on-surface-variant leading-relaxed font-normal">
              Preparing for entrance examinations is an endurance test. We build daily institutional safety nets so no student stagnates quietly over difficult concepts.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-surface-container-lowest sm:bg-transparent shadow-sm sm:shadow-none border border-surface-container-highest/60 sm:border-transparent">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-xl lg:text-[24px]">
                    question_answer
                  </span>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-tertiary mb-0.5 sm:mb-1">
                    Dedicated Doubt Counters
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    Walk in anytime between 3:00 PM and 8:00 PM for private, step-by-step resolution of question sets with assistant professors on campus.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-surface-container-lowest sm:bg-transparent shadow-sm sm:shadow-none border border-surface-container-highest/60 sm:border-transparent">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-xl lg:text-[24px]">
                    analytics
                  </span>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-tertiary mb-0.5 sm:mb-1">
                    Granular Exam Diagnostics
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    Faculty-led test evaluations identifying negative marks caused by hasty calculations versus conceptual omissions across Physics, Chemistry, and Math/Bio.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-surface-container-lowest sm:bg-transparent shadow-sm sm:shadow-none border border-surface-container-highest/60 sm:border-transparent">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-xl lg:text-[24px]">
                    event_repeat
                  </span>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-tertiary mb-0.5 sm:mb-1">
                    Bi-Weekly Mentor Check-ins
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    Scheduled one-on-one reviews addressing pacing strategy, revision schedules, and personal test-day composure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Student Feedback Cards */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="flex items-center justify-between pb-1">
              <span className="text-xs sm:text-sm font-bold text-primary">
                Student Voices
              </span>
              <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant">
                Illustrative Feedback · Sample Demo
              </span>
            </div>

            {STUDENT_EXPERIENCES.map((review) => (
              <div
                key={review.id}
                className="bg-surface-container-lowest p-5 sm:p-7 rounded-xl shadow-sm border border-surface-container-highest/60 space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${
                      review.initialsBgColor || 'bg-primary-fixed'
                    } ${
                      review.initialsTextColor || 'text-primary'
                    } flex items-center justify-center font-bold text-xs sm:text-sm shrink-0`}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm lg:text-base font-bold text-primary">
                      {review.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-on-surface-variant">
                      {review.program}
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-on-surface-variant italic leading-relaxed">
                  {review.quote}
                </p>
              </div>
            ))}

            <p className="text-[10px] sm:text-xs text-on-surface-variant/70 italic text-center pt-1">
              * Illustrative student feedback reflecting typical classroom outcomes and instructional pilot reviews.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
