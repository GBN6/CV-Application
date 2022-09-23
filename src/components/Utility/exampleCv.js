import examplePhoto from '../../assets/photo.png';
import { v4 as uuidv4 } from "uuid";

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
    description: 'Description',
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
  }],
  education: [
    {
    id: uuidv4(),
    universityName: 'University name',
    city: 'City',
    degree: '...',
    specialization: '...',
    from: 'From',
    to: 'To',
  }],
};

export default exampleCV;
