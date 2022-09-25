import React from 'react';
import styled from 'styled-components';
import Section from '../Utility/Section';
import ExperienceItem from './ExperienceItem';
import EducationItem from './EducationItem';

const ResultContent = ({ personalInfo, experience, education }) => {
  const experienceItems = experience.map((experienceItem) => (
    <ExperienceItem key={experienceItem.id} experienceItem={experienceItem} />
  ));

  const educationItems = education.map((educationItem) => (
    <EducationItem key={educationItem.id} educationItem={educationItem} />
  ));

  return (
    <ContentWrap>
      <Section title='Description' contrastTitle>
        <Description>{personalInfo.description}</Description>
      </Section>
      <Section title='Experience'>{experienceItems}</Section>
      <Section title='Education'>{educationItems}</Section>
    </ContentWrap>
  );
};

const ContentWrap = styled.div`
  padding: 2rem;
  background-color: rgb(238, 238, 238);
  color: #222831;
`;

const Description = styled.div`
  font-style: italic;
`;

export default ResultContent;
