import React, { Component } from 'react';

class Control extends Component {
  render() {
    console.log('Control render!');
    return (
      <span>
        <input
          type="button"
          value="update"
          onClick={function (e) {
            e.preventDefault();
            this.props.onChangeMode(e.target.contents.id, 'update');
            console('Control : ' + e.target.contents.id);
          }.bind(this)}
        ></input>

        <input
          type="button"
          value="delete"
          onClick={function (e) {
            e.preventDefault();
            this.props.onChangeMode(e.target.contents.id, 'delete');
            console('Control : ' + e.target.contents.id);
          }.bind(this)}
        ></input>
      </span>
    );
  }
}

export default Control;
