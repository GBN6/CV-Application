import React from 'react';
import Education from './Education';
import Experience from './Experience';
import Personal from './Personal';
import styled from "styled-components";

function CvForm() {
  return (
    <Wrapper>
      <Personal />
      <br />
      <Education />
      <br />
      <Experience />
      <br />
      <button>Create CV</button>
      <br />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default CvForm;
