import React, { useState } from 'react';


const User = (props) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const Emailtext = (x) => setEmail(x.target.value);
  const Messagetext = (x) => setMessage(x.target.value);
  const Submit = (x) => {
    x.preventDefault();
    
    alert(`E-mail: ${email}\nSõnum: ${message}`);
  };

  return (
    <div>
      <h1>Tere, {props.name}!</h1>
      <h2>Minu hobid:</h2>
      <ul>
        {props.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
      <form onSubmit={Submit}>
        <div>
          <label>E-mail:</label>
          <input 
            type="email" 
            value={email} 
            onChange={Emailtext} 
            placeholder="Sisesta oma e-mail" 
            required 
          />
        </div>
        <div>
          <label>Sõnum:</label>
          <textarea 
            value={message} 
            onChange={Messagetext}  
            required 
          />
        </div>
        <button type="submit">SAADA KOHE SÕNUM</button>
      </form>
    </div>
  );
};

export default User;
