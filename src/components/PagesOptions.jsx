import { pagesOptions } from "../constants/pagesOptions";
import PagesLink from "../ui/links/PagesLink";
import { Link } from "react-router";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { motion } from "motion/react";

const PagesOptions = ({ currentPage, setCurrentPage }) => {
  const handleKeyDown = (e, optionId) => {
    if (e.key === "Enter" || e.key === " ") {
      setCurrentPage(optionId);
    }
  };

  return (
    <ul className="mt-8 flex flex-col gap-1">
      {pagesOptions.map((option, i) => {
        return (
          <motion.li
            initial={{ y: 30, opacity: 0 }} // Start lower + invisible
            animate={{ y: 0, opacity: 1 }} // Move up + fade in
            transition={{
              delay: i * 0.1, // Stagger timing
              type: "spring",
              stiffness: 120,
              damping: 14,
            }}
            key={option.id}
          >
            <Link
              to={option.link}
              onClick={() => setCurrentPage(option.id)}
              onKeyDown={(e) => handleKeyDown(e, option.id)}
              className={`block p-3 ${
                option.id === currentPage ? "bg-gray-300" : ""
              }  rounded-md transition-all duration-300`}
            >
              <PagesLink
                icon={option.icon}
                text={option.text}
                currentSecColor={
                  option.id === currentPage
                    ? "text-textPrimary"
                    : "text-textSecondary"
                }
              />
            </Link>
          </motion.li>
        );
      })}
    </ul>
  );
};

export default PagesOptions;
