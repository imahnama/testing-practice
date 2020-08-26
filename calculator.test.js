import calculator from './calculator';

const calculatorInstance = calculator();

test('it adds two numbers', () => {
  expect(calculatorInstance.addition(2, 3)).toEqual(5);
  expect(calculatorInstance.addition(2, 3)).not.toEqual(6);
});

test('it subtracts two numbers', () => {
  expect(calculatorInstance.subtraction(8, 3)).toEqual(5);
  expect(calculatorInstance.subtraction(8, 3)).not.toEqual(6);
});

test('it multiplies two numbers', () => {
  expect(calculatorInstance.multiplication(2, 3)).toEqual(6);
  expect(calculatorInstance.multiplication(2, 3)).not.toEqual(9);
});

test('it divides two numbers', () => {
  expect(calculatorInstance.division(10, 2)).toEqual(5);
  expect(calculatorInstance.division(10, 2)).not.toEqual(6);
});
