const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const { employees } = data;
  // find employee
  const getWrkrFirst = employees.filter((eltWrkr) => eltWrkr.firstName === employeeName);
  const getWrkrLast = employees.filter((eltWrkr) => eltWrkr.lastName === employeeName);
  if (!employeeName) return {};
  if (getWrkrFirst.length !== 0) return getWrkrFirst[0];
  if (getWrkrLast.length !== 0) return getWrkrLast[0];
}

// console.log(getEmployeeByName('Nigel'));
// console.log(getEmployeeByName());
// console.log(getEmployeeByName('Bethea'));

module.exports = getEmployeeByName;
