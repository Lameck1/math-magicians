import React from 'react';
import PropTypes from 'prop-types';

class Output extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { value } = this.props;
    return (
      <div className="output">
        <span>{value}</span>
      </div>
    );
  }
}

Output.propTypes = {
  value: PropTypes.string,
};

Output.defaultProps = {
  value: '',
};

export default Output;
