document.addEventListener('DOMContentLoaded', () => {
  let firstNumber = Number(prompt('Type first number: '));
  let secondNumber = Number(prompt('Type second number: '));

  resultSummary = firstNumber + secondNumber;
  resultSubstraction = firstNumber - secondNumber;
  resultMultiply = firstNumber * secondNumber;
  resultDivide = firstNumber / secondNumber;

  alert(`${firstNumber} + ${secondNumber} = ${resultSummary}\n${firstNumber} - ${secondNumber} = ${resultSubstraction}\n${firstNumber} * ${secondNumber} = ${resultMultiply}\n${firstNumber} / ${secondNumber} = ${resultDivide}\n`)
})