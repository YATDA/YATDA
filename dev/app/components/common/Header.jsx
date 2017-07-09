import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

function Header(props) {
  return (
    <div className={classNames('card-header', props.className)}>
      <span className={'has-text-centered'}>
        {props.title}
      </span>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Header.displayName = 'Header';

export default Header;
