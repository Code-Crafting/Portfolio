import { useTheme } from "../../contexts/themeContext";

export const getAsideColor = () => {
  const [isDark] = useTheme();
  return isDark
    ? "border-borderDark bg-darkAside"
    : "border-borderLight  bg-lightPrimary";
};
