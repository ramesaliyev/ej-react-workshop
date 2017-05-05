import React, { Component } from 'react';
import styles from './App.css';

class App extends Component {
  render () {
    return (
      <div className={styles.wrapper}>
        <div className={styles.addWrapper}>
          <input className={styles.input} />
          <button className={styles.button} >Add</button>
        </div>
        <div className={styles.listWrapper} >
          <ul className={styles.list}></ul>    
        </div>
      </div>  
    );
  }
}

export default App;
