import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button'

function App() {
  return (
    <div className="App">
      Helloworld
      <hr/>
      <Button classColor="primary">
        <img src="/img/ok.png" alt="ok"/>
      </Button>
      <Button >
        <img src="/img/cancel.png" alt="cancel"/>
        Cancel
      </Button>
      <Button/>

    </div>
  );
}

export default App;
