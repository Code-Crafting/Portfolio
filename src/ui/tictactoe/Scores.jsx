const Scores = ({ score, icon: Icon, player, titleSize = "text-sm" }) => {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-gray-800">{score}</div>
      <div
        className={`${titleSize} text-gray-600 flex items-center gap-1 justify-center`}
      >
        {Icon && <Icon className="text-lg" />}
        {player}
      </div>
    </div>
  );
};

export default Scores;
