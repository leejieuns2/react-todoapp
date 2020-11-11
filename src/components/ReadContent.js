import React, { Component } from 'react';
import Control from './Control';

class ReadContent extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.todo}</h2>
        <Control></Control>
      </article>
    );
  }
}

export default ReadContent;
