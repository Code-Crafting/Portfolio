const Cell = ({ gameOver, cell, cellColor, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      disabled={gameOver || cell !== null}
      className={`
                  aspect-square rounded-xl lg:text-5xl 850px:text-3xl text-4xl font-bold
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
