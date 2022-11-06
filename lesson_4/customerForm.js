const userBirthDate = prompt('Якого Ви року народження?: ');
const userHometown = prompt('В якому місті Ви живете?: ');
const userFavoriteSport = prompt('Який Ваш улюблений вид спорту?: ');

const kyiv = 'Київ';
const washington = 'Вашингтон';
const london = 'Лондон';

const ukraine = 'України';
const usa = 'Сполучених штатів';
const england = 'Англії';

const football = 'Футбол';
const box = 'Бокс';
const formula = 'Формула 1';

const pele = 'Пеле';
const tyson = 'Тайсоном';
const shumacher = 'Шумахером';

const userHometownLowerRegister = userHometown.toLowerCase()
const userFavoriteSportLowerRegister = userFavoriteSport.toLowerCase()

function countryMessage() {
  if (userHometownLowerRegister === kyiv.toLowerCase()) {
    return result = `Ти живеш у столиці ${ukraine}`;
  } else if (userHometownLowerRegister === washington.toLowerCase()) {
    return result = `Ти живеш у столиці ${usa}`;
  } else if (userHometownLowerRegister === london.toLowerCase()) {
    return result = `Ти живеш у столиці ${england}`;
  } else {
    return result = `Ти живеш у місті ${userHometown}`
  };
}
function sportMessage() {
  if (userFavoriteSportLowerRegister === football.toLowerCase()) {
    return result = `Круто! Хочеш стати ${pele}?`;
  } else if (userFavoriteSportLowerRegister === box.toLowerCase()) {
    return result = `Круто! Хочеш стати ${tyson}?`;
  } else if (userFavoriteSportLowerRegister === formula.toLowerCase()) {
    return result = `Круто! Хочеш стати ${shumacher}?`;
  } else {
    return result = 'Щодо цього виду спорту немає інформації'
  }
}

if (!userBirthDate) {
  alert(`Шкода, що Ви не захотіли ввести свій рік народження`);
}
if (!userHometown) {
  alert(`Шкода, що Ви не захотіли ввести назву свого міста`);
}
if (!userFavoriteSport) {
  alert(`Шкода, що Ви не захотіли ввести свій улюблений вид спорту`);
}

alert(`Твій рік народження: ${userBirthDate}\n
${countryMessage()}\n
${sportMessage()}`);