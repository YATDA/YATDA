import LeftHandColumn from './components/left-hand-column/LeftHandColumn';
import MainColumn from './components/main-column/MainColumn';
import React from 'react';
import RightHandColumn from './components/right-hand-column/RightHandColumn';
import classNames from 'classnames';
import Footer from './components/common/Footer';
require('bulma/css/bulma.css');
require('./index.css');

const {Component} = React;

export default class App extends Component {
  render() {
    return (
      <div>
        <div className={classNames('container', 'columns is-mobile', 'main')}>
          <div className={'column'}>
            <LeftHandColumn />
          </div>
          <div className={'column'}>
            <MainColumn />
          </div>
          <div className={'column'}>
            <RightHandColumn />
          </div>
        </div>
        <Footer title='Footer'/>
      </div>
    );
  }
}
