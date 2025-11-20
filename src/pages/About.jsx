import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import { personalInfo } from "../constants/personalInfo";
import PersonalInfo from "../ui/PersonalInfo";
import DetailsArea from "../ui/DetailsArea";
import Section from "../ui/tags/Section";
import { AnimatePresence, motion } from "motion/react";
import { getParaColor } from "../lib/getParaColor";

const About = () => {
  const [showAboutDetails, setShowAboutDetails] = useState(true);

  return (
    <Section label="about-me">
      <SectionHeading
        title="about me"
        emoji="👋"
        setterFnc={setShowAboutDetails}
      />

      <AnimatePresence initial={false}>
        {showAboutDetails && (
          <DetailsArea>
            <p className={`lg:text-lg ${getParaColor()} tracking-wider`}>
              I’m Monojit Sen, a self-taught Frontend Developer currently
              pursuing a B.Com degree from Calcutta University. <br />
              Even with a non-technical background, my curiosity for technology
              and design drives me to create clean, functional, and
              user-friendly web experiences.
              <br /> I believe in learning by doing — every project I build
              helps me grow and think more creatively as a developer.
            </p>

            <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 mt-8">
              {personalInfo.map((info) => {
                return <PersonalInfo key={info.id} infoData={info} />;
              })}
            </div>
          </DetailsArea>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default About;
