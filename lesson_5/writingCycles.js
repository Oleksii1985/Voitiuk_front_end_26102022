// Вивести на сторінку в один рядок через кому числа від 10 до 20.
const result = [];

for (let number = 10; number < 21; number++) {
  result.push(number);
}

console.log(result.toString());


// Вивести квадрати чисел від 10 до 20.
const squareResult = [];

for (let squareNumber = 10; squareNumber < 21; squareNumber++) {
  squareResult.push(squareNumber ** 2);
}

console.log(squareResult);


// Вивести таблицю множення на 7.
const multiplicationTable = [];

for (let multiNumber = 1; multiNumber < 11; multiNumber++) {
  multiplicationTable.push(multiNumber * 7);
}

console.log(multiplicationTable);


// Знайти суму всіх цілих чисел від 1 до 15.
const arrayIntegerNumber = [];
let sumResult = 0;

for (let intNumber = 1; intNumber < 16; intNumber++) {
  arrayIntegerNumber.push(intNumber);
}
for (let i = 0; i < arrayIntegerNumber.length; i++) {
  sumResult += arrayIntegerNumber[i];
}

console.log(sumResult);


// Знайти добуток усіх цілих чисел від 15 до 35.
const arrayIntegerNumberMult = [];
let multiplyResult = 1;

for (let intNumber = 15; intNumber < 36; intNumber++) {
  arrayIntegerNumberMult.push(intNumber);
}
for (let i = 0; i < arrayIntegerNumberMult.length; i++) {
  multiplyResult *= arrayIntegerNumberMult[i];
}

console.log(multiplyResult);


// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
const sumAllNumbers = [];
average = 0;

for (let number = 1; number < 501; number++) {
  sumAllNumbers.push(number);
}
for (let i = 0; i < sumAllNumbers.length; i++) {
  average += sumAllNumbers[i];
}

const totalResult = average / sumAllNumbers.length;

console.log(totalResult);



// Вивести суму лише парних чисел в діапазоні від 30 до 80.
const arrayEvenNumbers = [];
let sumEvenResult = 0;

for (let number = 30; number < 81; number++) {
  if (number % 2 === 0) {
    arrayEvenNumbers.push(number);
  }
}
for (let i = 0; i < arrayEvenNumbers.length; i++) {
  sumEvenResult += arrayEvenNumbers[i];
}

console.log(sumEvenResult);


// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
const moduloThreeArray = [];

for (let number = 100; number < 201; number++) {
  if (number % 3 === 0) {
    moduloThreeArray.push(number);
  }
}

console.log(moduloThreeArray);


// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
const number = 250;
const arrNumber = [];

for (let i = 1; i < number; i++) {
  if (number % i === 0) {
    arrNumber.push(i);
  }
}

console.log(arrNumber);


// Визначити кількість його парних дільників.
let totalEvenDivider = 0;

for (let i = 0; i < arrNumber.length; i++) {
  if (arrNumber[i] % 2 === 0) {
    totalEvenDivider += 1;
  }
}

console.log(totalEvenDivider);


// Знайти суму його парних дільників.
const sumEvenDividers = [];
let sumEvenDividersResult = 0;

for (let i = 1; i < arrNumber.length; i++) {
  if (arrNumber[i] % 2 === 0) {
    sumEvenDividers.push(arrNumber[i]);
  }
}
for (let i = 0; i < sumEvenDividers.length; i++) {
  sumEvenDividersResult += sumEvenDividers[i];
}

console.log(sumEvenDividersResult);


// Надрукувати повну таблицю множення від 1 до 10.
var oneRow = '';
function multiply() {
  for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
      oneRow += (j * i) + " ";
    }
    console.log(i + " x");
    console.log(oneRow);
    oneRow = '';
  }

}

multiply();