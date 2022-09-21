import React from "react";
import CvResultHeader from "./CvResultHeader";
import CvResultMain from "./CvResultMain";
import styled from "styled-components";

const CvResult = () => {
    return (
        <CvResultWrap>
            <CvResultHeader />
            <CvResultMain />
        </CvResultWrap>
    )
}

const CvResultWrap = styled.div`
  min-width: 700px;
  padding: 2rem;
`;

export default CvResult;