import { projectsDetails } from "../constants/projectDetails";

export const filterProject = (projectId) =>
  projectsDetails.filter((project) => project.id === projectId);
