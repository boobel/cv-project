import React from "react";
import EducationPreview from "./eduprev";
import ExperiencePreview from "./expprev";
import PersonalPreview from "./persprev";
import '../../style/preview.css';


const Preview = (props) => {
  return (
    <div className="preview">
      <PersonalPreview Personal={props.Personal} />
      <h2>Work Experience</h2>
      {props.Experiences.map((exp) => {
        return (
          <div className="exp">
            <ExperiencePreview Experience={exp} />
          </div>
        );
      })}
      <h2>Education</h2>
      {props.Educations.map((edu) => {
        return (
          <div>
            <EducationPreview Education={edu} />
          </div>
        );
      })}
    </div>
  );
};

export default Preview;
