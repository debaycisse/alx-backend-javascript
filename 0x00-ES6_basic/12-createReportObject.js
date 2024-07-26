/**
 * Generates a data object, that contains an object and a method
 *
 * @param {Object<createEmployeesObject>} employeesList - contains department and employees
 * @returns data, which contains allEmployees object and getNumberOfDepartment method as well
 */
export default function createReportObject(employeesList) {
  const data = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employees) {
      return Object.keys(employees).length;
    },
  };

  return data;
}
