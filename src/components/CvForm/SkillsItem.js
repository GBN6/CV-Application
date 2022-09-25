import React from 'react';
import Input from '../Utility/Input';
import Button from '../Utility/Button';

const SkillsItem = ({ id, skillsItem, onChange, onDelete }) => {
  return (
    <>
      <Input
        onChange={(e) => onChange(e, id)}
        type='text'
        name='skill'
        placeholder='Skill'
        value={skillsItem.skill}
      />
      <Button text="Delete skill" onClick={() => onDelete(id)}></Button>
    </>
  );
};

export default SkillsItem