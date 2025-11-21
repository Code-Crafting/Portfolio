import { RiArrowDownSLine } from "react-icons/ri";
import { useLocation } from "react-router";
import { getHeadingColor } from "../lib/color/getHeadingColor";
import { useTheme } from "../contexts/themeContext";

const Dropdown = ({ rotate, deg, visibility = "sm:block hidden" }) => {
  const { pathname } = useLocation();
  const [isDark] = useTheme();
  return (
    <>
      {pathname === "/" && (
        <RiArrowDownSLine
          className={`${visibility} lg:text-3xl text-2xl ${getHeadingColor(
            isDark
          )} ${rotate ? deg : ""} transition ease-linear duration-150`}
          title="dropdown"
        />
      )}
    </>
  );
};

export default Dropdown;
