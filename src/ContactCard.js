import React, { useState } from "react";

const ContactCard = (props) => {
  const [showAge, setShowAge] = useState(false);
  return (
    <div className='contact-card'>
      <img src={props.avatarUrl} alt='profile'></img>

      <div className='user-details'>
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <button onClick={() => setShowAge(!showAge)}>Show Age</button>
        {/* showAge is true display age
       {showAge ? <p>Age: 25</p> : null} -> 
       The below is even simpler way of this*/}
        {showAge && <p>Age: {props.age}</p>}
      </div>
    </div>
  );
};

export default ContactCard;
