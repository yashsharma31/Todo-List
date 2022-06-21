import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Todos from './Components/todos';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Todos/>

      </div>
    )
  }
}


export default App;
