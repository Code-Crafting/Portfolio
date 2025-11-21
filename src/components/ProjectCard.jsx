import { Link } from "react-router";
import { useTheme } from "../contexts/themeContext";
import { getAnchorColor } from "../lib/color/getAnchorColor";
import { getHeadingColor } from "../lib/color/getHeadingColor";
import { getParaColor } from "../lib/color/getParaColor";
import { shortDescription } from "../lib/shortDescription";
import AnchorLink from "../ui/links/AnchorLink";
import Tech from "../ui/Tech";
import { useContext } from "react";
import { CurrentPageContext } from "../contexts/currentPageContext";

const ProjectCard = ({ projectData, projectId }) => {
  const [isDark] = useTheme();
  const [, setCurrentPage] = useContext(CurrentPageContext);
  const { emoji, title, description, links, techStack, gradient } = projectData;

  const handleReadMore = () => {
    setCurrentPage(null);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`border ${
        isDark ? "border-borderDark" : "border-gray-300 "
      } rounded-md lg:p-6 p-4 sm:grid lg:grid-cols-[80px_1fr] sm:grid-cols-[60px_1fr] lg:gap-6 gap-4`}
    >
      {/* logo */}
      <div
        className={`450px:w-20 w-15 mb-2 sm:w-auto aspect-square grid place-items-center rounded-md lg:text-5xl text-4xl ${gradient}`}
      >
        {emoji}
      </div>

      <div>
        {/* title */}
        <h3
          className={`${getHeadingColor(isDark)} lg:text-2xl text-lg font-bold`}
        >
          {title}
        </h3>

        {/* description */}
        <p className={`${getParaColor(isDark)} lg:text-lg mt-1 `}>
          {shortDescription(description)}...
          <Link
            to={`/project/${projectId}`}
            className={`${
              isDark ? "text-blue-400" : "text-blue-500"
            } cursor-pointer lg:text-lg text-sm`}
            tabIndex={0}
            onClick={handleReadMore}
            onKeyDown={handleReadMore}
          >
            read more
          </Link>
        </p>

        {/* tech stack */}
        <div className="flex flex-wrap items-center gap-2 mt-2">
          {techStack.map((tech, i) => {
            return <Tech key={i} tech={tech} />;
          })}
        </div>

        {/* links */}
        <div className="flex gap-6 mt-3">
          {links.map((link, i) => {
            const { linkName, href, icon, iconTitle, label } = link;
            return (
              <AnchorLink
                key={i}
                path={href}
                text={linkName}
                icon={icon}
                color={getAnchorColor(isDark)}
                iconItile={iconTitle}
                label={label}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
