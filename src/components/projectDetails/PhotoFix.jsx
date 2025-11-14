import { photoFix } from "../../constants/projectDetails/photoFix";
import { filterProject } from "../../lib/filterProject";
import PostList from "../../ui/PostList";
import Tech from "../../ui/Tech";
import Video from "../../ui/Video";
import ProjectContent from "./ProjectContent";
import ProjectSubheading from "./ProjectSubheading";
import photoFixVideo from "../../assets/videos/PhotoFix.mp4";
import photoFixPoster from "../../assets/videoProster/photoFixPoster.png";

const PhotoFix = ({ projectId }) => {
  const { techStack } = filterProject(projectId)[0];
  return (
    <>
      {/* features */}
      <ProjectContent>
        <ProjectSubheading emoji="⚡" text="Key Features" />
        <div className=" flex gap-4 ">
          {photoFix.features.map((feature) => (
            <Tech tech={feature} fontSize="text-lg" />
          ))}
        </div>
      </ProjectContent>

      {/* challanges */}
      <ProjectContent>
        <ProjectSubheading emoji="💡" text="Challanges I Faced" />

        {photoFix.challanges.map((challange) => (
          <PostList emoji={challange.emoji} text={challange.text} />
        ))}
      </ProjectContent>

      <ProjectContent>
        <p className="text-lg text-textSecondary">
          ❗I also wanted to add some AI features, but they require a premium
          subscription for full use.
        </p>
      </ProjectContent>

      {/* tech stack */}
      <ProjectContent>
        <div className="flex gap-3 items-center">
          <ProjectSubheading emoji="⚙️" text="Tech Stack: " mb={false} />

          {techStack.map((tech) => (
            <Tech tech={tech} fontSize="text-lg" />
          ))}
        </div>
      </ProjectContent>

      {/* video */}
      <ProjectContent>
        <Video src={photoFixVideo} poster={photoFixPoster} />
      </ProjectContent>
    </>
  );
};

export default PhotoFix;
