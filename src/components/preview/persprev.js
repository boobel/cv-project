import React from "react";

const PersonalPreview = (props) => {

    return (
        <div className="personal">
            <div className="names">
                <p>{props.Personal.name}</p>
                <p>{props.Personal.surname}</p>
            </div>
            <div className="contact">
                <p>{props.Personal.email}</p>
                <p>{props.Personal.phone}</p>
                <p>{props.Personal.website}</p>
                <p>{props.Personal.adress}</p>
            </div>
        </div>
    )
}

export default PersonalPreview;