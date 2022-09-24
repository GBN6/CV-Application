import React from 'react';
import styled from 'styled-components';
import ResultHeader from './ResultHeader';
import ResultContent from './ResultContent';
import ResultSidebar from './ResultSidebar';

const CvResult = ({ cv }) => {
  return (
    <CvResultWrap>
      <ResultHeader personalInfo={cv.personalInfo} />
      <ResultContent
        personalInfo={cv.personalInfo}
        experience={cv.experience}
        education={cv.education}
      />
      <ResultSidebar personalInfo={cv.personalInfo} />
    </CvResultWrap>
  );
};

const CvResultWrap = styled.div`
  position: sticky;
  top: 10px;
  width: 210mm;
  height: 297mm;
  display: grid;
  grid-template-columns: 150mm 60mm;
  grid-template-rows: 35mm 262mm;
  margin-top: 3rem;
  box-shadow: rgba(0, 0, 0, 0.95) 0px 5px 15px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export default CvResult;
