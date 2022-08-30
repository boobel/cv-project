import '../style/App.css';
import { useState } from 'react';
import Form from './form/form';
import Preview from './preview/preview';
import uniqid from 'uniqid'


const initialPersonal = {
  name: '',
  surname: '',
  adress: '',
  phone: '',
  email: '',
  website: '',
}

const initialExperience = {
  company: '',
  position: '',
  from: '',
  to: '',
  achievements: '',
  id: uniqid(),
}

const initialExperiences = [
  
]

const initialEducation = {
  institution: '',
  major: '',
  from: '',
  to: '',
  achievements: '',
  id: uniqid(),
}

const initialEducations = [

]

const  App = () => {

  const [Personal, setPersonal] = useState(initialPersonal)
  const [Experience, setExperience] = useState(initialExperience)
  const [Experiences, setExperiences] = useState(initialExperiences)
  const [Education, setEducation] = useState(initialEducation)
  const [Educations, setEducations] = useState(initialEducations)

  const handlePersonal = (e) => {
    setPersonal({
      ...Personal,
      [e.target.name]: e.target.value
    })
  }
  
  const handleExperience = (e) => {
    setExperience({
      ...Experience,
      [e.target.name]: e.target.value
    })
  }

  const handleEducation = (e) => {
    setEducation({
      ...Education,
      [e.target.name]: e.target.value
    })
  }

  const handleExperiences = () => {
    setExperience({
      ...Experience,
      id: uniqid(),
    })
    setExperiences([
      ...Experiences,
      Experience
    ])
    let inputs = document.querySelectorAll('.expInput')
    inputs.forEach((input) => {
      input.value = '';
    })
  }

  const handleEducations = (e) => {
    setEducation({
      ...Education,
      id: uniqid()
    })
    setEducations([
      ...Educations,
      Education
    ])
    let inputs = document.querySelectorAll('.eduInput')
    inputs.forEach((input) => {
      input.value = '';
    })
  }

  const handleExpDelete = (id) => {
    setExperiences(
      Experiences.filter(exp =>
        exp.id !==id
        )
    )
  }

  const handleEduDelete = (id) => {
    setEducations(
      Educations.filter(edu =>
        edu.id !== id
        )
    )
  }

  return (
    <div className="App">
      <Form
      handlePersonal = {handlePersonal}
      handleExperience = {handleExperience}
      handleExperiences = {handleExperiences}
      handleExpDelete = {handleExpDelete}
      Experiences = {Experiences}
      handleEducation = {handleEducation}
      handleEducations ={handleEducations}
      handleEduDelete = {handleEduDelete}
      Educations = {Educations}
      />
      <Preview
      Personal = {Personal} 
      Experience = {Experience}
      Experiences = {Experiences}
      Education = {Education}
      Educations = {Educations}
      />
    </div>
  );
}

export default App;
