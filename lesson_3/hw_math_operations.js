document.addEventListener('DOMContentLoaded', () => {
  let firstNumber = Number(prompt('Type first number: '));
  let secondNumber = Number(prompt('Type second number: '));

  let resultSummary = firstNumber + secondNumber;
  let resultSubstraction = firstNumber - secondNumber;
  let resultMultiply = firstNumber * secondNumber;
  let resultDivide = firstNumber / secondNumber;

  alert(`${firstNumber} + ${secondNumber} = ${resultSummary}\n
  ${firstNumber} - ${secondNumber} = ${resultSubstraction}\n
  ${firstNumber} * ${secondNumber} = ${resultMultiply}\n
  ${firstNumber} / ${secondNumber} = ${resultDivide}\n`)
})