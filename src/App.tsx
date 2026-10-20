import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoursesSection } from './components/CoursesSection';
import { WhyApexSection } from './components/WhyApexSection';
import { CampusEnvironmentSection } from './components/CampusEnvironmentSection';
import { FacultySection } from './components/FacultySection';
import { StudentBackingSection } from './components/StudentBackingSection';
import { FaqSection } from './components/FaqSection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { Footer } from './components/Footer';
import { FloatingBackToTop } from './components/FloatingBackToTop';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? Math.min(Math.max((scrollY / scrollHeight) * 100, 0), 100) : 0;

      setScrollProgress(progress);
      setShowBackToTop(scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleSelectCourse = (courseId: string) => {
    setSelectedCourse(courseId);
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col relative selection:bg-secondary-container selection:text-white">
      {/* Synchronized Header with Scroll Progress Bar */}
      <Navbar scrollProgress={scrollProgress} />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-14 md:pt-16 lg:pt-20">
        <Hero />
        <CoursesSection onSelectCourse={handleSelectCourse} />
        <WhyApexSection />
        <CampusEnvironmentSection />
        <FacultySection />
        <StudentBackingSection />
        <FaqSection />
        <AdmissionsSection
          selectedCourse={selectedCourse}
          onSelectCourse={handleSelectCourse}
        />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Floating Back to Top Button with Synchronized SVG Progress Ring */}
      <FloatingBackToTop scrollProgress={scrollProgress} show={showBackToTop} />
    </div>
  );
}
