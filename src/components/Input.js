import PropTypes from 'prop-types';
import Button from './Button';

const Input = ({ clickHandler }) => {
  const handleClick = (buttonName) => {
    clickHandler(buttonName);
  };

  return (
    <div className="buttons-grid">
      <Button clickHandler={handleClick} name="AC" />
      <Button clickHandler={handleClick} name="+/-" />
      <Button clickHandler={handleClick} name="%" />
      <Button clickHandler={handleClick} operator name="÷" />
      <Button clickHandler={handleClick} name="7" />
      <Button clickHandler={handleClick} name="8" />
      <Button clickHandler={handleClick} name="9" />
      <Button clickHandler={handleClick} operator name="x" />
      <Button clickHandler={handleClick} name="4" />
      <Button clickHandler={handleClick} name="5" />
      <Button clickHandler={handleClick} name="6" />
      <Button clickHandler={handleClick} operator name="-" />
      <Button clickHandler={handleClick} name="1" />
      <Button clickHandler={handleClick} name="2" />
      <Button clickHandler={handleClick} name="3" />
      <Button clickHandler={handleClick} operator name="+" />
      <Button clickHandler={handleClick} spanning name="0" />
      <Button clickHandler={handleClick} name="." />
      <Button clickHandler={handleClick} operator name="=" />
    </div>
  );
};

Input.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default Input;
