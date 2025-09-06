import bank from "@/components/bank job.jpg";
import ssc from "@/components/SSC coaching.png";
import CATMAT from "@/components/CAT MAT coaching.png";
import clat from "@/components/CLAT coaching.png";
import NDACDS from "@/components/NDA CDS coaching.png";
import railwayLIC from "@/components/Railway LIC coaching.png";
import adre from "@/components/ADRE coachig.png";

export const announcements = [
  /*
    id: 1,
    title: 'Admissions for 2024-25 Batch are Open!',
    date: '2024-08-01',
    content:
      'We are excited to announce that enrollment for our new batches has officially begun. Explore our courses and secure your spot today.',
  },
  {
    id: 2,
    title: 'New Batches for Banking & SSC Exams',
    date: '2024-07-25',
    content:
      'Fresh batches for Banking and SSC exam preparations are starting soon. Limited seats available.',
  },
  {
    id: 3,
    title: 'Holiday Schedule',
    date: '2024-07-15',
    content:
      'The academy will be closed for a short break from August 15th to August 18th. Classes will resume on August 19th.',
  },*/
];

export const courses = [
  {
    title: 'Bank Job Coaching',
    description:
      'Comprehensive coaching for Bank probationary officer (PO) and clerk exams. We cover all subjects and provide extensive mock tests.',
    schedule: 'Flexible timings, new batches every month',
    image: {
      src: bank,
    },
  },
  {
    title: 'SSC Job Coaching',
    description:
      'Preparation for Staff Selection Commission (SSC) exams like CGL, CHSL, and more. Our curriculum is aligned with the latest exam patterns.',
    schedule: 'Morning and evening batches available',
    image: {
      src: ssc,
    },
  },
  {
    title: 'CAT/MAT Coaching',
    description:
      'Intensive coaching for MBA entrance exams like CAT and MAT. Achieve your dream of getting into a top business school.',
    schedule: 'Weekend and weekday batches',
    image: {
      src: CATMAT,
    },
  },
  {
    title: 'CLAT Coaching',
    description:
      'Prepare for the Common Law Admission Test (CLAT) with our expert faculty and comprehensive study material.',
    schedule: 'After-school and weekend programs',
    image: {
      src: clat,
    },
  },
  {
    title: 'NDA/CDS Coaching',
    description:
      'Dedicated training for National Defence Academy (NDA) and Combined Defence Services (CDS) examinations. Physical training support included.',
    schedule: 'Early morning batches',
    image: {
      src: NDACDS,
      hint: 'military soldiers',
    },
  },
  {
    title: 'Railway & LIC Exams',
    description:
      'Specialized coaching for various Railway Recruitment Board (RRB) and Life Insurance Corporation (LIC) exams.',
    schedule: 'Flexible batch timings',
    image: {
      src: railwayLIC,
      hint: 'railway train',
    },
  },
  {
    title: 'ADRE Coaching',
    description:
      'Focused coaching for the Assam Direct Recruitment Examination (ADRE) to help you secure a government job in Assam.',
    schedule: 'Special batches for ADRE',
    image: {
      src: adre,
    },
  },
];

export const faqData = [
  {
    question: 'What is Vision Academy?',
    answer: 'Vision Academy Silchar is a premier institution in Barak Valley dedicated to providing top-tier coaching for competitive government and entrance exams.',
  },
  {
    question: 'What courses do you offer?',
    answer: 'We offer coaching for Bank Jobs (PO, Clerk), SSC (CGL, CHSL), CAT/MAT, CLAT, NDA/CDS, Railway exams, LIC exams, and the Assam Direct Recruitment Examination (ADRE).',
  },
  {
    question: 'What is the success rate of Vision Academy?',
    answer: 'Over the last 13 years, we have helped over 700 students secure government jobs and over 300 students get into top MBA colleges.',
  },
  {
    question: 'Where is Vision Academy located?',
    answer: 'We are located at 2nd Floor, Kusum Mansion, Hospital Road, Silchar-1.',
  },
  {
    question: 'How can I contact Vision Academy?',
    answer: 'You can call us at 9401811385 or 8133868186, or email us at visionacademy.silchar@gmail.com.',
  }
];
