import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

function Footer(props) {
  return (
    <div className={classNames('footer', props.className)}>
      <div className={'container'}>
        <div className={'content has-text-centered'}>
          {props.title}
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Footer.displayName = 'Footer';

export default Footer;
