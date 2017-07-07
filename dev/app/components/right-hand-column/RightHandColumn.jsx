import PropTypes from 'prop-types';
import React from 'react';

import classNames from 'classnames';

export default class RightHandColumn extends React.Component {
  render() {
    return (
      <div className={classNames('column', 'left-hand-column')}>
        {'Right hand column'}
      </div>
    );
  }
}

RightHandColumn.propTypes = {};

RightHandColumn.displayName = 'RightHandColumn';
