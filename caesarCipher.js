const caesarCipher = () => {
  const capsLetters = [];

  const capsFunction = (newStr) => {
    capsLetters.map(val => newStr.splice(val, 1, newStr[val].toUpperCase()));

    return (newStr.join(''));
  };

  const strConversion = (updatedArray) => {
    const newStr = [];

    for (let i = 0; i < updatedArray.length; i += 1) {
      newStr.push(String.fromCharCode(updatedArray[i]));
    }

    return capsFunction(newStr);
  };


  const addKey = (numsArray, key) => {
    const updatedArray = [];

    numsArray.forEach(element => {
      if (element >= 97 && element <= 122) {
        const newChar = element + key;
        if (newChar >= 97 && newChar <= 122) {
          updatedArray.push(newChar);
        } else {
          updatedArray.push(newChar - 26);
        }
      } else {
        updatedArray.push(element);
      }
    });

    return strConversion(updatedArray);
  };

  const convertStringNumbers = (str, key) => {
    const stringsArray = str.split('');

    const numsArray = [];
    for (let i = 0; i < stringsArray.length; i += 1) {
      if (stringsArray[i] === stringsArray[i].toUpperCase()
      && str.charCodeAt(i) >= 65
       && str.charCodeAt(i) <= 90) {
        capsLetters.push(i);
      }
    }

    for (let i = 0; i < stringsArray.length; i += 1) {
      numsArray.push(str.toLowerCase().charCodeAt(i));
    }

    return addKey(numsArray, key);
  };

  return { convertStringNumbers };
};

module.exports = caesarCipher;
