import React from "react";

function Skill(props) {
  return (
    <li>
      {props.name}
      <span className="votes">{props.votes}</span>
    </li>
  );
}

export default Skill;
