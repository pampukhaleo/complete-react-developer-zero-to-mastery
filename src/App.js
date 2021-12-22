import React, { Component } from 'react'

import { CardList } from './components/card-list/card-list.component'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  render() {
    //search input filter
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return ( 
      <div className="App">
        <input type='search' placeholder='search monsters' //search input
          onChange={event => this.setState({ searchField: event.target.value })} //geting value on change
        />
        <CardList monsters={filterMonsters} /> 
      </div>
    );
  }
}

export default App;