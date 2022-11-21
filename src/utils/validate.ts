export function validateInput(accumulate: string, currentInput: string) {
  const decimalRegex = /\./g;
  const findDot = decimalRegex.exec(accumulate);
  let result = '';

  if (accumulate === '0' && /\d/.test(currentInput)) {
    result = `${currentInput}`;
  } else if (/\./.test(currentInput) && findDot) {
    result = `${accumulate}`;
  } else {
    result = `${accumulate}${currentInput}`;
  }

  return result;
}

export function isFloat(n: number) {
  return n % 1 !== 0;
}

export const VALIDATE = 'VALIDATE';
