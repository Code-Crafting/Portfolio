import { useState } from "react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import DetailsArea from "../ui/DetailsArea";
import { projectsDetails } from "../constants/projectDetails";
import ProjectCard from "../components/ProjectCard";
import Modal from "../ui/modal/Modal";
import CloseBtn from "../ui/CloseBtn";
import VidTube from "../components/projectDetails/VidTube";
import ProjectDetails from "../components/projectDetails/ProjectDetails";
import PhotoFix from "../components/projectDetails/PhotoFix";
import { filterProject } from "../lib/filterProject";

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

        {showProjectDetails && (
          <DetailsArea>
            <div className="space-y-4">
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
      </Section>

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
                {projectTitle === "VidTube" ? (
                  <VidTube projectId={modal.projectId} />
                ) : (
                  <PhotoFix projectId={modal.projectId} />
                )}
              </ProjectDetails>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Projects;
