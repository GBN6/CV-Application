import examplePhoto from '../../assets/random_photo.jpg';
import { v4 as uuidv4 } from 'uuid';

const exampleCV = {
  personalInfo: {
    firstName: 'John',
    lastName: 'Doe',
    titleName: 'Web Developer',
    photo: examplePhoto,
    address: 'Example Street 10',
    phoneNumber: '123456789',
    email: 'john.doe@gmail.com',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.',
  },
  skills: [
    {
      id: uuidv4(),
      skill: 'JavaScript',
    },
    {
      id: uuidv4(),
      skill: 'React.JS',
    },
    {
      id: uuidv4(),
      skill: 'HTML',
    },
    {
      id: uuidv4(),
      skill: 'CSS',
    },
  ],
  experience: [
    {
      id: uuidv4(),
      position: 'Web Developer',
      company: 'Facebook Inc.',
      city: 'Menlo Park',
      description: 'Managing web development',
      from: '2015',
      to: 'Present',
    },
    {
      id: uuidv4(),
      position: 'Junior Web Developer',
      company: 'Tesla Inc.',
      city: 'Palo Alto',
      description: 'Creating basic web pages',
      from: '2012',
      to: '2015',
    },
  ],
  education: [
    {
      id: uuidv4(),
      universityName: 'University of Technology',
      city: 'Oklahoma',
      degree: 'Master',
      specialization: 'Computer Science',
      from: '2008',
      to: '2012',
    },
    {
      id: uuidv4(),
      universityName: 'University of Design Art',
      city: 'New York',
      degree: 'Bachelor',
      specialization: 'Visual Art',
      from: '2008',
      to: '2012',
    },
  ],
};

export default exampleCV;
