import { getHeadingColor } from "../lib/color/getHeadingColor";

const SubHeading = ({ text = "SubHeading" }) => {
  return (
    <h3
      className={`lg:text-xl text-lg font-semibold ${getHeadingColor()} mb-4`}
    >
      {text}
    </h3>
  );
};

export default SubHeading;
