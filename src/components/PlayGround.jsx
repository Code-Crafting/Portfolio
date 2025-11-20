import { pagesOptions } from "../constants/pagesOptions";
import { changePageOnEnter } from "../lib/changePageOnEnter";
import { motion } from "motion/react";
import { useState } from "react";
import List from "./List";

const PlayGround = ({
  currentPage,
  setCurrentPage,
  setShowMenu = () => {},
}) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-lg sl:mt-8 mt-6 text-textPrimary font-semibold ">
          <span className="lg:text-2xl text-xl">🎮</span> Playground
        </h2>
        <hr className="h-0.5 border-none bg-gray-400 mt-1 rounded "></hr>
      </motion.div>

      {/* playgorund options */}
      <ul className="lg:mt-4 mt-2 flex flex-col gap-1">
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
