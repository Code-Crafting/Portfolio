import { pagesOptions } from "../constants/pagesOptions";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Header from "./Header";
import PagesOptions from "./PagesOptions";
import PlayGround from "./PlayGround";

const Aside = () => {
  const [currentPage, setCurrentPage] = useLocalStorage(
    "currentPage",
    pagesOptions.infoPages[0].id
  );

  return (
    <aside className="xl:w-80 w-60 850px:block hidden border-r border-gray-400/50 p-4 bg-lightPrimary text-Textsecondary">
      {/* header */}
      <Header setCurrentPage={setCurrentPage} />

      {/* page options */}
      <PagesOptions currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* playground */}
      <PlayGround currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </aside>
  );
};

export default Aside;
