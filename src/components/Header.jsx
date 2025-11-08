import { PiMoonBold } from "react-icons/pi";
import { LuSun } from "react-icons/lu";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      {/* logo */}
      <Link to="/" className="flex items-center gap-2" tabIndex={0}>
        <div className="bg-linear-to-br from-blue-500 to-purple-600 w-max p-2 rounded-md text-white font-bold text-xs">
          MS
        </div>
        <h6 className="text-md font-semibold text-textPrimary text-lg">
          Portfolio
        </h6>
      </Link>
      <PiMoonBold className="text-xl cursor-pointer" tabIndex={0} />
    </header>
  );
};

export default Header;
