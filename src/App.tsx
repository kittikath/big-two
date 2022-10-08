import React from 'react';
import logo from './logo.svg';
import { CustomButton } from './components/Button';
import './App.css';
import { Container } from '@mui/system';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          <code>Big 2</code>
        </h2>
        {/* <input>Enter Code</input> */}
        <Container maxWidth="md">
          <Container maxWidth="xs">
            <CustomButton text="Join Game"/>
            <CustomButton text="Create Game"/>
            <CustomButton text="Tutorial"/>
            <CustomButton text="About"/>
          </Container>
        </Container>
        

        <img src={logo} className="App-logo" alt="logo" />
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
