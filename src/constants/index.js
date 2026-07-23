import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  Angular,
  sql,
  carrent,
  jobit,
  tripguide,
  game,
  tictactoa,
  screenshotGameHub,
  screenshot3d,
  screenshotTicTacToe,
  screenshotEcommerce,
  screenshotFhcClinic,
  screenshotFhcModules,
  xokaExperience,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const statistics = [
  {
    count: "3+",
    label: "Years Experience",
  },
  {
    count: "15+",
    label: "Projects Completed",
  },
  {
    count: "10+",
    label: "Technologies Mastered",
  },
  {
    count: "4",
    label: "Enterprise Systems Built",
  },
];

export const services = [
  {
    title: "ERP Development",
    description: "Custom ERPNext & Frappe Framework solutions with Doctypes, Reports, Client/Server scripts, and workflow automation.",
    icon: web,
  },
  {
    title: "Full Stack Development",
    description: "Scalable web applications engineered with Angular, React, .NET Core, ASP.NET Web API, and Python.",
    icon: backend,
  },
  {
    title: "REST API & Mobile Solutions",
    description: "Secure, high-performance REST APIs, third-party integrations (payment systems), and mobile e-commerce applications.",
    icon: mobile,
  },
  {
    title: "Linux & Database Deployment",
    description: "VPS server setup (Ubuntu/Linux), web server configuration (Nginx, IIS, Apache), and database management (SQL Server, PostgreSQL, MariaDB).",
    icon: creator,
  },
];

export const currentWork = [
  {
    organization: "Federal Housing Corporation",
    role: "Software Developer (04/2025 – Present)",
    tasks: [
      "Developing scalable Angular applications with reusable components & clean UI architecture",
      "Building secure, high-performance RESTful APIs using .NET",
      "Customizing ERP applications using Frappe Framework & ERPNext (Doctypes, Reports, Scripts)",
      "Automating workflows for legal case management and organizational operations",
    ],
  },
];

export const whyChooseMe = [
  "3+ Years of Enterprise Software Development",
  "Frappe Framework & ERPNext Specialist",
  "BSc in Computer Science & MPM Candidate",
  "Full-Stack: Angular, React, .NET, Python",
  "Database: SQL Server, PostgreSQL, MariaDB",
  "Linux VPS Server Deployment & Maintenance",
];

export const technologies = [
  { name: "Python", icon: backend },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "C# / .NET", icon: backend },
  { name: "SQL", icon: sql },
  { name: "Angular", icon: Angular },
  { name: "React JS", icon: reactjs },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
  { name: "Docker", icon: docker },
];

