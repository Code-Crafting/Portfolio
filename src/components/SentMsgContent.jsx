import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BiErrorCircle } from "react-icons/bi";
import { getParaColor } from "../lib/color/getParaColor";
import { getHeadingColor } from "../lib/color/getHeadingColor";

const SentMsgContent = ({
  title = "Success",
  subtitle = "",
  children,
  varient = "success",
}) => {
  const MODAL_TYPE = {
    success: {
      icon: IoMdCheckmarkCircleOutline,
      iconTitle: "success",
      iconStyle: " text-green-600",
      bgStyle: "bg-green-200",
    },
    error: {
      icon: BiErrorCircle,
      iconTitle: "error",
      iconStyle: " text-red-600 text-6xl",
      bgStyle: "bg-red-200",
    },
  };

  const { icon: Icon, iconStyle, bgStyle, iconTitle } = MODAL_TYPE[varient];

  return (
    <div className="flex flex-col justify-center items-center sm:px-8 px-2">
      <div className={`${bgStyle} p-3 rounded-full`}>
        <Icon
          className={`${iconStyle} sm:text-6xl text-4xl`}
          title={iconTitle}
        />
      </div>

      <h3
        className={`sm:text-2xl 450px:text-xl text-md ${getHeadingColor()} font-bold 450px:mt-4 mt-2`}
      >
        {title}
      </h3>

      <p
        className={`text-center ${getParaColor()} sm:text-lg 450px:text-sm text-[12px] 450px:mt-2 mt-1 450px:mb-4 mb-2`}
      >
        {subtitle}
      </p>
      {children}
    </div>
  );
};

export default SentMsgContent;
