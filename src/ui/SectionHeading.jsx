import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { useLocation } from "react-router";
import { getHeadingColor } from "../lib/color/getHeadingColor";
import { useTheme } from "../contexts/themeContext";
import Dropdown from "./Dropdown";

const SectionHeading = ({ emoji, title, setterFnc }) => {
  const [rotate, setRotate] = useState(false);
  const { pathname } = useLocation();
  const [isDark] = useTheme();

  const handleDropdown = () => {
    setRotate((prev) => !prev);
    setterFnc((prev) => !prev);
  };

  const handleDropdownOnKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      setRotate((prev) => !prev);
      setterFnc((prev) => !prev);
    }
  };

  const getHoverColor = () => {
    if (pathname === "/") {
      const commonStyle =
        "transition duration-300 ease-in-out cursor-pointer  sm:p-4 p-2";
      return isDark
        ? commonStyle + "  hover:bg-borderDark"
        : commonStyle + " hover:bg-gray-200";
    }
    return "";
  };
  return (
    <div
      className={`flex items-center lg:gap-3 gap-2 group ${getHoverColor()} lg:mt-12 mt-8 rounded-md`}
      onClick={pathname === "/" ? handleDropdown : () => {}}
      onKeyDown={pathname === "/" ? handleDropdownOnKeyDown : () => {}}
      {...(pathname === "/" ? { tabIndex: 0 } : {})}
    >
      <Dropdown rotate={rotate} deg="-rotate-90" />
      <div className="flex gap-1 items-center">
        <p className="lg:text-3xl text-2xl">{emoji}</p>
        <h2
          className={`${getHeadingColor()} capitalize lg:text-2xl text-xl font-bold traking-wide`}
        >
          {title}
        </h2>
      </div>
      <Dropdown rotate={rotate} deg="rotate-90" visibility="sm:hidden block" />{" "}
      {/* for smaller screens*/}
    </div>
  );
};

export default SectionHeading;
