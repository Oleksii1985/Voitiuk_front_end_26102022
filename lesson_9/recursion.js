/**
 * @param {number} number 
 * @param {number} pow 
 * @returns {number} number
 */

function numberToPow(number, pow) {
  const result = pow === 0 ? 1 : number * numberToPow(number, --pow);
  return result
}

console.log(numberToPow(2, 2));