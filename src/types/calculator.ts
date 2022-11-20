import { MouseEvent } from 'react';

export type OnButtonClick = (e: MouseEvent<HTMLInputElement>) => void;

export type Params = [number, number, string, string?];
