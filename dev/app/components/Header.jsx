import React from 'react';

function Header(props) {
  return <div className={props.className}>{props.title}</div>;
}

Header.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
}

Header.displayName = 'Header';

export default Header;