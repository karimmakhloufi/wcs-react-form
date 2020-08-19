import React from "react";
import Proptypes from "prop-types";

function Skill(props) {
  return (
    <li>
      {props.name}
      <span className="votes">{props.votes}</span>
    </li>
  );
}

Skill.propTypes = {
  name: Proptypes.string.isRequired,
  votes: Proptypes.number.isRequired,
};

export default Skill;