export const experiences = [
  {
    title: "Software Developer",
    company_name: "Federal Housing Corporation (Addis Ababa, Mexico)",
    icon: Angular,
    iconBg: "#383E56",
    date: "04/2025 – Present",
    points: [
      "Developed scalable Angular applications with reusable components and clean UI architecture.",
      "Built secure and high-performance RESTful APIs using .NET.",
      "Developed and customized ERP applications using the Frappe Framework and ERPNext.",
      "Built custom Doctypes, Reports, Client Scripts, and Server Scripts to automate business processes.",
      "Designed and implemented workflow automation for legal case management and organizational operations.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "XOKA IT Solution PLC (Addis Ababa)",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "05/2023 – 2024",
    certificate: xokaExperience,
    points: [
      "Developed and maintained enterprise web applications using Angular, .NET, and JavaScript.",
      "Engineered RESTful APIs and integrated third-party services including payment systems.",
      "Managed enterprise database systems including SQL Server, PostgreSQL, and MySQL.",
      "Received official Experience Certificate from XOKA IT Solution PLC.",
    ],
  },
  {
    title: "Full Stack Developer (Freelance/Contract)",
    company_name: "Mobile E-Commerce Application (Remote)",
    icon: mobile,
    iconBg: "#383E56",
    date: "2026 – Present",
    points: [
      "Developed a mobile e-commerce application with a modern and responsive user interface.",
      "Implemented user authentication, product catalog management, shopping cart, and order processing features.",
      "Integrated backend APIs to support secure data exchange and application functionality.",
    ],
  },
];

export const testimonials = [
  {
    testimonial:
      "Hiryakos excels at converting complex business workflows into simple, user-friendly enterprise software solutions.",
    name: "Aminidab Elias",
    designation: "Frontend Developer & UI Designer",
    company: "Beta Pixels",
    image: "",
  },
  {
    testimonial:
      "His expertise in ERPNext customization and backend API architecture drastically accelerated our team's delivery time.",
    name: "Binyam Getachew",
    designation: "Senior Software Engineer",
    company: "XOKA IT Solutions",
    image: "",
  },
  {
    testimonial:
      "A reliable full-stack developer who understands both frontend aesthetics and Linux server deployment.",
    name: "Eyobed Kebede",
    designation: "Full Stack Lead",
    company: "Beta Pixels",
    image: "",
  },
];

export const projects = [
  {
    name: "FHC ERP & Clinic Management System",
    description:
      "Customized ERPNext modules for Federal Housing Corporation clinic operations, integrating patient registration, doctor visits, appointment scheduling, and automated PDF reporting.",
    tags: [
      { name: "Frappe", color: "blue-text-gradient" },
      { name: "ERPNext", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],
    image: screenshotFhcClinic,
    source_code_link: "https://github.com/Heryakos",
    live_demo_link: "fhcerp.efhc.gov.et/app/fhc-clinic",
  },
  {
    name: "FHC ERP Custom Modules & Dashboard",
    description:
      "Enterprise ERP platform modules built on Frappe Framework for Archival, Legal Case Management, BSC Management, and Production Control.",
    tags: [
      { name: "Frappe", color: "blue-text-gradient" },
      { name: "ERPNext", color: "green-text-gradient" },
      { name: "MariaDB", color: "pink-text-gradient" },
    ],
    image: screenshotFhcModules,
    source_code_link: "https://github.com/Heryakos",
    live_demo_link: "fhcerp.efhc.gov.et/app",
  },
  {
    name: "Game Hub - Gaming Platform",
    description:
      "Interactive gaming platform built with React, connecting to RAWG gaming APIs using Axios to search, filter by genre/platform, and display real-time game data.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "Chakra UI", color: "pink-text-gradient" },
    ],
    image: screenshotGameHub,
    source_code_link: "https://github.com/Heryakos/game-hub.git",
    live_demo_link: "https://hiryakos-game-hub.vercel.app/",
  },
  {
    name: "Enterprise Server Solutions 3D",
    description:
      "Interactive 3D company portfolio showcasing enterprise hardware, server rack configurations, and IT infrastructure services built with modern web graphics.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Three.js", color: "green-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
    ],
    image: screenshot3d,
    source_code_link: "https://github.com/Heryakos",
    live_demo_link: "https://ak-3d-company-portfolio.vercel.app/",
  },
  {
    name: "E-Commerce Admin Dashboard",
    description:
      "Full-featured admin management dashboard for e-commerce analytics, product inventory, order processing, and customer insights.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
    ],
    image: screenshotEcommerce,
    source_code_link: "https://github.com/Heryakos",
    live_demo_link: "https://e-commerce-senan.vercel.app/dashboard",
  },
  {
    name: "Tic-Tac-Toe Strategy Game (5x5)",
    description:
      "Custom 5x5 grid strategy game built in React featuring interactive turn indicators, state management, and custom win-condition algorithms.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "JavaScript", color: "green-text-gradient" },
      { name: "CSS3", color: "pink-text-gradient" },
    ],
    image: screenshotTicTacToe,
    source_code_link: "https://github.com/Heryakos",
    live_demo_link: "https://reacttictactoegame.vercel.app/",
  },
];

export { services as defaultServices, technologies as defaultTech };

