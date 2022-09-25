import React from 'react';
import styled from 'styled-components';
import Section from '../Utility/Section';
import Subsection from '../Utility/Subsection';

const ResultSidebar = ({ personalInfo }) => {
  return (
    <SidebarWrap>
      <Photo src={personalInfo.photo} />
      <Section title='Personal Details'>
        <Subsection title='Address'>{personalInfo.address}</Subsection>
        <Subsection title='Phone Number'>{personalInfo.phoneNumber}</Subsection>
        <Subsection title='Email'>{personalInfo.email} </Subsection>
      </Section>
    </SidebarWrap>
  );
};

const SidebarWrap = styled.div`
  padding: 2rem;
  background-color: rgb(221, 221, 221);
  color: #393e46;
`;

const Photo = styled.img`
  margin-bottom: 2rem;
`;

export default ResultSidebar;
