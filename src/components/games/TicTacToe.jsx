import { TbUsers } from "react-icons/tb";
import { LuTrophy, LuRotateCw } from "react-icons/lu";
import Scores from "../../ui/tictactoe/Scores";
import Button from "../../ui/Button";
import Cell from "../../ui/tictactoe/Cell";
import { useTicTacToe } from "../../hooks/useTicTacToe";
import StagerFadeUp from "../../ui/animations/StagerFadeUp";
import FadeUp from "../../ui/animations/FadeUp";

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

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every((cell) => cell !== null);

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-[80%] mx-auto">
        {/* Header */}
        <FadeUp className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-3">
            <span className="text-4xl">⭕</span>
            TicTacToe
            <span className="text-4xl">❌</span>
          </h1>
          <p className="text-gray-600 text-lg">Challenge your friend!</p>
        </FadeUp>

        <div className="flex w-full gap-8">
          {/* Game Board */}
          <FadeUp className="flex-1 bg-white rounded-2xl p-6 mb-6 shadow-md border border-gray-200">
            <div className="grid grid-cols-3 gap-3">
              {board.map((cell, index) => (
                <Cell
                  key={index}
                  onClick={() => handleClick(index)}
                  cell={cell}
                  gameOver={gameOver}
                  cellColor={
                    winningLine?.includes(index)
                      ? "bg-green-100 border-2 border-green-500"
                      : "bg-gray-200 hover:bg-gray-300 border border-gray-300"
                  }
                />
              ))}
            </div>
          </FadeUp>

          <div className="flex-1 my-auto">
            {/* Score Board */}
            <StagerFadeUp
              delay={0.1}
              className="bg-white rounded-2xl p-4 mb-6 shadow-md border border-gray-200"
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
              className="bg-white rounded-2xl p-4 mb-6 shadow-md border border-gray-200 text-center"
            >
              {winner ? (
                <div className="flex items-center justify-center gap-2 text-xl font-semibold">
                  <LuTrophy className="text-yellow-500 text-lg" />
                  <span className="text-gray-800">
                    Player {winner.winner} Wins!
                  </span>
                </div>
              ) : isDraw ? (
                <div className="text-xl font-semibold text-gray-700">
                  It's a Draw!
                </div>
              ) : (
                <div className="text-xl font-semibold">
                  <span className="text-gray-800">
                    Player {isXNext ? "X" : "O"}
                  </span>
                  <span className="text-gray-500">'s Turn</span>
                </div>
              )}
            </StagerFadeUp>

            {/* Action Buttons */}
            <StagerFadeUp delay={0.3} className="flex gap-3">
              <Button onClick={resetGame}>
                <LuRotateCw className="text-lg" />
                New Game
              </Button>

              <Button onClick={resetScores} varient="error">
                Reset Scores
              </Button>
            </StagerFadeUp>
          </div>
        </div>
      </div>
    </div>
  );
}
