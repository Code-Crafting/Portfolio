import { pagesOptions } from "../constants/pagesOptions";
import { useTheme } from "../contexts/themeContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getAsideColor } from "../lib/color/getAsideColor";
import Header from "./Header";
import PagesOptions from "./PagesOptions";
import PlayGround from "./PlayGround";

const Aside = () => {
  const [isDark] = useTheme();
  return (
    <aside
      className={`xl:w-80 w-60 850px:block hidden border-r ${getAsideColor(
        isDark
      )} p-4`}
    >
      {/* header */}
      <Header />

      {/* page options */}
      <PagesOptions />

      {/* playground */}
      <PlayGround />
    </aside>
  );
};

export default Aside;
