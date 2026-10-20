import React from 'react';
import { COURSES_DATA } from '../data/academyData';

interface CoursesSectionProps {
  onSelectCourse: (courseId: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onSelectCourse }) => {
  const handleCourseClick = (e: React.MouseEvent<HTMLAnchorElement>, courseId: string) => {
    e.preventDefault();
    onSelectCourse(courseId);
    const target = document.getElementById('enquire');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="courses"
      className="px-4 sm:px-6 lg:px-12 py-12 lg:py-24 bg-surface-container-low w-full transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-12 gap-4 lg:gap-6">
          <div className="space-y-1 sm:space-y-2">
            <span className="text-xs font-bold text-secondary uppercase tracking-wider">
              TARGETED CURRICULA
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-tertiary tracking-tight">
              Find the Right Path for Your Goals
            </h2>
          </div>
          <p className="text-xs sm:text-sm lg:text-base text-on-surface-variant max-w-md leading-relaxed">
            Structured modules tailored for depth, exam speed, and conceptual resilience across all key entrance frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {COURSES_DATA.map((course) => (
            <div
              key={course.id}
              className="bg-surface-container-lowest rounded-xl p-5 sm:p-6 lg:p-8 shadow-sm border border-surface-container-highest/60 flex flex-col justify-between transition-all hover:shadow-md relative"
            >
              {course.isHighYield && (
                <div className="absolute -top-3 right-6 bg-secondary-container text-white px-3 py-0.5 rounded-full text-xs font-bold shadow-sm">
                  High Yield Cohort
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-2 mb-3 lg:mb-4">
                  <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-primary text-white text-[11px] sm:text-xs font-semibold">
                    {course.badge}
                  </span>
                  <span className="text-xs text-secondary-container font-bold flex items-center gap-1">
                    {course.tagIcon && (
                      <span className="material-symbols-outlined text-sm">{course.tagIcon}</span>
                    )}
                    <span>{course.tag}</span>
                  </span>
                </div>

                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-primary mb-2 lg:mb-3">
                  {course.title}
                </h3>

                <p className="text-xs sm:text-sm text-on-surface-variant mb-4 lg:mb-6 leading-relaxed">
                  {course.description}
                </p>

                <div className="bg-surface-container-low/70 p-3.5 rounded-lg mb-5 lg:mb-8">
                  <ul className="space-y-2.5">
                    {course.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-on-surface leading-normal"
                      >
                        <span className="material-symbols-outlined text-secondary-container text-base sm:text-[18px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button: Styled both for Desktop arrow link and Mobile solid button */}
              <div className="pt-2">
                <a
                  href="#enquire"
                  onClick={(e) => handleCourseClick(e, course.id)}
                  className="w-full h-10 rounded-lg bg-primary hover:bg-primary-container text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-sm active:scale-95 cursor-pointer"
                >
                  <span>Enquire for Course</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
