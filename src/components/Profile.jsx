import AnchorLink from "../ui/links/AnchorLink";
import { BsFillShareFill } from "react-icons/bs";
import { FaDownload } from "react-icons/fa6";
import CV from "../assets/files/CV.pdf";
import { motion } from "motion/react";
import { getParaColor } from "../lib/color/getParaColor";
import { getHeadingColor } from "../lib/color/getHeadingColor";
import { useTheme } from "../contexts/themeContext";

const Profile = () => {
  const [isDark] = useTheme();
  // share feature
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Monojit Sen — Frontend Developer",
          text: "Check out his portfolio!",
          url: window.location.href,
        });
      } catch (error) {
        console.log("Share Cancelled", error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("link copied to clipboard!");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      aria-label="profile"
    >
      <div className="flex flex-col items-center 450px:flex-row 450px:gap-2">
        {/* icon */}
        <p className="text-center lg:text-8xl 450px:text-7xl text-8xl">🧑‍💻</p>

        {/* details */}
        <div className="text-center 450px:text-left">
          <h1
            className={`${getHeadingColor(
              isDark
            )} lg:text-4xl text-3xl font-bold tracking-wide`}
          >
            Monojit Sen
          </h1>
          <p
            className={`${getParaColor(
              isDark
            )} lg:text-xl text-lg lg:mt-1 mt-0.5`}
          >
            Frontend Developer
          </p>
          <p className={`${getParaColor(isDark)} lg:mt-1.5 mt-1`}>
            ReactJS | JavaScript | TailwindCSS
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-4 450px:gap-8 450px:pl-6 450px:justify-start">
        {/* share btn */}
        <button
          className={`flex gap-2 items-center cursor-pointer text-sm lg:text-lg  ${getParaColor(
            isDark
          )} ${
            isDark ? "hover:text-whiteLike" : "hover:text-gray-800"
          } transition duration-300`}
          onClick={handleShare}
        >
          <BsFillShareFill title="share" />
          <p>Share</p>
        </button>

        {/* download cv */}
        <AnchorLink
          text="Download CV"
          addDownload={true}
          path={CV}
          icon={FaDownload}
          label="Download CV"
          color={`${getParaColor(isDark)} ${
            isDark ? "hover:text-whiteLike" : "hover:text-gray-800"
          }`}
        />
      </div>
    </motion.section>
  );
};

export default Profile;
