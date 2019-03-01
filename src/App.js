import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
      {
        text: 'Take out trash'
      }
      ]
    }
  }

  submit(event) {
    event.preventDefault();
    console.log('Clicked');
  }

  render() {
    return (
    <div>
      <Header logo={logo}/>
      <Todos  todoItems={this.state.todoItems} submit={this.submit}/>
    </div>
    )
  }
}

export default App;
