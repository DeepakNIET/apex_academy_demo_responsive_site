import React from 'react';
import { PHILOSOPHY_PILLARS } from '../data/academyData';

export const WhyApexSection: React.FC = () => {
  return (
    <section
      id="why-apex"
      className="px-4 sm:px-6 lg:px-12 py-12 lg:py-24 max-w-7xl mx-auto w-full"
    >
      <div className="max-w-2xl mb-8 lg:mb-16">
        <span className="text-xs font-bold text-secondary uppercase tracking-wider">
          ACADEMIC PHILOSOPHY
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-tertiary tracking-tight mt-1 mb-2 sm:mb-4">
          A Better Way to Prepare
        </h2>
        <p className="text-xs sm:text-base lg:text-lg text-on-surface-variant leading-relaxed">
          We replace arbitrary cramming with pedagogical rigor, transparent feedback, and personal empathy delivered directly through institutional teaching services.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {PHILOSOPHY_PILLARS.map((pillar) => (
          <div
            key={pillar.id}
            className="p-4 sm:p-5 lg:p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container-highest/60 flex flex-col justify-start transition-all hover:shadow-md"
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-primary-container mb-3 lg:mb-5">
              <span className="material-symbols-outlined text-xl lg:text-[24px]">
                {pillar.icon}
              </span>
            </div>
            <h3 className="text-sm sm:text-base lg:text-lg font-bold text-primary mb-1.5 lg:mb-2">
              {pillar.num}. {pillar.title}
            </h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
