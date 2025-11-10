import { LuGithub } from "react-icons/lu";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

export const projectsDetails = [
  {
    id: crypto.randomUUID(),
    emoji: "📽️",
    title: "VidTube",
    description:
      "VidTube is a video streaming platform built with ReactJS and powered by the YouTube Data API. It allows users to seamlessly watch, explore, and engage with videos while maintaining fast performance and clean UI.",
    links: [
      {
        linkName: "GitHub",
        href: "https://github.com/Code-Crafting/Video-Streaming-Website",
        iconTitle: "githubLink",
        icon: LuGithub,
        label: "Open Github",
      },
      {
        linkName: "Live Demo",
        href: "https://vid-tube-kappa-five.vercel.app/",
        iconTitle: "liveLink",
        icon: LuSquareArrowOutUpRight,
        label: "View live demo",
      },
    ],
    techStack: ["ReactJS", "TailwindCSS", "YouTube Data API"],
    gradient: "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400",
  },
  {
    id: crypto.randomUUID(),
    title: "PhotoFix AI",
    emoji: "🖼️",
    description:
      "PhotoFix AI is a modern and responsive image editing web app that allows users to easily edit, customize, and download images directly from their browser.It supports both dark and light themes, providing a smooth, minimal, and user-friendly editing experience.",

    links: [
      {
        linkName: "GitHub",
        href: "https://github.com/Code-Crafting/PhotoFix-AI",
        iconTitle: "githubLink",
        icon: LuGithub,
        label: "Open Github",
      },
      {
        linkName: "Live Demo",
        href: "https://photo-fix-ai-hjln.vercel.app/",
        iconTitle: "liveLink",
        icon: LuSquareArrowOutUpRight,
        label: "View live demo",
      },
    ],
    techStack: ["ReactJS", "TailwindCSS", "ImageKit.io"],
    gradient: "bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400",
  },
];
