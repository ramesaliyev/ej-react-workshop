import React, { Component } from 'react';
import styles from './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [ 'kamil', 'fadime' ]
    }
  }

  render () {
    return (
      <div className={styles.wrapper}>
        <div className={styles.addWrapper}>
          <input className={styles.input} />
          <button
            className={styles.button}
            onClick={() => this.setState({
              list: [
                ...this.state.list,
                Date.now()
              ]
            })}
          >Add</button>
        </div>
        <div className={styles.listWrapper} >
          <ul className={styles.list}>
            {this.state.list.map(item => 
              <li key={item}>{item}</li>
            )}
          </ul>    
        </div>
      </div>  
    );
  }
}

export default App;
