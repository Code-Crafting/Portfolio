import { lazy, useEffect, useState } from "react";
import Section from "../ui/tags/Section";
import SectionHeading from "../ui/SectionHeading";
import DetailsArea from "../ui/DetailsArea";
import { projectsDetails } from "../constants/projectDetails";
import ProjectCard from "../components/ProjectCard";
import CloseBtn from "../ui/CloseBtn";
import ProjectDetails from "../components/projectDetails/ProjectDetails";
import { filterProject } from "../lib/filterProject";
import { AnimatePresence } from "motion/react";
import Modal from "../ui/modal/Modal";
import LazyWrapper from "../components/LazyWrapper";

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
                  return <ProjectCard key={project.id} projectData={project} />;
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
