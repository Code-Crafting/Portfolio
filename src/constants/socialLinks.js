import { LuGithub } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";

export const socialLinks = [
  {
    id: crypto.randomUUID(),
    icon: LuGithub,
    title: "GitHub",
    iconColor: "text-gray-500",
    bgColor: "bg-gray-300",
    link: "https://www.github.com/Code-Crafting",
  },
  {
    id: crypto.randomUUID(),
    icon: FaLinkedin,
    title: "LinkedIn",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-200",
    link: "https://www.linkedin.com/in/monojit-sen-5a0968353",
  },
];
