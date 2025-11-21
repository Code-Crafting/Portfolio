import { useTheme } from "../../contexts/themeContext";

export const getCardColor = () => {
  const [isDark] = useTheme();
  return isDark
    ? "bg-darkAside  border-borderDark"
    : "bg-white border-gray-200";
};
