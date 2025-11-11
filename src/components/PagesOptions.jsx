import { useState } from "react";
import { pagesOptions } from "../constants/pagesOptions";
import PagesLink from "../ui/links/PagesLink";
import { Link } from "react-router";

const PagesOptions = () => {
  const [currentSec, setCurrentSec] = useState(1);

  const handleKeyDown = (e, optionId) => {
    if (e.key === "Enter" || e.key === " ") {
      setCurrentSec(optionId);
    }
  };

  return (
    <ul className="mt-8 flex flex-col gap-1">
      {pagesOptions.map((option) => {
        return (
          <li key={option.id}>
            <Link
              to={option.link}
              onClick={() => setCurrentSec(option.id)}
              onKeyDown={(e) => handleKeyDown(e, option.id)}
              className={`block p-3 ${
                option.id === currentSec ? "bg-gray-300" : ""
              }  rounded-md`}
            >
              <PagesLink
                icon={option.icon}
                text={option.text}
                currentSecColor={
                  option.id === currentSec
                    ? "text-textPrimary"
                    : "text-textSecondary"
                }
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PagesOptions;
