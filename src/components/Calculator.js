import { useState } from 'react';
import Input from './Input';
import calculate from '../logic/calculate';
import Output from './Output';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    setState({ ...state, ...calculate(state, buttonName) });
  };

  const { next, total } = state;
  return (
    <div className="calculator">
      <Output value={next || total || '0'} />
      <Input clickHandler={handleClick} />
    </div>
  );
};

export default Calculator;
