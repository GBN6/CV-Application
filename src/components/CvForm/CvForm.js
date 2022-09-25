import React from 'react';
import Education from './Education';
import Experience from './Experience';
import Personal from './Personal';
import styled from 'styled-components';
import Button from '../Utility/Button';

const CvForm = ({
  cv,
  onChangePersonal,
  onChangeExperience,
  onAddExperience,
  onDeleteExperience,
  onChangeEducation,
  onAddEducation,
  onDeleteEducation,
  onChangeSkills,
  onAddSkills,
  onDeleteSkills,
  onPrint,
  onLoadExample,
  onReset,
}) => {
  return (
    <CvWrapper>
      <Personal
        personalInfo={cv.personalInfo}
        skills={cv.skills}
        onChange={onChangePersonal}
        onChangeSki={onChangeSkills}
        onAdd={onAddSkills}
        onDelete={onDeleteSkills}
      />
      <Experience
        experience={cv.experience}
        onChange={onChangeExperience}
        onAdd={onAddExperience}
        onDelete={onDeleteExperience}
      />
      <Education
        education={cv.education}
        onChange={onChangeEducation}
        onAdd={onAddEducation}
        onDelete={onDeleteEducation}
      />
      <Button text='Generate CV in PDF' onClick={onPrint} primary></Button>
      <Button text='Load Example' onClick={onLoadExample} secondary></Button>
      <Button text='Reset' onClick={onReset} red></Button>
    </CvWrapper>
  );
};

const CvWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  padding: 2rem;
  gap: 2rem;
  width: 210mm;
  box-shadow: rgba(0, 0, 0, 0.95) 0px 5px 15px;
  background-color: #565d69;
`;

export default CvForm;
