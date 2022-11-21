import React from 'react';

import { Props } from '../../types/button';

import './index.css';

function Button(props: Props) {
  const { onButtonClick, value, children } = props;

  return (
    <button
      type="button"
      aria-label="Click"
      className="button-container"
      onClick={onButtonClick}
      value={value}
    >
      {children}
    </button>
  );
}

export default Button;
