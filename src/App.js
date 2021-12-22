import React, { Component } from 'react'

import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

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

  handleChange = (event) => {
    this.setState({ searchField: event.target.value})
  }

  render() {
    //search input filter
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return ( 
      <div className="App">

        <h1> Monsters Rolodex </h1>

        <SearchBox 
          placeholder={'search monsters'}
          handleChange={ this.handleChange } 
        />

        <CardList monsters={filterMonsters} /> 
      </div>
    );
  }
}

export default App;