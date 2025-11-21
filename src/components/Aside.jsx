import { pagesOptions } from "../constants/pagesOptions";
import { useTheme } from "../contexts/themeContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getAsideColor } from "../lib/color/getAsideColor";
import Header from "./Header";
import PagesOptions from "./PagesOptions";
import PlayGround from "./PlayGround";

const Aside = () => {
  const [currentPage, setCurrentPage] = useLocalStorage(
    "currentPage",
    pagesOptions.infoPages[0].id
  );

  const [isDark] = useTheme();

  return (
    <aside
      className={`xl:w-80 w-60 850px:block hidden border-r ${getAsideColor()} p-4`}
    >
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
