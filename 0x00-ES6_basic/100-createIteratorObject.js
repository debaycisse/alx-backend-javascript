export default function createIteratorObject(report) {
  const data = [];
  for (const item in report.allEmployees) {
    if (Object.hasOwn(report.allEmployees, item)) {
      for (const memberName of report.allEmployees[item]) {
        data.push(memberName);
      }
    }
  }

  return data;
}
