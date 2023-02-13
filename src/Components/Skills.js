import React from "react";
import "../Styles/Skills.css";

const frontendSkills = [
  {
    title: "Javascript",
    width: "75%",
    percentage: "75%",
  },
  {
    title: "Angular",
    width: "75%",
    percentage: "75%",
  },
  {
    title: "React.js",
    width: "75%",
    percentage: "75%",
  },
  {
    title: "React Native",
    width: "75%",
    percentage: "75%",
  },
];

const backendSkills = [
  {
    title: "Node.js/Express",
    width: "75%",
    percentage: "75%",
  },
  {
    title: "MySQL",
    width: "75%",
    percentage: "75%",
  },
  {
    title: "MongoDB",
    width: "75%",
    percentage: "75%",
  },
  {
    title: "API",
    width: "75%",
    percentage: "75%",
  },
];
const Skills = () => {
  return (
    <div className="skills_wrapper d-flex gap-5">
      <div className="fronted_skill w-50">
        {frontendSkills.map((item, index) => (
          <SkillItem
            key={index}
            title={item.title}  
            percentage={item.percentage}
          />
        ))}
      </div>

      <div className="backend_skill w-50">
        {backendSkills.map((item, index) => (
          <SkillItem
            key={index}
            title={item.title}
            percentage={item.percentage}
          />
        ))}
      </div>
    </div>
  );
};

const SkillItem = ({ title, percentage }) => {
  return <div className="skill_data mb-3">
    <div className="skill_title d-flex lign-item-enter">
      <h6>{title}</h6>
      <span className="percentage">{percentage}</span>
    </div>
    <div className="skill_bar">
      <span
        className="skill_bar-percentage"
        style={{ width: `${percentage}` }}
      ></span>
    </div>
  </div>;
};

export default Skills;
