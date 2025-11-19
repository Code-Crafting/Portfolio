import { shortDescription } from "../lib/shortDescription";
import AnchorLink from "../ui/links/AnchorLink";
import Tech from "../ui/Tech";

const ProjectCard = ({ projectData, setProjectId }) => {
  const { emoji, title, description, links, techStack, gradient } = projectData;

  const handleReadMore = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      setProjectId();
    }
  };
  return (
    <div className="border border-gray-300 rounded-md lg:p-6 p-4 sm:grid lg:grid-cols-[80px_1fr] sm:grid-cols-[60px_1fr] lg:gap-6 gap-4">
      {/* logo */}
      <div
        className={`450px:w-20 w-15 mb-2 sm:w-auto aspect-square grid place-items-center rounded-md lg:text-5xl text-4xl ${gradient}`}
      >
        {emoji}
      </div>

      <div>
        {/* title */}
        <h3 className="text-textPrimary lg:text-xl text-lg font-bold">
          {title}
        </h3>

        {/* description */}
        <p className="text-textSecondary lg:text-lg mt-1 ">
          {shortDescription(description)}...
          <span
            className="text-blue-500 cursor-pointer lg:text-lg text-sm"
            tabIndex={0}
            onKeyDown={handleReadMore}
            onClick={setProjectId}
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
                color="text-blue-500 group-hover:text-blue-700"
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
