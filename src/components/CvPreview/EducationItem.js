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
          <div>Degree: {educationItem.degree}</div>
          <div>Subject: {educationItem.specialization}</div>
        </Subsection>
      </Info>
    </EducationItemWrap>
  );
};

const EducationItemWrap = styled.div`
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

export default EducationItem;
