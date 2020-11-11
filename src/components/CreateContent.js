import React, { Component } from 'react';
import Button from './Button/Button';

class CreateContent extends Component {
  render() {
    return (
      <article>
        <form
          action="/create_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault();
            // input 태그에 입력한 값을 가져옴
            // e.target.inputTagId.value 이런 형태로 받아오면 됨.
            this.props.onSubmit(e.target.todo.value);
          }.bind(this)}
        >
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

export default CreateContent;
