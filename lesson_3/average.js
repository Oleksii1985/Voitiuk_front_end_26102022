document.addEventListener('DOMContentLoaded', () => {

  let firstNumber = Number(prompt('Type your first number: '));
  let secondNumber = Number(prompt('Type your second number: '));
  let thirdNumber = Number(prompt('Type your third number: '));

  let result = (firstNumber + secondNumber + thirdNumber) / 3;

  alert(`Your average is: ${result.toFixed(2)}`)
})