import React from 'react';
import styled from 'styled-components';
import Subsection from '../Utility/Subsection';

const EducationItem = ({ educationItem }) => {
  return (
    <EducationItemWrap>
      <Period>
        {educationItem.from} - {educationItem.to}
      </Period>
      <Info>
        <Subsection
          title={`${educationItem.universityName}, ${educationItem.city}`}
        >
          <p>Degree: {educationItem.degree}</p>
          <p>Subject: {educationItem.specialization}</p>
        </Subsection>
      </Info>
    </EducationItemWrap>
  );
};

const EducationItemWrap = styled.div`
  display: flex;
`;
const Period = styled.div`
  width: 20%;
  font-weight: bold;
  padding: 0.5rem;
`;

const Info = styled.div`
  width: 75%;
`;

export default EducationItem;
