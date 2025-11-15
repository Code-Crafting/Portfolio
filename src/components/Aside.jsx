import { useLocalStorage } from "../hooks/useLocalStorage";
import Header from "./Header";
import PagesOptions from "./PagesOptions";
import PlayGround from "./PlayGround";

const Aside = () => {
  const [currentPage, setCurrentPage] = useLocalStorage("currentPage", 1);

  const changePageOnEnter = (e, id) => {
    if (e.key === "Enter" || e.key === " ") {
      setCurrentPage(optionId);
    }
  };

  return (
    <aside className="w-80 border-r border-gray-400/50 p-4 bg-lightPrimary text-Textsecondary">
      {/* header */}
      <Header setCurrentPage={setCurrentPage} />

      {/* page options */}
      <PagesOptions
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onKeyDown={changePageOnEnter}
      />

      {/* playground */}
      <PlayGround
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onKeyDown={changePageOnEnter}
      />
    </aside>
  );
};

export default Aside;
