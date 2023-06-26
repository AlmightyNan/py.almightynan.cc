import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  const handleClick = () => {
    window.location.href = 'https://github.com/AlmightyNan/python-pandas/archive/refs/heads/main.zip'; // Replace with your desired link
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="center">
          <button className="button" onClick={handleClick}>
            Download pandas reference files
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
