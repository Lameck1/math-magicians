import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { clickHandler, name } = this.props;
    clickHandler(name);
  }

  render() {
    const { name, operator, spanning } = this.props;
    const className = ['input-btn', spanning ? 'spanning' : '', operator ? 'operator' : '',
    ];
    return (
      <button onClick={this.handleClick} type="button" className={className.join(' ').trim()}>{name}</button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func,
  operator: PropTypes.bool,
  spanning: PropTypes.bool,
};

Button.defaultProps = {
  name: '',
  clickHandler: PropTypes.func,
  operator: false,
  spanning: false,
};

export default Button;
