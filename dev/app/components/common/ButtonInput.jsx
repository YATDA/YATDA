import PropTypes from 'prop-types';
import React from 'react';

class ButtonInput extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
          type="button"
          value="Add item!"
          onClick={this.props.onSubmit}
        />
      </form>
    );
  }
}

ButtonInput.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

ButtonInput.displayName = 'ButtonInput';

export default ButtonInput;
