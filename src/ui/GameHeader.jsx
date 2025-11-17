const GameHeader = ({ title, emoji = [] }) => {
  return (
    <h1 className="text-5xl font-bold text-textPrimary mb-2 flex items-center justify-center gap-3">
      {emoji.length ? <span className="text-4xl">{emoji[0]}</span> : ""}
      {title}
      {emoji.length ? <span className="text-4xl">{emoji[1]}</span> : ""}
    </h1>
  );
};

export default GameHeader;
