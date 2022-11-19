const array = [1, 2, 3, 4, 5, 6, 7];

/**
 * 
 * @param {array} someArray 
 * @param {number} number 
 * 
 * @returns array
 */

const removeElement = (someArray, number) => {
  return someArray.filter((value) => value !== number);
};

console.log(removeElement(array, 5));
console.log(array);