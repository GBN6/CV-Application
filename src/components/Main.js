import React, { useState } from 'react';
import CvForm from './CvForm/CvForm';
import CvResult from './CvResult';
import styled from 'styled-components';
import exapmlePhoto from '../assets/photo.png';

function Main() {
  const [cv, setCv] = useState({
    personalInfo: {
      firstName: 'John',
      lastName: 'Doe',
      titleName: 'Web Developer',
      photo: exapmlePhoto,
      address: 'Street 30 / 4',
      phoneNumber: '123456789',
      email: 'mail@gmail.com',
      skill: {
        text: '',
      },
      skills: [],
      description: 'Description',
    },
    experience: {
      position: 'Position',
      company: 'Company',
      city: 'City',
      description: 'Description',
      from: 'From',
      to: 'To',
    },
    education: {
      universityName: 'University name',
      city: 'City',
      degree: '...',
      specialization: '...',
      from: 'From',
      to: 'To',
    },
  });

  const handleChangePersonal = (e) => {
    const { name, value } = e.target;
    setCv((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }));
  };

  const handleChangeExperience = (e) => {
    const { name, value } = e.target;
    setCv((prevState) => ({
      ...prevState,
      experience: {
        ...prevState.experience,
        [name]: value,
      },
    }));
  };

  const handleChangeEducation = (e) => {
    const { name, value } = e.target;
    setCv((prevState) => ({
      ...prevState,
      education: {
        ...prevState.education,
        [name]: value,
      },
    }));
  };

  return (
    <MainWrapper>
      <CvForm
        onChangePersonal={handleChangePersonal}
        onChangeExperience={handleChangeExperience}
        onChangeEducation={handleChangeEducation}
      />
      <CvResult cv={cv} />
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 5rem;
  margin-bottom: 4rem;
  gap: 6rem;

  @media (max-width: 1600px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

export default Main;
