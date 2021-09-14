import React from 'react';

import './App.css';
import Button from './components/Button/Button';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={counter:0};
  }

  render() {
    return (
      <div className="App">
        Valeur du compteur: {this.state.counter}

        <Button onClickEvent={()=>{
          // this.state.counter--;
          this.setState({counter:this.state.counter-1})
          console.log(this.state.counter);
        }}>soustraction</Button>
        <Button onClickEvent={()=>{
          // this.state.counter++;
          this.setState({counter:this.state.counter+1})
          console.log(this.state.counter);
        }}
        bgColor="chartreuse">addition</Button>
      </div>
    )
  }
}

export default App;