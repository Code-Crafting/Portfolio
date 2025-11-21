import { useTheme } from "../../contexts/themeContext";

export const getAnchorColor = () => {
  const [isDark] = useTheme();
  return isDark
    ? "text-blue-400 group-hover:text-blue-600"
    : "text-blue-500 group-hover:text-blue-700";
};
