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

  const { next, total, operation } = state;
  return (
    <section className="calculator-sect d-flex">
      <div>
        <h1>Let&apos;s do some math!</h1>
      </div>
      <div className="calculator">
        <Output value={next || operation || total || '0'} />
        <Input clickHandler={handleClick} />
      </div>
    </section>
  );
};

export default Calculator;
