import { useState, useEffect } from "react";
import {
  GRID_SIZE,
  CELL_SIZE,
  INITIAL_SNAKE,
  INITIAL_DIRECTION,
  GAME_SPEED,
} from "../../constants/snakeConfig";
import { getRandomFood } from "../../lib/getRandomFood";
import GameHeader from "../../ui/GameHeader";
import GameSubheader from "../../ui/GameSubheader";
import FadeUp from "../../ui/animations/FadeUp";
import Scores from "../../ui/tictactoe/Scores";
import Button from "../../ui/Button";
import SnakeGameModal from "../../ui/modal/SnakeGameModal";
import StagerFadeUp from "../../ui/animations/StagerFadeUp";

const scoreBoardSyle =
  "w-50 bg-gray-200 rounded-lg px-6 py-3 border border-gray-300";

const SnakeGame = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [pendingDirection, setPendingDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState(() => getRandomFood(INITIAL_SNAKE));
  const [status, setStatus] = useState("idle"); // "idle" | "playing" | "over"
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const isPlaying = status === "playing";
  const isGameOver = status === "over";

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setPendingDirection(INITIAL_DIRECTION);
    setFood(getRandomFood(INITIAL_SNAKE));
    setScore(0);
    setStatus("playing");
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isPlaying) return;

      const key = e.key.toLowerCase();
      let nextDir = null;

      if (key === "arrowup" || key === "w") nextDir = { x: 0, y: -1 };
      if (key === "arrowdown" || key === "s") nextDir = { x: 0, y: 1 };
      if (key === "arrowleft" || key === "a") nextDir = { x: -1, y: 0 };
      if (key === "arrowright" || key === "d") nextDir = { x: 1, y: 0 };

      if (!nextDir) return;

      // prevent reversing instantly
      const isOpposite =
        nextDir.x === -direction.x && nextDir.y === -direction.y;

      if (!isOpposite) {
        setPendingDirection(nextDir);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPlaying, direction]);

  // Game loop
  useEffect(() => {
    if (!isPlaying) return;

    const id = setInterval(() => {
      setSnake((prevSnake) => {
        const head = prevSnake[0];
        const moveDir = pendingDirection;

        const newHead = {
          x: head.x + moveDir.x,
          y: head.y + moveDir.y,
        };

        // Update "current" direction so new key presses can compare against it
        setDirection(moveDir);

        // Wall collision
        if (
          newHead.x < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y < 0 ||
          newHead.y >= GRID_SIZE
        ) {
          setStatus("over");
          setHighScore((prev) => (score > prev ? score : prev));
          return prevSnake;
        }

        // Self collision
        if (
          prevSnake.some(
            (segment) => segment.x === newHead.x && segment.y === newHead.y
          )
        ) {
          setStatus("over");
          setHighScore((prev) => (score > prev ? score : prev));
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        // Food collision
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore((prev) => prev + 10);
          setFood(getRandomFood(newSnake));
          return newSnake;
        }

        newSnake.pop();
        return newSnake;
      });
    }, GAME_SPEED);

    return () => clearInterval(id);
  }, [isPlaying, pendingDirection, food, score]);

  return (
    <div className="flex flex-col items-center justify-center  bg-white">
      {/* header */}
      <FadeUp className="text-center mb-8">
        <GameHeader title="Snake Game" emoji={["🐍"]} />
        <GameSubheader text="Back to the Nokia Days" />
      </FadeUp>

      {/* Stats Bar */}
      <FadeUp className="bg-white/10  rounded-2xl p-4 mb-6  flex justify-between items-center gap-8">
        <Scores
          player="Score"
          score={score}
          titleSize="text-lg"
          conStyle={scoreBoardSyle}
        />

        <Scores
          player="High Score"
          score={highScore}
          titleSize="text-lg"
          conStyle={scoreBoardSyle}
        />
      </FadeUp>

      <StagerFadeUp
        className="relative bg-gray-50 rounded-lg border-2 border-gray-300 shadow-inner overflow-hidden"
        style={{
          width: GRID_SIZE * CELL_SIZE,
          height: GRID_SIZE * CELL_SIZE,
        }}
      >
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          {Array.from({ length: GRID_SIZE }).map((_, i) => (
            <div key={i} className="flex">
              {Array.from({ length: GRID_SIZE }).map((_, j) => (
                <div
                  key={j}
                  className="border border-gray-300"
                  style={{ width: CELL_SIZE, height: CELL_SIZE }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Snake */}
        {snake.map((segment, index) => (
          <div
            key={index}
            className="absolute rounded"
            style={{
              left: segment.x * CELL_SIZE,
              top: segment.y * CELL_SIZE,
              width: CELL_SIZE - 2,
              height: CELL_SIZE - 2,
              backgroundColor: index === 0 ? "#6366f1" : "#818cf8",
              boxShadow:
                index === 0 ? "0 0 15px rgba(99, 102, 241, 0.4)" : "none",
              zIndex: 10,
            }}
          />
        ))}

        {/* Food */}
        <div
          className="absolute rounded-full animate-pulse"
          style={{
            left: food.x * CELL_SIZE + 2,
            top: food.y * CELL_SIZE + 2,
            width: CELL_SIZE - 4,
            height: CELL_SIZE - 4,
            backgroundColor: "#10b981",
            boxShadow: "0 0 15px rgba(16, 185, 129, 0.5)",
            zIndex: 5,
          }}
        />

        {/* Game Over Overlay */}
        {isGameOver && (
          <SnakeGameModal>
            <p className="text-4xl font-bold text-red-500 mb-4">Game Over!</p>
            <p className="text-2xl text-textPrimary mb-6">Score: {score}</p>
            <Button onClick={resetGame}>Play Again</Button>
          </SnakeGameModal>
        )}

        {/* Start Screen */}
        {status === "idle" && (
          <SnakeGameModal>
            <p className="text-3xl font-bold text-textPrimary mb-4">
              Ready to Play?
            </p>
            <Button onClick={resetGame}>Start Game</Button>
            <div className="text-textSecondary text-sm mt-2">
              <p>Use Arrow Keys or WASD to move</p>
            </div>
          </SnakeGameModal>
        )}
      </StagerFadeUp>

      {/* Instuctions */}
      <StagerFadeUp
        delay={0.2}
        className="mt-6 flex justify-center gap-4 text-textSecondary text-sm"
      >
        <div className="bg-gray-200 rounded-lg px-4 py-2 border border-gray-300">
          <p>↑ ↓ ← → or WASD</p>
        </div>
      </StagerFadeUp>
    </div>
  );
};

export default SnakeGame;
