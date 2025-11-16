import { motion } from "motion/react";

const MotionLi = ({ children, index }) => {
  return (
    <motion.li
      initial={{ y: 30, opacity: 0 }} // Start lower + invisible
      animate={{ y: 0, opacity: 1 }} // Move up + fade in
      transition={{
        delay: index * 0.1, // Stagger timing
        type: "spring",
        stiffness: 120,
        damping: 14,
      }}
    >
      {children}
    </motion.li>
  );
};

export default MotionLi;
