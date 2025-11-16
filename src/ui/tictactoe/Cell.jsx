const Cell = ({ gameOver, cell, cellColor, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      disabled={gameOver || cell !== null}
      className={`
                  aspect-square rounded-xl text-5xl font-bold
                  transition-all duration-200 transform hover:scale-105
                  ${cell === "X" ? "text-blue-600" : "text-red-600"}
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
