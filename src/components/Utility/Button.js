import React from 'react';
import styled, { css } from 'styled-components';

const Button = ({ text, onClick, primary }) => {
  return <ButtonWrap primary={primary} onClick={onClick}>{text}</ButtonWrap>;
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

  ${(props) =>
    props.primary &&
    css`
      background-color: #1ba148;
      color: #EEEEEE;
      &:hover {
        background-color: #0a9037;
      }
      &:active {
        background-color: #098026;
      }
    `}
`;

export default Button;
