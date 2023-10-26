import React, { useState } from 'react';

import logo from "../../logo.svg";
import "./App.css";
import Box from "../Box/Box";

function App() { //componente funcional
  const [user, setUser] = useState('John Doe')

  function changeName() {
    const newName = document.getElementById('nameChangeInput').value;
    setUser(newName);
    document.getElementById('nameChangeInput').value = '';
  }
  function addLastname() {
    const newLastname = document.getElementById('LastnameChangeInput').value;
    setUser(newLastname);
    document.getElementById('LastnameChangeInput').value = '';
  }

  return (
    <div className="App">
      <header className="App-header">
        Hello, {user}!
        <input id="nameChangeInput" type="text" placeholder='Ingresa tu nombre'/>
        <button onClick={changeName}>Nombre</button>
        <input id="LastnameChangeInput" type="text" placeholder='Ingresa tu apellido'/>
        <button onClick={addLastname}>Apellido</button>
      </header>
      
    </div>
    
  );
}

export default App;
