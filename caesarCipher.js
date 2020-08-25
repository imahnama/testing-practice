const caesarCipher = () => {

  const capsLetters = []

    const convertStringNumbers = (str, key) => {
        const stringsArray = str.split('')
        
        const numsArray = []
        for (var i = 0; i < stringsArray.length; i++) {

          if (stringsArray[i] == stringsArray[i].toUpperCase()) {
            capsLetters.push(i)
          }
        }

        for(let i = 0; i < stringsArray.length; i += 1){
            numsArray.push(str.toLowerCase().charCodeAt(i))
        }


        return addKey(numsArray, key)
    }

    const addKey = (numsArray, key) => {
        const updatedArray = []

        numsArray.forEach(element => {
            const newChar = element + key
            if(newChar >= 97 && newChar <= 122){
                updatedArray.push(newChar)
            }else {
                updatedArray.push(newChar - 26)

            }
        });
        return strConversion(updatedArray)
    }

    const strConversion = (updatedArray) => {

      let newStr = []

      for (var i = 0; i < updatedArray.length; i++) {
      newStr.push(String.fromCharCode(updatedArray[i]))
      }

    return capsFunction(newStr)
    }

   const capsFunction = (newStr) => {

     capsLetters.map(val => {
       newStr.splice(val, 1, newStr[val].toUpperCase())
     })

     console.log(newStr.join(''))

   }

    return { convertStringNumbers }

}

let caesarCipherInstance = caesarCipher()
caesarCipherInstance.convertStringNumbers('convertStringNumbers', 1)
