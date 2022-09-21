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
  display: grid;
  grid-gap: 0.5rem;
  padding: 2rem;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

export default Section;
