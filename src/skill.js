import React, { Component } from "react";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import skills from "../src/databases/skills.json";

class Skills extends Component {
  render() {
    return (
      <div className={"skill-containers"} id="skills">
        <h1 className={"skill-heading"}>Skills</h1>
        <div className={"card-containers"}>
          {skills.map((skill, index) => {
            return (
              <div className="skill-card">
                <img
                  src={skill.logo}
                  className={"card-imgs"}
                  alt={skill.name}
                />
                <div className={"card-body"}>
                  <h1 className={"skill-name"}>{skill.name}</h1>
                  <p className={"para-card"}>{skill.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Skills;
