import { useLocation } from "react-router";

const Section = ({ label, children }) => {
  const { pathname } = useLocation();
  return (
    <section aria-label={label} className={`${pathname !== "/" ? "pl-6" : ""}`}>
      {children}
    </section>
  );
};

export default Section;
