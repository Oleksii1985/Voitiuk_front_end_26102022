document.addEventListener('DOMContentLoaded', () => {
  let firstName = prompt('Type your first name: ');
  let lastName = prompt('Type your last name: ');
  let age = Number(prompt('Type your age: '));

  console.log(`user's first name is: ${firstName}\n` + `user's last name is: ${lastName}\n` + `user's age is: ${age}`);

  const num = 12345;
  const strNum = String(num)

  console.log(strNum[0] + ' ' + strNum[1] + ' ' + strNum[2] + ' ' + strNum[3] + ' ' + strNum[4])
})
