import React from 'react';
import Section from '../Utility/Section';
import Input from '../Utility/Input';
import TextArea from '../Utility/TextArea';

function Experience() {
  return (
    <Section title="Experience">
      <Input type='text' name='' placeholder='Company' />
      <Input type='text' name='' placeholder='City' />
      <Input type='text' name='' placeholder='Position' />
      <TextArea name="" placeholder="Description" />
      <Input type='text' name='' placeholder='From' />
      <Input type='text' name='' placeholder='To' />
    </Section>
  );
}

export default Experience;
