import React, { useState } from 'react';
import { FAQS_DATA } from '../data/academyData';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faqs"
      className="px-4 sm:px-6 lg:px-12 py-12 lg:py-24 max-w-4xl mx-auto w-full"
    >
      <div className="text-center mb-8 sm:mb-12 space-y-1 sm:space-y-2">
        <span className="text-xs font-bold text-secondary uppercase tracking-wider">
          ADMISSIONS &amp; ACADEMICS FAQ
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-tertiary tracking-tight">
          Common Queries from Aspirants &amp; Parents
        </h2>
        <p className="text-xs sm:text-base text-on-surface-variant max-w-xl mx-auto leading-relaxed">
          Straightforward answers about batches, admission procedures, and daily academic policies.
        </p>
      </div>

      <div className="space-y-3 sm:space-y-4" id="faq-accordion">
        {FAQS_DATA.map((faq) => {
          const isOpen = openFaqId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container-highest/60 overflow-hidden transition-all duration-200"
            >
              <button
                type="button"
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
                className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 hover:bg-surface-container-low/40 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <h3 className="text-xs sm:text-sm lg:text-base font-bold text-primary pr-2 leading-snug">
                  {faq.question}
                </h3>
                <span
                  className={`material-symbols-outlined text-secondary-container text-lg sm:text-xl shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  expand_more
                </span>
              </button>

              {isOpen && (
                <div
                  id={`faq-answer-${faq.id}`}
                  className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 text-on-surface-variant text-xs sm:text-sm leading-relaxed border-t border-surface-container/60 bg-surface-container-low/20"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
