import React from 'react';
import styled from 'styled-components';
import Section from '../Utility/Section';
import Subsection from '../Utility/Subsection';

const ResultContent = ({ personalInfo, experience, education }) => {
  return (
    <ContentWrap>
      <Description>{personalInfo.description}</Description>
      <Section title='Experience'>
        <Period>
          {experience.from} - {experience.to}
        </Period>
        <Subsection title={experience.position}>
          <p>{experience.description}</p>
          <p>
            {experience.company} {experience.city}
          </p>
        </Subsection>
      </Section>
      <Section title='Education'>
        <Period>
          {education.from} - {education.to}
        </Period>
        <Subsection title={`${education.universityName}, ${education.city}`}>
          <p>Degree: {education.degree}</p>
          <p>Subject: {education.specialization}</p>
        </Subsection>
      </Section>
    </ContentWrap>
  );
};

export default ResultContent;

const ContentWrap = styled.div`
  padding: 2rem;
  background-color: rgb(238, 238, 238);
  color: #222831;
  border-bottom-left-radius: 5px;
`;

const Description = styled.p`
  margin-bottom: 1rem;
`;

const Period = styled.div`
  width: 20%;
  font-weight: bold;
  padding: 0.5rem;
`;
