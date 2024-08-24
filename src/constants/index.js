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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    game,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Front End Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Angular Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Angular",
      icon: Angular,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    
    {
      name: "sql",
      icon: sql,
    },
   
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "html",
      company_name: "Universty",
      icon: html,
      iconBg: "#383E56",
      date: "March 2018 - April 2022",
      points: [
       "things that i have do before",
      ],
    },
    {
      title: "css",
      company_name: "Universy",
      icon: javascript,
      iconBg: "#E6DEDD",
      date: "March 2018 - April 2022",
      points: [
        "things that i have do before",
      ],
    },
    {
      title: "Web Developer",
      company_name: "XOKA it solution",
      icon: reactjs,
      iconBg: "#383E56",
      date: "March 2018 - April 2022",
      points: [
        "things that i have do before",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "XOKA it solution",
      icon: Angular,
      iconBg: "#E6DEDD",
      date: "March 2018 - April 2022",
      points: [
        "things that i have do before",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      
      name: "Sara Lee",
      designation: "CFO",
      company: "XOKA",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",

      name: "Chris Brown",
      designation: "COO",
      company: "XOKA",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",

      name: "Lisa Wang",
      designation: "CTO",
      company: "XOKA",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: game,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: game,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Chakra UI",
          color: "green-text-gradient",
        },
        {
          name: "Axios API",
          color: "pink-text-gradient",
        },
      ],
      image: game,
      source_code_link: "https://github.com/Heryakos/game-hub.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };