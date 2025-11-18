const PersonalInfo = ({ infoData }) => {
  const { emoji, title, subtitle, link } = infoData;
  return (
    <div className=" flex gap-1 items-center">
      <p className="lg:text-2xl 450px:text-xl text-lg">{emoji}</p>
      <div className="flex gap-2 items-center lg:text-lg 450px:text-[16px] text-[14px]">
        <p className="text-textSecondary">{title}:</p>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <p className="text-textPrimary font-semibold hover:text-blue-800">
              {subtitle}
              ↗️
            </p>
          </a>
        ) : (
          <p className="text-textPrimary font-semibold">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default PersonalInfo;
