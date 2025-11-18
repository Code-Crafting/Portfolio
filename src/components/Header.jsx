import { PiMoonBold } from "react-icons/pi";
import { LuSun } from "react-icons/lu";
import { Link } from "react-router";
import { motion } from "motion/react";
import { CgMenu } from "react-icons/cg";

const Header = ({ setCurrentPage, setShowMenu }) => {
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
        <h6 className="font-semibold text-textPrimary text-lg">Portfolio</h6>
      </Link>
      <div className="flex gap-4 items-center">
        <PiMoonBold
          className="text-xl cursor-pointer"
          tabIndex={0}
          title="Dark Theme"
        />
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
