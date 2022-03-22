const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const { species } = data;
  // blank
  if (animal === undefined) {
    const blank = species.reduce((acc, eachSpecies) => {
      acc[eachSpecies.name] = eachSpecies.residents.length;
      // console.log(acc);
      return acc;
    }, {});
    return blank;
  }
}

// console.log('final blank: ', countAnimals());
// console.log('final uma esp: ', countAnimals({ specie: 'penguins' }));

module.exports = countAnimals;

// especie || especie + sexo
// const { especie, sexo } = animal;
// if (sexo === undefined) {
//   const umObj = species.filter((elObj) => elObj.name === especie);
//   console.log(umObj);
//   console.log(typeof umObj);

//   const { residents } = umObj[0];
//   console.log(residents);

//   return residents.length;
// const seekAnimal = species.filter((elementAnimal) => elementAnimal.name === animal);
// const { residents } = seekAnimal[0]; // direto do req 2
// }
