import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

const Badge = styled.span`
  /* Center the content */
  align-items: center;
  display: flex;
  justify-content: center;

  /* Colors */
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;

  /* Rounded border */
  border-radius: 9999px;
  height: 20px;
  width: 20px;
`;

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
