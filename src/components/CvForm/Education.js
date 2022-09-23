import React from 'react';
import Section from '../Utility/Section';
import Input from '../Utility/Input';
import Button from '../Utility/Button';

const Education = ({ onChange }) => {
  return (
    <Section title='Education'>
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='universityName'
        placeholder='School name'
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='city'
        placeholder='City'
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='degree'
        placeholder='Degree'
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='specialization'
        placeholder='Specialization'
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='from'
        placeholder='From'
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='to'
        placeholder='To'
      />
      <Button text="Add"></Button>
    </Section>
  );
};

export default Education;
