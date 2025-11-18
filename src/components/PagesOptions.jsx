import { pagesOptions } from "../constants/pagesOptions";
import PagesLink from "../ui/links/PagesLink";
import { Link } from "react-router";
import MotionLi from "../ui/animations/MotionLi";
import { changePageOnEnter } from "../lib/changePageOnEnter";

const PagesOptions = ({ currentPage, setCurrentPage, setShowMenu }) => {
  const pages = pagesOptions.slice(0, 5);

  return (
    <ul className="850px:mt-8 mt-4 flex flex-col gap-1">
      {pages.map((option, i) => {
        return (
          <MotionLi index={option.id} key={option.id}>
            <Link
              to={option.link}
              onClick={() => {
                setCurrentPage(option.id);
                setShowMenu();
              }}
              onKeyDown={() => changePageOnEnter(option.id, setCurrentPage)}
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
