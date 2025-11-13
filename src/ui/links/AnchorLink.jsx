const AnchorLink = ({
  path = "#",
  icon: Icon,
  iconItile = "iconTitle",
  text = " text",
  textSize = "",
  addDownload = false,
  color = "text-textSecondary group-hover:text-gray-800",
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
      <div className="flex gap-2 items-center cursor-pointer group">
        {Icon && <Icon className={color} title={iconItile} />}
        <p className={`${color} ${textSize}`}>{text}</p>
      </div>
    </a>
  );
};

export default AnchorLink;
