import React, { Component } from 'react';
import Button from './Button/Button';

class UpdateContent extends Component {
  constructor(props) {
    console.log('updatecontent');
    super(props);
    this.state = {
      id: this.props.data.id,
      todo: this.props.data.todo,
    };
    this.inputFormHandler = this.inputFormHandler.bind(this);
  }
  inputFormHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    console.log('updatecontent');
    return (
      <article>
        <h2>Update</h2>
        <form
          action="/update_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault();
            // input 태그에 입력한 값을 가져옴
            // e.target.inputTagId.value 이런 형태로 받아오면 됨.
            this.props.onSubmit(this.state.id, this.state.todo);
          }.bind(this)}
        >
          <input type="hidden" name="id" value={this.state.id}></input>
          {/* this.props.data.todo은 readonly이기 때문에 수정이 안됨.*/}
          <div className="buttons">
            <span>
              <input
                type="text"
                name="todo"
                placeholder="할 일을 입력해주세요."
              ></input>
            </span>
            <span>
              <Button>BUTTON</Button>
            </span>
          </div>
        </form>
      </article>
    );
  }
}

export default UpdateContent;
