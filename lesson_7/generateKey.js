const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

/**
 * 
 * @param {number} number 
 * @param {string} characters 
 * 
 * @returns string
 */

const generateKey = (number, characters) => {
  const shuffled = characters.split('').sort(function () { return 0.5 - Math.random() }).join('');
  const result = shuffled.substring(0, number);
  return result;
};

console.log(generateKey(16, characters));
