const PagesLink = ({
  icon: Icon,
  text,
  currentSecColor = "text-textSecondary",
}) => {
  return (
    <div className={`flex gap-2 items-center cursor-pointer`}>
      {Icon && <Icon className={`text-lg ${currentSecColor}`} />}
      <p className={`font-medium ${currentSecColor}`}>{text}</p>
    </div>
  );
};

export default PagesLink;
