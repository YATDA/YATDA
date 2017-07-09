import LeftHandColumn from './components/left-hand-column/LeftHandColumn';
import MainColumn from './components/main-column/MainColumn';
import React from 'react';
import RightHandColumn from './components/right-hand-column/RightHandColumn';
require('bulma/css/bulma.css');
require('./index.css');

const {Component} = React;

export default class App extends Component {
  render() {
    return (
      <div className="container columns">
        <LeftHandColumn />
        <MainColumn />
        <RightHandColumn />
        <div /> {/* hack to bypass box last child bug */}
      </div>
    );
  }
}
