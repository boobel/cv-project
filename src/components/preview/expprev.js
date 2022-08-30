import React from "react";


const ExperiencePreview = (props) => {

  return (
    <div className="experience">
      <div className="work">
        <p className="where">{props.Experience.company}</p>
        <p className="what">{props.Experience.position}</p>
        <p className="achievements">{props.Experience.achievements}</p>
      </div>
      <div className="when">
        <p>{props.Experience.from}</p>
        <p>{props.Experience.to}</p>
      </div>
    </div>
  )
};

export default ExperiencePreview;
