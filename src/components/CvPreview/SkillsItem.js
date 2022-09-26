import React from 'react';
import styled from 'styled-components';


const SkillsItem = ({ skillItem }) => {
  return (
        <Info>{skillItem.skill}</Info>

  );
};

const Info = styled.li`
max-width: 100%;
`;

export default SkillsItem;
