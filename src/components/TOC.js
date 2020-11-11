import React, { Component } from 'react';
import Control from './Control';

class TOC extends Component {
  render() {
    console.log('TOC render');
    let lists = [];
    let data = this.props.data;
    let i = 0;
    while (i < data.length) {
      let _id = data[i].id;
      let _todo = data[i].todo;
      lists.push(
        <table align="center">
          <tr>
            <td width="25%">
              <li>{_todo}</li>
            </td>
            <td width="25%">
              <Control></Control>
            </td>
          </tr>
        </table>,
      );
      i += 1;
    }
    return (
      <div>
        <ul>{lists}</ul>
      </div>
    );
  }
}

export default TOC;
