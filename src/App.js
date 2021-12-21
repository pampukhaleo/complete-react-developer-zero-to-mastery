import React, { Component } from 'react'

import { CardList } from './components/card-list/card-list.component'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  render() {
    return ( 
      <div className="App">
        
        <CardList leoprop="boom" >
          { this.state.monsters.map(element => (
          <h1 key={ element.id }> { element.name } </h1>
          ))}
        </CardList>

        
      </div>
    );
  }
}

export default App;