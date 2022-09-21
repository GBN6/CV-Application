import React from 'react';
import styled from 'styled-components';
import Section from '../Utility/Section';
import Subsection from '../Utility/Subsection';
import photo from '../../assets/photo.png';

const CvResultMain = () => {
  return (
    <CvResultMainWrap>
      <Content>
        <Description>
          Some additional info about your, what you wnat what you did
        </Description>
        <Section title='Experience'></Section>
        <Section title='Education'></Section>
      </Content>
      <Sidebar>
        <Photo src={photo} alt='example' />
        <Section title='Personal Info'>
          <Subsection title='Address'></Subsection>
          <Subsection title='Phone Number'></Subsection>
          <Subsection title='Email'></Subsection>
        </Section>
      </Sidebar>
    </CvResultMainWrap>
  );
};

const CvResultMainWrap = styled.div`
  display: flex;
`;

const Content = styled.div`
  padding: 2rem;
  background-color: rgb(238, 238, 238);
  flex: 3;
  color: #222831;
`;

const Sidebar = styled.div`
  padding: 2rem;
  background-color: rgb(221, 221, 221);
  flex: 1;
  color: #393e46;
`;

const Description = styled.p`
margin-bottom: 1rem;
`;

const Photo = styled.img`
margin-bottom: 2rem
max-width: 100px;
max-height: 200px;
`;

export default CvResultMain;
