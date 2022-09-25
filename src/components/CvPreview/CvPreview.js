import React, { Component } from 'react';
import styled from 'styled-components';
import ResultHeader from './ResultHeader';
import ResultContent from './ResultContent';
import ResultSidebar from './ResultSidebar';

//react-to-print package prints only class components

class CvPreview extends Component {
  render() {
    const { cv } = this.props;

    return (
      <CvPreViewWrap>
        <ResultHeader personalInfo={cv.personalInfo} />
        <ResultContent
          personalInfo={cv.personalInfo}
          experience={cv.experience}
          education={cv.education}
        />
        <ResultSidebar skills={cv.skills} personalInfo={cv.personalInfo} />
      </CvPreViewWrap>
    );
  }
}

const CvPreViewWrap = styled.div`
  position: sticky;
  top: 10px;
  width: 210mm;
  height: 297mm;
  display: grid;
  grid-template-columns: 150mm 60mm;
  grid-template-rows: 35mm 262mm;
  box-shadow: rgba(0, 0, 0, 0.95) 0px 5px 15px;
`;

export default CvPreview;
