import React from 'react';

const User = (props) => {
  return (
    <div>
      <h1>Tere, {props.name}!</h1>
      <h1>Minu hobid: </h1>
      <ul>
        {props.hobbies.map((hobby,index) =>(
            <li key ={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default User; 
