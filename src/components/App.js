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
}

const initialExperience = {
  company: '',
  position: '',
  from: '',
  to: '',
  id: uniqid(),
}

const initialExperiences = [
  
]

const initialEducation = {
  institution: '',
  major: '',
  from: '',
  to: '',
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
  }

  const handleEducations = () => {
    setEducation({
      ...Education,
      id: uniqid()
    })
    setEducations([
      ...Educations,
      Education
    ])
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
