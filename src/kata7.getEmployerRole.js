const getEmployerRole = (employeeName, employees) => {
  if (employeeName === employees.name) {
    return employees.name;
  }
};

module.exports = getEmployerRole;
