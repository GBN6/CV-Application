import React from 'react';
import styled, { css } from 'styled-components';

const Button = ({ text, onClick, primary, secondary, red }) => {
  return (
    <ButtonWrap
      primary={primary}
      secondary={secondary}
      red={red}
      onClick={onClick}
    >
      {text}
    </ButtonWrap>
  );
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
      color: #eeeeee;
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
    ${(props) =>
    props.red &&
    css`
      background-color: #b3211e;
      color: #EEEEEE;
      &:hover {
        background-color: #a2100d;
      }
      &:active {
        background-color: #91000c;
      }
    `}
`;

export default Button;
