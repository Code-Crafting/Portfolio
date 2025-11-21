import { useTheme } from "../../contexts/themeContext";

const Cell = ({ gameOver, cell, cellColor, onClick = () => {} }) => {
  const [isDark] = useTheme();

  const getFontColor = () => {
    if (isDark) {
      return cell === "X" ? "text-blue-800" : "text-rose-700";
    }
    return cell === "X" ? "text-blue-600" : "text-red-600";
  };
  return (
    <button
      onClick={onClick}
      disabled={gameOver || cell !== null}
      className={`
                  aspect-square 450px:rounded-xl rounded-lg lg:text-5xl 850px:text-3xl text-4xl font-bold
                  transition-all duration-200 transform hover:scale-105
                  ${getFontColor()}
                  ${cellColor}
                  ${
                    !cell && !gameOver ? "cursor-pointer" : "cursor-not-allowed"
                  }
                  disabled:opacity-50
                `}
    >
      {cell}
    </button>
  );
};

export default Cell;
