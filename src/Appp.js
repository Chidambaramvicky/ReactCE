// App.js
import React from 'react';
import './Appp.css';

function Appp() {
  return (
    <div className="container">
      <div className="main">
        <h1>Login</h1>
        <div className="flex-container">
          <div className="input-group">
            <label>Username</label>
            <input type="text" className="underline-input" />
          </div>
          <div className='input-group'>
            <label>Password</label>
            <input type='password' className="underline-input" />
          </div>
          <div className='input-group'>
            <button className="submit-button">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
