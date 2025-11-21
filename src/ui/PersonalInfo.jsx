import { useTheme } from "../contexts/themeContext";
import { getHeadingColor } from "../lib/color/getHeadingColor";
import { getParaColor } from "../lib/color/getParaColor";

const PersonalInfo = ({ infoData }) => {
  const [isDark] = useTheme();
  const { emoji, title, subtitle, link } = infoData;
  return (
    <div className=" flex gap-1 items-center">
      <p className="lg:text-2xl 450px:text-xl text-lg">{emoji}</p>
      <div className="flex gap-2 items-center lg:text-lg 450px:text-[16px] text-[14px]">
        <p className={getParaColor()}>{title}:</p>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <p
              className={`${getHeadingColor()} font-semibold ${
                isDark ? "hover:text-blue-500" : "hover:text-blue-800"
              }`}
            >
              {subtitle}
              ↗️
            </p>
          </a>
        ) : (
          <p className={`${getHeadingColor()} font-semibold`}>{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default PersonalInfo;
