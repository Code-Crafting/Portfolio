import { useParams } from "react-router";
import Main from "../ui/tags/Main";
import VidTube from "../components/projectDetails/VidTube";
import { filterProject } from "../lib/filterProject";
import PhotoFix from "../components/projectDetails/PhotoFix";
import { getHeadingColor } from "../lib/color/getHeadingColor";
import AnchorLink from "../ui/links/AnchorLink";
import { getAnchorColor } from "../lib/color/getAnchorColor";
import { getParaColor } from "../lib/color/getParaColor";
import { useTheme } from "../contexts/themeContext";

const ProjectInfo = () => {
  const { projectId } = useParams();
  const [isDark] = useTheme();
  const { title, description, links, techStack } = filterProject(projectId);
  return (
    <Main>
      <h2
        className={`${getHeadingColor(isDark)} lg:text-4xl text-3xl font-bold`}
      >
        {title}
      </h2>
      <div className="flex gap-2 items-center lg:mt-2 mt-1">
        <AnchorLink
          path={links[1].href}
          text="Live"
          textSize="text-xl"
          color={getAnchorColor(isDark)}
        />
        <span className={`${getParaColor(isDark)} text-lg`}>/</span>
        <AnchorLink
          path={links[0].href}
          text="Repo"
          textSize="text-xl"
          color={getAnchorColor(isDark)}
        />
      </div>

      <p className={`${getParaColor(isDark)} lg:text-xl text-lg lg:mt-4 mt-2`}>
        {description}
      </p>

      {title === "VidTube" ? (
        <VidTube techStack={techStack} />
      ) : (
        <PhotoFix techStack={techStack} />
      )}
    </Main>
  );
};

export default ProjectInfo;
