import { useTheme } from "../contexts/themeContext";

export const getParaColor = () => {
  const [isDark] = useTheme();
  return isDark ? "text-darkPara" : "text-textSecondary";
};
