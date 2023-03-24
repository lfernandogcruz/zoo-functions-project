const data = require('../data/zoo_data');

const { species, employees } = data;

function fetchId(idInput) {
  const objEmployee = employees.find((elfind) => elfind.id === idInput);
  // console.log(objEmployee);
  // const { id } = objEmployee;
  // const fullName = `${objEmployee.firstName} ${objEmployee.lastName}`;
  return { id: objEmployee.id, fullName: `${objEmployee.firstName} ${objEmployee.lastName}` };
}

function fetchByLastName(nameInput) {
  const objRef = employees.find((eltWrkr) => eltWrkr.lastName === nameInput);
  // console.log(getWrkrLast);
  // const { id } = objRef;
  // const fullName = `${objRef.firstName} ${objRef.lastName}`;
  return { id: objRef.id, fullName: `${objRef.firstName} ${objRef.lastName}` };
}

function fetchByFirstName(nameInput) {
  const objRef = employees.find((eltWrkr) => eltWrkr.firstName === nameInput);
  // console.log(getWrkrLast);
  // const { id } = objRef;
  // const fullName = `${objRef.firstName} ${objRef.lastName}`;
  return { id: objRef.id, fullName: `${objRef.firstName} ${objRef.lastName}` };
}
// console.log(fetchName('Nelson'));

function printFooter(innerId) {
  const arrIdAnimals = employees.find((elFind) => elFind.id === innerId); // .responsibleFor;
  console.log('arrIdAnimals', arrIdAnimals); // array com id dos animais
  const speciesNames = [];
  arrIdAnimals.reduce((a, b) => {
    a = species.find((findAnimId) => findAnimId.id === b).name;
    return speciesNames.push(a);
  }, []); // array com nomes das especies ( speciesNames )
  const arrLocationsRaw = [];
  arrIdAnimals.reduce((a, b) => {
    a = species.find((findAnimId) => findAnimId.id === b).location;
    return arrLocationsRaw.push(a);
  }, []); // array com localizacoes todas

  return { speciesNames, locations: arrLocationsRaw };
}
// console.log('printFooter:', printFooter('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

function printSpecific(imported, kind = 'idd') {
  // imported = input da main function
  // kind = filtro do header
  const header = {};
  if (kind === 'idd') header[fetchId(imported)];
  if (kind === 'first') header[fetchByFirstName(imported)];
  if (kind === 'last') header[fetchByLastName(imported)];
  const { id, fullName } = header;
  const footer = printFooter(id);
  const { speciesNames, locations } = footer;
  return { id, fullName, species: speciesNames, locations };
}

function printAll() {
  const arrayAll = [];
  employees.forEach((wrkr) => {
    const mergeObj = {
      id: printSpecific(wrkr.id).id,
      fullName: printSpecific(wrkr.id).fullName,
      species: printFooter(wrkr.id).species,
      locations: printFooter(wrkr.id).locations,
    };
    arrayAll.push(mergeObj);
  });
  return arrayAll;
}
console.log(printAll());

function isLastName(filterName) {
  return employees.some((eltWrkr) => eltWrkr.lastName === filterName);
}

function isFirstName(filterName) {
  return employees.some((eltWrkr) => eltWrkr.firstName === filterName);
}

function isId(filterInput) {
  return employees.some((elfind) => elfind.id === filterInput);
}
// console.log(isId('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

function getEmployeesCoverage(input) {
  // // seu código aqui
  if (input.length === 0) return printAll();
  if (isId(input)) return printSpecific(input, 'idd');
  if (isFirstName(input)) return printSpecific(input, 'first');
  if (isLastName(input)) return printSpecific(input, 'last');
  throw new Error('Informações inválidas');
}
// console.log(getEmployeesCoverage('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getEmployeesCoverage;

// console.log('idOrName c id:', idOrName('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
// console.log('idOrName c first name:', idOrName('Nigel'));
// console.log('idOrName c last name:', idOrName('Nelson'));

// console.log(fetchId('Nelson'));
