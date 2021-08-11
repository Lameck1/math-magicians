import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { clickHandler } = this.props;
    clickHandler(buttonName);
  }

  render() {
    return (
      <div className="buttons-grid">
        <Button clickHandler={this.handleClick} name="AC" />
        <Button clickHandler={this.handleClick} name="+/-" />
        <Button clickHandler={this.handleClick} name="%" />
        <Button clickHandler={this.handleClick} operator name="÷" />
        <Button clickHandler={this.handleClick} name="7" />
        <Button clickHandler={this.handleClick} name="8" />
        <Button clickHandler={this.handleClick} name="9" />
        <Button clickHandler={this.handleClick} operator name="x" />
        <Button clickHandler={this.handleClick} name="4" />
        <Button clickHandler={this.handleClick} name="5" />
        <Button clickHandler={this.handleClick} name="6" />
        <Button clickHandler={this.handleClick} operator name="-" />
        <Button clickHandler={this.handleClick} name="1" />
        <Button clickHandler={this.handleClick} name="2" />
        <Button clickHandler={this.handleClick} name="3" />
        <Button clickHandler={this.handleClick} operator name="+" />
        <Button clickHandler={this.handleClick} spanning name="0" />
        <Button clickHandler={this.handleClick} name="." />
        <Button clickHandler={this.handleClick} operator name="=" />
      </div>
    );
  }
}

Input.propTypes = {
  clickHandler: PropTypes.func,
};

Input.defaultProps = {
  clickHandler: null,
};

export default Input;
