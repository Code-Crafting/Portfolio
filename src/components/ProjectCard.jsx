import { useTheme } from "../contexts/themeContext";
import { getAnchorColor } from "../lib/color/getAnchorColor";
import { getHeadingColor } from "../lib/color/getHeadingColor";
import { getParaColor } from "../lib/color/getParaColor";
import { shortDescription } from "../lib/shortDescription";
import AnchorLink from "../ui/links/AnchorLink";
import Tech from "../ui/Tech";

const ProjectCard = ({ projectData }) => {
  const [isDark] = useTheme();
  const { emoji, title, description, links, techStack, gradient } = projectData;

  const handleReadMore = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      setProjectId();
    }
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
        <h3 className={`${getHeadingColor()} lg:text-2xl text-lg font-bold`}>
          {title}
        </h3>

        {/* description */}
        <p className={`${getParaColor()} lg:text-lg mt-1 `}>
          {shortDescription(description)}...
          <span
            className={`${
              isDark ? "text-blue-400" : "text-blue-500"
            } cursor-pointer lg:text-lg text-sm`}
            tabIndex={0}
            onKeyDown={handleReadMore}
          >
            read more
          </span>
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
                color={getAnchorColor()}
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
