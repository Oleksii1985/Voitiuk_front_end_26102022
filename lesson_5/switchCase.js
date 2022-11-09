let numOrStr = prompt('input number or string');
console.log(typeof numOrStr);

switch (numOrStr) {
  case null:
    console.log('ви скасували');
    break;
  default:
    if (numOrStr.trim() === '') {
      console.log('Empty String');
      break;
    }
    if (isNaN(+numOrStr)) {
      console.log(' number is Ba_NaN');
      break;
    }
    console.log('OK!')
}