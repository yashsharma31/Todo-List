import logo from './logo.svg';
import './App.css';
import React from 'react';
import Todos from './components/todos';
import Footer from './components/footer';
const App = () => {
  return (
    <div className='App'>
    <Todos/>
    </div>
  )
}

export default App