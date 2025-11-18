import { pagesOptions } from "../constants/pagesOptions";
import MotionLi from "../ui/animations/MotionLi";
import { Link } from "react-router";
import PagesLink from "../ui/links/PagesLink";
import { changePageOnEnter } from "../lib/changePageOnEnter";
import { motion } from "motion/react";

const PlayGround = ({ currentPage, setCurrentPage }) => {
  const games = pagesOptions.slice(5);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-lg mt-8 text-textPrimary font-semibold ">
          <span className="lg:text-2xl text-xl">🎮</span> Playground
        </h2>
        <hr className="h-0.5 border-none bg-gray-400 mt-1 rounded "></hr>
      </motion.div>

      {/* playgorund options */}
      <ul className="lg:mt-4 mt-2 flex flex-col gap-1">
        {games.map((game) => {
          return (
            <MotionLi index={game.id} key={game.id}>
              <Link
                to={game.link}
                onClick={() => setCurrentPage(game.id)}
                onKeyDown={() => changePageOnEnter(game.id, setCurrentPage)}
                className={`block p-3 ${
                  game.id === currentPage ? "bg-gray-300" : ""
                }  rounded-md transition-all duration-300`}
              >
                <PagesLink
                  icon={game.icon}
                  text={game.text}
                  currentSecColor={
                    game.id === currentPage
                      ? "text-textPrimary"
                      : "text-textSecondary"
                  }
                />
              </Link>
            </MotionLi>
          );
        })}
      </ul>
    </>
  );
};

export default PlayGround;
