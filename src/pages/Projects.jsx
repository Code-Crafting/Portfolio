import { lazy, Suspense, useState } from "react";
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

const VidTube = lazy(() => import("../components/projectDetails/VidTube"));
const PhotoFix = lazy(() => import("../components/projectDetails/PhotoFix"));

const Projects = () => {
  const [showProjectDetails, setShowProjectDetials] = useState(true);
  const [modal, setModal] = useState({ show: false, projectId: "" });
  const projectTitle =
    modal.projectId && filterProject(modal.projectId)[0].title;
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
                      setProjectId={() =>
                        setModal({ show: true, projectId: project.id })
                      }
                    />
                  );
                })}
              </div>
            </DetailsArea>
          )}
        </AnimatePresence>
      </Section>

      <AnimatePresence>
        {modal.show && (
          <Modal width="max-w-5xl">
            <div>
              {/* closeBtn */}
              <CloseBtn
                size="text-3xl"
                onClick={() => setModal({ show: false, projectid: "" })}
              />

              {/* content */}
              <div className="h-[500px] overflow-y-auto hide-track mt-2 px-2">
                <ProjectDetails projectId={modal.projectId}>
                  <Suspense fallback={<p>Loading...</p>}>
                    {projectTitle === "VidTube" ? (
                      <VidTube projectId={modal.projectId} />
                    ) : (
                      <PhotoFix projectId={modal.projectId} />
                    )}
                  </Suspense>
                </ProjectDetails>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
