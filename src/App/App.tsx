import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button'

function App() {
  return (
    <div className="App">
      Helloworld
      <hr/>
      <Button bgColor="green">
        <img src="/img/ok.png" alt="ok"/>
      </Button>
      <Button bgColor="red" style={{textDecoration:'underline'}}>
        <img src="/img/cancel.png" alt="cancel"/>
        Cancel
      </Button>
      <Button/>

    </div>
  );
}

export default App;
