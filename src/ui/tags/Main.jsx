import { useTheme } from "../../contexts/themeContext";

const Main = ({ children }) => {
  const [isDark] = useTheme();
  return (
    <main
      className={`relative ${
        isDark ? "bg-darkPrimary" : "bg-white"
      } flex-1 max-w-7xl mx-auto 850px:pt-16 pt-24 sm:px-8 px-2 pb-4  850px:overflow-y-auto 850px:h-screen min-h-screen no-scrollbar`}
    >
      {children}
    </main>
  );
};

export default Main;
