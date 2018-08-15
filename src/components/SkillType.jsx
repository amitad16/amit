import React from "react";

const SkillType = props => {
  return (
    <div className={props.grid}>
      <span className="icon">
        <i className={props.icon} />
      </span>
      <h4 className="skill-heading text-darkgrey">{props.name}</h4>
      <ul className="skill-desc">
        {props.desc.map(item => {
          return (
            <li className="skill-desc-item text-darkgrey" key={item}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillType;
