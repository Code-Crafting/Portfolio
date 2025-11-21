import { socialLinks } from "../../constants/socialLinks";
import { getParaColor } from "../../lib/color/getParaColor";

const ModalFooter = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className={`text-lg ${getParaColor()}`}>Connect with me on</p>
      <ul className="flex gap-2 mt-2">
        {socialLinks.map((socilaLink) => {
          const {
            id,
            icon: Icon,
            title,
            iconColor,
            bgColor,
            link,
          } = socilaLink;
          return (
            <li
              className={`${bgColor} w-max grid place-items-center  rounded cursor-pointer`}
              key={id}
            >
              <a
                href={link}
                className=" p-2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={title}
              >
                <Icon className={`${iconColor} text-3xl `} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ModalFooter;
