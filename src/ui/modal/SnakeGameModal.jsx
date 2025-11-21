import { useTheme } from "../../contexts/themeContext";

const SnakeGameModal = ({ children }) => {
  const [isDark] = useTheme();
  return (
    <div
      className={`absolute inset-0 ${
        isDark ? "bg-zinc-300" : "bg-white"
      } bg-opacity-95 flex items-center justify-center rounded-lg z-20`}
    >
      <div className="text-center">{children}</div>
    </div>
  );
};

export default SnakeGameModal;
