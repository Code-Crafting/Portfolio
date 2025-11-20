import { Link } from "react-router";
import PagesLink from "../ui/links/PagesLink";
import MotionLi from "../ui/animations/MotionLi";
import { useTheme } from "../contexts/themeContext";

const List = ({
  index,
  optionDetails = {},
  onClick = () => {},
  onKeyDown = () => {},
  currentPage,
}) => {
  const { link, id, icon, text } = optionDetails;
  const [isDark] = useTheme();

  const getBgColor = () => {
    if (isDark) {
      return id === currentPage ? "bg-borderDark" : "";
    } else {
      return id === currentPage ? "bg-gray-300" : "";
    }
  };

  const getTextColor = () => {
    if (isDark) {
      return id === currentPage ? "text-darkPara" : "text-whiteLike";
    } else {
      return id === currentPage ? "text-textPrimary" : "text-textSecondary";
    }
  };
  return (
    <MotionLi index={index}>
      <Link
        to={link}
        onClick={() => {
          onClick();
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        onKeyDown={onKeyDown}
        className={`block p-3 ${getBgColor()}  rounded-md transition-all duration-300`}
      >
        <PagesLink icon={icon} text={text} currentSecColor={getTextColor()} />
      </Link>
    </MotionLi>
  );
};

export default List;
