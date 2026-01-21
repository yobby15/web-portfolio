import LearnCheck from '../../assets/images/LearnCheck.png';
import Dashboard from '../../assets/images/Dashboard.png';
import ExamMobile from '../../assets/images/ExamMobile.png';

export const projectData = [
  {
    title: "LearnCheck! (AI-Powered Formative Assessment)",
    tech: "React, Node.js, Hapi.js, Gemini AI, Redis, PostgreSQL",
    imagePath: LearnCheck,
    description: [
      "Co-developed a platform using Google Gemini AI to generate interactive quizzes from tutorials.",
      "Engineered the Back-End using Hapi.js and Redis for caching to reduce API latency.",
      "Built a responsive Front-End with React and Vite featuring dynamic theme preferences."
    ]
  },
  {
    title: "Smart Study Dashboard",
    tech: "React, RESTful API, PostgreSQL, Node.js, Express.js",
    imagePath: Dashboard,
    description: [
      "Developed a student productivity platform to manage academic schedules and assignments effectively.",
      "Designed a relational database schema for users, classes, tasks, and attendance records.",
      "Implemented data visualization for learning progress statistics and dynamic calendars."
    ]
  },
  {
    title: "Exam Online Mobile",
    tech: "React Native, Expo, Node.js, Express.js, MongoDB",
    imagePath: ExamMobile,
    description: [
      "Developed a cross-platform mobile app for remote exams with a seamless user experience.",
      "Architected a robust RESTful API for authentication, scheduling, and result processing.",
      "Implemented real-time data synchronization between the mobile client and MongoDB."
    ]
  }
];