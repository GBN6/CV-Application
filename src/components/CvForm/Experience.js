import React from 'react';
import Section from '../Utility/Section';
import Input from '../Utility/Input';

function Experience() {
  return (
    <Section title="Experience">
      <Input type='text' name='' placeholder='Company' />
      <Input type='text' name='' placeholder='City' />
      <Input type='text' name='' placeholder='Position' />
      <Input type='text' name='' placeholder='Details' />
      <Input type='text' name='' placeholder='From' />
      <Input type='text' name='' placeholder='To' />
    </Section>
  );
}

export default Experience;
