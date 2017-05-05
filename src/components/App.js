import React from 'react';
import styles from './App.css';

const App = () => (
  <div className={styles.wrapper}>
    <div>
      <input /> <button>Add</button>
    </div>
    <div>
      <h1>Todo List</h1>
      <ul></ul>    
    </div>
  </div>
);

export default App;
