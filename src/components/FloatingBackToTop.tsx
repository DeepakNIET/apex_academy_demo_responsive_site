import React from 'react';

interface FloatingBackToTopProps {
  scrollProgress: number;
  show: boolean;
}

export const FloatingBackToTop: React.FC<FloatingBackToTopProps> = ({
  scrollProgress,
  show,
}) => {
  const radius = 18;
  const circumference = 2 * Math.PI * radius; // ~113.097
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <div
      id="back-to-top-container"
      className={`fixed bottom-5 right-5 lg:bottom-8 lg:right-8 z-40 transition-all duration-300 ease-out ${
        show
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      <button
        id="back-to-top"
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Scroll to top"
        className="relative w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-primary hover:text-secondary-container transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-container cursor-pointer"
      >
        {/* Circular SVG Progress Ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
          viewBox="0 0 42 42"
          aria-hidden="true"
        >
          {/* Subtle neutral background track */}
          <circle
            cx="21"
            cy="21"
            r={radius}
            fill="none"
            stroke="#E2E8F0"
            strokeWidth="2.5"
          />
          {/* Synchronized dynamic orange progress ring */}
          <circle
            id="scroll-progress-ring"
            cx="21"
            cy="21"
            r={radius}
            fill="none"
            stroke="#fd761a"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-[stroke-dashoffset] duration-75 ease-out"
          />
        </svg>

        {/* Upward Arrow Icon */}
        <svg
          className="w-4 h-4 lg:w-5 lg:h-5 text-primary relative z-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M4.5 15.75l7.5-7.5 7.5 7.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};
