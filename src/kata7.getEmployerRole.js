const getEmployerRole = (employeeName, employees) => {
  // does not work, it returns undefined!
  if (employeeName === employees.name) {
    return employees.name;
  }
};

module.exports = getEmployerRole;
