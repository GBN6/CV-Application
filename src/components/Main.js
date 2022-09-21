import React from 'react';
import CvForm from './CvForm/CvForm';
import CvResult from './CvResult';
import styled from 'styled-components';

function Main() {
  return (
    <MainWrapper>
      <CvForm />
      <CvResult />
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
display: flex;
align-items: center;
justify-content: center;
padding: 5rem;
margin-bottom: 4rem;

@media (max-width: 1200px) {
  flex-direction: column;
}

`;

export default Main;
