import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';

function App() {
    return (
      <div>
        <Header logo={logo}/>
        <Todos />
      </div>
      )
}

export default App;
