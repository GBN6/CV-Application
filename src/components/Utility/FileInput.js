import React from 'react';
import styled from 'styled-components';

const FileInput = ({ label, name, onChange }) => {
  return (
    <Label>
      <FileInputWRap type='file' name={name} onChange={onChange} />
      {label}
    </Label>
  );
};

const FileInputWRap = styled.input`
  display: none;
`;

const Label = styled.label`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid transparent;
  background-color: #fff;
  color: fieldtext;
  &:active {
    border: 1px solid #222831;
  }
`;

export default FileInput
