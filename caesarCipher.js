const caesarCipher = () => {
  const capsFunction = (newStr, capsLetters) => {
    capsLetters.map(val => newStr.splice(val, 1, newStr[val].toUpperCase()));

    return (newStr.join(''));
  };

  const strConversion = (updatedArray, capsLetters) => {
    const newStr = [];

    for (let i = 0; i < updatedArray.length; i += 1) {
      newStr.push(String.fromCharCode(updatedArray[i]));
    }

    return capsFunction(newStr, capsLetters);
  };


  const addKey = (numsArray, key, capsLetters) => {
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

    return strConversion(updatedArray, capsLetters);
  };

  const convertStringNumbers = (str, key) => {
    const stringsArray = str.split('');
    const capsLetters = [];

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

    return addKey(numsArray, key, capsLetters);
  };

  return { convertStringNumbers };
};

module.exports = caesarCipher;
