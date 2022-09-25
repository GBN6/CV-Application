import React from 'react';
import styled from 'styled-components';
import Subsection from '../Utility/Subsection';

const ExperienceItem = ({ experienceItem }) => {
  return (
    <ExperienceItemWrap>
      <Period>
        {experienceItem.from} - {experienceItem.to}
      </Period>
      <Info>
        <Subsection title={experienceItem.position}>
          <div>
            {experienceItem.company}, {experienceItem.city}
          </div>
          <div>{experienceItem.description}</div>
        </Subsection>
      </Info>
    </ExperienceItemWrap>
  );
};

const ExperienceItemWrap = styled.div`
  display: flex;
`;

const Period = styled.div`
  width: 25%;
  font-weight: bold;
  margin-right: 2rem;
`;

const Info = styled.div`
  width: 70%;
`;

export default ExperienceItem;
