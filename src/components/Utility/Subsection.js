import React from "react";
import styled from "styled-components";

const Subsection = (props) => {
  return (
    <SubsectionWrap>
      <Title>{props.title}</Title>
      {props.children}
    </SubsectionWrap>
  );
};

const SubsectionWrap = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Title = styled.h3`
  padding: 0.5rem;
  line-height: 1.6;
`;

export default Subsection;