import { LuSun } from "react-icons/lu";
import { PiMoonBold } from "react-icons/pi";
import { useTheme } from "../contexts/themeContext";

const ToggleThemeBtn = () => {
  const [isDark, setIsDark] = useTheme();

  const toggleTheme = (e) => {
    if (!document.startViewTransition) {
      setIsDark(!isDark);
      return;
    }

    document.startViewTransition(() => {
      setIsDark(!isDark);
    });
  };

  return (
    <button onClick={toggleTheme} onKeyDown={toggleTheme}>
      {isDark ? (
        <LuSun
          className="text-xl cursor-pointer text-whiteLike"
          title="Light Theme"
        />
      ) : (
        <PiMoonBold
          className="text-xl cursor-pointer text-textPrimary"
          title="Dark Theme"
        />
      )}
    </button>
  );
};

export default ToggleThemeBtn;
