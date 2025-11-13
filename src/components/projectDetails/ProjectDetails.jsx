import { filterProject } from "../../lib/filterProject";
import ProjectHeader from "./ProjectHeader";

const ProjectDetails = ({ children, projectId }) => {
  const { title, description, links } = filterProject(projectId)[0];
  return (
    <>
      <ProjectHeader
        title={title}
        description={description}
        github={links[0].href}
        live={links[1].href}
      />

      {children}
    </>
  );
};

export default ProjectDetails;
