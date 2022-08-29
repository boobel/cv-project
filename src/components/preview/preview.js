import React from "react"
import ExperiencePreview from "./expprev";
import PersonalPreview from "./persprev";

const Preview = (props) => {
  return(
    <div>
      {props.Experiences.map((exp)=>{
        return <div>
            <ExperiencePreview
            Experience = {exp}
            />
          </div>
      })}
    
      <PersonalPreview
      Personal={props.Personal}
      />
    </div>
  );
}

export default Preview;