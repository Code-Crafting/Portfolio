import { createPortal } from "react-dom";
import ModalFooter from "./ModalFooter";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useTheme } from "../../contexts/themeContext";

const Modal = ({ children, width = "" }) => {
  const modalRef = useRef(null);
  const previouslyFocusedRef = useRef(null);
  const [isDark] = useTheme();

  useEffect(() => {
    // focused element before the modal opend
    previouslyFocusedRef.current = document.activeElement;

    // Move focus to the modal
    modalRef.current?.focus();

    const focusableElements = modalRef.current.querySelectorAll(
      'button, a, [tabindex]:not([tabindex="-1"])'
    );

    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e) => {
      console.log(e.key);
      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    modalRef.current.addEventListener("keydown", handleTabKey);

    return () => {
      modalRef.current?.removeEventListener("keydown", handleTabKey);
      previouslyFocusedRef.current?.focus();
    };
  }, []);

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 flex items-center justify-center w-full h-dvh bg-gray-700/50 backdrop-blur-sm z-999"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`${width} relative ${
          isDark ? "bg-textPrimary" : "bg-white"
        } flex-1 rounded-2xl shadow-card 450px:p-8 p-6 max-h-screen`}
        ref={modalRef}
        tabIndex="-1"
        role="dialog"
        aria-modal="true"
      >
        {/* content */}
        {children}

        <hr
          className={`my-5 ${
            isDark ? "text-whiteLike/50" : "text-gray-400"
          } rounded`}
        />

        {/* footer */}
        <ModalFooter />
      </motion.div>
    </motion.div>,
    document.getElementById("modal")
  );
};

export default Modal;
