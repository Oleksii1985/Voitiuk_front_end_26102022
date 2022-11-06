// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
const result = [];

for (let i = 20; i < 31;) {
  result.push(i);
  i = i + 0.5;
}
console.log(result);


// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
const hryvnya = 27;
const resultDollar = [];

for (let i = 10; i < 101;) {
  let result = hryvnya * i;
  resultDollar.push(result);
  i = i + 10;
}
console.log(resultDollar);


// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
const number = 250;
const resultNumber = [];


for (let i = 1; i < 100; i++) {
  let res = i ** 2;
  let num = i;
  if (res > number) {
    break;
  }
  resultNumber.push(num);
}
console.log(resultNumber);


// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

function isPrime(n) {
  if (n < 2) {
    return 'Число має бути більше 2';
  } else if (n === 2) {
    return 'Просте число';
  }

  let i = 2;
  const limit = Math.sqrt(n);
  while (i <= limit) {
    if (n % i === 0) {
      return 'Составне число';
    }
    i += 1;
  }

  return 'Просте число';
}

console.log(97, isPrime(97));


// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

let exponentialNumber = function (n) {
  let stop = Math.sqrt(n);
  for (let i = 2; i <= stop; i++) {
    let cur = n;
    let count = 0;
    while (cur > 1 && cur % i == 0) {
      count++;
      cur = cur / i;
    }
    if (cur == 1) {
      console.log(n, "=", i, "^", count);
      return;
    }
  }
  console.log(n, "NO");
};

exponentialNumber(81);
exponentialNumber(13);
