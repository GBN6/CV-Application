import React from 'react';
import styled from 'styled-components';

const Button = ({ text, onClick }) => {
  return <ButtonWrap onClick={onClick}>{text}</ButtonWrap>;
};
const ButtonWrap = styled.button`
  padding: 1rem;
  border-radius: 5px;
  font-weight: bold;
  background-color: #222831;
  color: #ffd369;
  &:hover {
    filter: brightness(50%);
  }
`;

export default Button;
