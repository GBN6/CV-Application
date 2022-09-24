import React from 'react';
import styled, { css } from 'styled-components';

const Button = ({ text, onClick, primary, secondary }) => {
  return <ButtonWrap primary={primary} secondary={secondary} onClick={onClick}>{text}</ButtonWrap>;
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
    ${(props) =>
      props.secondary &&
      css`
        background-color: #c25c0e};
        color: #EEEEEE;
        &:hover {
          background-color: #b14b0d;
        }
        &:active {
          background-color: #a03a0c;
        }
      `}
`;

export default Button;
