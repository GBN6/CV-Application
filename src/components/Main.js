import React from 'react';
import CvForm from './CvForm/CvForm';
import CvResult from './CvResult';
import styled from 'styled-components';

function Main() {
  return (
    <MainWrapper>
      <CvForm />
      <CvResult />
      <Button>Generate CV in PDF</Button>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  padding: 2rem;
`;

const Button = styled.button`
  margin: 1rem;

`;

export default Main;
