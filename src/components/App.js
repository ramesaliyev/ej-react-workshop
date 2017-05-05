import React, { Component } from 'react';
import styles from './App.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList'
import { connect } from 'react-redux';

const App = ({ list, onButtonClick }) => (
  <div className={styles.wrapper}>
    <AddTodo onButtonClick={onButtonClick} />
    <TodoList list={list} />
  </div>
);

export default connect(
  state => ({
    list: state
  }),
  dispatch => ({
    onButtonClick: (value) => {
      dispatch({
        type: 'ADD_TODO',
        text: value
      });
    }
  })  
)(App);
