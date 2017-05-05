import React, { Component } from 'react';
import styles from './AddTodo.css';

class AddTodo extends Component {
  constructor() {
    super();

    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked() {
    if (!this.input.value) {
      return;
    }

    this.props.onButtonClick(this.input.value);
    this.input.value = '';  
  }

  render() {
    return (
      <div className={styles.addWrapper}>
        <input
          className={styles.input}
          ref={node => this.input = node}
        />
        <button
          className={styles.button}
          onClick={this.buttonClicked}
        >Add</button>
      </div>
    )
  }
}

export default AddTodo;
