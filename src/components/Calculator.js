import React from 'react';
import Input from './Input';
import calculate from '../logic/calculate';
import Output from './Output';

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState((prevState) => calculate(prevState, buttonName));
  }

  render() {
    const { next, total, operation } = this.state;
    return (
      <div className="calculator">
        <Output value={next || total || operation || '0'} />
        <Input clickHandler={this.handleClick} />
      </div>
    );
  }
}
