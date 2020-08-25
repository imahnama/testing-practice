const caesarCipher = () => {

    const convertStringNumbers = (str, key) => {
        const stringsArray = str.split('')
        const numsArray = []
        for(let i = 0; i < stringsArray.length; i += 1){
            numsArray.push(str.charCodeAt(i))
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

        console.log(updatedArray)

    }

    return { convertStringNumbers }

}

let caesarCipherInstance = caesarCipher()
caesarCipherInstance.convertStringNumbers('Hello world', 2)