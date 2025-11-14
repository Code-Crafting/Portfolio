import AnchorLink from "../ui/links/AnchorLink";
import { FaLink } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import CV from "../assets/files/CV.pdf";
import { motion } from "motion/react";

const Profile = () => {
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
          <h1 className="text-4xl font-bold tracking-wide">Monojit Sen</h1>
          <p className="text-textSecondary text-xl mt-1">Frontend Developer</p>
          <p className="text-textSecondary mt-1.5">
            ReactJS | JavaScript | TailwindCSS
          </p>
        </div>
      </div>

      <div className="flex gap-8 mt-4 pl-6">
        <AnchorLink text="Share" icon={FaLink} label="Share portfoliio" />
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
