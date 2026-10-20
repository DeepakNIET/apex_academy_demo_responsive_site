import React from 'react';
import { FACULTY_DATA } from '../data/academyData';

export const FacultySection: React.FC = () => {
  return (
    <section
      id="faculty"
      className="px-4 sm:px-6 lg:px-12 py-12 lg:py-24 bg-surface max-w-7xl mx-auto w-full"
    >
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 lg:mb-16 space-y-1 sm:space-y-2">
        <span className="text-xs font-bold text-secondary uppercase tracking-wider">
          ACADEMIC MENTORS
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-tertiary tracking-tight">
          Guided by Respected Educators
        </h2>
        <p className="text-xs sm:text-base text-on-surface-variant leading-relaxed">
          Our faculty are full-time master teachers committed to student outcomes, not transient visiting speakers.
        </p>
        <p className="text-[11px] sm:text-xs text-on-surface-variant/70 italic pt-1">
          Illustrative Faculty Profiles · Sample Showcase
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {FACULTY_DATA.map((faculty) => (
          <div
            key={faculty.id}
            className="p-4 sm:p-5 lg:p-0 rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container-highest/60 flex flex-col justify-between overflow-hidden transition-all hover:shadow-md"
          >
            <div>
              {/* Photo */}
              <div className="h-56 sm:h-64 bg-surface-container-highest relative overflow-hidden rounded-t-xl lg:rounded-none">
                <img
                  src={faculty.image}
                  alt={`Portrait of ${faculty.name}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <span className="absolute bottom-3 left-3 bg-primary-container/90 backdrop-blur-sm text-white px-2.5 py-1 rounded text-xs font-semibold shadow-sm">
                  {faculty.experienceBadge}
                </span>
              </div>

              {/* Info */}
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-primary mb-1">
                  {faculty.name}
                </h3>
                <p className="text-xs sm:text-sm text-secondary-container font-semibold mb-2 sm:mb-3">
                  {faculty.title}
                </p>

                {/* Specialties */}
                <div className="flex items-center gap-1.5 mb-3 flex-wrap">
                  {faculty.specialtyTags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface text-[10px] sm:text-[11px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="p-3 rounded-lg bg-surface-container-low text-on-surface-variant text-xs sm:text-sm italic leading-relaxed">
                  {faculty.quote}
                </div>
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 border-t border-surface-container-high/40 flex items-center justify-between text-on-surface-variant text-[11px] sm:text-xs">
              <span>{faculty.footerSpecialty}</span>
              <span className="text-primary font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-secondary-container">
                  verified
                </span>
                {faculty.footerRole}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
