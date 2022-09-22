import React from 'react';
import Section from '../Utility/Section';
import Input from '../Utility/Input';
import TextArea from '../Utility/TextArea';

const Personal = () => {
  return (
    <Section title="Personal Information">
      <Input type='text' name='' placeholder='First name' />
      <Input type='text' name='' placeholder='Last name' />
      <Input type='text' name='' placeholder='Title' />
      <Input type='file' name='' placeholder='Photo' aria-label="photo" />
      <Input type='text' name='' placeholder='Email' />
      <Input type='text' name='' placeholder='Phone number' />
      <Input type="text" name="" placeholder="Address" />
      <Input type="text" name="" placeholder="Skills" />
      <TextArea name="" placeholder="Description" />
    </Section>
  );
}

export default Personal;
