import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: { text: '', id: 0}
    }
    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const {value} = event.target;
    this.setState(prevState => {
      return {currentItem: {text: value, id: prevState.currentItem.id + Math.floor(Math.random() * 100000) + 1  }}
    });
  }

  addItem(event) {
    event.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {text: '', id: 0}
      });
    }
  }

  render() {
    return (
    <div>
      <Header logo={logo}/>
      <Todos 
      currentItem={this.state.currentItem} 
      items={this.state.items} 
      addItem={this.addItem} 
      handleChange={this.handleChange}/>
    </div>
    )
  }
}

export default App;
