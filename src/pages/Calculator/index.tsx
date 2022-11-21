import React, { useState } from 'react';

import Button from '../../components/Button';
import { OnButtonClick, Params } from '../../types/calculator';
import { calculateResult } from '../../utils/helper';
import { isFloat, validateInput } from '../../utils/validate';

import './index.css';

function Calculator() {
  const [inputNumArray, setInputNumArray] = useState<string[]>(['0', '0']);
  const [operator, setOperator] = useState('');
  const [displayNum, setDisplayNum] = useState('0');
  // const [inputNum1, setInputNum1] = useState(0);

  const onButtonClick: OnButtonClick = (e) => {
    const { value } = e.currentTarget;
    if (operator) {
      const formatValue = validateInput(inputNumArray[1], value);
      // const formatValue = parseFloat(`${inputNumArray[1]}${value}`);
      setInputNumArray((prev) => [prev[0], `${formatValue}`]);
      setDisplayNum(`${formatValue}`);
    } else {
      const formatValue = validateInput(inputNumArray[0], value);
      // const formatValue = parseFloat(`${inputNumArray[0]}${value}`);
      setInputNumArray((prev) => [`${formatValue}`, prev[1]]);
      setDisplayNum(`${formatValue}`);
    }
  };

  const onACClick = () => {
    setOperator('');
    setInputNumArray(['0', '0']);
    setDisplayNum('0');
  };

  const onOperatorClick: OnButtonClick = (e) => {
    const { value } = e.currentTarget;
    if (operator) {
      const params: Params = [parseFloat(inputNumArray[0]), parseFloat(inputNumArray[1]), operator];
      if (value === '=') params.push(operator);
      let result = calculateResult(...params);
      if (isFloat(result)) {
        result = parseFloat((Math.round(result * 10000) / 10000).toFixed(4));
      }
      setDisplayNum(String(result));
      setInputNumArray([String(result), '0']);
    }
    setOperator(value);
  };

  return (
    <div className="calculator-container">
      <div className="monitor-container">
        <div className="result-container">{displayNum}</div>
      </div>
      <div className="keyboard-container">
        <div className="buttons-container">
          <Button onButtonClick={onACClick} value="AC">AC</Button>
          <Button onButtonClick={onOperatorClick} value="+/-">+/-</Button>
          <Button onButtonClick={onOperatorClick} value="%">%</Button>
          <Button onButtonClick={onOperatorClick} value="/">/</Button>
          <Button onButtonClick={onButtonClick} value="7">7</Button>
          <Button onButtonClick={onButtonClick} value="8">8</Button>
          <Button onButtonClick={onButtonClick} value="9">9</Button>
          <Button onButtonClick={onOperatorClick} value="*">*</Button>
          <Button onButtonClick={onButtonClick} value="4">4</Button>
          <Button onButtonClick={onButtonClick} value="5">5</Button>
          <Button onButtonClick={onButtonClick} value="6">6</Button>
          <Button onButtonClick={onOperatorClick} value="-">-</Button>
          <Button onButtonClick={onButtonClick} value="1">1</Button>
          <Button onButtonClick={onButtonClick} value="2">2</Button>
          <Button onButtonClick={onButtonClick} value="3">3</Button>
          <Button onButtonClick={onOperatorClick} value="+">+</Button>
          <Button onButtonClick={onButtonClick} value="R">R</Button>
          <Button onButtonClick={onButtonClick} value="0">0</Button>
          <Button onButtonClick={onButtonClick} value=".">.</Button>
          <Button onButtonClick={onOperatorClick} value="=">=</Button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
