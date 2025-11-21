import { getHeadingColor } from "../lib/color/getHeadingColor";

const GameHeader = ({ title, emoji = [] }) => {
  return (
    <h1
      className={`lg:text-5xl text-4xl font-bold ${getHeadingColor()} lg:mb-2 mb-1 flex items-center justify-center gap-3 `}
    >
      {emoji.length ? (
        <span className="lg:text-4xl text-3xl">{emoji[0]}</span>
      ) : (
        ""
      )}
      {title}
      {emoji.length ? (
        <span className="lg:text-4xl text-3xl">{emoji[1]}</span>
      ) : (
        ""
      )}
    </h1>
  );
};

export default GameHeader;
