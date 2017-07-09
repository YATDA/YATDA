import PropTypes from 'prop-types';
import React from 'react';

import classNames from 'classnames';

export default class LeftHandColumn extends React.Component {
  render() {
    return (
      <div className={classNames('box', 'column', 'left-hand-column')}>
        {'Left hand column'}
      </div>
    );
  }
}

LeftHandColumn.propTypes = {};

LeftHandColumn.displayName = 'LeftHandColumn';
