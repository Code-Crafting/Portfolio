import Header from "./Header";
import PagesOptions from "./PagesOptions";

const Aside = () => {
  return (
    <aside className="w-80 border-r border-gray-400/50 p-4 bg-lightPrimary text-Textsecondary">
      {/* header */}
      <Header />

      {/* page options */}
      <PagesOptions />
    </aside>
  );
};

export default Aside;
