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


const  App = () => {

  const [Personal, setPersonal] = useState(initialPersonal)
  const [Experience, setExperience] = useState(initialExperience)
  const [Experiences, setExperiences] = useState(initialExperiences)
  const [Education, setEducation] = useState(initialEducation)

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

  const handleExperiences = () => {
    setExperience({
      ...Experience,
      id: uniqid(),
    })
    setExperiences([
      ...Experiences,
      Experience
    ])
    console.log(Experiences)
  }

  const handleExpDelete = (id) => {
    setExperiences(
      Experiences.filter(exp =>
        exp.id !==id
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
      />
      <Preview 
      Experience = {Experience}
      Experiences = {Experiences}
      Personal = {Personal}
      />
    </div>
  );
}

export default App;
