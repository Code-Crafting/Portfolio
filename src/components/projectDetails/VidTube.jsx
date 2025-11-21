import { vitTubeDetails } from "../../constants/projectDetails/vitTube";
import ProjectSubheading from "./ProjectSubheading";
import ProjectContent from "./ProjectContent";
import Tech from "../../ui/Tech";
import PostList from "../../ui/PostList";
import Video from "../../ui/Video";
import vidTubeVideo from "../../assets/videos/VidTube.mp4";
import vidTubePoster from "../../assets/videoProster/vidTubePoster.png";
import { getParaColor } from "../../lib/color/getParaColor";

const VidTube = ({ techStack }) => {
  return (
    <>
      {/* key features */}
      <ProjectContent>
        <div className="mb-2">
          <ProjectSubheading emoji="⚡" text="Key Features" />
        </div>
        {vitTubeDetails.keyFeatures.map((feature, i) => (
          <PostList key={i} emoji={feature.emoji} text={feature.feature} />
        ))}
      </ProjectContent>

      {/* custom hooks */}
      <ProjectContent>
        <div className="flex flex-wrap gap-2 items-center">
          <ProjectSubheading emoji="🧩" text="Custom Hooks" mb={false} />
          {vitTubeDetails.customHooks.map((hook, i) => {
            return <Tech tech={hook} key={i} fontSize="lg:text-lg" />;
          })}
        </div>
      </ProjectContent>

      {/* optimization */}
      <ProjectContent>
        <ProjectSubheading emoji="💡" text="Optimization Steps I Implemented" />

        {vitTubeDetails.optimizations.map((optimization, i) => (
          <PostList
            key={i}
            emoji={optimization.emoji}
            text={optimization.text}
          />
        ))}
      </ProjectContent>

      <ProjectContent>
        <div className="flex flex-wrap gap-3 items-center">
          <ProjectSubheading emoji="⚙️" text="Tech Stack" mb={false} />
          {techStack.map((tech, i) => {
            return <Tech key={i} tech={tech} fontSize="lg:text-lg" />;
          })}
        </div>
      </ProjectContent>

      {/* video */}
      <ProjectContent>
        <Video src={vidTubeVideo} poster={vidTubePoster} />
      </ProjectContent>
    </>
  );
};

export default VidTube;
