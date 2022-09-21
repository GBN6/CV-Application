import React from 'react';
import styled from 'styled-components';
import { FaBriefcase } from 'react-icons/fa';

const Header = () => {
  return (
    <HeaderStyled>
      <Logo>
        <FaBriefcase />
      </Logo>
      <Title>CV Creation Application</Title>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  display: flex;
  font-size: 2rem;
  justify-content: center;
`;

const Logo = styled.div`
  display: flex;
  font-size: 4rem;
  margin-right: 1rem;
  font-size: 4rem;
`;
const Title = styled.h1``;

export default Header;
