import { pagesOptions } from "../constants/pagesOptions";
import PagesLink from "../ui/links/PagesLink";
import { Link } from "react-router";
import MotionLi from "../ui/animations/MotionLi";

const PagesOptions = ({ currentPage, setCurrentPage, onKeyDown }) => {
  const pages = pagesOptions.slice(0, 5);

  return (
    <ul className="mt-8 flex flex-col gap-1">
      {pages.map((option, i) => {
        return (
          <MotionLi index={option.id} key={option.id}>
            <Link
              to={option.link}
              onClick={() => setCurrentPage(option.id)}
              onKeyDown={() => onKeyDown(option.id)}
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
          </MotionLi>
        );
      })}
    </ul>
  );
};

export default PagesOptions;
