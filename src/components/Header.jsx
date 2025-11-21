import { PiMoonBold } from "react-icons/pi";
import { LuSun } from "react-icons/lu";
import { Link } from "react-router";
import { motion } from "motion/react";
import { CgMenu } from "react-icons/cg";
import { useTheme } from "../contexts/themeContext";
import { useContext } from "react";
import { CurrentPageContext } from "../contexts/currentPageContext";

import ToggleThemeBtn from "./ToggleThemeBtn";

const Header = ({ setShowMenu = () => {} }) => {
  const [isDark] = useTheme();
  const [, setCurrentPage] = useContext(CurrentPageContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between 850px:p-0 sm:px-8 px-2 py-4 "
    >
      {/* logo */}
      <Link
        to="/"
        className="flex items-center gap-2"
        tabIndex={0}
        onClick={() => setCurrentPage(1)}
      >
        <div className="bg-linear-to-br from-blue-500 to-purple-600 w-max p-2 rounded-md text-white font-bold text-xs">
          MS
        </div>
        <h6
          className={`font-semibold ${
            isDark ? "text-whiteLike" : "text-textPrimary"
          } text-lg`}
        >
          Portfolio
        </h6>
      </Link>
      <div className="flex gap-4 items-center">
        <ToggleThemeBtn />

        <motion.div
          initial={false}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          className="p-1 border-2 border-blue-600 rounded bg-blue-500 cursor-pointer 850px:hidden block"
          onClick={() => setShowMenu(true)}
        >
          <CgMenu title="Menu" className="text-lg text-white" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Header;
