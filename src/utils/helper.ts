type Calculate = (num1: number, num2: number, operator: string, prevOperator?: string) => number;

export const calculateResult: Calculate = (num1, num2, operator, prevOperator) => {
  let result = 0;
  switch (operator) {
    case '+': {
      result = num1 + num2;
      break;
    }
    case '-': {
      result = num1 - num2;
      break;
    }
    case '/': {
      result = num1 / num2;
      break;
    }
    case '*': {
      result = num1 * num2;
      break;
    }
    case '=': {
      if (prevOperator && prevOperator !== '=') {
        result = calculateResult(num1, num2, prevOperator);
      } else {
        result = num1;
      }
      break;
    }
    case '%': {
      result = num1 % num2;
      break;
    }
    default:
      break;
  }
  return result;
};

export const HELPER = 'HELPER';
