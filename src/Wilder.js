import React from "react";

import blank_profile from "./blank-profile-picture-female.png";
import Skill from "./Skill";

const skills = [
  { name: "HTML", votes: 3 },
  { name: "React", votes: 4 },
  { name: "CSS", votes: 5 },
  { name: "Typescript", votes: 3 },
];

function Wilder() {
  return (
    <article className="card">
      <img src={blank_profile} alt="Jane Doe Profile" />
      <h3>Jane Doe</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {skills.map((skill) => (
          <Skill key={skill.name} {...skill} />
        ))}
      </ul>
    </article>
  );
}

export default Wilder;
