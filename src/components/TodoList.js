import React, { Component } from 'react';
import styles from './TodoList.css';

const TodoList = ({ list }) => (
  <div className={styles.listWrapper} >
    <ul className={styles.list}>
      {list.map((item, index) =>
        <li key={index}>{item}</li>
      )}
    </ul>    
  </div>
)

export default TodoList;
