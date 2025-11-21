import { useTheme } from "../contexts/themeContext";
import { getHeadingColor } from "../lib/color/getHeadingColor";

const SubHeading = ({ text = "SubHeading" }) => {
  const [isDark] = useTheme();
  return (
    <h3
      className={`lg:text-xl text-lg font-semibold ${getHeadingColor(
        isDark
      )} mb-4`}
    >
      {text}
    </h3>
  );
};

export default SubHeading;
