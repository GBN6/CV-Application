import React from 'react';
import Education from './Education';
import Experience from './Experience';
import Personal from './Personal';
import styled from 'styled-components';
import Button from '../Utility/Button';

const CvForm = () => {
  return (
    <CvWrapper>
      <Personal />
      <Education />
      <Experience />
      <Button text='Generate CV in PDF'></Button>
    </CvWrapper>
  );
};

const CvWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  padding: 2rem;
  gap: 3rem;
  min-width: 700px;
`;

export default CvForm;
