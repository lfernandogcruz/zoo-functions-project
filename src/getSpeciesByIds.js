// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(ids) {
  // seu código aqui
}
// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'));
// Esta função é responsável pela busca das espécies de animais por id. Ela retorna um array contendo as espécies referentes aos ids passados como parâmetro, podendo receber um ou mais ids.
// Observações técnicas
// O parâmetro desta função pode ser alterado para atender ao requisito proposto.
// O que será avaliado
// Caso receba nenhum parâmetro, necessário retornar um array vazio;
// Ao receber como parâmetro um único id, retorna um array com a espécie referente à esse id;
// Ao receber mais de um id, retorna um array com as espécies referentes aos ids.

// const saida = [];
// for (let i = 0; i < ids.length; i += 1) {
//   for (let j = 0; j < species.length; j += 1) {
//     if (species[j].id === ids[i][0]) {
//       saida.push(species[j]);
//     }
//   }
// }
// return saida;

// const temp = species.forEach((especieNoArray) => {
//   if (especieNoArray.id === ids) {
//     saida.push(species[especieNoArray]);
//   }
// })

// seu código aqui
// const tempConst = species.filter((cadaEspecie) => cadaEspecie === ids);
// return tempConst;

module.exports = getSpeciesByIds;
