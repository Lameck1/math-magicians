import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne || '0');
  const two = Big(
    numberTwo || (operation === '÷' || operation === 'x' ? '1' : '0'),
  ); // If dividing or multiplying, then 1 maintains current value in cases of null
  if (operation === '+') {
    return one.plus(two).toString();
  }
  if (operation === '-') {
    return one.minus(two).toString();
  }
  if (operation === 'x') {
    return one.times(two).toString();
  }
  if (operation === '÷') {
    try {
      return one.div(two).toString();
    } catch (err) {
      return err.message;
    }
  }
  if (operation === '%') {
    try {
      return one.mod(two).toString();
    } catch (err) {
      return err.message;
    }
  }
  throw Error(`Unknown operation '${operation}'`);
}
