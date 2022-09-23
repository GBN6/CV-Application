import React from 'react';
import Input from '../Utility/Input';
import Button from '../Utility/Button';
import TextArea from '../Utility/TextArea';

const ExperienceItems = ({ experienceItem, onChange, onDelete }) => {
  return (
    <>
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='position'
        placeholder='Position'
        value={experienceItem.position}
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='company'
        placeholder='Company'
        value={experienceItem.company}
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='city'
        placeholder='City'
        value={experienceItem.city}
      />
      <TextArea
        onChange={(e) => onChange(e)}
        name='description'
        placeholder='Description'
        value={experienceItem.description}
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='from'
        placeholder='From'
        value={experienceItem.from}
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='to'
        placeholder='To'
        value={experienceItem.to}
      />
      <Button text='Delete' onClick={onDelete}></Button>
    </>
  );
};

export default ExperienceItems;
