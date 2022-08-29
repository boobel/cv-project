import React from "react";
import Education from "./education";
import Experience from "./experience";
import Personal from "./personal";

function Form(props) {
  return (
    <form>
      <h2>Personal</h2>
      <Personal handlePersonal={props.handlePersonal} />
      <h2>Experience</h2>
      {props.Experiences.map((exp) => {
        return (
          <div>
            <Experience handleExperience={props.handleExperience} />
            <button onClick={(e)=> {
              e.preventDefault()
              props.handleExpDelete(exp.id)
            }}>del</button>
          </div>
        );
      })}
      <button onClick={(e)=>{
        e.preventDefault()
        props.handleExperiences()
      }}>Add Experience</button>
      <h2>Education</h2>
      <Education />
      <button>Add Education</button>
    </form>
  );
}

export default Form;
