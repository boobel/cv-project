import React from "react";
import EducationPreview from "./eduprev";
import ExperiencePreview from "./expprev";
import PersonalPreview from "./persprev";

const Preview = (props) => {
  return (
    <div>
      <PersonalPreview Personal={props.Personal} />
      {props.Experiences.map((exp) => {
        return (
          <div>
            <ExperiencePreview Experience={exp} />
          </div>
        );
      })}
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
