import { createPortal } from "react-dom";
import ModalFooter from "./ModalFooter";
import { useEffect, useRef } from "react";

const Modal = ({ children, width = "max-w-lg" }) => {
  const modalRef = useRef(null);
  const previouslyFocusedRef = useRef(null);

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
    <div className="absolute inset-0 bg-gray-700/50 backdrop-blur-sm w-full h-screen flex items-center justify-center ">
      <div
        className={`${width} bg-white flex-1 rounded-2xl shadow-card p-8 max-h-screen`}
        ref={modalRef}
        tabIndex="-1"
        role="dialog"
        aria-modal="true"
      >
        {/* content */}
        {children}

        <hr className="my-5 text-gray-400 rounded" />

        {/* footer */}
        <ModalFooter />
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
