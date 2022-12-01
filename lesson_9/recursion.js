/**
 * @param {number} number 
 * @param {number} pow 
 * @returns {number} number
 */

function numberToPow(number, pow) {
  if (pow >= 0) {
    return pow === 0 ? 1 : number * numberToPow(number, --pow);
  } else {
    if (pow === -1) {
      return 1.0 / number;
    } else {
      return 1.0 / (number * numberToPow(number, (-1) * (pow + 1)));;
    }
  }
}

console.log(numberToPow(2, -2));
