import React from 'react';
import styled from 'styled-components';

const CvResultHeader = () => {
  return (
    <CvResultHeaderWrap>
      <h1>Jan Nowak</h1>
      <p>Web Developer</p>
    </CvResultHeaderWrap>
  );
};

const CvResultHeaderWrap = styled.header`
  padding: 2rem;
  background-color: #FFD369;
  color: #222831;
`;

export default CvResultHeader;
