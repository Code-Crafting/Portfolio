import { useLocation } from "react-router";

const DetailsArea = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <div className={`${pathname === "/" ? "pl-14" : "pl-10"} mt-4`}>
      {children}
    </div>
  );
};

export default DetailsArea;
