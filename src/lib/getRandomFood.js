import { GRID_SIZE } from "../constants/snakeConfig";
export function getRandomFood(snake) {
  while (true) {
    const food = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };

    const isOnSnake = snake.some(
      (segment) => segment.x === food.x && segment.y === food.y
    );

    if (!isOnSnake) return food;
  }
}
