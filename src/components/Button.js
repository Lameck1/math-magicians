import PropTypes from 'prop-types';

const Button = ({
  name, clickHandler, operator, spanning,
}) => {
  const handleClick = () => {
    clickHandler(name);
  };

  const className = ['input-btn', spanning ? 'spanning' : '', operator ? 'operator' : ''];

  return (
    <button onClick={handleClick} type="button" className={className.join(' ').trim()}>{name}</button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func,
  operator: PropTypes.bool,
  spanning: PropTypes.bool,
};

Button.defaultProps = {
  name: '',
  clickHandler: null,
  operator: false,
  spanning: false,
};

export default Button;
