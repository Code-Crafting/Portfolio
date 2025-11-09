import AnchorLink from "../ui/AnchorLink";
import { FaLink } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import CV from "../assets/files/CV.pdf";

const Profile = () => {
  return (
    <section aria-label="profile">
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
        <AnchorLink text="Share" icon={FaLink} />
        <AnchorLink
          text="Download CV"
          addDownload={true}
          path={CV}
          icon={FaDownload}
        />
      </div>
    </section>
  );
};

export default Profile;
