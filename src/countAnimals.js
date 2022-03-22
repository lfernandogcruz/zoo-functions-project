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
  // input obj
  const targetAnimal = species.filter((elSpecies) => elSpecies.name === Object.values(animal)[0]);
  if (Object.values(animal).length === 1) return targetAnimal[0].residents.length;
  const sTarget = targetAnimal[0].residents.filter((elS) => elS.sex === Object.values(animal)[1]);
  return sTarget.length;
}

// console.log('final blank: ', countAnimals());
// console.log('final uma esp: ', countAnimals({ specie: 'penguins' }));
// console.log('final uma esp: ', countAnimals({ specie: 'giraffes', sex: 'female' }));

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

// console.log(targetAnimal); // arr com objeto animal completo
// console.log(Object.values(animal)); // [ 'penguins' ]
// console.log(Object.values(animal)[0]); // penguins
// console.log(targetAnimal[0].residents.length); // 4
