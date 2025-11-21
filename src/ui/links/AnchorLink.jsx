const AnchorLink = ({
  path = "#",
  icon: Icon,
  iconItile = "iconTitle",
  text = " text",
  textSize = "",
  addDownload = false,
  color = "text-textSecondary hover:text-gray-800",
  label = "link",
}) => {
  return (
    <a
      href={path}
      className="inline-block"
      download={addDownload ? true : false}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <div
        className={`flex items-center gap-2 text-sm ${color} transition duration-300 cursor-pointer lg:text-lg`}
      >
        {Icon && <Icon title={iconItile} />}
        <p className={` ${textSize}`}>{text}</p>
      </div>
    </a>
  );
};

export default AnchorLink;
