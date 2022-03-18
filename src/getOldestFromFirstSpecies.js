const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(...id) {
  // seu código aqui
  // const { species } = data;
  // const firstSpecies = id.reduce((acc, cur) => {
  //   acc += species.find((elementoFind) => elementoFind === cur[id]);
  //   return acc;
  // }, []);
  // console.log(firstSpecies);
  // return firstSpecies;
}

// const teste1 = 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1';
// const teste2 = '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae';
// console.log(getOldestFromFirstSpecies(teste1, teste2));

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
