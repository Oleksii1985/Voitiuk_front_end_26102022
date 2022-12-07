const totalResult = (function () {
  let privateCounter = 0;
  /**
   * @param {number} value 
   */
  function changeBy(value) {
    privateCounter += value;
  }
  return {
    /**
     * @param {number} num 
     */
    sum(num) {
      changeBy(num);
    },
    /**
     * @returns number
     */
    result() {
      return privateCounter;
    }
  };
})();

console.log(totalResult.result());

totalResult.sum(2);
console.log(totalResult.result());

totalResult.sum(6);
console.log(totalResult.result());
