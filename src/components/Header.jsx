import { PiMoonBold } from "react-icons/pi";
import { LuSun } from "react-icons/lu";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      {/* logo */}
      <div className="flex items-center gap-2">
        <div className="bg-linear-to-br from-blue-500 to-purple-600 w-max p-2 rounded-md text-white font-bold text-xs">
          MS
        </div>
        <h1 className="text-md font-semibold text-textPrimary text-lg">
          Portfolio
        </h1>
      </div>
      <PiMoonBold className="text-xl cursor-pointer" />
    </div>
  );
};

export default Header;
