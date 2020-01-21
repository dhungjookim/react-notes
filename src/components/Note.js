import { React, Component } from 'react';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '0',
      note: {
        title: '',
        text: '',
        x: 0,
        y: 0,
        zIndex: 0,
      },
    };
  }

  render() {
    return (<h1>{this.state.title}</h1>);
  }
}

export default Note;
