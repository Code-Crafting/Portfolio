import { pagesOptions } from "../constants/pagesOptions";
import { changePageOnEnter } from "../lib/changePageOnEnter";
import { motion } from "motion/react";
import List from "./List";
import { useTheme } from "../contexts/themeContext";

const PlayGround = ({
  currentPage,
  setCurrentPage,
  setShowMenu = () => {},
}) => {
  const [isDark] = useTheme();
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2
          className={`text-lg sl:mt-8 mt-6 ${
            isDark ? "text-whiteLike" : "text-textPrimary"
          } font-semibold `}
        >
          <span className="lg:text-2xl text-xl">🎮</span> Playground
        </h2>
        <hr className="h-0.5 border-none bg-gray-400 mt-1 rounded "></hr>
      </motion.div>

      {/* playgorund options */}
      <ul className="lg:mt-4 mt-2 flex flex-col">
        {pagesOptions.gamePages.map((game, i) => {
          const { id, link, icon, text } = game;
          return (
            <List
              key={id}
              index={i}
              optionDetails={{ id, link, icon, text }}
              onClick={() => {
                setCurrentPage(id);
                setShowMenu();
              }}
              onKeyDown={() => changePageOnEnter(game.id, setCurrentPage)}
              currentPage={currentPage}
            />
          );
        })}
      </ul>
    </>
  );
};

export default PlayGround;
