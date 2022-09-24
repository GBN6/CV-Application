import React from 'react';
import styled from 'styled-components';
import Section from '../Utility/Section';
import Subsection from '../Utility/Subsection';

const ResultSidebar = ({ personalInfo }) => {
  return (
    <SidebarWrap>
      <Photo src={personalInfo.photo}/>
      <Section title='Personal Details'>
        <Subsection title='Address'>{personalInfo.address}</Subsection>
        <Subsection title='Phone Number'>{personalInfo.phoneNumber}</Subsection>
        <Subsection title='Email'>{personalInfo.email} </Subsection>
      </Section>
    </SidebarWrap>
  );
};

const SidebarWrap = styled.div`
  padding: 1.5rem;
  background-color: rgb(221, 221, 221);
  color: #393e46;
  border-bottom-right-radius: 5px;
`;

const Photo = styled.img`
  margin-bottom: 2rem;
  max-height: 300px;
  max-width: 170px;
`;

export default ResultSidebar;
