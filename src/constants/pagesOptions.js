import { LuHouse } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import { LuAward } from "react-icons/lu";
import { IoMdCode } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";

export const pagesOptions = [
  { id: 1, icon: LuHouse, text: "Home", link: "/" },
  {
    id: 2,
    icon: FiUser,
    text: "About",
    link: "/about",
  },
  {
    id: 3,
    icon: IoMdCode,
    text: "Projects",
    link: "/projects",
  },
  {
    id: 4,
    icon: LuAward,
    text: "Skills",
    link: "/skills",
  },
  {
    id: 5,
    icon: MdMailOutline,
    text: "Contact",
    link: "/contact",
  },
];
