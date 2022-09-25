import { v4 as uuidv4 } from "uuid";
import emptyPhoto from '../../assets/photo.png'

const emptyCv = {
  personalInfo: {
    firstName: "",
    lastName: "",
    titleName: "",
    photo: emptyPhoto,
    address: "",
    phoneNumber: "",
    email: "",
    link: "",
    description: "",
  },
  skills: [
    {
      id: uuidv4(),
      skill: '',
    },
  ],
  experience: [
    {
      id: uuidv4(),
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    },
  ],
  education: [
    {
      id: uuidv4(),
      universityName: "",
      city: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
    },
  ],
};

export default emptyCv;