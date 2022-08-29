import React from "react";


const ExperiencePreview = (props) => {

  return (
    <div>
      <p>{props.Experience.company}</p>
      <p>{props.Experience.position}</p>
      <p>{props.Experience.from}</p>
      <p>{props.Experience.to}</p>
    </div>
  )
};

export default ExperiencePreview;
