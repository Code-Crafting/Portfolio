import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BiErrorCircle } from "react-icons/bi";

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
    <div className="flex flex-col justify-center items-center px-8">
      <div className={`${bgStyle} p-3 rounded-full`}>
        <Icon className={`${iconStyle} text-6xl`} title={iconTitle} />
      </div>

      <h3 className="text-2xl font-bold mt-4">{title}</h3>

      <p className="text-center text-textSecondary text-lg mt-2 mb-4">
        {subtitle}
      </p>
      {children}
    </div>
  );
};

export default SentMsgContent;
