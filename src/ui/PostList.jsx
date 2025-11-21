import { useTheme } from "../contexts/themeContext";
import { getParaColor } from "../lib/color/getParaColor";

const PostList = ({ emoji, text }) => {
  const [isDark] = useTheme();
  return (
    <p className={`lg:text-lg ${getParaColor(isDark)}`}>
      <span className="lg:text-xl text-lg lg:mr-2 mr-1">{emoji}</span>
      {text}
    </p>
  );
};

export default PostList;
