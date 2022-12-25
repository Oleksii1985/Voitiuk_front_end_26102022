
const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];


// Знайти суму та кількість позитивних елементів.
const summa = arr.reduce((acc, curr) => curr > 0 ? acc + curr : acc, 0);
const quantity = arr.reduce((acc, curr) => curr > 0 ? acc + 1 : acc, 0);

console.log(summa);
console.log(quantity);


// Знайти мінімальний елемент масиву та його порядковий номер
const minValue = Math.min(...arr);
const indexMinValue = arr.indexOf(minValue)

console.log(minValue);
console.log(indexMinValue);


// Знайти максимальний елемент масиву та його порядковий номер
const maxValue = Math.max(...arr);
const indexMaxValue = arr.indexOf(maxValue);

console.log(maxValue);
console.log(indexMaxValue);


// Визначити кількість негативних елементів.
const quantityNegative = arr.reduce((acc, curr) => curr < 0 ? acc + 1 : acc, 0);
console.log(quantityNegative);


// Знайти кількість непарних позитивних елементів.
const unique = arr.filter(a => arr.filter(b => b === a).length == 1);
const positiveUnique = unique.filter(elem => elem > 0).length;

console.log(positiveUnique);


// Знайти кількість парних позитивних елементів.
const notUnique = arr.filter(a => arr.filter(b => b === a).length !== 1);
const positiveNotUnique = notUnique.filter(elem => elem > 0).length;

console.log(positiveNotUnique);


// Знайти суму парних позитивних елементів.
const positiveNotUniqueArr = notUnique.filter(elem => elem > 0);
const sumNotUniq = positiveNotUniqueArr.reduce((acc, curr) => acc + curr, 0);

console.log(sumNotUniq);


// Знайти суму непарних позитивних елементів.
const positiveUniqueArr = unique.filter(elem => elem > 0);
const sumUniq = positiveUniqueArr.reduce((acc, curr) => acc + curr, 0);

console.log(sumUniq);


// Знайти добуток позитивних елементів.
const multiply = arr.reduce((acc, curr) => curr > 0 ? acc * curr : acc, 1);

console.log(multiply);


// Знайти найбільший серед елементів масиву, остальні обнулити.
const result = arr.map(value => maxValue === value ? value : 0);

console.log(result);