import { RxSlash } from "react-icons/rx";
import AnchorLink from "../../ui/links/AnchorLink";

const ProjectHeader = ({ title, github, live, description }) => {
  return (
    <>
      <h3 className="text-3xl font-bold text-textPrimary mb-1">{title}</h3>

      {/* external links */}
      <div className="flex items-center gap-1">
        <AnchorLink
          path={live}
          text="Live"
          textSize="text-xl"
          color="text-blue-500 hover:text-blue-600"
        />
        <RxSlash className="text-xl text-textSecondary" />
        <AnchorLink
          path={github}
          text="Repo"
          textSize="text-xl"
          color="text-blue-500 hover:text-blue-600"
        />
      </div>

      <p className="text-lg mt-2 text-textSecondary">{description}</p>
    </>
  );
};

export default ProjectHeader;
