import { useLocation } from "react-router";
import { motion } from "motion/react";

const DetailsArea = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`${pathname === "/" ? "pl-14" : "pl-10"} mt-4 overflow-hidden`}
    >
      {children}
    </motion.div>
  );
};

export default DetailsArea;
