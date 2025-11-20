import { pagesOptions } from "../constants/pagesOptions";
import { changePageOnEnter } from "../lib/changePageOnEnter";
import List from "./List";

const PagesOptions = ({
  currentPage,
  setCurrentPage,
  setShowMenu = () => {},
}) => {
  return (
    <ul className="850px:mt-8 mt-4 flex flex-col">
      {pagesOptions.infoPages.map((option, i) => {
        const { id, link, icon, text } = option;
        return (
          <List
            key={id}
            index={i}
            optionDetails={{ id, link, icon, text }}
            onClick={() => {
              setCurrentPage(id);
              setShowMenu();
            }}
            onKeyDown={() => changePageOnEnter(option.id, setCurrentPage)}
            currentPage={currentPage}
          />
        );
      })}
    </ul>
  );
};

export default PagesOptions;
