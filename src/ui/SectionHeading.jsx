import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { useLocation } from "react-router";

const SectionHeading = ({ emoji, title, setterFnc }) => {
  const [rotate, setRotate] = useState(false);
  const { pathname } = useLocation();

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
  return (
    <div
      className={`flex items-center lg:gap-3 gap-2 ${
        pathname === "/"
          ? "hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer px-2 sm:py-4 py-2"
          : ""
      }   lg:mt-12 mt-8 rounded-md`}
      onClick={pathname === "/" ? handleDropdown : () => {}}
      onKeyDown={pathname === "/" ? handleDropdownOnKeyDown : () => {}}
      {...(pathname === "/" ? { tabIndex: 0 } : {})}
    >
      {pathname === "/" && (
        <RiArrowDownSLine
          className={`sm:block hidden lg:text-3xl text-2xl text-textPrimary ${
            rotate ? "-rotate-90" : ""
          } transition ease-linear duration-150`}
          title="dropdown"
        />
      )}

      <div className="flex gap-1 items-center">
        <p className="lg:text-3xl text-2xl">{emoji}</p>
        <h2 className="text-textPrimary capitalize lg:text-2xl text-xl font-bold traking-wide">
          {title}
        </h2>
      </div>

      {pathname === "/" && (
        <RiArrowDownSLine
          className={`sm:hidden block lg:text-3xl text-2xl text-textPrimary ${
            rotate ? "rotate-90" : ""
          } transition ease-linear duration-150`}
          title="dropdown"
        />
      )}
    </div>
  );
};

export default SectionHeading;
