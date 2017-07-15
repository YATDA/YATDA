import PropTypes from 'prop-types';
import React from 'react';

class ButtonInput extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="button"
          value="Add item!"
          onClick={this.onSubmit}
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
