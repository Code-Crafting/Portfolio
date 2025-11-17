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
      className={`flex items-center gap-3 ${
        pathname === "/"
          ? "hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer px-2 py-4"
          : ""
      }   mt-12 rounded-md`}
      onClick={handleDropdown}
      onKeyDown={handleDropdownOnKeyDown}
      {...(pathname === "/" ? { tabIndex: 0 } : {})}
    >
      {pathname === "/" && (
        <RiArrowDownSLine
          className={`text-3xl text-textPrimary ${
            rotate ? "-rotate-90" : ""
          } transition ease-linear duration-150`}
          title="dropdown"
        />
      )}

      <div className="flex gap-1 items-center">
        <p className="text-3xl">{emoji}</p>
        <h2 className="text-textPrimary capitalize text-2xl font-bold traking-wide">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default SectionHeading;
