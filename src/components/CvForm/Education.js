import React from 'react';
import Section from '../Utility/Section';
import Input from '../Utility/Input';
import Button from '../Utility/Button';

const Education = ({ education, onChange, onAdd, onDelete }) => {
  return (
    <Section title='Education'>
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='universityName'
        placeholder='School name'
        value={education.universityName}
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='city'
        placeholder='City'
        value={education.city}
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='degree'
        placeholder='Degree'
        value={education.degree}
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='specialization'
        placeholder='Specialization'
        value={education.specialization}
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='from'
        placeholder='From'
        value={education.from}
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='to'
        placeholder='To'
        value={education.to}
      />
      <Button text='Delete' onClick={onDelete}></Button>
      <Button text='Add' onClick={onAdd}></Button>
    </Section>
  );
};

export default Education;
