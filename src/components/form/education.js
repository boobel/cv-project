import React from "react";

const Education = (props) => {


  return (
    <div>
       <p>Institution</p>
      <input 
      name="institution"
      onChange={props.handleEducation}
      />
      <p>Degree/Major</p>
      <input 
      name="major"
      onChange={props.handleEducation}
      />
      <p>From</p>
      <input 
      name="from"
      onChange={props.handleEducation}
      />
      <p>To</p>
      <input 
      name="to"
      onChange={props.handleEducation}
      />
    </div>
  );
}

export default Education;