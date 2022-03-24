const data = require('../data/zoo_data');

const { species, hours } = data;

function isAnimal(inputIsAnimal) {
  return species.some((specie) => specie.name === inputIsAnimal);
}
// console.log(isAnimal('lions')); // retorna boolean

function isWeekday(inputIsWeekday) {
  return Object.keys(hours).some((day) => day === inputIsWeekday);
}
// console.log(isWeekday('Monday')); // retorna boolean

function mondayOff() {
  const officeHour = 'CLOSED';
  const exhibition = 'The zoo will be closed!';
  return { officeHour, exhibition };
}
// console.log(mondayOff()); // retorna obj folga

function weekdaySchedule(weekdays) {
  const arrAnimals = [];
  species.forEach((specie) => {
    if (specie.availability.some((day) => day === weekdays)) return arrAnimals.push(specie.name);
  });
  const textSchedule = `Open from ${hours[weekdays].open}am until ${hours[weekdays].close}pm`;
  return { officeHour: textSchedule, exhibition: arrAnimals };
}
// console.log(weekdaySchedule('Sunday')); // obj agenda do dia

function getSchedule(inputMain) {
  // seu código aqui
  if (isAnimal(inputMain)) {
    return species.find((specie) => specie.name === inputMain).availability;
  }

  const objSchedule = {};
  if (isWeekday(inputMain)) {
    if (inputMain === 'Monday') return { Monday: mondayOff() };
    objSchedule[inputMain] = weekdaySchedule(inputMain);
    return objSchedule;
  } // se monday, folga; se nao, cria chave e atrib valor

  Object.keys(hours).forEach((weekday) => {
    objSchedule[weekday] = weekdaySchedule(weekday);
  });
  objSchedule.Monday = mondayOff(); // corrige segunda de folga
  return objSchedule;
}
// console.log(getSchedule());
// console.log(getSchedule('Monday'));
// console.log(getSchedule('Friday'));
// console.log(getSchedule('lions'));
// console.log(getSchedule('otters'));
// console.log(getSchedule('abubleabuble'));

module.exports = getSchedule;

// retornar crono da semana
// retorna crono de dia especifico
// retorna crono de um animal
// .
// DONE fc() -> horarios p cada dia e quais animais disponiveis
// // { 'Monday': { 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' } }
// .
// fc(!animal || !dia) -> idem anterior
// .
// DONE fc(dia) -> horarios dia especifico e quais animais disponiveis
// // fc('Monday') -> { 'Monday': { 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' }, }
// // fc('Tuesday') -> {
// // ...........'Tuesday': {
// // ............. 'officeHour': 'Open from 8am until 6pm',
// // ............. 'exhibition': [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
// // ........... },
// // }
// .
// DONE fc(animal) -> [ ...diasQueAnimalExibicao ]
// // fc('lion') -> [ 'Tuesday', 'Thursday', 'Saturday', 'Sunday' ]
