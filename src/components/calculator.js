import React, { useState } from 'react';
import '../calc.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [num, setNum] = useState({ total: '', next: '', operation: '' });
  const OnClickListening = (e) => {
    setNum(calculate(num, e.target.innerText));
  };

  const { total, next, operation } = num;
  return (
    <div className="calc-form">
      <div className="first-row" id="first-row">
        <input
          type="text"
          readOnly
          placeholder="0"
          value={(total || '') + (operation || '') + (next || '') || 0}
        />
      </div>
      <button type="button" className="number" onClick={OnClickListening}>AC</button>
      <button type="button" className="number" onClick={OnClickListening}>+/-</button>
      <button type="button" className="number" onClick={OnClickListening}>%</button>
      <button type="button" className="operation" onClick={OnClickListening}>÷</button>
      <button type="button" className="number" onClick={OnClickListening}>7</button>
      <button type="button" className="number" onClick={OnClickListening}>8</button>
      <button type="button" className="number" onClick={OnClickListening}>9</button>
      <button type="button" className="operation" onClick={OnClickListening}>x</button>
      <button type="button" className="number" onClick={OnClickListening}>4</button>
      <button type="button" className="number" onClick={OnClickListening}>5</button>
      <button type="button" className="number" onClick={OnClickListening}>6</button>
      <button type="button" className="operation" onClick={OnClickListening}>-</button>
      <button type="button" className="number" onClick={OnClickListening}>1</button>
      <button type="button" className="number" onClick={OnClickListening}>2</button>
      <button type="button" className="number" onClick={OnClickListening}>3</button>
      <button type="button" className="operation" onClick={OnClickListening}>+</button>
      <button type="button" className="number last-row" onClick={OnClickListening}>0</button>
      <button type="button" className="number" onClick={OnClickListening}>.</button>
      <button type="button" className="operation" onClick={OnClickListening}>=</button>
    </div>
  );
};

Calculator.defaultProps = { total: 0, operations: '', next: 0 };
export default Calculator;
