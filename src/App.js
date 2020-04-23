import React from 'react';
import fjlogo from './fjlogo.png';
import fjart from './fjart.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={fjart} className="fj-art" alt="fj-pic" />
        <img src={fjlogo} className="fj-logo" alt="logo" />
        <p>
          Welcome to my first React web app!
        </p>
        <a
          className="App-link"
          href="https://fb.com/fjcaballes"
          target="_blank"
          rel="noopener noreferrer"
        >
          More about me >
        </a>
      </header>
    </div>
  );
}

export default App;
