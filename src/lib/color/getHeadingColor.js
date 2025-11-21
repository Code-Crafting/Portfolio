import { useTheme } from "../../contexts/themeContext";

export const getHeadingColor = () => {
  const [isDark] = useTheme();
  return isDark ? "text-whiteLike" : "text-textPrimary";
};
