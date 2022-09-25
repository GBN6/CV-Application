import React from 'react';
import styled from 'styled-components';


const SkillsItem = ({ skillItem }) => {
  return (
    <SkillItemWrap>
        <Info>{skillItem.skill}</Info>
    </SkillItemWrap>
  );
};

const SkillItemWrap = styled.div`

`;

const Info = styled.li`
max-width: 100%;
`;

export default SkillsItem;
