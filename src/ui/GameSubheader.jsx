import { useTheme } from "../contexts/themeContext";
import { getParaColor } from "../lib/color/getParaColor";

const GameSubheader = ({ text }) => {
  const [isDark] = useTheme();
  return <p className={`${getParaColor(isDark)} lg:text-lg`}>{text}</p>;
};

export default GameSubheader;
