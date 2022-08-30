import React from "react";
import '../../style/form.css';


function Experience(props) {
  return (
    <div>
       <p>Company</p>
      <input
      className="expInput" 
      name="company"
      onChange={props.handleExperience}
      />
      <p>Position</p>
      <input 
      className="expInput" 
      name="position"
      onChange={props.handleExperience}
      />
      <p>Achievements</p>
      <textarea
      className="expInput" 
      id="achievements"
      name="achievements"
      type='text'
      onChange={props.handleExperience}
      />
      <p>From</p>
      <input 
      className="expInput" 
      name="from"
      onChange={props.handleExperience}
      />
      <p>To</p>
      <input
      className="expInput"  
      name="to"
      onChange={props.handleExperience}
      />
    </div>
  );
}

export default Experience;