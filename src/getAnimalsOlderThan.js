const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const { name, residents } = data.species;
  // find(animal)
  const tagAnimal = name.find((elementoFind) => elementoFind === animal);
  console.log('tagged animal:', tagAnimal);
  // every (idade >= age)
  const ageCheck = tagAnimal.every((verifier) => tagAnimal.residents.age >= age);
  console.log('age check:', ageCheck);
  return ageCheck;
}
console.log(getAnimalsOlderThan('lions', 13));

module.exports = getAnimalsOlderThan;

  // Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada.
  // Observações técnicas
  // - Deve retornar um valor booleano.
  // O que será avaliado
  // - Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada.
