import React from "react";

const Personal = (props) => {
    return(
        <div>
            <p>Name</p>
            <input 
            name="name"
            onChange={props.handlePersonal}
            />
            <p>Surname</p>
            <input 
            name="surname"
            onChange={props.handlePersonal}
            />
            <p>Adress</p>
            <input 
            name="adress"
            onChange={props.handlePersonal}
            />
            <p>Phone Number</p>
            <input 
            name="phone"
            onChange={props.handlePersonal}
            />
            <p>Email</p>
            <input 
            name="email"
            onChange={props.handlePersonal}
            />
        </div>
    );
}

export default Personal;