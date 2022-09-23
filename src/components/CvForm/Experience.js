import React from 'react';
import Section from '../Utility/Section';
import Input from '../Utility/Input';
import TextArea from '../Utility/TextArea';
import Button from '../Utility/Button';

function Experience({ onChange }) {
  return (
    <Section title='Experience'>
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='position'
        placeholder='Position'
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='company'
        placeholder='Company'
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='city'
        placeholder='City'
      />
      <TextArea
        onChange={(e) => onChange(e)}
        name='description'
        placeholder='Description'
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
}

export default Experience;
