import React, { Component } from 'react';
import './App.css'
import Tchat from './components/Tchat/Tchat';
import store from './store/store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tchat/>
      </div>
    );
  }
}

export default App;
