import React from 'react';
import styled from 'styled-components';
import Section from '../Utility/Section';
import Subsection from '../Utility/Subsection';

const ResultSidebar = ({ personalInfo }) => {
  return (
    <SidebarWrap>
      <Photo src={personalInfo.photo} />
      <Section title='Personal Details' contrastTitle direction="column">
        <Subsection title='Address'>{personalInfo.address}</Subsection>
        <Subsection title='Phone Number'>{personalInfo.phoneNumber}</Subsection>
        <Subsection title='Email'>{personalInfo.email} </Subsection>
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

export default ResultSidebar;
