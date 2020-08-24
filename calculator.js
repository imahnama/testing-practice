const calculator = () => {

  const addition = (a, b) => {
    return a + b
  }

  const subtraction = (a, b) => {
    return a - b
  }

  const multiplication = (a, b) => {
    return a * b
  }

  const division = (a, b) => {
    return a / b
  }

  return {addition, subtraction, multiplication, division}
}

calculator(1, 2)

module.exports = calculator
