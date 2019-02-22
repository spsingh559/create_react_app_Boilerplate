import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import ButtonBB from 'react-bootstrap/Button';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
         <Button variant="contained" color="primary">
      Hello World
    </Button>
    <ButtonBB variant="primary" size="lg">
      Bootstrap Button
    </ButtonBB>
      </div>
    );
  }
}

export default App;
