import { React, Component } from 'react';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'default title',
    };
  }

  render() {
    return (<h1>{this.state.title}</h1>);
  }
}

export default Note;
