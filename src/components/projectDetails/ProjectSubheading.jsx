import { useTheme } from "../../contexts/themeContext";
import { getHeadingColor } from "../../lib/color/getHeadingColor";

const ProjectSubheading = ({ emoji, text, mb = true }) => {
  const [isDark] = useTheme();
  return (
    <h4
      className={`${getHeadingColor(isDark)} lg:text-xl text-lg font-semibold ${
        mb ? "mb-2" : ""
      }`}
    >
      <span className="lg:text-2xl text-xl">{emoji}</span> {text}
    </h4>
  );
};

export default ProjectSubheading;
