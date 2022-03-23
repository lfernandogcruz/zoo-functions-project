const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const { species } = data;
  // find(animal)
  const seekAnimal = species.filter((elementAnimal) => elementAnimal.name === animal);
  // console.log(seekAnimal);
  // every (idade >= age)
  const { residents } = seekAnimal[0];
  // console.log(residents);
  const checkAge = residents.every((elementAge) => elementAge.age >= age);
  return checkAge;
}
// console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
