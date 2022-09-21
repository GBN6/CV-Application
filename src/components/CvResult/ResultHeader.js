import React from 'react';
import styled from 'styled-components';

const ResultHeader = () => {
  return (
    <CvResultHeaderWrap>
      <h1>Jan Nowak</h1>
      <p>Web Developer</p>
    </CvResultHeaderWrap>
  );
};

const CvResultHeaderWrap = styled.header`
  grid-column: span 10;
  padding: 2rem;
  background-color: #FFD369;
  color: #222831;
`;

export default ResultHeader;
