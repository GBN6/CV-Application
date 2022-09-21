import React from 'react';
import styled from 'styled-components';

const Section = (props) => {
  return (
    <SectionWrap>
      <Title>{props.title}</Title>
      {props.children}
    </SectionWrap>
  );
};

const SectionWrap = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Title = styled.h2`
  padding: 0.5rem;
`;

export default Section;
