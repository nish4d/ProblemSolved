// problem 1

let firstArray = [1, 2, 3, 5];
let secondArray = [1, 2, 3, 4, 5];
const arrResult = secondArray.filter((i) => !firstArray.includes(i));
console.log(arrResult)

let array1 = [1, "calf", 3, "piglet"];
let array2 = [1, "calf", 3, 4];
const array1Result = array1.filter((i) => !array2.includes(i));
const array2Result = array2.filter((i) => !array1.includes(i));
const finalArray = [...array1Result, ...array2Result];
console.log(finalArray)

// problem 2

const letters = (letter) => {
  for (let i = 0; i < letter.length - 1; i++) {
    const fastCharacterCode = letter.charCodeAt(i);
    const secondCharacterCode = letter.charCodeAt(i + 1);

    if (secondCharacterCode - fastCharacterCode > 1) {
      return String.fromCharCode(fastCharacterCode + 1);
    }
  }
};

console.log(letters("abce"))
console.log(letters("stvwx"))
