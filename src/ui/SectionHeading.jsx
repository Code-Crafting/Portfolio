import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const SectionHeading = ({ emoji, title, setShowetails, pathname }) => {
  const [rotate, setRotate] = useState(false);

  const handleDropdown = () => {
    setRotate((prev) => !prev);
    setShowetails((prev) => !prev);
  };

  const handleDropdownOnKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      setRotate((prev) => !prev);
      setShowetails((prev) => !prev);
    }
  };
  return (
    <div
      className={`flex items-center gap-3 ${
        pathname === "/" ? "hover:bg-gray-300 cursor-pointer p-2" : ""
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
        <p className="text-2xl">{emoji}</p>
        <h2 className="capitalize text-2xl font-bold traking-wide">{title}</h2>
      </div>
    </div>
  );
};

export default SectionHeading;
