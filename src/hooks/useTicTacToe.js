import { useEffect, useState } from "react";

export const useTicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [winningLine, setWinningLine] = useState(null);

  const WINNING_PATTERN = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  const calculateWinner = (squares) => {
    for (let pattern of WINNING_PATTERN) {
      const [a, b, c] = pattern;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return { winner: squares[a], line: pattern };
      }
    }
    return null;
  };

  useEffect(() => {
    const result = calculateWinner(board);

    if (result) {
      setWinningLine(result.line);
      setGameOver(true);
      setScores((prev) => ({
        ...prev,
        [result.winner]: prev[result.winner] + 1,
      }));
    } else if (board.every((cell) => cell !== null)) {
      setGameOver(true);
      setScores((prev) => ({ ...prev, draws: prev.draws + 1 }));
    }
  }, [board]);

  const handleClick = (index) => {
    if (board[index] || gameOver) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameOver(false);
    setWinningLine(null);
  };

  const resetScores = () => {
    setScores({ X: 0, O: 0, draws: 0 });
    resetGame();
  };

  return {
    board,
    isXNext,
    scores,
    gameOver,
    winningLine,
    calculateWinner,
    handleClick,
    resetGame,
    resetScores,
  };
};
