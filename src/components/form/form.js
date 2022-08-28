import React from "react";
import Education from "./education";
import Experience from "./experience";
import Personal from "./personal";



function Form() {
    return (
      <form>
        <h2>Personal</h2>
       <Personal 
       />
       <h2>Experience</h2>
       <Experience
       />
       <button>Add Experience</button>
       <h2>Education</h2>
       <Education
       />
       <button>Add Education</button>
      </form>
    );
}

export default Form;