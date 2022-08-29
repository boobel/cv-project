import React from "react";

function Experience(props) {
  return (
    <div>
       <p>Company</p>
      <input 
      name="company"
      onChange={props.handleExperience}
      />
      <p>Position</p>
      <input 
      name="position"
      onChange={props.handleExperience}
      />
      <p>From</p>
      <input 
      name="from"
      onChange={props.handleExperience}
      />
      <p>To</p>
      <input 
      name="to"
      onChange={props.handleExperience}
      />
    </div>
  );
}

export default Experience;