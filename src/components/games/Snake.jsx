import { useState, useEffect, useRef } from "react";
import {
  GRID_SIZE,
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
import { useTheme } from "../../contexts/themeContext";
import { getParaColor } from "../../lib/color/getParaColor";

const SnakeGame = () => {
  const [isDark] = useTheme();
  const boardRef = useRef();
  const [cellSize, setCellSize] = useState(null);
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [pendingDirection, setPendingDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState(() => getRandomFood(INITIAL_SNAKE));
  const [status, setStatus] = useState("idle"); // "idle" | "playing" | "over"
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const scoreBoardSyle = `850px:w-50 450px:w-40 w-35 ${
    isDark ? "bg-darkPrimary border-borderDark" : "bg-gray-200 border-gray-300"
  } rounded-lg px-6 py-3 border `;
  const isPlaying = status === "playing";
  const isGameOver = status === "over";

  // Mobile Controlers
  const handleDirectionChange = (newDirection) => {
    if (!isPlaying) return;

    const isOpposite =
      newDirection.x === -direction.x && newDirection.y === -direction.y;

    if (!isOpposite) {
      setPendingDirection(newDirection);
    }
  };

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setPendingDirection(INITIAL_DIRECTION);
    setFood(getRandomFood(INITIAL_SNAKE));
    setScore(0);
    setStatus("playing");
  };

  // Calculate responsive cell size
  useEffect(() => {
    const updateCellSize = () => {
      if (!boardRef.current) return;

      const parentWidth = boardRef.current.parentElement.offsetWidth;
      const maxDimension = Math.min(parentWidth, window.innerHeight);

      const newCellSize = Math.floor(maxDimension / GRID_SIZE);

      setCellSize(Math.max(12, Math.min(newCellSize, 30)));
    };

    updateCellSize();
    window.addEventListener("resize", updateCellSize);
    return () => window.removeEventListener("resize", updateCellSize);
  }, []);

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
    <div className="flex flex-col items-center justify-center">
      {/* header */}
      <FadeUp className="text-center mb-8">
        <GameHeader title="Snake Game" emoji={["🐍"]} />
        <GameSubheader text="Back to the Nokia Days" />
      </FadeUp>

      {/* Stats Bar */}
      <FadeUp className="bg-white/10  sm:rounded-2xl rounded-lg p-4 mb-6  flex  justify-between items-center 450px:gap-8 gap-4">
        <Scores
          player="Score"
          score={score}
          titleSize="450px:text-lg"
          conStyle={scoreBoardSyle}
        />

        <Scores
          player="High Score"
          score={highScore}
          titleSize="450px:text-lg"
          conStyle={scoreBoardSyle}
        />
      </FadeUp>

      {/* Board */}
      <div ref={boardRef} className="flex justify-center items-center w-full">
        {cellSize !== null && (
          <StagerFadeUp
            className={`relative ${
              isDark
                ? "bg-zinc-200 border-borderDark"
                : "bg-gray-50 border-gray-300"
            } rounded-lg border-2  shadow-inner overflow-hidden`}
            style={{
              width: GRID_SIZE * cellSize,
              height: GRID_SIZE * cellSize,
            }}
          >
            {/* Grid pattern */}
            <div className="absolute inset-0  pointer-events-none">
              {Array.from({ length: GRID_SIZE }).map((_, i) => (
                <div key={i} className="flex ">
                  {Array.from({ length: GRID_SIZE }).map((_, j) => (
                    <div
                      key={j}
                      style={{ width: cellSize, height: cellSize }}
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
                  left: segment.x * cellSize,
                  top: segment.y * cellSize,
                  width: cellSize - 2,
                  height: cellSize - 2,
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
                left: food.x * cellSize + 2,
                top: food.y * cellSize + 2,
                width: cellSize - 4,
                height: cellSize - 4,
                backgroundColor: "#10b981",
                boxShadow: "0 0 15px rgba(16, 185, 129, 0.5)",
                zIndex: 5,
              }}
            />

            {/* Game Over Overlay */}
            {isGameOver && (
              <SnakeGameModal>
                <p className="text-4xl font-bold text-red-500 mb-4">
                  Game Over!
                </p>
                <p className="text-2xl text-textPrimary mb-6">Score: {score}</p>
                <Button width="w-full" onClick={resetGame}>
                  Play Again
                </Button>
              </SnakeGameModal>
            )}

            {/* Start Screen */}
            {status === "idle" && (
              <SnakeGameModal>
                <p className="text-3xl font-bold text-textPrimary mb-4">
                  Ready to Play?
                </p>
                <Button width="w-full" onClick={resetGame}>
                  Start Game
                </Button>
                <div className="text-textSecondary text-sm mt-2">
                  <p>Use Arrow Keys or WASD to move</p>
                </div>
              </SnakeGameModal>
            )}
          </StagerFadeUp>
        )}
      </div>

      {/* Instuctions */}
      <StagerFadeUp
        delay={0.2}
        className={`mt-6 md:flex hidden justify-center gap-4 ${getParaColor()} text-sm`}
      >
        <div
          className={`${
            isDark
              ? "bg-borderDark hover:bg-darkAside"
              : "bg-gray-200 hover:bg-gray-300"
          } rounded-lg px-4 py-2 border `}
        >
          <p>↑ ↓ ← → or WASD</p>
        </div>
      </StagerFadeUp>

      {/* Mobile Control Buttons */}
      <StagerFadeUp className="md:hidden flex flex-col items-center gap-2 mt-4">
        <Button
          onClick={() => handleDirectionChange({ x: 0, y: -1 })}
          disabled={!isPlaying}
        >
          ↑
        </Button>
        <div className="flex gap-2">
          <Button
            onClick={() => handleDirectionChange({ x: -1, y: 0 })}
            disabled={!isPlaying}
          >
            ←
          </Button>
          <Button
            onClick={() => handleDirectionChange({ x: 0, y: 1 })}
            disabled={!isPlaying}
          >
            ↓
          </Button>
          <Button
            onClick={() => handleDirectionChange({ x: 1, y: 0 })}
            disabled={!isPlaying}
          >
            →
          </Button>
        </div>
      </StagerFadeUp>
    </div>
  );
};

export default SnakeGame;
