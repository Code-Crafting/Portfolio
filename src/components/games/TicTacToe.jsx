import { TbUsers } from "react-icons/tb";
import { LuTrophy } from "react-icons/lu";
import Scores from "../../ui/tictactoe/Scores";
import Cell from "../../ui/tictactoe/Cell";
import { useTicTacToe } from "../../hooks/useTicTacToe";
import StagerFadeUp from "../../ui/animations/StagerFadeUp";
import FadeUp from "../../ui/animations/FadeUp";
import GameHeader from "../../ui/GameHeader";
import GameSubheader from "../../ui/GameSubheader";
import ActionsBtnTicTacToe from "../ActionsBtnTicTacToe";
import { useTheme } from "../../contexts/themeContext";
import { getCardColor } from "../../lib/color/getCardColor";

export default function TicTacToe() {
  const {
    board,
    isXNext,
    scores,
    gameOver,
    winningLine,
    calculateWinner,
    handleClick,
    resetGame,
    resetScores,
  } = useTicTacToe();

  const [isDark] = useTheme();

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every((cell) => cell !== null);
  const winnerStatusColor = isDark ? "text-whiteLike/50" : "text-gray-800";

  const getCellColor = (index) => {
    if (isDark) {
      return winningLine?.includes(index)
        ? "bg-green-300 border-2 border-green-400"
        : "bg-zinc-300 hover:bg-zinc-400 border border-borderDark";
    }

    return winningLine?.includes(index)
      ? "bg-green-100 border-2 border-green-500"
      : "bg-gray-200 hover:bg-gray-300 border border-gray-300";
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="sm:w-[80%] w-full mx-auto">
        {/* Header */}
        <FadeUp className="text-center mb-8">
          <GameHeader title="TicTacToe" emoji={["⭕", "❌"]} />
          <GameSubheader text="Challenge your friend!" />
        </FadeUp>

        <div className="flex xl:flex-row flex-col w-full xl:gap-8 gap-6">
          {/* Game Board */}
          <FadeUp
            className={`sm:w-2/3 450px:w-4/5 w-full xl:w-1/2 order-2 xl:order-1 mx-auto ${getCardColor()} rounded-2xl md:p-6 p-4 shadow-md border `}
          >
            <div className="grid grid-cols-3 450px:gap-3 gap-2">
              {board.map((cell, index) => (
                <Cell
                  key={index}
                  onClick={() => handleClick(index)}
                  cell={cell}
                  gameOver={gameOver}
                  cellColor={getCellColor(index)}
                />
              ))}
            </div>
          </FadeUp>

          <div className="450px:w-4/5 w-full xl:w-1/2 order-1 xl:order-2 mx-auto my-auto xl:space-y-4">
            {/* Score Board */}
            <StagerFadeUp
              delay={0.1}
              className={`${getCardColor()} rounded-2xl p-4  shadow-md border mb-4`}
            >
              <div className="flex justify-around items-center">
                {/* player X */}
                <Scores player="Player X" icon={TbUsers} score={scores.X} />

                {/* draw */}
                <Scores player="Draws" score={scores.draws} />

                {/* player O */}
                <Scores player="Player O" icon={TbUsers} score={scores.O} />
              </div>
            </StagerFadeUp>

            {/* Game Status */}
            <StagerFadeUp
              delay={0.2}
              className={`${getCardColor()} rounded-2xl p-4 shadow-md border  text-center`}
            >
              {winner ? (
                <div className="flex items-center justify-center gap-2 text-xl font-semibold">
                  <LuTrophy
                    className="text-yellow-500 text-lg"
                    title="trophy"
                  />
                  <span className={winnerStatusColor}>
                    Player {winner.winner} Wins!
                  </span>
                </div>
              ) : isDraw ? (
                <div className={`text-xl font-semibold ${winnerStatusColor}`}>
                  It's a Draw!
                </div>
              ) : (
                <div className="text-xl font-semibold">
                  <span className={winnerStatusColor}>
                    Player {isXNext ? "X" : "O"}
                  </span>
                  <span className={isDark ? "text-gray-300" : "text-gray-500"}>
                    's Turn
                  </span>
                </div>
              )}
            </StagerFadeUp>

            {/* Action Buttons */}

            <ActionsBtnTicTacToe
              resetGame={resetGame}
              resetScores={resetScores}
              className="xl:flex hidden justify-center gap-3"
            />
          </div>

          {/* Action Buttons only before xl*/}

          <ActionsBtnTicTacToe
            resetGame={resetGame}
            resetScores={resetScores}
            className="xl:hidden flex justify-center order-3 lg:w-1/2 w-full mx-auto gap-3"
          />
        </div>
      </div>
    </div>
  );
}
