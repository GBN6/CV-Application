import React from 'react';
import styled from 'styled-components';

const Input = ({ type, name, placeholder, onChange, value }) => {
  return (
    <InputWrap
      onChange={onChange}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
    />
  );
};

const InputWrap = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid transparent;
  &:focus {
    border: 2px solid #222831;
  }
  background-color: rgb(238, 238, 238);
`;

export default Input;
