import { RxSlash } from "react-icons/rx";
import AnchorLink from "../../ui/links/AnchorLink";
import { getHeadingColor } from "../../lib/color/getHeadingColor";
import { getAnchorColor } from "../../lib/color/getAnchorColor";
import { getParaColor } from "../../lib/color/getParaColor";
import { useTheme } from "../../contexts/themeContext";

const ProjectHeader = ({ title, github, live, description }) => {
  const [isDark] = useTheme();
  return (
    <>
      <h3 className={`text-3xl font-bold ${getHeadingColor(isDark)} mb-1`}>
        {title}
      </h3>

      {/* external links */}
      <div className="flex items-center gap-1">
        <AnchorLink
          path={live}
          text="Live"
          textSize="text-xl"
          color={getAnchorColor(isDark)}
        />
        <RxSlash className={`text-xl ${getParaColor(isDark)}`} />
        <AnchorLink
          path={github}
          text="Repo"
          textSize="text-xl"
          color={getAnchorColor(isDark)}
        />
      </div>

      <p className="text-lg mt-2 text-textSecondary">{description}</p>
    </>
  );
};

export default ProjectHeader;
