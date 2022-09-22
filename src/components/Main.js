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
align-items: flex-start;
justify-content: center;
padding: 5rem;
margin-bottom: 4rem;
gap: 6rem;

@media (max-width: 1600px) {
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
`;

export default Main;
