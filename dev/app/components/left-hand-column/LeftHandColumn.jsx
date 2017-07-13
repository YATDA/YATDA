import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Header from '../common/Header';

export default class LeftHandColumn extends React.Component {
  render() {
    return (
      <div className={classNames('box', 'column', 'left-hand-column')}>
        <Header className="yatda-header" title="My Lists" />
      </div>
    );
  }
}

LeftHandColumn.propTypes = {};

LeftHandColumn.displayName = 'LeftHandColumn';
