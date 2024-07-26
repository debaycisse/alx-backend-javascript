/**
 * Generates a data object, that contains an object and a method
 *
 * @param {Object<createEmployeesObject>} employeesList - contains department and employees
 * @returns data, which contains allEmployees object and getNumberOfDepartment method as well
 */
export default function createReportObject(employeesList) {
  const data = {
    allEmployees: {},
    getNumberOfDepartments(employees) {
      return Object.keys(employees).length;
    },
  };

  for (const empObj in employeesList) {
    if (Object.hasOwn(employeesList, empObj)) {
      data.allEmployees[`${empObj}`] = employeesList[empObj];
    }
  }

  return data;
}
