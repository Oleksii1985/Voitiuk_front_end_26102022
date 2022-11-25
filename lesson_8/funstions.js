/*Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.*/

numbers = [1, 2, 3, 14, 'bla', 3.2]

/**
 * @param {array <any>} nums 
 * 
 * @returns array <number>
 */


function average(nums) {
  result = [];
  for (let i = 0; i < nums.length; i++) {
    if (Number(nums[i])) {
      result.push(nums[i]);
    }
  }
  return result.reduce((a, b) => (a + b)) / result.length;
}

console.log(average(numbers).toFixed(2))



/*Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача. */

const operator = prompt('Enter operator ( either +, -, *, /, %, ^ ): ');

const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

/**
 * @param {number} x 
 * @param {string} znak 
 * @param {number} y 
 * @returns string
 */

function doMath(x, znak, y) {
  switch (znak) {
    case '+':
      result = x + y;
      return `${x} + ${y} = ${result}`;

    case '-':
      result = x - y;
      return `${x} - ${y} = ${result}`;

    case '*':
      result = x * y;
      return `${x} * ${y} = ${result}`;

    case '/':
      if (y === 0) {
        return 'ZeroDivision Error'
      }
      result = x / y;
      return `${x} / ${y} = ${result}`;

    case '%':
      result = x / y * 100;
      return `${x} % ${y} = ${result}`;

    case '^':
      result = x ** y;
      return `${x} ^ ${y} = ${result}`;

    default:
      return 'Invalid operator';
  }
}

console.log(doMath(number1, operator, number2));


/**Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач. */

const lenghtMainArray = parseInt(prompt('Type lenght main array: '));
const lenghtInsideArrays = parseInt(prompt('Type lenght array inside array: '));

/**
 * @returns array
 */

function twoDimensionalArray() {
  const arr = [];

  for (let i = 0; i < lenghtMainArray; i++) {
    arr[i] = [];
    for (let j = 0; j < lenghtInsideArrays; j++) {
      arr[i][j] = prompt('Type value element of array: ');
    }
  }
  return arr
}

console.log(twoDimensionalArray());


/**Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач. */

const usersPrompt = prompt('Type your sentence: ');
const removeSymbols = prompt('Type symbols which you want to remove: ');

/**
 * @param {string} stringValue 
 * @param {string} removeSymbolsValue 
 * 
 * @returns string
 */

function symbolsManipulation(stringValue, removeSymbolsValue) {
  let stringArgs = removeSymbolsValue.join('');

  return stringValue.replace(new RegExp(`[${stringArgs}]`, 'gi'), '');
}

console.log(symbolsManipulation(usersPrompt, [removeSymbols]));
