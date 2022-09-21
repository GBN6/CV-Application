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
  padding: 3rem;
`;

export default Main;
