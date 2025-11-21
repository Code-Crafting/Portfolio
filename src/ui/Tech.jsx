import { useTheme } from "../contexts/themeContext";
import { getParaColor } from "../lib/color/getParaColor";

const Tech = ({ tech, fontSize = "lg:text-lg text-sm" }) => {
  const [isDark] = useTheme();
  return (
    <div
      className={`rounded px-4 py-1 ${
        isDark
          ? "bg-borderDark hover:bg-darkAside"
          : "bg-gray-200 hover:bg-gray-300"
      } ${getParaColor(
        isDark
      )} font-medium ${fontSize}  transition duration-300`}
    >
      {tech}
    </div>
  );
};

export default Tech;
