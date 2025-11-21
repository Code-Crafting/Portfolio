import { useTheme } from "../../contexts/themeContext";
import { getParaColor } from "../../lib/color/getParaColor";

const Scores = ({
  score,
  icon: Icon,
  player,
  titleSize = "text-sm",
  conStyle = "",
}) => {
  const [isDark] = useTheme();
  return (
    <div className={`text-center ${conStyle}`}>
      <div
        className={`lg:text-3xl text-2xl font-bold ${
          isDark ? "text-whiteLike/50" : "text-gray-800"
        }`}
      >
        {score}
      </div>
      <div
        className={`${titleSize} ${getParaColor()} flex items-center gap-1 justify-center`}
      >
        {Icon && <Icon className="text-lg" />}
        {player}
      </div>
    </div>
  );
};

export default Scores;
