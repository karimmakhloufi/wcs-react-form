import React from "react";
import Proptypes from "prop-types";
import { Badge } from "./styles/elements";

function Skill({ name, votes }) {
  return (
    <li>
      {name}
      <Badge>{votes}</Badge>
    </li>
  );
}

Skill.propTypes = {
  name: Proptypes.string.isRequired,
  votes: Proptypes.number.isRequired,
};

export default Skill;
