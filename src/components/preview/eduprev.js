import React from "react";


const EducationPreview = (props) => {

  return (
    <div className="education">
      <div className="work">
        <p className="where">{props.Education.institution}</p>
        <p className="what">{props.Education.major}</p>
        <p className="achievements">{props.Education.achievements}</p>
      </div>
      <div className="when">
        <p>{props.Education.from}</p>
        <p>{props.Education.to}</p>
      </div>
    </div>
  )
};

export default EducationPreview;