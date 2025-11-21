import { lazy, useState } from "react";
import Section from "../ui/tags/Section";
import SectionHeading from "../ui/SectionHeading";
import DetailsArea from "../ui/DetailsArea";
import { projectsDetails } from "../constants/projectDetails";
import ProjectCard from "../components/ProjectCard";
import { AnimatePresence } from "motion/react";

const VidTube = lazy(() => import("../components/projectDetails/VidTube"));
const PhotoFix = lazy(() => import("../components/projectDetails/PhotoFix"));

const Projects = () => {
  const [showProjectDetails, setShowProjectDetials] = useState(true);
  return (
    <>
      <Section label="projects">
        <SectionHeading
          emoji="🚀"
          title="Projects"
          setterFnc={setShowProjectDetials}
        />

        <AnimatePresence initial={false}>
          {showProjectDetails && (
            <DetailsArea>
              <div className="space-y-6">
                {projectsDetails.map((project) => {
                  return (
                    <ProjectCard
                      key={project.id}
                      projectData={project}
                      projectId={project.id}
                    />
                  );
                })}
              </div>
            </DetailsArea>
          )}
        </AnimatePresence>
      </Section>
    </>
  );
};

export default Projects;
