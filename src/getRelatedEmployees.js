const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  // seu código aqui
  // some() -> employess[i].managers[j] -> includes()
  return employees.some((elSm) => elSm.managers.includes(id));
  // console.log(isManaged);
}
// console.log(isManager('fdb2543b-5662-46a7-badc-93d960fdc0a8')); // olaId true
// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1')); // nigelId false

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const saida = [];
  employees.forEach((elForEh) => {
    if (elForEh.managers.includes(managerId)) {
      saida.push(`${elForEh.firstName} ${elForEh.lastName}`);
    }
  });
  return saida;
}

// console.log(getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8')); // olaId true
// console.log(getRelatedEmployees('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1')); // nigelId false

module.exports = { isManager, getRelatedEmployees };
