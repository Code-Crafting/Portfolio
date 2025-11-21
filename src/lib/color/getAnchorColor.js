import { useTheme } from "../../contexts/themeContext";

export const getAnchorColor = () => {
  const [isDark] = useTheme();
  return isDark
    ? "text-blue-400 hover:text-blue-600"
    : "text-blue-500 hover:text-blue-700";
};
