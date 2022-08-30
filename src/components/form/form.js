import React from "react";
import Education from "./education";
import Experience from "./experience";
import Personal from "./personal";
import '../../style/form.css';


const Form = (props) => {
  return (
    <form>
      <h2>Personal</h2>
      <Personal handlePersonal={props.handlePersonal} />
      <h2>Experience</h2>
      <Experience handleExperience={props.handleExperience} />  
      <button onClick={(e)=>{
        e.preventDefault()
        props.handleExperiences()
      }}>Add Experience</button>
      <h2>Education</h2>
      <Education handleEducation={props.handleEducation}/>
      <button onClick={(e)=>{
        e.preventDefault()
        props.handleEducations()
      }}>Add Education</button>
    </form>
  );
}

export default Form;
