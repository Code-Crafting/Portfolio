import { AnimatePresence, motion } from "motion/react";
import Header from "./Header";
import PagesOptions from "./PagesOptions";
import PlayGround from "./PlayGround";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../contexts/themeContext";
import { getAsideColor } from "../lib/color/getAsideColor";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const sidebarRef = useRef();
  const [isDark] = useTheme();

  // hide side on outside click
  useEffect(() => {
    const closeSidebar = (e) => {
      if (
        showMenu &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", closeSidebar); //desktop
    document.addEventListener("touchstart", closeSidebar); //smaller devices

    return () => {
      document.removeEventListener("mousedown", closeSidebar); //desktop
      document.removeEventListener("touchstart", closeSidebar); //smaller devices
    };
  }, [showMenu]);

  return (
    <header
      className={`850px:hidden fixed w-full ${
        isDark ? "bg-darkPrimary/50" : "bg-white/50"
      } backdrop-blur-xl z-50`}
    >
      <div className="relative">
        <Header setShowMenu={setShowMenu} />

        {/* menu */}
        <AnimatePresence>
          {showMenu && (
            <motion.div
              ref={sidebarRef}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 200, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`absolute right-0 top-0 h-screen w-2xs border-l ${getAsideColor(
                isDark
              )} p-4 border`}
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
              <PagesOptions setShowMenu={() => setShowMenu(false)} />

              {/* playground */}
              <PlayGround setShowMenu={() => setShowMenu(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
