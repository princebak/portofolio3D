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
  meta,
  starbucks,
  tesla,
  shopify,
  spring_boot,
  java,
  kotlin,
  next,
  express,
  sgc,
  dumasolutions,
  a20,
  portofolio,
  murdock,
  benny,
  bvn,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About Me",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Development Trainer",
    icon: mobile,
  },
  {
    title: "Database Designer & Administrator",
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Spring Boot",
    icon: spring_boot,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "Next",
    icon: next,
  },
  {
    name: "Express",
    icon: express,
  },
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "Kindev",
    icon: starbucks,
    iconBg: "#383E56",
    date: "October 2019 - April 2021",
    points: [
      "Developing and maintaining java ee backend solutions and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web development Trainer",
    company_name: "Kindev",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "October 2019 - April 2021",
    points: [
      "Teaching learners web development and other related technologies.",
      "Collaborating with learners by helping them to develop they web application.",
      "Showing learners the strategy of learing by doing.",
    ],
  },
  {
    title: "Spring boot Developer",
    company_name: "Business Light House",
    icon: shopify,
    iconBg: "#383E56",
    date: "April 2021 - October 2022",
    points: [
      "Developing and maintaining web applications using Spring boot and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "ReactJS & Spring Boot Developer",
    company_name: "Business Light House",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "October 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Spring boot and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Bakenga proved me wrong.",
    name: "Murdoch Kangudi",
    designation: "CEO",
    company: "DIGINCO",
    image: murdock,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Benny Nkonga",
    designation: "Developer",
    company: "IBSS",
    image: benny,
  },
  {
    testimonial:
      "After Bakenga optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Bienvenu Boleko",
    designation: "Analyst & Programmer",
    company: "Du Jardin",
    image: bvn,
  },
];

const projects = [
  {
    name: "SGC",
    description:
      "A web platform where donors can give donations to clinics, and each clinic can publish their donation cases.",
    tags: [
      {
        name: "thymeleaf",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "springboot",
        color: "pink-text-gradient",
      },
    ],
    image: sgc,
    online_link: "http://secureglobalclinics.org/index",
  },
  {
    name: "Duma Solutions",
    description:
      "A Website showing dumasolutions products and the needed details.",
    tags: [
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "htmn",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: dumasolutions,
    online_link: "https://dumasolutions.com/",
  },
  {
    name: "Arbotwenty",
    description:
      "A web game application, an educational thinking game that lets you do mental arithmetic while having fun.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "jee",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: a20,
    online_link: "https://arbotwenty.net/",
  },
  {
    name: "Bakenga Portofolio",
    description:
      "A portofolio website where bakenga ilunga present him-self and its products.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: portofolio,
    online_link: "https://me.pribakil.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
