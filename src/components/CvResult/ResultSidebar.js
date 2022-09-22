import React from 'react';
import styled from 'styled-components';
import Section from '../Utility/Section';
import Subsection from '../Utility/Subsection';
import photo from '../../assets/photo.png';

const ResultSidebar = () => {
  return (
    <SidebarWrap>
      <Photo src={photo} alt='example' />
      <Section title='Personal Details'>
        <Subsection title='Address'>Example street 20</Subsection>
        <Subsection title='Phone Number'>123456789</Subsection>
        <Subsection title='Email'>mail@gmail.com</Subsection>
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
  max-width: 170px
`;

export default ResultSidebar;
