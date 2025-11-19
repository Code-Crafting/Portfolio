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
      className={`${
        pathname === "/" ? "lg:pl-14 sm:pl-12" : "lg:pl-10 sm:pl-8 "
      } lg:mt-4 mt-2 overflow-hidden`}
    >
      {children}
    </motion.div>
  );
};

export default DetailsArea;
