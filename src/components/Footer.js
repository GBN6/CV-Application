import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <StyledFooter>
      <Signature>
        GBN6@2022  <FaGithub />
      </Signature>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  width: 100%;
`;

const Signature = styled.p`
  margin-right: 1rem;
`;

export default Footer;
