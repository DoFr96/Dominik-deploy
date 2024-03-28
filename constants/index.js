import { FaCheck } from "react-icons/fa6";
import { LiaStarSolid } from "react-icons/lia";

import { IoHomeOutline } from "react-icons/io5";
import { GrCatalog } from "react-icons/gr";
import { IoPricetagOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { PiSignIn } from "react-icons/pi";
import { RiAccountPinBoxLine } from "react-icons/ri";

import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { BsTiktok } from "react-icons/bs";

export const programs = [
  {
    id: "cardio",
    icon: "/icons/running.png",

    title: "Cardio Strength",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam sequi!",
  },
  {
    id: "fatloss",
    icon: "/icons/weight.png",
    title: "Weight Loss",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam sequi!",
  },
  {
    id: "musclegain",
    icon: "/icons/muscles.png",
    title: "Muscle Gain",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam sequi!",
  },
  {
    id: "nutrition",
    icon: "/icons/food.png",
    title: "Nutrition",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam sequi!",
  },
  {
    id: "rehabilitation",
    icon: "/icons/recovery.png",
    title: "Rehabilitaion",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam sequi!",
  },
];

export const transform = [
  { id: "transform-1", icon: <FaCheck />, desc: "Increase Muscle and Strengh" },
  {
    id: "transform-2",
    icon: <FaCheck />,
    desc: "Be healtier than before and feel better",
  },
  {
    id: "transform-3",
    icon: <FaCheck />,
    desc: "Lose extra wait and get back into shape",
  },
];

export const packages = [
  {
    id: "basic-packages",
    title: "Basic Package",
    price: "$25",
    duration: "per month",
    icon: <FaCheck />,
    options: [
      "Unlimited Gym Acces",
      "2x Fitness Consultant",
      "Nutrition Tracking",
      "1x Free Supplement",
      "3 Days per week",
      "Personal Trainer",
    ],
  },
  {
    id: "mid-packages",
    title: "Mid Package",
    price: "$55",
    duration: "per month",
    icon: <FaCheck />,
    options: [
      "Unlimited Gym Acces",
      "4x Fitness Consultant",
      "Nutrition Tracking",
      "3x Free Supplement",
      "5 Days per week",
      "Personal Trainer",
    ],
    offer: "best",
  },
  {
    id: "pro-packages",
    title: "Pro Package",
    price: "$75",
    duration: "per month",
    icon: <FaCheck />,
    options: [
      "Unlimited Gym Acces",
      "7x Fitness Consultant",
      "Nutrition Tracking",
      "5x Free Supplement",
      "Gym Card",
      "Personal Trainer",
    ],
  },
  {
    id: "athlete-packages",
    title: "Athlete Package",
    price: "$105",
    duration: "per month",
    icon: <FaCheck />,
    options: [
      "Unlimited Gym Acces",
      "Gym Clothes",
      "All Training Program",
      "Free Fitness Consultant",
      "Free Supplement",
      "Gym Card",
    ],
  },
];

export const testimonials = [
  {
    name: `Saša`,
    img: `/images/profilephoto.jpg`,
    role: "Investor",
    position: 1,
    stars: Array(5).fill(<LiaStarSolid />),
    review: `"Working with Andrej, I’ve achieved challenging career objectives, improved personal and professional relationships, and found greater balance in my life."`,
  },
  {
    name: `Dominik`,
    img: `/images/profilephoto.jpg`,
    role: "IT",
    position: 2,
    stars: Array(5).fill(<LiaStarSolid />),
    review: `"In just a few short months of working with Andrej, I have experienced what I can only describe as exponential internal growth. Andrej’s unique insight, his attention to the not so obvious, lends to his overall spirit and excellence as a life coach."`,
  },
  {
    name: `Maša`,
    img: `/images/profilephoto.jpg`,
    role: "Dance",
    position: 3,
    stars: Array(5).fill(<LiaStarSolid />),
    review: `"I worked with Andrej to address challenges I was facing as a working mothis seeking a life transition. He brought a wealth of resources and practical tools to help me set goals, clarify my values, and explore avenues right away. I appreciate Andrej’s versatility as a thought partner, ally, and coach."`,
  },
  {
    name: `Anja`,
    img: `/images/profilephoto.jpg`,
    role: "Sailing",
    position: 4,
    stars: Array(5).fill(<LiaStarSolid />),
    review: `"My experience with Andrej was a huge success! I was able to easily identify the areas I wanted to work on and incorporate strategies to feel empowered and move forward. Amber helped me to identify a new mental framework for relationships whise I can express what I need without feeling guilty."`,
  },
  {
    name: `Igor`,
    img: `/images/profilephoto.jpg`,
    role: "Business Owner",
    position: 5,
    stars: Array(5).fill(<LiaStarSolid />),
    review: `"Andrej is an exceptional life and career coach. He is a joy to work with due to his professional manner, exceptional communication skills and knowledge about industries. I highly recommend him."`,
  },
];

export const contact = [
  { id: "contact-1", type: "Phone", info: "+385 (91) 100 7000" },
  { id: "contact-2", type: "Email", info: "rupa@gmail.com " },
  { id: "contact-3", type: "Address", info: "Zagreb" },
  {
    id: "contact-4",
    type: "Open hours",
    info: " Mon – Fri : 09.00 – 18.00 Sat – Sun : 10.00 – 17.00",
  },
];

export const socialMedia = [
  {
    id: "instagram",
    icon: <IoLogoInstagram size={30} style={{ fill: "black" }} />,
    link: "https://www.instagram.com/",
  },
  {
    id: "facebook",
    icon: <BsTiktok size={30} style={{ fill: "black" }} />,
    link: "https://www.tiktok.com/",
  },
  {
    id: "twitter",
    icon: <FaYoutube size={30} style={{ fill: "red" }} />,
    link: "https://www.youtube.com/",
  },
];

export const navLinks = [
  { title: "Home", href: "/", icon: <IoHomeOutline /> },
  { title: "Program", href: "/#program", icon: <GrCatalog /> },
  { title: "Pricing", href: "/#package", icon: <IoPricetagOutline /> },
  { title: "Contact", href: "/#contact", icon: <GoPeople /> },
];

export const navLinksAccount = [
  { title: "Login", href: "/login", icon: <PiSignIn /> },
  { title: "Register", href: "/register", icon: <RiAccountPinBoxLine /> },
];
