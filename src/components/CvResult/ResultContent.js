import React from 'react';
import styled from 'styled-components';
import Section from '../Utility/Section';

const ResultContent = () => {
  return (
    <ContentWrap>
      <Description>Some description</Description>
      <Section title='Experience'>
        <Period>2012-10 - today</Period>
        <Position>Data engineer</Position>
        <Company>Some company</Company>
        <Responsibilities>
          <li>Responsibility 1</li>
          <li>Responsibility 2</li>
          <li>Responsibility 3</li>
          <li>Responsibility 4</li>
        </Responsibilities>
      </Section>
      <Section title='Education'>
        <Period>2012-10 - today</Period>
        <Position>Data engineer</Position>
        <Company>Some company</Company>
        <Responsibilities>
          <li>Responsibility 1</li>
          <li>Responsibility 2</li>
          <li>Responsibility 3</li>
          <li>Responsibility 4</li>
        </Responsibilities>
      </Section>
    </ContentWrap>
  );
};

export default ResultContent;

const ContentWrap = styled.div`
  grid-column: span 9;
  padding: 2rem;
  background-color: rgb(238, 238, 238);
  flex: 3;
  color: #222831;
`;

const Description = styled.p`
  margin-bottom: 1rem;
`;

const Period = styled.div``;

const Position = styled.div``;

const Company = styled.div``;

const Responsibilities = styled.ul``;
