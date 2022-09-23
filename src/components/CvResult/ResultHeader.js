import React from 'react';
import styled from 'styled-components';

const ResultHeader = ({ personalInfo }) => {
  const { firstName, lastName, titleName } = personalInfo;
  return (
    <CvResultHeaderWrap>
      <h1>
        {firstName} {lastName}
      </h1>
      <p>{titleName}</p>
    </CvResultHeaderWrap>
  );
};

const CvResultHeaderWrap = styled.header`
  grid-column: span 2;
  padding: 2rem;
  background-color: #ffd369;
  color: #222831;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

export default ResultHeader;
