import React from 'react';
import styled from 'styled-components';
import Section from '../Utility/Section';
import Subsection from '../Utility/Subsection';

const ResultContent = () => {
  return (
    <ContentWrap>
      <Description>Description</Description>
      <Section title='Experience'>
        <Period>From - To</Period>
        <Subsection title='Position'>
          <p>Company, City</p>
        </Subsection>
      </Section>
      <Section title='Education'>
        <Period>From - To</Period>
        <Subsection title='University name, City'>
          <p>Degree: Degree</p>
          <p>Subject: Subject</p>
        </Subsection>
      </Section>
    </ContentWrap>
  );
};

export default ResultContent;

const ContentWrap = styled.div`
  grid-column: span 9;
  padding: 2rem;
  background-color: rgb(238, 238, 238);
  color: #222831;
  min-height: 870px;
  border-bottom-left-radius: 5px;
`;

const Description = styled.p`
  margin-bottom: 1rem;
`;

const Period = styled.div`
  width: 20%;
`;
