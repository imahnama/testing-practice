const calculator = () => {
  const addition = (a, b) => a + b;

  const subtraction = (a, b) => a - b;

  const multiplication = (a, b) => a * b;

  const division = (a, b) => a / b;

  return {
    addition, subtraction, multiplication, division,
  };
};

calculator(1, 2);

module.exports = calculator;
