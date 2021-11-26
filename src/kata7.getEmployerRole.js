// const getEmployerRole = (employeeName, employees) => {
//   return employees.find(employee => employee.name === employeeName);
// };

const getEmployerRole = (employeeName, employees) => {
  const employeeProfile = employees.find((person) => {
    return person.name === employeeName;
  });
  return employeeProfile.role;
};

module.exports = getEmployerRole;
