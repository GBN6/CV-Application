import React from 'react';
import Section from '../Utility/Section';
import Input from '../Utility/Input';
import TextArea from '../Utility/TextArea';
import FileInput from '../Utility/FileInput';
import SkillsItem from './SkillsItem';
import Button from '../Utility/Button';

const Personal = ({ personalInfo, skills, onChange, onAdd, onDelete }) => {
  const skillItem = skills.map((skillItem) => (
    <SkillsItem
      key={skillItem.id}
      id={skillItem.id}
      skillsItem={skillItem}
      onChange={onChange}
      onDelete={onDelete}
    />
  ));

  return (
    <Section
      title='Personal Information'
      titlePadding='0.5rem'
      direction='column'
    >
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='firstName'
        placeholder='First name'
        value={personalInfo.firstName}
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='lastName'
        placeholder='Last name'
        value={personalInfo.lastName}
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='titleName'
        placeholder='Title'
        value={personalInfo.titleName}
      />
      <FileInput
        onChange={(e) => onChange(e)}
        name='photo'
        label='Photo'
        value={personalInfo.photo}
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='email'
        placeholder='Email'
        value={personalInfo.email}
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='phoneNumber'
        placeholder='Phone number'
        value={personalInfo.phoneNumber}
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='address'
        placeholder='Address'
        value={personalInfo.address}
      />
      <TextArea
        onChange={(e) => onChange(e)}
        name='description'
        placeholder='Description'
        value={personalInfo.description}
      />
      {skillItem}
      <Button text="Add skill" onClick={onAdd}></Button>
    </Section>
  );
};

export default Personal;
