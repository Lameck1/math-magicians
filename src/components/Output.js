import PropTypes from 'prop-types';

const Output = ({ value }) => (
  <div className="output">
    <span>{value}</span>
  </div>
);

Output.propTypes = {
  value: PropTypes.string,
};

Output.defaultProps = {
  value: '',
};

export default Output;
