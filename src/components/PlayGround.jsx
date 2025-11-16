import { pagesOptions } from "../constants/pagesOptions";
import MotionLi from "../ui/animations/MotionLi";
import { Link } from "react-router";
import PagesLink from "../ui/links/PagesLink";

const PlayGround = ({ currentPage, setCurrentPage, onKeyDown }) => {
  const games = pagesOptions.slice(5);

  return (
    <>
      <h2 className="text-lg mt-8 text-textPrimary font-semibold ">
        <span className="text-2xl">🎮</span> Playground
      </h2>
      <hr className="h-0.5 border-none bg-gray-400 mt-1 rounded "></hr>

      {/* playgorund options */}
      <ul className="mt-4 flex flex-col gap-1">
        {games.map((game) => {
          return (
            <MotionLi index={game.id} key={game.id}>
              <Link
                to={game.link}
                onClick={() => setCurrentPage(game.id)}
                onKeyDown={() => onKeyDown(game.id)}
                className={`block p-3 ${
                  game.id === currentPage ? "bg-gray-300" : ""
                }  rounded-md transition-all duration-300`}
              >
                <PagesLink
                  icon={game.icon}
                  text={game.text}
                  currentSecColor={
                    game.id === currentPage
                      ? "text-textPrimary"
                      : "text-textSecondary"
                  }
                />
              </Link>
            </MotionLi>
          );
        })}
      </ul>
    </>
  );
};

export default PlayGround;
