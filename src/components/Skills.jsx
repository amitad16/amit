import React from "react";

import SkillType from "./SkillType";

import "./Skills.css";

const Skills = () => {
  let skillType = [
    {
      name: "Web Development",
      icon: "fa fa-server fa-4x text-violet",
      desc: ["React", "NodeJs", "JavaScript", "Jquery", "AJAX", "HTML", "CSS"]
    },
    {
      name: "Designing",
      icon: "fa fa-laptop fa-4x text-violet",
      desc: ["Logo", "Icons", "Business Cards"]
    },
    {
      name: "Software",
      icon: "fa fa-cogs fa-4x text-violet",
      desc: ["Adobe Illustrator"]
    }
  ];

  let skillTypeGrid = `col-md-${12 / skillType.length} skill`;

  return (
    <React.Fragment>
      <section id="skills">
        <div className="container">
          <div className="row text-center skill-wrapper">
            {skillType.map(v => (
              <SkillType
                key={v.name}
                grid={skillTypeGrid}
                name={v.name}
                icon={v.icon}
                desc={v.desc}
              />
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Skills;
