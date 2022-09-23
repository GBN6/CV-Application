import React from 'react';
import Section from '../Utility/Section';
import Input from '../Utility/Input';
import TextArea from '../Utility/TextArea';
import FileInput from '../Utility/FileInput';

const Personal = ({ onChange }) => {
  return (
    <Section title='Personal Information'>
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='firstName'
        placeholder='First name'
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='lastName'
        placeholder='Last name'
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='titleName'
        placeholder='Title'
      />
      <FileInput onChange={(e) => onChange(e)} name='photo' label='Photo' />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='email'
        placeholder='Email'
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='phoneNumber'
        placeholder='Phone number'
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='address'
        placeholder='Address'
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='skill'
        placeholder='Skills'
      />
      <TextArea
        onChange={(e) => onChange(e)}
        name='description'
        placeholder='Description'
      />
    </Section>
  );
};

export default Personal;
