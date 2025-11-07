import { useState } from "react";
import { pagesOptions } from "../constants/pagesOptions";
import Option from "../ui/Option";
import { Link } from "react-router";

const PagesOptions = () => {
  const [currentSec, setCurrentSec] = useState(1);

  return (
    <div className="mt-8 flex flex-col gap-2">
      {pagesOptions.map((option) => {
        return (
          <Link to={option.link}>
            <div
              key={option.id}
              className={`${
                option.id === currentSec ? "bg-gray-300" : ""
              } px-2 py-2 rounded-md`}
              onClick={() => setCurrentSec(option.id)}
            >
              <Option
                icon={option.icon}
                text={option.text}
                currenctSecColor={
                  option.id === currentSec ? "black" : "text-textSecondary"
                }
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PagesOptions;
