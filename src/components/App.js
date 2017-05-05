import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList'

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { store } = this.context;

    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();  
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;
    const state = store.getState();

    return (
      <div className={styles.wrapper}>
        <AddTodo
          onButtonClick={value => {
            store.dispatch({
              type: 'ADD_TODO',
              text: value
            });
          }}
        />
        <TodoList
          list={state}
        />
      </div>
    );
  }
};

App.contextTypes = {
  store: PropTypes.object
};

export default App;
