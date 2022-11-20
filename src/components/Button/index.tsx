import React from 'react';

import { Props } from '../../types/button';

import './index.css';

function Button(props: Props) {
  const { onButtonClick, value } = props;

  return (
    <input
      type="button"
      className="button-container"
      onClick={onButtonClick}
      value={value}
    />
  );
}

export default Button;
