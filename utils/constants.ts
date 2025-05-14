import { title } from "process";

export const menuLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/#about",
  },

  {
    name: "Blogs",
    url: "/#blogs",
  },
  {
    name: "Projects",
    url: "/projects",
  },

  {
    name: "Contact",
    url: "/contact",
  },
];
export const services = [
  {
    title: "Web Development",
    description: `Experienced in full-stack development,
       e-commerce, WordPress, Next.js, MongoDB,
        React, Node.js, and Firebase.`,
  },
  {
    title: "Mobile App Development",
    description: `Specializing in Progressive 
      Web Applications (PWAs) for a seamless
       and responsive web-like mobile experience.`,
  },
  {
    title: "UI/UX Design",
    description: `Crafting visually stunning and user-centric
       interfaces using Figma for intuitive digital experiences.`,
  },
];
export const webUrl: string =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : `https://rightson.xyz`;
export const baseUrl = `${webUrl}/api`;
