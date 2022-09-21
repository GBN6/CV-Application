import React from 'react';
import Section from '../Utility/Section';
import Input from '../Utility/Input';


const Education= () => {
  return (
    <Section title="Education">
      <Input type='text' name='' placeholder='School name' />
      <Input type='text' name='' placeholder='City' />
      <Input type='text' name='' placeholder='Degree' />
      <Input type='text' name='' placeholder='Specialization' />
      <Input type='text' name='' placeholder='From' />
      <Input type='text' name='' placeholder='To' />
    </Section>
  );
}

export default Education
