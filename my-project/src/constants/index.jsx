import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import  Java  from "../assets/JAVA.png";
import  HTML  from "../assets/HTML.png";
import CSS  from "../assets/CSS.png";
import JavaScript from "../assets/JavaScript.png";
import  MySql  from "../assets/MySQL.png";
import  GitHub from "../assets/GITHUB.png";

export const NAVIGATION_LINKS = [
  { label: "Home", href:"#hero"},
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Rupam Saundik",
  greet: "Hello there! 👋🏻",
  description:
    "I’m an MCA student at JNU with strong skills in frontend development, particularly in React. I love designing clean, user-friendly, and responsive interfaces. I’m always eager to learn new technologies and expand my expertise, bringing creativity and innovation to every project."
};

export const PROJECTS = [

  
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/RupamSaundik/PortFolio-",
  },
  {
    id: 2,
    name: "Food Ordering UI website",
    description:
      "Our food ordering website, built with ReactJS, offers a seamless and intuitive experience for customers. With a clean design and quick navigation, you can easily browse menus, place orders, and enjoy delicious meals delivered right to your door!",
    image: projectImage2,
    githubLink: "https://github.com/RupamSaundik/food-Ordering-UI-website",
  },
  {
    id: 3,
    name: "Generate Password",
    description:
      "Generate a secure password effortlessly with our password generator tool. Safeguard your online accounts with strong, unique passwords that are easy to create and difficult to crack!",
    image: projectImage3,
    githubLink: "https://github.com/RupamSaundik/Generate-Password",
  },
  {
    id: 4,
    name: "Amazone clone",
    description:
    
    "Create a stunning Amazon clone using just HTML and CSS for a sleek, user-friendly interface. Showcase products, categories, and a shopping cart layout while ensuring a responsive design for a seamless shopping experience on any device!",
    image: projectImage4,
    githubLink: "https://github.com/RupamSaundik/Amazon-clone",
  },
  {
    id: 5,
    name: "Razorpay",
    description:
"Build a modern payment gateway interface using Razorpay and Tailwind CSS for a sleek, responsive design. Seamlessly integrate payment options while ensuring a user-friendly experience that enhances transaction efficiency and security!",
    image: projectImage5,
    githubLink: "https://github.com/RupamSaundik/Razorpay3",
  },
 
];

export const BIO = [
  "I hold a B.Sc. in IT from Gossner College, Ranchi, and have strong proficiency in data structures and algorithms, with expertise in Java and C++. My background includes solid knowledge  of operating systems, database systems, and computer networks, as well as skills in SQL and web development frameworks like React JS. While my main focus is web development, I am eager to explore other areas of computer science. In my free time, I enjoy solving puzzles, dancing, and have recently started reading to expand my hobbies."
];

export const SKILLS = [
  {
    id: 1,
    name: "JAVA",
    image: Java
  },
  {
    id: 2,
    name: "HTML",
    image: HTML
  },
  {
    id: 3,
    name: "CSS",
    image: CSS
  },
  {
    id: 4,
    name: "JavaScript",
    image: JavaScript
  },
  {
    id: 5,
    name: "MySql",
    image: MySql 
  },
  {
    id: 6,
    name: "GitHub",
    image: GitHub 
  },
];


export const SOCIAL_MEDIA_LINKS = [

 
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },

  {
    href: "https://github.com/RupamSaundik",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "www.linkedin.com/in/rupam-saundik-818b7a280",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
