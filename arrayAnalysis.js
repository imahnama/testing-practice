const arrayAnalysis = (arr) => {
  const sum = arr.reduce((num, val) => num + val, 0);
  const { length } = arr;
  const average = sum / length;

  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return {
    average, length, min, max,
  };
};


module.exports = arrayAnalysis;