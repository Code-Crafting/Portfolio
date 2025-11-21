import { getHeadingColor } from "../../lib/color/getHeadingColor";

const ProjectSubheading = ({ emoji, text, mb = true }) => {
  return (
    <h4
      className={`${getHeadingColor()} text-xl font-semibold ${
        mb ? "mb-2" : ""
      }`}
    >
      <span className="text-2xl">{emoji}</span> {text}
    </h4>
  );
};

export default ProjectSubheading;
