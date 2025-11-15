const TicTacToe = () => {
  return (
    <div
      className="
    w-full max-w-sm mx-auto p-6
    bg-white 
    rounded-lg 
    border border-[#e5e5e5]
  "
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-medium text-neutral-800">Tic Tac Toe</h2>

        <button
          className="
        px-3 py-1 text-sm rounded-md
        border border-[#e3e3e3]
        bg-white
        hover:bg-[#f5f5f5]
        text-neutral-700
        transition
      "
        >
          Restart
        </button>
      </div>

      {/* Status */}
      <div className="mb-4 text-center text-sm font-normal text-neutral-500">
        X's Turn
      </div>

      {/* Board */}
      <div className="grid grid-cols-3 gap-[2px] bg-[#e8e8e8] p-[2px] rounded-md">
        {[...Array(9)].map((_, i) => (
          <button
            key={i}
            className="
          aspect-square 
          bg-white 
          rounded-[4px]
          flex items-center justify-center
          text-3xl font-semibold
          text-neutral-800
          hover:bg-[#f7f7f7]
          transition
          select-none
          border border-[#e5e5e5]
        "
          >
            {/* X or O goes here */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
