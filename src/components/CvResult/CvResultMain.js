import React from 'react';
import styled from 'styled-components';
import Story from './Story';
import Sidebar from './Sidebar';

const CvResultMain = () => {
  return (
    <CvResultMainWrap>
      <Story />
      <Sidebar />
    </CvResultMainWrap>
  );
};

const CvResultMainWrap = styled.div`
  display: flex;
`;

export default CvResultMain;
