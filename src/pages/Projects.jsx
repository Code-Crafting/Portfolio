import { useState } from "react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import DetailsArea from "../ui/DetailsArea";
import { projectsDetails } from "../constants/projectDetails";
import { shortDescription } from "../lib/shortDescription";
import AnchorLink from "../ui/links/AnchorLink";
import Tech from "../ui/Tech";

const Projects = () => {
  const [showProjectDetails, setShowProjectDetials] = useState(true);
  return (
    <Section label="projects">
      <SectionHeading
        emoji="🚀"
        title="Projects"
        setterFnc={setShowProjectDetials}
      />

      {showProjectDetails && (
        <DetailsArea>
          <div className="space-y-4">
            {projectsDetails.map((project) => {
              const {
                id,
                emoji,
                title,
                description,
                links,
                techStack,
                gradient,
              } = project;
              return (
                <div
                  key={id}
                  className="border border-gray-300 rounded-md p-6 grid grid-cols-[80px_1fr] gap-6"
                >
                  {/* logo */}
                  <div
                    className={`aspect-square grid place-items-center rounded-md text-5xl ${gradient}`}
                  >
                    {emoji}
                  </div>

                  <div className="">
                    {/* title */}
                    <h3 className="text-xl font-bold">{title}</h3>

                    {/* description */}
                    <p className="text-textSecondary text-lg mt-1 ">
                      {shortDescription(description)}...
                      <span
                        className="text-blue-500 cursor-pointer text-md"
                        tabIndex={0}
                      >
                        read more
                      </span>
                    </p>

                    {/* tech stack */}
                    <div className="flex items-center gap-2 mt-2">
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
            })}
          </div>
        </DetailsArea>
      )}
    </Section>
  );
};

export default Projects;
