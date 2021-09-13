import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button'

function App() {
  return (
    <div className="App">
      Helloworld
      <hr/>
      <Button bgcolor="skyblue">
        <img src="/img/ok.png" alt="ok"/>
      </Button>
      <Button bgcolor="skyblue">
        <img src="/img/cancel.png" alt="cancel"/>
        Cancel
      </Button>
    </div>
  );
}

export default App;
