import React from "react";

function Skills() {
  const skillList = [
    { name: "HTML5", percentage: "80%" },
    { name: "CSS3", percentage: "95%" },
    { name: "BOOTSTRAP", percentage: "85%" },
    { name: "JAVASCRIPT", percentage: "80%" },
    { name: "REACT JS", percentage: "75%" },
    { name: "WORDPRESS", percentage: "85%" },
    { name: "FIGMA", percentage: "95%" },
    { name: "PHOTOSHOP", percentage: "70%" },
  ];

  return (
    <section className="choose" id="Skills">
      <div className="section__container choose__container">
        <h2 className="section__header">My Skills</h2>
        <h1>MY SKILLS</h1>
        <div className="choose__grid">
          {skillList.map((skill, index) => (
            <div className="choose__card" key={index}>
              <div>
                <h4>{skill.name}</h4>
                <h4>{skill.percentage}</h4>
              </div>
              <div 
                className="choose__progress" 
                style={{ "--progress": skill.percentage }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;