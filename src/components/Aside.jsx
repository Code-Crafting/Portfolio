import { useLocalStorage } from "../hooks/useLocalStorage";
import Header from "./Header";
import PagesOptions from "./PagesOptions";

const Aside = () => {
  const [currentPage, setCurrentPage] = useLocalStorage("currentPage", 1);

  return (
    <aside className="w-80 border-r border-gray-400/50 p-4 bg-lightPrimary text-Textsecondary">
      {/* header */}
      <Header setCurrentPage={setCurrentPage} />

      {/* page options */}
      <PagesOptions currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </aside>
  );
};

export default Aside;
