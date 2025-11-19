import StagerFadeUp from "../ui/animations/StagerFadeUp";
import Button from "../ui/Button";

const ActionsBtnTicTacToe = ({ resetGame, resetScores, ...props }) => {
  return (
    <StagerFadeUp delay={0.3} {...props}>
      <Button onClick={resetGame}>New Game</Button>

      <Button onClick={resetScores} varient="error">
        Reset Scores
      </Button>
    </StagerFadeUp>
  );
};

export default ActionsBtnTicTacToe;
