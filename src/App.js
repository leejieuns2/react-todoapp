import React, { Component } from 'react';
import './App.scss';

import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'read',
      contents: [
        { id: 1, todo: 'React.js 공부' },
        { id: 2, todo: 'Typescript 공부' },
        { id: 3, todo: '일찍자기' },
      ],
    };
  }

  getReadContent() {
    let data = this.state.contents;
    return data;
  }

  getContent() {
    let _article = null;
    let _contents = this.getReadContent();
    let _mode = this.state.mode;
    console.log('getContent :' + this.state.mode);
    if (_mode === 'read') {
      _article = <ReadContent todo={_contents.todo}></ReadContent>;
    } else if (_mode === 'update') {
      console.log('getContent :' + _mode);
      _article = (
        <UpdateContent
          data={_contents}
          onSubmit={function (_id, _todo) {
            // add content to this.state.contents
            let _content = Array.from(this.state.contents);

            let i = 0;
            while (i < _content.length) {
              if (_content[i].id === _id) {
                _content[i] = { id: _id, todo: _todo };
                break;
              }
              i += 1;
            }
          }.bind(this)}
        ></UpdateContent>
      );

      this.setState({
        contents: _contents,
        mode: 'update',
      });
      console.log(_article);
    }
    return _article;
  }

  getDate() {
    let today = new Date();
    let date =
      today.getFullYear() +
      '년 ' +
      (today.getMonth() + 1) +
      '월 ' +
      today.getDate() +
      '일 ';
    return date;
  }

  // 반드시 render 함수가 선언되어야 함.
  // 클래스 안에 들어가있는 함수는 function을 생략할 수 있음.
  // Component 태그 안에는 하나의 최상위 태그만 사용해야 함.
  render() {
    console.log('App render');
    return (
      <div className="App">
        <div class="header">
          {this.getDate()} <br></br>
          오늘의 TODOLIST
        </div>
        <div class="body-text">
          <CreateContent
            onSubmit={function (_todo) {
              let _contents = this.getContent();
              this.max_content_id += 1;
              let _id = this.max_content_id;
              _contents = Array.from(this.state.contents);
              _contents.push({
                id: _id,
                todo: _todo,
              });
              this.setState({
                contents: _contents,
                mode: 'read',
              });
              console.log('App.js > CreateContent :' + _id, _todo);
            }.bind(this)}
          ></CreateContent>
        </div>
        <br></br>
        <div>
          <TOC
            onChangeMode={function (_id, _mode) {
              let _contents = Array.from(this.state.contents);
              if (_mode === 'delete') {
                if (window.confirm('really?')) {
                  let i = 1;
                  console.log(
                    'App.js > onChangeMode delete : ',
                    _id,
                    this.state.contents,
                  );
                  while (i < this.state.contents.length) {
                    if (_contents[i].id === _id) {
                      _contents.splice(i, 1); // 선택한 원소만 지우겠다는 의미
                      break;
                    }
                    i += 1;
                  }
                  alert('deleted!');
                }
              } else if (_mode === 'update') {
                alert('update!!!! : ', _id);
                console.log('update after : ', _mode);
              }

              this.setState({
                mode: _mode,
                contents: _contents,
              });
            }.bind(this)}
            data={this.state.contents}
          ></TOC>
        </div>
      </div>
    );
  }
}

export default App;
