/**
 * @param {string} str 
 * @param {number} low 
 * @param {number} high 
 * @returns boolean
 */
function isPalindrome(str, low, high) {
  while (low < high) {
    if (str.charAt(low) != str.charAt(high))
      return false;
    low++;
    high--;
  }
  return true;
}


/**
 * @param {string} str 
 * @returns number
 */
function possiblePalinByRemovingOneChar(str) {
  let low = 0, high = str.length - 1;

  while (low < high) {
    if (str.charAt(low) == str.charAt(high)) {
      low++;
      high--;
    }
    else {
      if (isPalindrome(str, low + 1, high))
        return low;

      if (isPalindrome(str, low, high - 1))
        return high;
      return -1;
    }
  }
  return -2;
}

/**
 * @param {function} cb
 */
function polindrome(cb) {
  if (cb === -1) {
    console.log("Not Possible");
  } else if (cb === -2) {
    console.log("OK");
  } else {
    console.log(`Remove One at index ${cb}`);
  }
}

polindrome(possiblePalinByRemovingOneChar("abba"))
polindrome(possiblePalinByRemovingOneChar("abbaa"))
polindrome(possiblePalinByRemovingOneChar("abbaab"))
polindrome(possiblePalinByRemovingOneChar("madmam"))
polindrome(possiblePalinByRemovingOneChar("raydarm"))
polindrome(possiblePalinByRemovingOneChar("hannah"))
