import React from 'react';

import './App.css';
import Button from './components/Button/Button';

class App extends React.Component {

  counter=0

  render() {
    return (
      <div className="App">
        Valeur du compteur: {this.counter}

        <Button onClickEvent={() => {
          this.counter--;
          console.log(this.counter);
        }}>soustraction</Button>
        <Button onClickEvent={()=>{
          this.counter++;
          console.log(this.counter);
        }}
        bgColor="chartreuse">addition</Button>
      </div>
    )
  }
}

export default App;