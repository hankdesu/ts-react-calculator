import React, { useState } from 'react';

import Button from '../../components/Button';
import { OnButtonClick, Params } from '../../types/calculator';
import { calculateResult } from '../../utils/helper';

import './index.css';

function Calculator() {
  const [inputNumArray, setInputNumArray] = useState<string[]>(['0', '0']);
  const [operator, setOperator] = useState('');
  const [displayNum, setDisplayNum] = useState('0');

  const onButtonClick: OnButtonClick = (e) => {
    const { value } = e.target as HTMLInputElement;
    if (operator) {
      const formatValue = parseInt(`${inputNumArray[1]}${value}`, 10);
      setInputNumArray((prev) => [prev[0], `${formatValue}`]);
      setDisplayNum(`${formatValue}`);
    } else {
      const formatValue = parseInt(`${inputNumArray[0]}${value}`, 10);
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
    const { value } = e.target as HTMLInputElement;
    if (operator) {
      const params: Params = [Number(inputNumArray[0]), Number(inputNumArray[1]), operator];
      if (value === '=') params.push(operator);
      const result = calculateResult(...params);
      setDisplayNum(String(result));
      setInputNumArray([String(result), '']);
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
          <Button onButtonClick={onACClick} value="AC" />
          <Button onButtonClick={onOperatorClick} value="+/-" />
          <Button onButtonClick={onOperatorClick} value="%" />
          <Button onButtonClick={onOperatorClick} value="/" />
          <Button onButtonClick={onButtonClick} value="7" />
          <Button onButtonClick={onButtonClick} value="8" />
          <Button onButtonClick={onButtonClick} value="9" />
          <Button onButtonClick={onOperatorClick} value="*" />
          <Button onButtonClick={onButtonClick} value="4" />
          <Button onButtonClick={onButtonClick} value="5" />
          <Button onButtonClick={onButtonClick} value="6" />
          <Button onButtonClick={onOperatorClick} value="-" />
          <Button onButtonClick={onButtonClick} value="1" />
          <Button onButtonClick={onButtonClick} value="2" />
          <Button onButtonClick={onButtonClick} value="3" />
          <Button onButtonClick={onOperatorClick} value="+" />
          <Button onButtonClick={onButtonClick} value="R" />
          <Button onButtonClick={onButtonClick} value="0" />
          <Button onButtonClick={onButtonClick} value="." />
          <Button onButtonClick={onOperatorClick} value="=" />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
