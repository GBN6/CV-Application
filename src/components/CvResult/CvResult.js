import React from 'react';
import styled from 'styled-components';
import ResultHeader from './ResultHeader';
import ResultContent from './ResultContent';
import ResultSidebar from './ResultSidebar';
import Button from '../Utility/Button';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CvResult = ({ cv }) => {
  return (
    <>
      <CvResultWrap>
        <ResultHeader personalInfo={cv.personalInfo} />
        <ResultContent
          personalInfo={cv.personalInfo}
          experience={cv.experience}
          education={cv.education}
        />
        <ResultSidebar personalInfo={cv.personalInfo} />
      </CvResultWrap>
      <Pdf targetRef={ref} filename='cv.pdf'>
        {({ toPdf }) => <Button text='Generate PDF' onClick={toPdf} />}
      </Pdf>
      <div style={{ width: 500, height: 500, background: 'blue' }} ref={ref} />
    </>
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
