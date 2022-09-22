import React from 'react';
import styled from 'styled-components';

const TextArea = ({ type, name, placeholder }) => {
  return <TextAreaWrap name={name} placeholder={placeholder} />;
};

const TextAreaWrap = styled.textarea`
  height: 80px;
  padding: 0.5rem;
  padding-right: 2rem;
  border-radius: 5px;
  border: 1px solid transparent;
  resize: none;
  &:focus {
    border: 1px solid #222831;
  }
`;

export default TextArea;
