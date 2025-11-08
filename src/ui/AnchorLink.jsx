const AnchorLink = ({
  path = "#",
  icon: Icon,
  text,
  addDownload = false,
  iconColor = "text-textSecondary",
}) => {
  return (
    <a
      href={path}
      className="inline-block"
      download={addDownload ? true : false}
    >
      <div className="flex gap-2 items-center cursor-pointer group">
        {Icon && <Icon className={`${iconColor}  group-hover:text-gray-800`} />}
        <p className="text-textSecondary group-hover:text-gray-800">{text}</p>
      </div>
    </a>
  );
};

export default AnchorLink;
