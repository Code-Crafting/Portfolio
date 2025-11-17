import AnchorLink from "../ui/links/AnchorLink";
import { BsFillShareFill } from "react-icons/bs";
import { FaDownload } from "react-icons/fa6";
import CV from "../assets/files/CV.pdf";
import { motion } from "motion/react";

const Profile = () => {
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
      <div className="flex items-center gap-2">
        {/* icon */}
        <p className=" text-8xl ">🧑‍💻</p>

        {/* details */}
        <div>
          <h1 className="text-textPrimary text-4xl font-bold tracking-wide">
            Monojit Sen
          </h1>
          <p className="text-textSecondary text-xl mt-1">Frontend Developer</p>
          <p className="text-textSecondary mt-1.5">
            ReactJS | JavaScript | TailwindCSS
          </p>
        </div>
      </div>

      <div className="flex gap-8 mt-4 pl-6 ">
        {/* share btn */}
        <button
          className="flex gap-2 items-center cursor-pointer text text-textSecondary hover:text-gray-800"
          onClick={handleShare}
        >
          <BsFillShareFill />
          <p>Share</p>
        </button>

        {/* download cv */}
        <AnchorLink
          text="Download CV"
          addDownload={true}
          path={CV}
          icon={FaDownload}
          label="Download CV"
        />
      </div>
    </motion.section>
  );
};

export default Profile;
