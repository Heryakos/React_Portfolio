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
    tictactoa,
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
      "",
      
      name: "Aminidab Elias",
      designation: "Graphic Designer and front-end developer",
      company: "Beta Pixile",
      image: "",
    },
    {
      testimonial:
      "",

      name: "Binyam Getachew ",
      designation: "Coder",
      company: "XOKA",
      image: "",
    },
    {
      testimonial:
      "",

      name: "Eyobed Kebede",
      designation: "Full Stack Developer",
      company: "Beta Pixile",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "Tic Tac Toe",
      description:
        "Developed a unique twist on the classic Tic-Tac-Toe game using React. This version is played on a 5x5 grid, where the winning condition requires aligning four consecutive marks (horizontally, vertically, or diagonally). The project demonstrates key skills in React component management, state handling, and win condition logic in a more complex game board setup.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: [tictactoa],
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