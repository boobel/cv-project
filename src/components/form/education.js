import React from "react";
import '../../style/form.css';


const Education = (props) => {


  return (
    <div>
       <p>Institution</p>
      <input
      className="eduInput" 
      name="institution"
      onChange={props.handleEducation}
      />
      <p>Degree/Major</p>
      <input 
      className="eduInput"
      name="major"
      onChange={props.handleEducation}
      />
      <p>Achievements</p>
      <textarea
      className="eduInput"
      id="achievements"
      name="achievements"
      onChange={props.handleEducation}
      />
      <p>From</p>
      <input
      className="eduInput" 
      name="from"
      onChange={props.handleEducation}
      />
      <p>To</p>
      <input 
      className="eduInput"
      name="to"
      onChange={props.handleEducation}
      />
    </div>
  );
}

export default Education;