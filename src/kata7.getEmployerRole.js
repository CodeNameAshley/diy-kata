const getEmployerRole = (employeeName, employees) => {
  return employees.find(employee => employee.name === employeeName);
};

module.exports = getEmployerRole;
