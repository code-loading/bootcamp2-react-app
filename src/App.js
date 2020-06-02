import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is Ehsan's first react app built using create-react-app
        </p>
        <p>
          This website will be deployed on surge.sh hosting. Still updating?
        </p>
        <p>Happy to report still updating</p>
        <p>Testing github workflow surge deployment</p>
        <p>Github workflow deployment to surge is working!!!</p>
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
