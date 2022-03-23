const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const { species, employees } = data;
  // busca func pela id
  const getWrkr = employees.filter((eltWrkr) => eltWrkr.id === id);
  // console.log('worker', getWrkr); // retorna objetao employee
  // busca 1a especie tratada
  const firstSpecies = getWrkr[0].responsibleFor[0];
  // console.log('first speceies', firstSpecies); // first speceies 0938aa23-f153-4937-9f88-4858b24d6bce
  // acessa animais pela id
  const getAnimalById = species.filter((elId) => elId.id === firstSpecies);
  // console.log(getAnimalById[0].residents); // arr de obj animais
  // busca animal mais velho
  const olderAnimal = getAnimalById[0].residents.sort((a, b) => b.age - a.age)[0];
  // console.log(olderAnimal);
  return Object.values(olderAnimal);
}

// const teste1 = 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1';
// const teste2 = '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae';
// console.log('final', getOldestFromFirstSpecies(teste1));

module.exports = getOldestFromFirstSpecies;

// A função busca por informações do animal mais velho da primeira espécie gerenciada pela pessoa colaboradora do parâmetro.

// O que será avaliado

// Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie.

// let firstSpecies = species.filter((filtroDeEspecie) => filtroDeEspecie.id === id.find((encontradorDeIds) => species[encontradorDeIds]));
// id.find((encontradorDeIds) => encontradorDeIds === filtroDeEspecie.id))

// id -> find -> 1a especie -> animal mais velho
// .............................['nome', 'sexo', idade]
// species = [
//   {
//     id: abubleabuble,
//     residents: [
//       {
//         name: 'Cacareco',
//         sex: 'male',
//         age: 43
//       },
//     ]
//   },
// ]
// const { species } = data;
// const firstSpecies = id.reduce((acc, cur) => {
//   acc += species.find((elementoFind) => elementoFind === cur[id]);
//   return acc;
// }, []);
// console.log(firstSpecies);
// return firstSpecies;

// const oldest = arrResids.reduce((a, b) => {
//   if (b.age >= a.age) {
//     a.name = b.name;
//     a.sex = b.sex;
//     a.age = b.age;
//     return a;
//   }
// }, {});
