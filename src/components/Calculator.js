import React from 'react';
import Input from './Input';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: '0',
    };
  }

  render() {
    const { output } = this.state;
    return (
      <div className="calculator">
        <div className="output">
          <span dir="rtl">{output}</span>
        </div>
        <Input />
      </div>
    );
  }
}
