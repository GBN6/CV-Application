import React from 'react';
import styled from 'styled-components';
import Section from '../Utility/Section';
import Subsection from '../Utility/Subsection';

const CvResultMain = () => {
  return (
    <CvResultMainWrap>
      <Content>
        <Description></Description>
        <Section title="Experience"></Section>
        <Section title="Education"></Section>
      </Content>
      <Sidebar>
        <Photo></Photo>
        <Section title="Personal Info" >
            <Subsection title="Address"></Subsection>
            <Subsection title="Phone Number"></Subsection>
            <Subsection title="Email"></Subsection>
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
`;

const Sidebar = styled.div`
  padding: 2rem;
  background-color: rgb(221, 221, 221);
  flex: 1;
  color: #393E46;
`;

const Description = styled.p``;

const Photo = styled.img``;

export default CvResultMain;
