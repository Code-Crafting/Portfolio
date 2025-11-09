import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import { personalInfo } from "../constants/personalInfo";
import PersonalInfo from "../ui/PersonalInfo";
import { useLocation } from "react-router";

const About = () => {
  const [showDetails, setShowetails] = useState(true);
  const { pathname } = useLocation();
  return (
    <section
      aria-label="about-me"
      className={`${pathname !== "/" ? "pl-6" : ""}`}
    >
      <SectionHeading
        title="about me"
        emoji="👋"
        setShowetails={setShowetails}
        pathname={pathname}
      />

      {showDetails && (
        <div className={`${pathname === "/" ? "pl-14" : "pl-10"} mt-4`}>
          <p className="text-lg text-textSecondary tracking-wider">
            I’m Monojit Sen, a self-taught Frontend Developer currently pursuing
            a B.Com degree from Calcutta University. <br />
            Even with a non-technical background, my curiosity for technology
            and design drives me to create clean, functional, and user-friendly
            web experiences.
            <br /> I believe in learning by doing — every project I build helps
            me grow and think more creatively as a developer.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {personalInfo.map((info) => {
              return <PersonalInfo key={info.id} infoData={info} />;
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
