import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        { 
          name: 'Frank',
          id: 'asr1',
        },
        { 
          name: 'Vendor',
          id: 'asr2',
        },
        { 
          name: 'Sarox',
          id: 'asr3',
        },
      ],
    }
  }

  render() {
    return (
      <div className="App">
        { this.state.monsters.map(element => (
          <h1 key={ element.id }> { element.name } </h1>
        ))}
      </div>
    );
  }
}

export default App;