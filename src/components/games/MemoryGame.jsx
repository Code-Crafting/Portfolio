import { useState, useEffect } from "react";
import { LuTrophy, LuRotateCw } from "react-icons/lu";
import FadeUp from "../../ui/animations/FadeUp";
import GameHeader from "../../ui/GameHeader";
import GameSubheader from "../../ui/GameSubheader";
import Button from "../../ui/Button";
import Scores from "../../ui/tictactoe/Scores";
import StagerFadeUp from "../../ui/animations/StagerFadeUp";
import Modal from "../../ui/modal/Modal";
import { AnimatePresence } from "motion/react";

const MemoryGame = () => {
  const emojis = ["🍔", "🍕", "🌭", "🥩", "🍰", "🍺", "🍵", "🌮"];

  const initializeGame = () => {
    const pairs = [...emojis, ...emojis];
    return pairs
      .sort(() => Math.random() - 0.5)
      .map((emoji, idx) => ({
        id: idx,
        emoji,
        isFlipped: false,
        isMatched: false,
      }));
  };

  const [cards, setCards] = useState(initializeGame());
  const [flippedCards, setFlippedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    if (flippedCards.length === 2) {
      setIsChecking(true);
      setMoves((m) => m + 1);

      const [first, second] = flippedCards;

      if (cards[first].emoji === cards[second].emoji) {
        setCards((prev) =>
          prev.map((card, idx) =>
            idx === first || idx === second
              ? { ...card, isMatched: true }
              : card
          )
        );
        setMatches((m) => m + 1);
        setFlippedCards([]);
        setIsChecking(false);
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card, idx) =>
              idx === first || idx === second
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedCards([]);
          setIsChecking(false);
        }, 800);
      }
    }
  }, [flippedCards, cards]);

  const handleCardClick = (idx) => {
    if (
      isChecking ||
      cards[idx].isFlipped ||
      cards[idx].isMatched ||
      flippedCards.length >= 2
    ) {
      return;
    }

    setCards((prev) =>
      prev.map((card, i) => (i === idx ? { ...card, isFlipped: true } : card))
    );
    setFlippedCards((prev) => [...prev, idx]);
  };

  const resetGame = () => {
    setCards(initializeGame());
    setFlippedCards([]);
    setMoves(0);
    setMatches(0);
    setIsChecking(false);
  };

  const isGameWon = matches === 8;

  return (
    <div className="flex items-center justify-center">
      <div className="w-[60%] mx-auto">
        {/* Header */}
        <FadeUp className="text-center mb-8">
          <GameHeader title="Memory Match" />
          <GameSubheader text="Find all the matching pairs!" />
        </FadeUp>

        {/* Stats Bar */}
        <FadeUp className="bg-white/10  rounded-2xl p-4 mb-6 flex justify-between items-center">
          <Scores player="Moves" score={moves} titleSize="text-lg" />
          <Scores player="Matches" score={matches} titleSize="text-lg" />

          {/* reset button */}
          <Button onClick={resetGame} width="w-1/3" varient="error">
            <LuRotateCw className="text-xl" title="rotate" />
            Reset
          </Button>
        </FadeUp>

        {/* Game Board */}
        <StagerFadeUp className="rounded-2xl p-6 mb-6">
          <div className="grid grid-cols-4 gap-3">
            {cards.map((card, idx) => (
              <button
                key={card.id}
                onClick={() => handleCardClick(idx)}
                disabled={card.isFlipped || card.isMatched || isChecking}
                className={`aspect-square rounded-xl text-5xl font-bold transition-all duration-300 transform hover:scale-105 border border-gray-400 ${
                  card.isFlipped || card.isMatched
                    ? "bg-gray-200 shadow-lg scale-100 cursor-not-allowed"
                    : "bg-gray-300  cursor-pointer"
                } ${card.isMatched ? "opacity-70" : ""}`}
              >
                {card.isFlipped || card.isMatched ? card.emoji : "❓"}
              </button>
            ))}
          </div>
        </StagerFadeUp>

        {/* Win Modal */}
        <AnimatePresence>
          {isGameWon && (
            <Modal>
              <div className="flex flex-col justify-center items-center px-8">
                <LuTrophy
                  className="mx-auto text-yellow-300 mb-4 text-5xl"
                  title="trophy"
                />
                <h3 className="text-4xl font-bold">Congratulations 🎉</h3>
                <p className="text-tex text-lg mt-2 mb-6">
                  Completed in <span className="font-bold">{moves}</span> moves
                </p>
                <Button onClick={resetGame} varient="primary">
                  Play Again
                </Button>
              </div>
            </Modal>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MemoryGame;
