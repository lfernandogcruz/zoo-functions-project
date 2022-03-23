const data = require('../data/zoo_data');

// const entrants1 = [
//   { name: 'jorge noe', age: 5 },
//   { name: 'maria doe', age: 5 },
//   { name: 'clara nunes', age: 5 },
//   { name: 'joao silva', age: 18 },
//   { name: 'ana cruz', age: 18 },
//   { name: 'chico bento', age: 50 },
// ];

function countEntrants(entrants) {
  // seu código aqui
  const child = entrants.filter((elKid) => elKid.age < 18).length;
  // console.log(entrants.filter((elKid) => elKid.age < 18));
  const adult = entrants.filter((elAdult) => elAdult.age >= 18 && elAdult.age < 50).length;
  const senior = entrants.filter((elDer) => elDer.age >= 50).length;

  return { adult, child, senior };
}

// console.log(countEntrants(entrants1));

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const { prices } = data;
  const { adult, child, senior } = countEntrants(entrants);

  const kids = child * prices.child;
  const adulttt = adult * prices.adult;
  const elder = senior * prices.senior;

  return (kids + adulttt + elder);
}

module.exports = { calculateEntry, countEntrants };

// if (Object.keys(entrants).length === 0)

// console.log('entrant: ', entrants);
// console.log('entrant type: ', typeof entrants);
// console.log('child', child);
// console.log('adult', adult);
// console.log('senior', senior);
// console.log('obj', obj);

// if (child === 0 && adult === 0 && senior === 0) return 0;
// < 18
// const child = age.reduce((a, b) => {
//   if (b < 18) return a += 1;
//   return a;
// }, 0);
// >= 18 , < 50
// const adult = age.reduce((a, b) => {
//   if (b >= 18 && b < 50) return a += 1;
//   return a;
// }, 0);
// >= 50
// const senior = age.reduce((a, b) => {
//   if (b >= 50) return a += 1;
//   return a;
// }, 0);
