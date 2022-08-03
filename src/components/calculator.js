import React from 'react';
import '../calc.css';

export default class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calc-form">
        <div className="first-row" placeholder="0" contentEditable>0</div>
        <div className="number">AC</div>
        <div className="number">+/-</div>
        <div className="number">%</div>
        <div className="operation">/</div>
        <div className="number">7</div>
        <div className="number">8</div>
        <div className="number">9</div>
        <div className="operation">x</div>
        <div className="number">4</div>
        <div className="number">5</div>
        <div className="number">6</div>
        <div className="operation">-</div>
        <div className="number">1</div>
        <div className="number">2</div>
        <div className="number">3</div>
        <div className="operation">+</div>
        <div className="last-row">0</div>
        <div className="number">.</div>
        <div className="operation">=</div>

      </div>
    );
  }
}
