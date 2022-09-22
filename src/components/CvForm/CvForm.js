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
      <Experience />
      <Education />
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
  width: 210mm;
  box-shadow: rgba(0, 0, 0, 0.95) 0px 5px 15px;
  background-color: #565d69;
`;

export default CvForm;
