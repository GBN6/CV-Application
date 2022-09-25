import React from 'react';
import styled from 'styled-components';
import Section from '../Utility/Section';
import Subsection from '../Utility/Subsection';
import SkillsItem from './SkillsItem';

const ResultSidebar = ({ personalInfo, skills }) => {
  const skillItem = skills.map((skillItem) => (
    <SkillsItem key={skillItem.id} skillItem={skillItem} />
  ));

  return (
    <SidebarWrap>
      <Photo src={personalInfo.photo} />
      <Section title='Personal Details' contrastTitle direction='column'>
        <Subsection title='Address'>{personalInfo.address}</Subsection>
        <Subsection title='Phone Number'>{personalInfo.phoneNumber}</Subsection>
        <Subsection title='Email'>{personalInfo.email} </Subsection>
        {(() => {
          if (personalInfo.link.length > 0) {
            return <Subsection title='Link'>{personalInfo.link}</Subsection>;
          }
        })()}
        <Subsection title='Skills'>
          <List>{skillItem}</List>
        </Subsection>
      </Section>
    </SidebarWrap>
  );
};

const SidebarWrap = styled.div`
  background-color: rgb(221, 221, 221);
  color: #393e46;
  padding: 2rem;
`;

const Photo = styled.img`
  margin-bottom: 2rem;
`;
const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(85px, 1fr));

`;
export default ResultSidebar;
