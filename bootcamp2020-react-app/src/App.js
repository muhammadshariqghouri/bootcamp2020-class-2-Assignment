import React from 'react';
import logo from './piaic.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="piaic.png" alt="piaic" />
        <h1>Muhammad Shariq Bilal Ghori (ASSIGNMENT 2)</h1>
        <p>
          This is My Second Assignment of Bootcamp2020 React App
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
