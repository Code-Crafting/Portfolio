import { useState, useEffect } from "react";
import { LuTrophy } from "react-icons/lu";
import FadeUp from "../../ui/animations/FadeUp";
import GameHeader from "../../ui/GameHeader";
import GameSubheader from "../../ui/GameSubheader";
import Button from "../../ui/Button";
import Scores from "../../ui/tictactoe/Scores";
import StagerFadeUp from "../../ui/animations/StagerFadeUp";
import Modal from "../../ui/modal/Modal";
import { AnimatePresence } from "motion/react";
import { getHeadingColor } from "../../lib/color/getHeadingColor";
import { getParaColor } from "../../lib/color/getParaColor";
import { useTheme } from "../../contexts/themeContext";

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

  const [isDark] = useTheme();
  const [cards, setCards] = useState(initializeGame());
  const [flippedCards, setFlippedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [isChecking, setIsChecking] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);

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

  useEffect(() => {
    if (matches === 8) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      setIsGameWon(true);
    }
  }, [matches]);

  useEffect(() => {
    if (isGameWon) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      // Cleanup on unmount (just in case)
      document.body.style.overflow = "auto";
    };
  }, [isGameWon]);

  return (
    <div className="flex items-center justify-center">
      <div className="md:w-[60%] sm:w-[80%] w-full mx-auto">
        {/* Header */}
        <FadeUp className="mb-8 text-center">
          <GameHeader title="Memory Match" />
          <GameSubheader text="Find all the matching pairs!" />
        </FadeUp>

        {/* Stats Bar */}
        <FadeUp className="flex items-center justify-between p-4 mb-6 bg-white/10 rounded-2xl">
          <Scores player="Moves" score={moves} titleSize="text-lg" />
          <Scores player="Matches" score={matches} titleSize="text-lg" />

          {/* reset button */}
          <Button onClick={resetGame} width="w-1/3" varient="error">
            Reset
          </Button>
        </FadeUp>

        {/* Game Board */}
        <StagerFadeUp className="p-2 mb-6 rounded-2xl 450px:p-6">
          <div className="grid grid-cols-4 gap-2 450px:gap-3">
            {cards.map((card, idx) => (
              <button
                key={card.id}
                onClick={() => handleCardClick(idx)}
                disabled={card.isFlipped || card.isMatched || isChecking}
                className={`aspect-square 450px:rounded-xl rounded-lg lg:text-5xl 450px:text-4xl text-2xl font-bold transition-all duration-300 transform hover:scale-105 border border-gray-400 ${
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
            <Modal width="sm:max-w-lg max-w-sm">
              <div className="flex flex-col items-center justify-center px-8">
                <LuTrophy
                  className="mx-auto mb-4 text-4xl text-yellow-300 sm:text-6xl"
                  title="trophy"
                />
                <h3
                  className={`${getHeadingColor(
                    isDark
                  )} sm:text-4xl 450px:text-2xl text-xl font-bold`}
                >
                  Congratulations 🎉
                </h3>
                <p
                  className={`450px:mt-2 mt-1 450px:mb-6 mb-4 sm:text-lg 450px:text-md text-sm ${getParaColor(
                    isDark
                  )}`}
                >
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
