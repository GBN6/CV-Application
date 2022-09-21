import React from 'react';
import styled from 'styled-components';
import ResultHeader from './ResultHeader';
import ResultContent from './ResultContent';
import ResultSidebar from './ResultSidebar';

const CvResult = () => {
  return (
    <CvResultWrap>
      <ResultHeader />
      <ResultContent />
      <ResultSidebar />
    </CvResultWrap>
  );
};

const CvResultWrap = styled.div`
  display: grid;
  min-width: 700px;
  margin-top: 3rem;
  box-shadow: rgba(0, 0, 0, 0.95) 0px 5px 15px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export default CvResult;
