import examplePhoto from '../../assets/photo.png';
import { v4 as uuidv4 } from 'uuid';

const exampleCV = {
  personalInfo: {
    firstName: 'John',
    lastName: 'Doe',
    titleName: 'Web Developer',
    photo: examplePhoto,
    address: 'Street 30 / 4',
    phoneNumber: '123456789',
    email: 'mail@gmail.com',
    skill: '',
    skills: [],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.',
  },
  experience: [
    {
      id: uuidv4(),
      position: 'Position',
      company: 'Company',
      city: 'City',
      description: 'Description',
      from: 'From',
      to: 'To',
    },
    {
      id: uuidv4(),
      position: 'Position',
      company: 'Company',
      city: 'City',
      description: 'Description',
      from: 'From',
      to: 'To',
    },
    {
      id: uuidv4(),
      position: 'Position',
      company: 'Company',
      city: 'City',
      description: 'Description',
      from: 'From',
      to: 'To',
    },
    {
      id: uuidv4(),
      position: 'Position',
      company: 'Company',
      city: 'City',
      description: 'Description',
      from: 'From',
      to: 'To',
    },
    {
      id: uuidv4(),
      position: 'Position',
      company: 'Company',
      city: 'City',
      description: 'Description',
      from: 'From',
      to: 'To',
    },
    {
      id: uuidv4(),
      position: 'Position',
      company: 'Company',
      city: 'City',
      description: 'Description',
      from: 'From',
      to: 'To',
    },
    {
      id: uuidv4(),
      position: 'Position',
      company: 'Company',
      city: 'City',
      description: 'Description',
      from: 'From',
      to: 'To',
    },
  ],
  education: [
    {
      id: uuidv4(),
      universityName: 'University name',
      city: 'City',
      degree: '...',
      specialization: '...',
      from: 'From',
      to: 'To',
    },
  ],
};

export default exampleCV;
