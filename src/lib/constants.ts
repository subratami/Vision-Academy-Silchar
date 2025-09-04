export const announcements = [
  {
    id: 1,
    title: 'Enrollment for Fall 2024 is Now Open!',
    date: '2024-08-01',
    content:
      'We are excited to announce that enrollment for the fall semester has officially begun. Explore our new courses and secure your spot today.',
  },
  {
    id: 2,
    title: 'New Course: Advanced AI & Machine Learning',
    date: '2024-07-25',
    content:
      'Dive into the world of artificial intelligence with our brand-new advanced course. Limited seats available.',
  },
  {
    id: 3,
    title: 'Summer Break Schedule',
    date: '2024-07-15',
    content:
      'The academy will be closed for summer break from August 15th to August 28th. Classes will resume on August 29th.',
  },
];

export const courses = [
  {
    title: 'Introduction to Computer Science',
    description:
      'A foundational course covering the principles of programming, algorithms, and data structures. Perfect for beginners.',
    schedule: 'Mon, Wed, Fri | 10:00 AM - 11:30 AM',
    image: {
      src: 'https://picsum.photos/600/400',
      hint: 'programming code',
    },
  },
  {
    title: 'Advanced Web Development',
    description:
      'Master modern web technologies including React, Next.js, and backend development with Node.js. Prerequisite: Intro to CS or equivalent experience.',
    schedule: 'Tue, Thu | 1:00 PM - 3:00 PM',
    image: {
      src: 'https://picsum.photos/600/400',
      hint: 'web design',
    },
  },
  {
    title: 'Data Science & Analytics',
    description:
      'Learn to extract insights from data using Python, Pandas, and various machine learning libraries. Covers data visualization and statistical analysis.',
    schedule: 'Mon, Wed | 2:00 PM - 4:00 PM',
    image: {
      src: 'https://picsum.photos/600/400',
      hint: 'data charts',
    },
  },
  {
    title: 'UI/UX Design Fundamentals',
    description:
      'Explore the principles of user-centric design, wireframing, prototyping, and creating intuitive user interfaces.',
    schedule: 'Fri | 9:00 AM - 12:00 PM',
    image: {
      src: 'https://picsum.photos/600/400',
      hint: 'design sketch',
    },
  },
  {
    title: 'Cybersecurity Essentials',
    description:
      'Understand the fundamentals of network security, ethical hacking, and defensive strategies to protect digital assets.',
    schedule: 'Tue, Thu | 4:00 PM - 5:30 PM',
    image: {
      src: 'https://picsum.photos/600/400',
      hint: 'cyber security',
    },
  },
  {
    title: 'Mobile App Development',
    description:
      'Build native mobile applications for iOS and Android using modern frameworks like Swift and Kotlin.',
    schedule: 'Sat | 10:00 AM - 1:00 PM',
    image: {
      src: 'https://picsum.photos/600/400',
      hint: 'mobile app',
    },
  },
];

export const staff = [
  {
    name: 'Dr. Evelyn Reed',
    title: 'Founder & Head of Academy',
    bio: 'With over 20 years of experience in technology and education, Dr. Reed founded Vision Academy to bridge the gap between academic learning and real-world skills.',
    qualifications: 'Ph.D. in Computer Science',
    avatar: 'https://picsum.photos/100/100',
    hint: 'professional woman',
  },
  {
    name: 'Mr. Samuel Chen',
    title: 'Lead Instructor, Web Development',
    bio: 'Samuel is a full-stack developer with a passion for teaching. He has worked with several tech giants and brings a wealth of industry knowledge to his classes.',
    qualifications: 'M.S. in Software Engineering',
    avatar: 'https://picsum.photos/100/100',
    hint: 'professional man',
  },
  {
    name: 'Ms. Isabella Rossi',
    title: 'Instructor, UI/UX Design',
    bio: 'Isabella is a renowned designer who believes in creating beautiful and functional digital experiences. Her work has been featured in major design publications.',
    qualifications: 'B.A. in Graphic Design',
    avatar: 'https://picsum.photos/100/100',
    hint: 'smiling woman',
  },
  {
    name: 'Mr. David Kim',
    title: 'Instructor, Data Science',
    bio: 'David is a data scientist who loves to solve complex problems. He specializes in machine learning models and big data analytics.',
    qualifications: 'M.S. in Data Science',
    avatar: 'https://picsum.photos/100/100',
    hint: 'man glasses',
  },
];

export const websiteContentForFaq = `
About Us:
Vision Academy is a premier institution dedicated to providing top-tier education in the field of technology. Our mission is to empower the next generation of innovators, developers, and tech leaders with the skills and knowledge needed to excel in a rapidly evolving digital world. Founded in 2010 by Dr. Evelyn Reed, the academy has grown from a small group of passionate educators to a thriving community of learners and experts. Our core values are Excellence, Innovation, and Community. We believe in fostering a supportive learning environment where students can challenge themselves and achieve their full potential.

Courses Offered:
- Introduction to Computer Science: A foundational course covering the principles of programming, algorithms, and data structures. Perfect for beginners. Schedule: Mon, Wed, Fri | 10:00 AM - 11:30 AM.
- Advanced Web Development: Master modern web technologies including React, Next.js, and backend development with Node.js. Prerequisite: Intro to CS or equivalent experience. Schedule: Tue, Thu | 1:00 PM - 3:00 PM.
- Data Science & Analytics: Learn to extract insights from data using Python, Pandas, and various machine learning libraries. Covers data visualization and statistical analysis. Schedule: Mon, Wed | 2:00 PM - 4:00 PM.
- UI/UX Design Fundamentals: Explore the principles of user-centric design, wireframing, prototyping, and creating intuitive user interfaces. Schedule: Fri | 9:00 AM - 12:00 PM.
- Cybersecurity Essentials: Understand the fundamentals of network security, ethical hacking, and defensive strategies to protect digital assets. Schedule: Tue, Thu | 4:00 PM - 5:30 PM.
- Mobile App Development: Build native mobile applications for iOS and Android using modern frameworks like Swift and Kotlin. Schedule: Sat | 10:00 AM - 1:00 PM.

Contact Information:
- Location: 123 Tech Avenue, Innovation City, 54321
- Phone: (123) 456-7890
- Email: admissions@visionacademy.edu
For inquiries about enrollment, please contact the admissions email. For general questions, you can call our main line.

Staff:
Our team is composed of experienced professionals and educators, including Dr. Evelyn Reed (Founder & Head of Academy), Mr. Samuel Chen (Lead Instructor, Web Development), Ms. Isabella Rossi (Instructor, UI/UX Design), and Mr. David Kim (Instructor, Data Science). All our instructors have advanced degrees and significant industry experience.
`;
