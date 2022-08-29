import React from "react";


const EducationPreview = (props) => {

  return (
    <div>
        <p>{props.Education.institution}</p>
        <p>{props.Education.major}</p>
        <p>{props.Education.from}</p>
        <p>{props.Education.to}</p>
    </div>
  )
};

export default EducationPreview;