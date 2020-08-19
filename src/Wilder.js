import React from "react";

import blank_profile from "./blank-profile-picture-female.png";
import Skill from "./Skill";

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
        <Skill name="HTML" votes={3} />
        <Skill name="CSS" votes={2} />
        <Skill name="React" votes={4} />
        <Skill name="Node" votes={7} />
        <Skill name="Typescript" votes={2} />
      </ul>
    </article>
  );
}

export default Wilder;
