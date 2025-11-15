import { useState } from "react";
import Section from "../ui/tags/Section";
import SectionHeading from "../ui/SectionHeading";
import DetailsArea from "../ui/DetailsArea";
import { skillsData } from "../constants/skillsData";
import Tech from "../ui/Tech";
import { AnimatePresence } from "motion/react";

const Skills = () => {
  const [showSkills, setShowSkills] = useState(true);

  return (
    <Section label="skills">
      <SectionHeading title="skills" emoji="⚡" setterFnc={setShowSkills} />

      <AnimatePresence initial={false}>
        {showSkills && (
          <DetailsArea>
            <div className="space-y-8">
              {skillsData.map((skill) => {
                return (
                  <div key={skill.id} className="space-y-3">
                    <p className="font-medium text-lg text-gray-700">
                      {skill.title}
                    </p>
                    <ul className="flex gap-4">
                      {skill.skills.map((s, i) => {
                        return (
                          <li key={i}>
                            <Tech tech={s} fontSize="text-lg" />
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
