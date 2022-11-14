let lenghtArray = Number(prompt('Type lenght of array: '));
const newArrayFromUser = new Array();
console.log(newArrayFromUser);


if (lenghtArray === 0) {
  console.log(`You have empty array with lenght ${lenghtArray}`);
}


while (lenghtArray > 0) {
  const arrayValue = prompt('Type element of array: ');
  if (parseInt(arrayValue)) {
    newArrayFromUser.push(+arrayValue);
  } else {
    newArrayFromUser.push(arrayValue);
  }
  lenghtArray -= 1;
  console.log(newArrayFromUser);
}

newArrayFromUser.sort();
const arrayAfterSort = newArrayFromUser.sort(function (a, b) { return a - b });
console.log(arrayAfterSort);


arrayAfterSort.splice(1, 3);
console.log(arrayAfterSort);
