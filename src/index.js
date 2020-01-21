import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import { Map } from 'immutable';

/* eslint new-cap: ["error", { "capIsNew": false }] */

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: Map(),
    };
  }

  render() {
    console.log('returningnghgdh');
    return (
      <div>
        <h1>{this.state.notes[0].title}</h1>
        <p>{this.state.notes[0].text}</p>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('main'));
