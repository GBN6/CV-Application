import React from 'react';
import Section from '../Utility/Section';
import Input from '../Utility/Input';
import Button from '../Utility/Button';
import EducationItem from './EducationItem';

const Education = ({ education, onChange, onAdd, onDelete }) => {
  const educationItems = education.map((educationItem) => (
    <EducationItem
      key={educationItem.id}
      id={educationItem.id}
      educationItem={educationItem}
      onChange={onChange}
      onDelete={onDelete}
    ></EducationItem>
  ));

  return (
    <Section title='Education'>
      {educationItems}
      <Button text='Add' onClick={onAdd}></Button>
    </Section>
  );
};

export default Education;
