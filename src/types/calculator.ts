import { MouseEvent } from 'react';

export type OnButtonClick = (e: MouseEvent<HTMLButtonElement>) => void;

export type Params = [number, number, string, string?];
