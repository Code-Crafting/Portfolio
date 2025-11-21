import { getParaColor } from "../lib/color/getParaColor";

const GameSubheader = ({ text }) => {
  return <p className={`${getParaColor()} lg:text-lg`}>{text}</p>;
};

export default GameSubheader;
