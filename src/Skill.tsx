import React from "react";
import Proptypes from "prop-types";
import { Badge } from "./styles/elements";

interface SkillProps {
  title: string;
  votes: number;
}

function Skill({ title, votes }: SkillProps) {
  return (
    <li>
      {title}
      <Badge votes={votes}>{votes}</Badge>
    </li>
  );
}

Skill.propTypes = {
  title: Proptypes.string.isRequired,
  votes: Proptypes.number.isRequired,
};

export default Skill;
