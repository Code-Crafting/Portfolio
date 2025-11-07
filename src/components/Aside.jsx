import Header from "./Header";
import PagesOptions from "./PagesOptions";

const Aside = () => {
  return (
    <div className="w-60 border-r-2 border-gray-400/50 p-4 bg-lightPrimary text-Textsecondary">
      {/* header */}
      <Header />

      {/* page options */}
      <PagesOptions />
    </div>
  );
};

export default Aside;
