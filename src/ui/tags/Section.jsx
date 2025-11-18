import { useLocation } from "react-router";
import { motion } from "motion/react";

const Section = ({ label, children }) => {
  const { pathname } = useLocation();
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 120,
        damping: 16,
      }}
      aria-label={label}
      className={`${pathname !== "/" ? "sm:pl-6 pl-2" : ""}`}
    >
      {children}
    </motion.section>
  );
};

export default Section;
