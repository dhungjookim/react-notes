import './style.scss';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';


const App = () => <div className="test">All the REACT are belong to us!</div>;

ReactDOM.render(<App />, document.getElementById('main'));

let num = 0;
setInterval(() => {
  num += 1;
  $('#main').html(`Youve been on this page for ${num} seconds...`);
}, 1000);
