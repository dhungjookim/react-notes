import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import { Map } from 'immutable';
import Note from './components/Note';

/* eslint new-cap: ["error", { "capIsNew": false }] */


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: Map({
        0: {
          title: 'testing',
          text: '![](http://i.giphy.com/gyRWkLSQVqlPi.gif)',
          x: 400,
          y: 12,
          zIndex: 10,
        },
        1: {
          title: 'headings',
          text: '# large ',
          x: 300,
          y: 300,
          zIndex: 20,
        },
      }),
    };
  }

  render() {
    console.log(this.state.notes);
    return (
      <div>
  notes.entrySeq().map(([id, note]) => <Note id={id} note={note} />);
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('main'));
