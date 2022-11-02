document.addEventListener('DOMContentLoaded', () => {

  alert('!!!Увага!!! Усі дані треба вводити з заглавної літери!!!')

  const userBirthDate = prompt('Якого Ви року народження?: ');
  const userHometown = prompt('В якому місті Ви живете?: ');
  const userFavoriteSport = prompt('Який Ваш улюблений вид спорту?: ');

  const kyiv = 'Київ';
  const washington = 'Вашингтон';
  const london = 'Лондон';

  const football = 'Футбол';
  const box = 'Бокс';
  const formula = 'Формула 1';

  const pele = 'Пеле';
  const tyson = 'Тайсоном';
  const shumacher = 'Шумахером';

  function sportMessage(userFavoriteSport) {
    if (userFavoriteSport === football) {
      return `Круто! Хочеш стати ${pele}?`;
    } else if (userFavoriteSport === box) {
      return `Круто! Хочеш стати ${tyson}?`;
    } else if (userFavoriteSport === formula) {
      return `Круто! Хочеш стати ${shumacher}?`;
    } else {
      return 'Щодо цього виду спорту немає інформації'
    }
  }

  if (userBirthDate === null) {
    alert(`Шкода, що Ви не захотіли ввести свій рік народження`);
  }
  if (userHometown === null) {
    alert(`Шкода, що Ви не захотіли ввести назву свого міста`);
  }
  if (userFavoriteSport === null) {
    alert(`Шкода, що Ви не захотіли ввести свій улюблений вид спорту`);
  }

const userHometownLowerRegister = userHometown.toLowerCase()
  if (userHometownLowerRegister === kyiv.toLowerCase() || ...) {
    alert(`Твій рік народження: ${userBirthDate}\n
    Ти живеш у столиці ${userHometown}\n
    ${sportMessage(userFavoriteSport)}`);
  } else {
    alert(`Твій рік народження: ${userBirthDate}\n
    Ти живеш у місті ${userHometown}\n
    ${sportMessage(userFavoriteSport)}`);
  }
})
