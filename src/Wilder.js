import React from "react";
import blank_profile from "./blank-profile-picture-female.png";
import Skill from "./Skill";
import { Card, List } from "./styles/elements";

const skills = [
  { name: "HTML", votes: 3 },
  { name: "React", votes: 4 },
  { name: "CSS", votes: 5 },
  { name: "Typescript", votes: 3 },
  { name: "Styled Components", votes: 10 },
];

function Wilder() {
  return (
    <Card>
      <img src={blank_profile} alt="Jane Doe Profile" />
      <h3>Jane Doe</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <List>
        {skills.map((skill) => (
          <Skill key={skill.name} {...skill} />
        ))}
      </List>
    </Card>
  );
}

export default Wilder;
