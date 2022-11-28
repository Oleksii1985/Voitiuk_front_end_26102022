/**
 * @param {number} number 
 * @param {number} pow 
 * @returns {number} number
 */

function numberToPow(number, pow) {
  if (pow >= 0) {
    const result = pow === 0 ? 1 : number * numberToPow(number, --pow);
    return result;
  } else {
    if (pow === -1) {
      const result = 1.0 / number;
      return result;
    } else {
      const result = 1.0 / (number * numberToPow(number, (-1) * (pow + 1)));
      return result;
    }
  }
}

console.log(numberToPow(2, -2));
