const Option = ({ icon: Icon, text, currenctSecColor }) => {
  return (
    <div className={`flex gap-2 items-center cursor-pointer`}>
      <Icon className={`text-lg ${currenctSecColor}`} />
      <h3 className={`${currenctSecColor} font-medium `}>{text}</h3>
    </div>
  );
};

export default Option;
