import { AnimatePresence, motion } from "motion/react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Header from "./Header";
import PagesOptions from "./PagesOptions";
import PlayGround from "./PlayGround";
import { useState } from "react";

const Navbar = () => {
  const [currentPage, setCurrentPage] = useLocalStorage("currentPage", 1);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="850px:hidden fixed w-full  bg-white/50 backdrop-blur-xl  z-9999">
      <div className="relative">
        <Header setCurrentPage={setCurrentPage} setShowMenu={setShowMenu} />

        {/* menu */}
        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 200, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute right-0 top-0 h-screen w-2xs border-l border-gray-400/50 p-4 bg-lightPrimary px-4 border"
              style={{ originX: 1 }}
            >
              {/* close */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0 }}
                className="flex justify-end text-xl"
                onClick={() => setShowMenu(false)}
              >
                ❌
              </motion.div>
              {/* page options */}
              <PagesOptions
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                setShowMenu={() => setShowMenu(false)}
              />

              {/* playground */}
              <PlayGround
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
