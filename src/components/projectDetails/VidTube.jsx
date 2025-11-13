import { vitTubeDetails } from "../../constants/projectDetails/vitTube";
import ProjectSubheading from "./ProjectSubheading";
import ProjectContent from "./ProjectContent";
import Tech from "../../ui/Tech";
import { filterProject } from "../../lib/filterProject";

const VidTube = ({ projectId }) => {
  const { techStack } = filterProject(projectId)[0];

  return (
    <>
      {/* key features */}
      <ProjectContent>
        <div className="mb-2">
          <ProjectSubheading emoji="⚡" text="Key Features" />
        </div>
        {vitTubeDetails.keyFeatures.map((feature, i) => {
          return (
            <p key={i} className="text-lg text-textSecondary">
              <span className="text-xl mr-2">{feature.emoji}</span>
              {feature.feature}
            </p>
          );
        })}
      </ProjectContent>

      {/* custom hooks */}
      <ProjectContent>
        <div className="flex gap-2 items-center">
          <ProjectSubheading emoji="🧩" text="Custom Hooks:" />
          {vitTubeDetails.customHooks.map((hook, i) => {
            return (
              <p key={i} className="text-xl text-textSecondary">
                {hook}
              </p>
            );
          })}
        </div>
      </ProjectContent>

      {/* optimization */}
      <ProjectContent>
        <ProjectSubheading emoji="💡" text="Optimization Steps I Implemented" />

        {vitTubeDetails.optimizations.map((optimization, i) => {
          return (
            <p key={i} className="text-lg text-textSecondary">
              <span className="text-xl mr-2">{optimization.emoji}</span>
              {optimization.text}
            </p>
          );
        })}
      </ProjectContent>

      <ProjectContent>
        <div className="flex gap-3 items-center">
          <ProjectSubheading emoji="⚙️" text="Tech Stack:" />
          {techStack.map((tech, i) => {
            return <Tech key={i} tech={tech} fontSize="text-lg" />;
          })}
        </div>
      </ProjectContent>
    </>
  );
};

export default VidTube;
