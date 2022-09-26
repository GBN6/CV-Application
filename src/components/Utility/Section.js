import React from 'react';
import styled, { css } from 'styled-components';

const Section = ({
  padding,
  title,
  children,
  titlePadding,
  contrastTitle,
  direction,
}) => {
  return (
    <SectionWrapper padding={padding}>
      <Title padding={titlePadding} contrast={contrastTitle}>
        {title}
      </Title>
      <Children direction={direction}>{children}</Children>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: ${(props) => props.padding};
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  padding: ${(props) => props.padding};
  ${(props) =>
    props.contrast &&
    css`
      border-bottom: 1px solid #393E46;
      color: #a57300;
    `}
`;

const Children = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction === "column" && "column"};
  gap: 1rem;
`;

export default Section;
