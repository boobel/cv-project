import React from "react";

const PersonalPreview = (props) => {

    return(
        <div>
            <p>{props.Personal.name}</p>
            <p>{props.Personal.surname}</p>
            <p>{props.Personal.adress}</p>
            <p>{props.Personal.phone}</p>
            <p>{props.Personal.email}</p>
        </div>
    )
}

export default PersonalPreview;