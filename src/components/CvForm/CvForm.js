import React from 'react';
import Education from './Education';
import Experience from './Experience';
import Personal from './Personal';
import styled from "styled-components";

const CvForm = () => {
  return (
    <CvWrapper>
      <Personal />
      <Education />
      <Experience />
    </CvWrapper>
  );
}

const CvWrapper = styled.div`
  max-width: 800px;
  border-radius: 5px;
`;

export default CvForm;
