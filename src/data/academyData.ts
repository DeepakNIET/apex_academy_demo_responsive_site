export interface CourseItem {
  id: string;
  badge: string;
  tag: string;
  tagIcon?: string;
  title: string;
  description: string;
  highlights: string[];
  isHighYield?: boolean;
}

export interface FacultyItem {
  id: string;
  name: string;
  title: string;
  qualification: string;
  experienceBadge: string;
  quote: string;
  image: string;
  specialtyTags: string[];
  footerSpecialty: string;
  footerRole: string;
}

export interface StudentReview {
  id: string;
  initials: string;
  name: string;
  program: string;
  quote: string;
  initialsBgColor?: string;
  initialsTextColor?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const ACADEMY_CONFIG = {
  name: 'APEX ACADEMY',
  fullSubtitle: 'Excellence in Pedagogy | JEE · NEET · Foundation',
  shortSubtitle: 'JEE · NEET · Foundation',
  admissionsSession: '2026-27',
  phoneDisplay: '+91 98700 12345',
  mobilePhoneDisplay: '+91 98700 12345',
  phoneCallNumber: '+919870012345',
  helplineDisplay: '+91 98700 12345',
  email: 'admissions@apexacademy.example',
  whatsappNumber: '919870012345',
  whatsappDisplay: '+91 98700 12345',
  whatsappText: encodeURIComponent('Hello Apex Academy, I would like to inquire about course admissions and batch schedules.'),
  addressMain: '2nd Floor, Academic Plaza, Sector 62, Noida, Uttar Pradesh – 201309',
  addressAnnex: '2nd Floor, Academic Plaza, Sector 62, Noida, Uttar Pradesh – 201309',
  deskHours: 'Monday–Saturday, 9:00 AM–6:00 PM',
  assets: {
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6jpedBYEi64qmAMUZrlG-5_-JZeBp1GnXlEdMFeSF4st_l08KP3wAke11jeCxIyccp-5_yT83SP5FKM8e2zqKl9UHU3E9LDCxj97vLZzAll4ck0CvEfV-ki8obLok0hr6BAmeoXn1Zn59d4nlPQ0PtSnDmL4GvzdMqYoSOxIGVzOlLcNW23qRP04GJluZyyTZtQ2PlYQD09iJfn-p8Sjm_x0pdQb2aCchh7zz0-UaaGjksA_DosNnH9CZWmPPfehCfg',
    classroomPhoto: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-_y2jDzRBQc-sipxYP7j8v5TDRAv8_HnJfoJqX22wp498rO8oVUWTfdSGhxAoE-nOpHop2jkL_nN9rdPeHnKPHx-WP0TR8eHQXCpqQzmVZ2cu445TVDNca_yuLB7GyUnBn54KNPgAg1DIN5ImVjuzcyPswVPR7wsrViTtLESvzJleXUnA5qCCtBm4PHK0cfdI6MYDcvdZnsXLSUP-2cmxfSIq8tYcAuQ04blRjid3CndAry2lKAAY=s0',
    libraryPhoto: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCL-GiJ0CvZrRGEidYEAMhWe41ABvCAPCei8C52CZJh0BnAt06yrmzrBma5gXW-aq4MWfoBgCZs99LG8orO5jKGtsWLv0OeEtIJHILqnDYrO-fQ1LK6mYAHiixkvkY0ESavDN_GiLrEIJmrQdQgSAoz1D8_AfmwITBpinIf240qaJ_8TTe3qejhn9B96u2jQF8lWZgY-j1-dv_TPywOUwP28ukLtEqKTb_ltu3wnYf5mGNRhZNksCXY=s0',
  }
};

export const COURSES_DATA: CourseItem[] = [
  {
    id: 'jee-main-adv',
    badge: 'Classes 11, 12 & Repeaters',
    tag: 'IIT-JEE Focus',
    tagIcon: 'bolt',
    title: 'JEE Main & Advanced',
    description: 'Master fundamental calculus, mechanics, and molecular structures with an integrated multi-tier problem solver paradigm.',
    highlights: [
      '650+ hours live classroom instruction & topic mastery',
      'All-India Test Series (AITS) with national benchmark rank',
      'Granular weekly percentile breakdown across modules',
      'Exhaustive active question bank containing 18,000+ problems'
    ]
  },
  {
    id: 'neet-medical',
    badge: 'Target NEET-UG',
    tag: 'UG Medical Focus',
    tagIcon: 'medical_services',
    isHighYield: true,
    title: 'NEET Preparation',
    description: 'Intensive botanical, zoological, and physiological memorization backed by rigorous physical chemistry problem solving.',
    highlights: [
      'Line-by-line NCERT dissection across Biology & Chemistry',
      'High-yield Q-Bank with over 15,000 curated MCQs',
      'Dedicated OMR speed & negative marking avoidance drills',
      'Full-length simulated Sunday examination blocks'
    ]
  },
  {
    id: 'junior-foundation',
    badge: 'Classes 8, 9 & 10',
    tag: 'STEM Roots',
    tagIcon: 'science',
    title: 'Foundation Courses',
    description: 'Foster scientific intuition and Olympiad logic without imposing unsustainable memorization workloads early on.',
    highlights: [
      'Analytical reasoning & NSEJS/PRMO curriculum foundations',
      'Seamless synchronization with regular CBSE/ICSE schooling',
      'Early experimental science and logical deduction kits',
      'Low-stress timetables designed for holistic cognitive balance'
    ]
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    id: '1',
    num: '1',
    icon: 'calendar_month',
    title: 'Structured Study Plans',
    description: 'Faculty-guided learning blocks divided into weekly objectives to eliminate last-minute cramming and promote long-term retention.'
  },
  {
    id: '2',
    num: '2',
    icon: 'psychology',
    title: 'Concept-Focused Learning',
    description: 'Deep dive into derivations and foundational principles before tackling complex multi-variable numerical drills.'
  },
  {
    id: '3',
    num: '3',
    icon: 'analytics',
    title: 'Regular Practice & Evaluation',
    description: 'Continuous diagnostic assessments reviewed directly with mentors, mapping chapter accuracy and error tendencies.'
  },
  {
    id: '4',
    num: '4',
    icon: 'forum',
    title: 'Mentorship & Doubt Desks',
    description: 'Daily on-campus doubt clearing counters paired with dedicated faculty mentors who track each aspirant’s academic baseline.'
  }
];

export const CAMPUS_PILLARS = [
  {
    badge: '40:1',
    title: 'Strict Batch Size Ceiling',
    description: 'Strict 40-student batch ceiling to ensure interactive problem-solving and immediate teacher awareness.'
  },
  {
    icon: 'local_library',
    title: 'Quiet Self-Study Library Pods',
    description: 'Open daily until 9:30 PM with zero-distraction individual cubicles and resident faculty supervisor presence.'
  },
  {
    icon: 'family_restroom',
    title: 'Transparent Parent Engagement',
    description: 'Fortnightly written progress summaries, attendance logs, and scheduled in-person parent consultation windows.'
  }
];

export const FACULTY_DATA: FacultyItem[] = [
  {
    id: 'dr-arvind',
    name: 'Dr. Arvind Ramanathan',
    title: 'Head of Physics · Ex-IIT Madras',
    qualification: 'Ex-IIT Madras',
    experienceBadge: '16+ Yrs Exp',
    quote: '“Physics is neither formulas nor tricks; it is pure geometry and cause-and-effect. Once students see the causality, the score follows naturally.”',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi2kQYzfxcnBMbU9B9d3cHujgKpLTjeQwbnOgBfUE-P9011dy6BmW8UqOD43gqgkqXL2LMwWVabSLDluJWKZVlYUtfE3g16g9I4he1xdgKnsQMdOGyhYkLyCb_s3Ets-WIcb1_Kzws-zIxTVTfVrjmA6CC8jzFLOnMijd4WCtcHUGePCokwl9--dzwAgNEMwKA_avUXUi-on6aY7QN9vcl7jR7zgqp3qkkslFN512TvyTj0BInq5n6=s0',
    specialtyTags: ['Mechanics', 'Electrodynamics', 'Wave Optics'],
    footerSpecialty: 'Authored: 4 Physics Monographs',
    footerRole: 'IIT-JEE Advanced Specialist'
  },
  {
    id: 'prof-sunita',
    name: 'Prof. Sunita Nair',
    title: 'Senior Faculty, Botany & Genetics · M.Sc., CSIR-NET',
    qualification: 'M.Sc., CSIR-NET',
    experienceBadge: '12+ Yrs Exp',
    quote: '“Pre-medical aspirants must master anatomical terminology down to the sub-cellular layer. Precision reading is the difference between rank 100 and 5,000.”',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbZdkU63bj7cSdRayXSINXVyk9BqdAUtRUV3WXOaCwmcW05D0F90SU_XjxoIHedRHxPxPeqvKP2tA9iwGpLkFZNv5RwdMHu8bFxI3cWkEfqzTz6HFQD0QVuJbpUqIACGaavnouE_9Jjj1xmI0fyvOxoTqp7Ylf0OpM1qpy0Gc1Lr5GHwlh_dsdhkAO6fhYFMHQwKLtD6SnstzM98v_370hTGc_Q9J9WQwygWhkxJImkZTkyFBWrANX=s0',
    specialtyTags: ['Cellular Biology', 'Genetics', 'Human Physiology'],
    footerSpecialty: 'NCERT Pedagogical Reviewer',
    footerRole: 'NEET Biology Lead'
  },
  {
    id: 'er-rajesh',
    name: 'Er. Rajesh Mathur',
    title: 'Senior Mathematics Mentor · B.Tech NIT Trichy',
    qualification: 'B.Tech NIT Trichy',
    experienceBadge: '14+ Yrs Exp',
    quote: '“Calculus and Coordinate Geometry aren’t obstacles; they are instruments of analytical rigor. We train minds to look three steps ahead in every solution.”',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAQ2R30dFTT03nMSigzoebe3BGBNsdDT-gWwGQg5iOXp4Jp4LlhOKZCl3MlNopQm6mfegWTdooyMqN0Mb_OD59ld4xK37-tLyjEPlw9W5oSy4HMVb78s8sFXEdyo0dIkApzWqOFItBkNaEFbZDFoVQyU-sbAtgDuURCe__LmFYwnDX1MXf9eZZ7WK4VxX3bP2EEBfG-cYKpiMBLZGG7lrTs43PFHh1D0z4Y7jTcqq9luj27437UXHO=s0',
    specialtyTags: ['Differential Calculus', 'Coordinate Geometry', 'Permutations'],
    footerSpecialty: 'National Math Olympiad Trainer',
    footerRole: 'Coordinate & Calculus Lead'
  }
];

export const STUDENT_EXPERIENCES: StudentReview[] = [
  {
    id: 'aarav',
    initials: 'AS',
    name: 'Aarav Sharma',
    program: 'JEE Aspirant · 2-Year Classroom Program',
    quote: '“The difference at Apex is that teachers actually listen when you don’t grasp an electromagnetic induction problem. The doubt desk isn’t rushed; they sit with you until the core mathematics clicks.”',
    initialsBgColor: 'bg-primary-fixed',
    initialsTextColor: 'text-primary'
  },
  {
    id: 'pooja',
    initials: 'PK',
    name: 'Pooja Kulkarni',
    program: 'NEET Intensive Batch · Repeater Cohort',
    quote: '“I was losing marks due to random guessing in Botany. The mock review sessions dissected my exact error pattern within two weeks. My test consistency improved dramatically across full-syllabus mocks.”',
    initialsBgColor: 'bg-secondary-fixed',
    initialsTextColor: 'text-secondary'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What are the eligibility criteria and batch start dates for JEE & NEET?',
    answer: 'Intake for our flagship 2-Year Program (Class 11) begins annually in April and June following 10th board examinations. For Class 12 and Repeaters, batches begin in May and July. Selection is based on our scholarship & diagnostic entrance test (A-SAT) or merit performance in Class 10/12 board results.'
  },
  {
    id: 'faq-2',
    question: 'How does the 1-on-1 doubt clearing system work in practice?',
    answer: 'Apex operates designated daily Doubt Clinics from 2:00 PM to 8:00 PM. Students have access to walk-in faculty doubt desks 6 days a week. Assistant professors and core mentors sit individually with students to work through difficult problems step-by-step, ensuring foundational concepts are clarified.'
  },
  {
    id: 'faq-3',
    question: 'Are scholarship tests (A-SAT) available and how can fee assistance be availed?',
    answer: 'Yes, the Apex Scholarship & Aptitude Test (A-SAT) takes place every alternate Sunday at our campus center and online. Students can receive tuition fee waivers of up to 90% based strictly on test merit. Additional needs-based assistance is available for qualifying candidates during counseling.'
  },
  {
    id: 'faq-4',
    question: 'Can students attend demo lectures before formal enrollment?',
    answer: 'We provide prospective applicants with an introductory 2 to 3-day class pass upon clearing the preliminary counselling interaction. This enables students and parents to observe our teaching pedagogy, classroom culture, and study module quality firsthand before finalizing registration.'
  },
  {
    id: 'faq-5',
    question: 'How are parents kept updated regarding academic progress?',
    answer: 'Attendance is recorded daily upon campus entry and reported digitally. Detailed test analysis, percentile breakdowns, and negative marking trends are shared fortnightly, complemented by scheduled in-person parent-mentor consultations every six weeks.'
  }
];
