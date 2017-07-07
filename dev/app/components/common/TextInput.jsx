import PropTypes from 'prop-types';
import React from 'react';

const {Component} = React;

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {currentValue: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({currentValue: event.target.value});
  }

  onSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.onSubmit(this.state.currentValue);
    if (this.props.clearOnSubmit !== false) {
      this.setState({currentValue: ''});
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className={this.props.className}
          placeholder={this.props.placeholder}
          onChange={this.onInputChange}
          value={this.state.currentValue}
        />
      </form>
    );
  }
}

TextInput.propTypes = {
  className: PropTypes.string,
  clearOnSubmit: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

TextInput.displayName = 'TextInput';

export default TextInput;
