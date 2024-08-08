import React from "react";
import Marquee from "react-fast-marquee";

import "./Skills.css";

import { skillsImage } from "../utils/skillsImage";

function Skills() {
  const skillsData = [
    "HTML",
    "CSS",
    "Bootstrap",
    "Javascript",
    "Typescript",
    "Solidity",
    "jQuery",
    "NodeJS",
    "Vue",
    "React",
    "Redux",
    "MongoDB",
    "MySQL",
    "AWS",
    "Meteor",
    "Oracle",
  ];

  return (
    <div id="skills">
      <div className="text-center">
        <h2 className="display-3 fw-bold">Skills</h2>
      </div>
      <div className="skillsContainer">
        <div className="skill--scroll">
          <Marquee gradient={false} speed={80} pauseOnHover={true} pauseOnClick={true} delay={0} play={true} direction="left">
            {skillsData.map((skill, id) => (
              <div className="skill--box" key={id}>
                <img src={skillsImage(skill)} alt={skill} />
                <h3>{skill}</h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <div className="container">
        <ul className="fs-4 vstack gap-3">
          <li>프로그래밍 언어: JavaScript, Solidity, Typescript, CoffeeScript, PHP</li>
          <li>백엔드 프레임워크: Node.js, Express, Meteor.js</li>
          <li>프론트엔드 기술: HTML, CSS, React, Vue.js</li>
          <li>데이터베이스: MySQL, MongoDB, Oracle, Redis</li>
          <li>도구 및 플랫폼: Docker, AWS, Git, Slack</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
