import { useTheme } from "../contexts/themeContext";
import { getHeadingColor } from "../lib/color/getHeadingColor";
import { getParaColor } from "../lib/color/getParaColor";

const PersonalInfo = ({ infoData }) => {
  const [isDark] = useTheme();
  const { emoji, title, subtitle, link } = infoData;
  return (
    <div className="flex items-center gap-1 ">
      <p className="text-lg lg:text-2xl 450px:text-xl">{emoji}</p>
      <div className="flex gap-2 items-center lg:text-lg 450px:text-[16px] text-[14px]">
        <p className={getParaColor(isDark)}>{title}:</p>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <p
              className={`${getHeadingColor(isDark)} font-semibold ${
                isDark ? "hover:text-blue-500" : "hover:text-blue-800"
              } transition duration-300`}
            >
              {subtitle}
              ↗️
            </p>
          </a>
        ) : (
          <p className={`${getHeadingColor(isDark)} font-semibold`}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PersonalInfo;
