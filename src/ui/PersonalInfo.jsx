import { LuArrowUpRight } from "react-icons/lu";

const PersonalInfo = ({ infoData }) => {
  const { emoji, title, subtitle, link } = infoData;
  return (
    <div className=" flex gap-1 items-center">
      <p className="text-2xl">{emoji}</p>
      <div className="flex gap-2 items-center text-lg">
        <p className="text-textSecondary">{title}:</p>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline-offset-2 underline flex items-center hover:text-blue-800"
          >
            {subtitle} <LuArrowUpRight className="text-xl" title="link-arrow" />
          </a>
        ) : (
          <p className="font-semibold">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default PersonalInfo;
