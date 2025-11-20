import { Link } from "react-router";
import PagesLink from "../ui/links/PagesLink";
import MotionLi from "../ui/animations/MotionLi";

const List = ({
  index,
  optionDetails = {},
  onClick = () => {},
  onKeyDown = () => {},
  currentPage,
}) => {
  const { link, id, icon, text } = optionDetails;
  return (
    <MotionLi index={index}>
      <Link
        to={link}
        onClick={() => {
          onClick();
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        onKeyDown={onKeyDown}
        className={`block p-3 ${
          id === currentPage ? "bg-gray-300" : ""
        }  rounded-md transition-all duration-300`}
      >
        <PagesLink
          icon={icon}
          text={text}
          currentSecColor={
            id === currentPage ? "text-textPrimary" : "text-textSecondary"
          }
        />
      </Link>
    </MotionLi>
  );
};

export default List;
