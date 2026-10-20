import React, { useState } from 'react';
import { ACADEMY_CONFIG, COURSES_DATA } from '../data/academyData';

interface AdmissionsSectionProps {
  selectedCourse: string;
  onSelectCourse: (courseId: string) => void;
}

export const AdmissionsSection: React.FC<AdmissionsSectionProps> = ({
  selectedCourse,
  onSelectCourse,
}) => {
  const [fullName, setFullName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [errors, setErrors] = useState<{
    name?: string;
    contact?: string;
    email?: string;
    course?: string;
  }>({});
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    phone: string;
    email: string;
    courseName: string;
  } | null>(null);

  const validate = () => {
    const newErrors: {
      name?: string;
      contact?: string;
      email?: string;
      course?: string;
    } = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      newErrors.name = 'Please enter your full name (minimum 2 characters).';
    }

    if (!contactNumber.trim()) {
      newErrors.contact = 'Please enter your contact phone number.';
    } else {
      const isPhone = /^[+]?[\d\s-]{8,15}$/.test(contactNumber.trim());
      if (!isPhone) {
        newErrors.contact = 'Please provide a valid 10-digit mobile number.';
      }
    }

    if (!emailAddress.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else {
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress.trim());
      if (!isEmail) {
        newErrors.email = 'Please provide a valid email address.';
      }
    }

    if (!selectedCourse) {
      newErrors.course = 'Please select your target course of interest.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    const matchedCourse = COURSES_DATA.find((c) => c.id === selectedCourse);
    const courseTitle = matchedCourse ? matchedCourse.title : selectedCourse;

    setSubmittedData({
      name: fullName.trim(),
      phone: contactNumber.trim(),
      email: emailAddress.trim(),
      courseName: courseTitle,
    });
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFullName('');
    setContactNumber('');
    setEmailAddress('');
    onSelectCourse('');
    setErrors({});
  };

  return (
    <section
      id="enquire"
      className="px-4 sm:px-6 lg:px-12 py-12 lg:py-24 max-w-7xl mx-auto w-full"
    >
      <div className="bg-surface-container-lowest rounded-2xl shadow-xl border border-surface-container-highest/60 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Direct Admissions Desk Info (Deep Navy) */}
          <div className="lg:col-span-5 bg-primary-container p-6 sm:p-8 lg:p-12 text-white flex flex-col justify-between space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <span className="text-xs font-bold text-secondary-container tracking-wider uppercase">
                DIRECT ADMISSIONS DESK · SESSION {ACADEMY_CONFIG.admissionsSession}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-tight leading-tight">
                Ready to Start Your Competitive Exam Journey?
              </h2>
              <p className="text-xs sm:text-sm text-on-primary-container leading-relaxed">
                Speak directly with an academic counsellor to assess curriculum fit, batch schedules, and scholarship opportunities. No account creation required.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-3.5 sm:space-y-4 text-on-primary-container text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary-container text-xl sm:text-[22px] shrink-0 mt-0.5">
                  location_on
                </span>
                <div>
                  <p className="font-bold text-white">Campus Address</p>
                  <p className="text-surface-variant/80 text-[11px] sm:text-xs">
                    {ACADEMY_CONFIG.addressAnnex}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary-container text-xl sm:text-[22px] shrink-0">
                  call
                </span>
                <a
                  href={`tel:${ACADEMY_CONFIG.phoneCallNumber}`}
                  className="font-semibold text-white hover:text-secondary-fixed transition-colors"
                >
                  {ACADEMY_CONFIG.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3 min-w-0">
                <span className="material-symbols-outlined text-secondary-container text-xl sm:text-[22px] shrink-0">
                  mail
                </span>
                <a
                  href={`mailto:${ACADEMY_CONFIG.email}`}
                  className="font-semibold text-white hover:text-secondary-fixed transition-colors break-all"
                >
                  {ACADEMY_CONFIG.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary-container text-xl sm:text-[22px] shrink-0">
                  schedule
                </span>
                <span className="text-[11px] sm:text-xs text-surface-variant/80">
                  Desk Hours: {ACADEMY_CONFIG.deskHours}
                </span>
              </div>
            </div>

            {/* Quick Action Badges */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={`tel:${ACADEMY_CONFIG.phoneCallNumber}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                >
                  <span className="material-symbols-outlined text-sm text-secondary-container">call</span>
                  <span>Call Directly</span>
                </a>
                <a
                  href={`mailto:${ACADEMY_CONFIG.email}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                >
                  <span className="material-symbols-outlined text-sm text-secondary-container">mail</span>
                  <span>Email Desk</span>
                </a>
                <a
                  href={`https://wa.me/${ACADEMY_CONFIG.whatsappNumber}?text=${ACADEMY_CONFIG.whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/80 hover:bg-emerald-600 text-white text-xs font-semibold transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  <span>WhatsApp Desk</span>
                </a>
              </div>
              <p className="text-[11px] text-surface-variant/60">
                Accredited by National Pre-University Scholastic Trust.
              </p>
            </div>
          </div>

          {/* Right Column: Simplified Consultation Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-12 bg-surface-container-lowest flex flex-col justify-center">
            {submittedData ? (
              <div className="space-y-5 animate-fadeIn">
                <div className="p-4 sm:p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm sm:text-base">
                    <span className="material-symbols-outlined text-xl">check_circle</span>
                    <span>Consultation Request Registered (Demo)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                    Thank you, <span className="font-semibold">{submittedData.name}</span>. Your enquiry for{' '}
                    <span className="font-semibold">{submittedData.courseName}</span> has been simulated on-page with phone{' '}
                    <span className="font-semibold">{submittedData.phone}</span> and email{' '}
                    <span className="font-semibold">{submittedData.email}</span>.
                  </p>
                </div>

                {/* Clear Integration Note so users know status */}
                <div className="p-4 rounded-lg bg-surface-container-low border border-surface-container-highest text-xs text-on-surface-variant space-y-1.5 leading-relaxed">
                  <p className="font-semibold text-primary flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-secondary-container">info</span>
                    <span>Demonstration Notice</span>
                  </p>
                  <p>
                    This is an interactive frontend demonstration. Enquiries are not sent or stored.
                  </p>
                  <p className="text-[11px] text-on-surface-variant/80">
                    For real enquiries, please contact us at{' '}
                    <a href={`tel:${ACADEMY_CONFIG.phoneCallNumber}`} className="font-bold text-primary underline">
                      {ACADEMY_CONFIG.phoneDisplay}
                    </a>{' '}
                    or email{' '}
                    <a href={`mailto:${ACADEMY_CONFIG.email}`} className="font-bold text-primary underline">
                      {ACADEMY_CONFIG.email}
                    </a>
                    .
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-container text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-primary mb-1">
                    Request an Academic Consultation
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant">
                    Complete this brief enquiry for Session {ACADEMY_CONFIG.admissionsSession} to receive a detailed syllabus booklet and connect with our academic admissions office.
                  </p>
                </div>

                {/* Full Name */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="student-name"
                    className="block text-xs sm:text-sm font-semibold text-primary"
                  >
                    Full Name *
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined text-base sm:text-lg text-on-surface-variant absolute left-3 pointer-events-none">
                      person
                    </span>
                    <input
                      id="student-name"
                      type="text"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      placeholder="Student or Parent Full Name (e.g. Rohan Varma)"
                      className={`w-full h-11 pl-10 pr-3.5 rounded-lg bg-surface-container-low text-on-surface text-xs sm:text-sm border transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.name
                          ? 'border-red-500 focus:ring-red-400'
                          : 'border-transparent focus:border-primary'
                      }`}
                      required
                    />
                  </div>
                  {errors.name && (
                    <p className="text-xs text-red-600 font-medium pl-1">{errors.name}</p>
                  )}
                </div>

                {/* Contact Number */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-number"
                    className="block text-xs sm:text-sm font-semibold text-primary"
                  >
                    Contact Number *
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined text-base sm:text-lg text-on-surface-variant absolute left-3 pointer-events-none">
                      call
                    </span>
                    <input
                      id="contact-number"
                      type="tel"
                      value={contactNumber}
                      onChange={(e) => {
                        setContactNumber(e.target.value);
                        if (errors.contact) setErrors((prev) => ({ ...prev, contact: undefined }));
                      }}
                      placeholder="10-digit mobile number (e.g. +91 90123 41234)"
                      className={`w-full h-11 pl-10 pr-3.5 rounded-lg bg-surface-container-low text-on-surface text-xs sm:text-sm border transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.contact
                          ? 'border-red-500 focus:ring-red-400'
                          : 'border-transparent focus:border-primary'
                      }`}
                      required
                    />
                  </div>
                  {errors.contact && (
                    <p className="text-xs text-red-600 font-medium pl-1">{errors.contact}</p>
                  )}
                </div>

                {/* Email Address - Separately Below Contact Number */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="email-address"
                    className="block text-xs sm:text-sm font-semibold text-primary"
                  >
                    Email Address *
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined text-base sm:text-lg text-on-surface-variant absolute left-3 pointer-events-none">
                      mail
                    </span>
                    <input
                      id="email-address"
                      type="email"
                      value={emailAddress}
                      onChange={(e) => {
                        setEmailAddress(e.target.value);
                        if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                      placeholder="Email address (e.g. rohan@example.com)"
                      className={`w-full h-11 pl-10 pr-3.5 rounded-lg bg-surface-container-low text-on-surface text-xs sm:text-sm border transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.email
                          ? 'border-red-500 focus:ring-red-400'
                          : 'border-transparent focus:border-primary'
                      }`}
                      required
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-red-600 font-medium pl-1">{errors.email}</p>
                  )}
                </div>

                {/* Target Course Dropdown */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="course-select"
                    className="block text-xs sm:text-sm font-semibold text-primary"
                  >
                    Course of Interest *
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined text-base sm:text-lg text-on-surface-variant absolute left-3 pointer-events-none">
                      school
                    </span>
                    <select
                      id="course-select"
                      value={selectedCourse}
                      onChange={(e) => {
                        onSelectCourse(e.target.value);
                        if (errors.course) setErrors((prev) => ({ ...prev, course: undefined }));
                      }}
                      className={`w-full h-11 pl-10 pr-9 rounded-lg bg-surface-container-low text-on-surface text-xs sm:text-sm appearance-none border transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.course
                          ? 'border-red-500 focus:ring-red-400'
                          : 'border-transparent focus:border-primary'
                      }`}
                      required
                    >
                      <option value="">Select target course...</option>
                      {COURSES_DATA.map((course) => (
                        <option key={course.id} value={course.id}>
                          {course.title} ({course.badge})
                        </option>
                      ))}
                    </select>
                    <span className="material-symbols-outlined text-base sm:text-lg text-on-surface-variant absolute right-3 pointer-events-none">
                      arrow_drop_down
                    </span>
                  </div>
                  {errors.course && (
                    <p className="text-xs text-red-600 font-medium pl-1">{errors.course}</p>
                  )}
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full h-11 sm:h-12 bg-secondary-container hover:bg-secondary text-white font-bold text-xs sm:text-sm rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all active:scale-98 cursor-pointer"
                  >
                    <span>Submit Enquiry &amp; Request Prospectus</span>
                    <span className="material-symbols-outlined text-base sm:text-[18px]">
                      arrow_forward
                    </span>
                  </button>
                </div>

                <p className="text-[11px] sm:text-xs text-on-surface-variant text-center pt-1">
                  Frontend demonstration enquiry form. No account creation or student login required.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
