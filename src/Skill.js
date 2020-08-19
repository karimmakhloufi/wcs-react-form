import React from "react";
import Proptypes from "prop-types";

function Skill({ name, votes }) {
  return (
    <li>
      {name}
      <span className="votes">{votes}</span>
    </li>
  );
}

Skill.propTypes = {
  name: Proptypes.string.isRequired,
  votes: Proptypes.number.isRequired,
};

export default Skill;
