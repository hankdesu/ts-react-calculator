import React from 'react';
import { OnButtonClick } from './calculator';

export type Props = {
  onButtonClick: OnButtonClick;
  value: string | number;
  children: React.ReactNode;
};
