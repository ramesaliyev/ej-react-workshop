import React, { Component } from 'react';
import styles from './App.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList'

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: []
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(value) {
    this.setState({
      list: [
        ...this.state.list,
        value
      ]
    });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <AddTodo
          onButtonClick={this.addItem}
        />
        <TodoList
          list={this.state.list}
        />
      </div>
    );
  }
};

export default App;
