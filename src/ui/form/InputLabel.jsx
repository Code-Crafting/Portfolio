import { useTheme } from "../../contexts/themeContext";

const InputLabel = ({ htmlFor = "", label = "label" }) => {
  const [isDark] = useTheme();
  return (
    <label
      htmlFor={htmlFor}
      className={`block lg:text-lg font-medium ${
        isDark ? "text-white/50" : "text-gray-700"
      } mb-1.5 cursor-pointer`}
    >
      {label}
    </label>
  );
};

export default InputLabel;
