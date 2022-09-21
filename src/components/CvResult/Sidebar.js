import React from 'react';
import styled from 'styled-components';
import Section from '../Utility/Section';
import Subsection from '../Utility/Subsection';
import photo from '../../assets/photo.png';

const Sidebar = () => {
  return (
    <SidebarWrap>
      <Photo src={photo} alt='example' />
      <Section title='Personal Info'>
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
  flex: 1;
`;

const Photo = styled.img`
  margin-bottom: 2rem;
  max-height: 300px;
  max-width: 200px
`;

export default Sidebar;
