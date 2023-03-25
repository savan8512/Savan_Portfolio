import {FavoriteBorder, Public, PersonOutlined, AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube, Javascript } from "@mui/icons-material"
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import { FaBootstrap , FaNode } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { DiJavascript1 } from "react-icons/di";

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/services",
    text: "Skills",
  },
  {
    url: "/portfolio",
    text: "Portfolio",
  },
  {
    url: "/testimonials",
    text: "Study",
  },
  {
    url: "/blog",
    text: "Blog",
  },
  {
    url: "/contact",
    text: "Contact",
  },
]
export const home = [
  {
    text: "HELLO I'M",
    name: "SAVAN VADODARIYA",
    post: "MERN STACK DEVELOPER",
    desc: "Apart from being a web developer, I enjoy most of my time being outdoors. sometimes i am going a small trip with my friends and enjoy my life.When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology in the front-end web development world.",
  },
]
export const about = [
  {
    desc: "As a full-stack developer, I have a comprehensive understanding of both front-end and back-end development technologies. My proficiency in HTML, CSS, and JavaScript allows me to design and develop visually appealing and responsive web interfaces. In addition, my some medium level expertise in back-end languages such as Node js. I have experience working with popular web development frameworks such as React Js , Node.Js, basic database management systems like MongoDB.",
    desc1: "Also i am seeking an opportunity in a company where i can use my skill and education to company meet and surpass its goal.",
    cover: "./images/savan2.png",
  },
]
export const services = [
  {
    id: 1,
    icon: <HtmlIcon />,
    title: "HTML5",
    desc: "HTML5 is a markup language used for structuring and presenting content on the World Wide Web.",
  },
  {
    id: 2,
    icon: <CssIcon />,
    title: "CSS3",
    desc: "Cascading Style Sheets Level 3 (CSS3) is the iteration of the CSS standard used in the styling and formatting of Web pages.",
  },
  {
    id: 3,
    icon: <FaBootstrap />,
    title: "Bootstrap",
    desc: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development",
  },
  {
    id: 4,
    icon: <DiJavascript1 />,
    title: "JavaScript",
    desc: "JavaScript is a dynamic computer programming language , interpreted programming language with oop capabilities.",
  },
  {
    id: 5,
    icon: <RiReactjsLine />,
    title: "React Js",
    desc: "React is a free and open-source front-end JavaScript library for building user interfaces based on components.",
  },
  {
    id: 6,
    icon: <FaNode />,
    title: "Node Js",
    desc: "Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine",
  },
]
export const project = [
  {
    id: 1,
    icon: <><HtmlIcon />'<CssIcon /></>,
    num: "80",
    title: "HTML/CSS",
  },
  {
    id: 2,
    icon: <Javascript />,
    num: "75",
    title: "Javascript",
  },
  {
    id: 3,
    icon: <RiReactjsLine />,
    num: "80",
    title: "React Js",
  },
  {
    id: 4,
    icon: <FaNode />,
    num: "70",
    title: "Node Js",
  },
]
export const portfolio = [
  {
    id: 1,
    cover: "../images/port/port1.jpg",
    name: "API based app",
    category: "marketing",
    title: "Weather App",
  },
  {
    id: 2,
    cover: "../images/port/port2.jpg",
    name: "Landing page",
    category: "design",
    title: "Design",
  },
  {
    id: 3,
    cover: "../images/port/port3.jpg",
    name: "Movie Detail platform",
    category: "development",
    title: "IMDB",
  },
  {
    id: 4,
    cover: "../images/port/port4.jpg",
    name: "API based app",
    category: "marketing",
    title: "Quote's Generator",
  },
  {
    id: 5,
    cover: "../images/port/port5.jpg",
    name: "Business Overview",
    category: "design",
    title: "SK Cofee",
  },
  {
    id: 6,
    cover: "../images/port/port6.jpg",
    name: "Design",
    category: "development",
    title: "Resume",
  },
]
export const testimonials = [
  {
    id: 1,
    text: "I completed Secondary School Certificate in March-2019 at wisdom international school. with Percentile Rank 87.91.",
    image: "./images/testimonials/team-1.png",
    name: "Wisdom international school",
    post: "S.S.C",
  },
  {
    id: 2,
    text: "I completed Higher Secondary School Certificate in May-2021 at wisdom international school. with Percentile Rank 83.44.",
    image: "./images/testimonials/team-1.png",
    name: "Wisdom international school",
    post: "H.S.C",
  },
  {
    id: 2,
    text: "i completed my MERN stack development cource at creative design and multimedia institute in jan-2023.",
    image: "./images/testimonials/team-2.png",
    name: "Creative Design and Multimedia Institute",
    post: "MERN stack development",
  },
  {
    id: 3,
    text: "now running Bachelors's in Computer Application at Swarrnim Startup & Innovation University.",
    image: "./images/testimonials/team-3.png",
    name: "Swarrnim Startup & Innovation University",
    post: "B.C.A",
  },
]
export const blog = [
  {
    id: 1,
    title: "Introducing the New JSX Transform",
    date: "SEPTEMBER 22, 2020",
    author: "Luna Ruan",
    desc: "Although React 17 doesn’t contain new features, it will provide support for a new version of the JSX transform. In this post, we will describe what it is and how to try it.",
    cover: "./images/blog/b1.png",
  },
  {
    id: 2,
    title: "Introducing the New React DevTools",
    date: "AUGUST 15, 2019",
    author: "Brian Vaughn",
    desc: "A lot has changed in version 4! At a high level, this new version should offer significant performance gains and an improved navigation experience.",
    cover: "./images/blog/b2.png",
  },
  {
    id: 3,
    title: "Prerequisites",
    date: "march 7, 2023",
    author: "Dorian Gray",
    desc: "It will help if those starting this tutorial have a basic understanding of HTTP Protocol and possess some knowledge of HTML and CSS.",
    cover: "./images/blog/b3.png",
  },
]
export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "117, shreekunj res,kamrej,",
    text2: "Surat, Gujarat",
  },
  {
    icon: <PhoneIphone />,
    text1: "+91 81413 54630",
    text2: "+91 99241 56538",
  },
  {
    icon: <EmailOutlined />,
    text1: "savan8102003@gmail.com"
  },
]
export const social = [
  {
    icon: <Facebook />,
  },
  {
    icon: <Twitter />,
  },
  {
    icon: <Instagram />,
  },
  {
    icon: <YouTube />,
  },
]
