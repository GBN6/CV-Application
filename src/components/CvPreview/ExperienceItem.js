import React from "react";
import styled from "styled-components";
import Subsection from "../Utility/Subsection";

const ExperienceItem = ({ experienceItem }) => {
  return (
    <ExperienceItemWrap>
      <Period>
        {experienceItem.from} - {experienceItem.to}
      </Period>
      <Info>
        <Subsection title={experienceItem.position}>
          <p>
            {experienceItem.company}, {experienceItem.city}
          </p>
        </Subsection>
      </Info>
    </ExperienceItemWrap>
  );
};

const ExperienceItemWrap = styled.div`
display: flex;
`

const Period = styled.div`
  width: 20%;
  font-weight: bold;
  padding: 0.5rem;
`;

const Info = styled.div`
width: 75%;
`

export default ExperienceItem;