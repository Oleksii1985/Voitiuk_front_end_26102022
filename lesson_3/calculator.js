document.addEventListener('DOMContentLoaded', () => {
  let typeOperation = prompt('Type "add", "sub", "mult" or "div": ');
  let firstNumber = Number(prompt('Type first number: '));
  let secondNumber = Number(prompt('Type second number: '));

  if (typeOperation === 'add') {
    let result = firstNumber + secondNumber;
    console.log(`Result: ${firstNumber} + ${secondNumber} = ${result}`);
  } else if (typeOperation === 'sub') {
    let result = firstNumber - secondNumber;
    console.log(`Result: ${firstNumber} - ${secondNumber} = ${result}`);
  } else if (typeOperation === 'mult') {
    let result = firstNumber * secondNumber;
    console.log(`Result: ${firstNumber} * ${secondNumber} = ${result}`);
  } else if (typeOperation === 'div') {
    if (secondNumber === 0) {
      console.log('Exception ZeroDivisionError!!!');
    } else {
      let result = firstNumber / secondNumber;
      console.log(`Result: ${firstNumber} / ${secondNumber} = ${result}`);
    }
  } else {
    console.log('Somthing went wrong!!');
  }
})