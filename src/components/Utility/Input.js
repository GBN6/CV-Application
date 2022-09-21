import React from 'react';
import styled from 'styled-components';

const Input = ({ type, name, placeholder }) => {
  return <InputWrap type={type} name={name} placeholder={placeholder} />;
};

const InputWrap = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid transparent;
  &:focus {
    border: 1px solid black;
  }
`;

export default Input;
