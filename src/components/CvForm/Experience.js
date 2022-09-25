import React from 'react';
import Section from '../Utility/Section';
import Input from '../Utility/Input';
import TextArea from '../Utility/TextArea';
import Button from '../Utility/Button';
import ExperienceItem from './ExperienceItem';

function Experience({ experience, onChange, onAdd, onDelete }) {
  const experienceItems = experience.map((experienceItem) => (
    <ExperienceItem
      key={experienceItem.id}
      id={experienceItem.id}
      experienceItem={experienceItem}
      onChange={onChange}
      onDelete={onDelete}
    />
  ));

  return (
    <Section title='Experience' titlePadding="0.5rem" direction="column">
      {experienceItems}
      <Button text="Add" onClick={onAdd}></Button>
    </Section>
  );
}

export default Experience;
