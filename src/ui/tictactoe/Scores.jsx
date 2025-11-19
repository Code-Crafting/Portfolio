const Scores = ({
  score,
  icon: Icon,
  player,
  titleSize = "text-sm",
  conStyle = "",
}) => {
  return (
    <div className={`text-center ${conStyle}`}>
      <div className="lg:text-3xl text-2xl font-bold text-gray-800">
        {score}
      </div>
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
