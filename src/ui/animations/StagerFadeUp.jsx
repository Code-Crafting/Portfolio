import { motion } from "motion/react";

const StagerFadeUp = ({ children, delay, ...props }) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }} // Start lower + invisible
      animate={{ y: 0, opacity: 1 }} // Move up + fade in
      transition={{
        delay, // Stagger timing
        type: "spring",
        stiffness: 120,
        damping: 14,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default StagerFadeUp;
