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
        <ul className="fs-4 display-5 vstack gap-3">
          <li>
            <strong>프로그래밍 언어</strong>: JavaScript, Solidity, Typescript, CoffeeScript, PHP
          </li>
          <li>
            <strong>백엔드 프레임워크</strong>: Node.js, Express, Meteor.js
          </li>
          <li>
            <strong>프론트엔드 기술</strong>: HTML, CSS, React, Vue.js
          </li>
          <li>
            <strong>데이터베이스</strong>: MySQL, MongoDB, Oracle, Redis
          </li>
          <li>
            <strong>도구 및 플랫폼</strong>: Docker, AWS, Git, Slack
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
