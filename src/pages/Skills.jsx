import { useState } from "react";
import Section from "../ui/tags/Section";
import SectionHeading from "../ui/SectionHeading";
import DetailsArea from "../ui/DetailsArea";
import { skillsData } from "../constants/skillsData";
import Tech from "../ui/Tech";
import { AnimatePresence } from "motion/react";
import { useTheme } from "../contexts/themeContext";

const Skills = () => {
  const [showSkills, setShowSkills] = useState(true);
  const [isDark] = useTheme();

  return (
    <Section label="skills">
      <SectionHeading title="skills" emoji="⚡" setterFnc={setShowSkills} />

      <AnimatePresence initial={false}>
        {showSkills && (
          <DetailsArea>
            <div className="sm:space-y-8 space-y-6">
              {skillsData.map((skill) => {
                return (
                  <div key={skill.id} className="lg:space-y-3 space-y-2">
                    <p
                      className={`font-medium lg:text-lg ${
                        isDark ? "text-darkPara" : "text-gray-700"
                      }`}
                    >
                      {skill.title}
                    </p>
                    <ul className="flex gap-4">
                      {skill.skills.map((s, i) => {
                        return (
                          <li key={i}>
                            <Tech tech={s} fontSize="lg:text-lg text-md" />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </DetailsArea>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Skills;
