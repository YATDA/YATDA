import PropTypes from 'prop-types';
import React from 'react';
import Header from '../common/Header';

import classNames from 'classnames';

export default class RightHandColumn extends React.Component {

  render() {
    return (
      <div className={classNames('box', 'column', 'right-hand-column')}>
        <Header title="Notes"/>
      </div>
    );
  }
}

RightHandColumn.propTypes = {};

RightHandColumn.displayName = 'RightHandColumn';
