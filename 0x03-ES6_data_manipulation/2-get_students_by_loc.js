export default function getStudentsByLocation(arrayOfObj, locationFilter) {
  if (!Array.isArray(arrayOfObj)) {
    return [];
  }
  return arrayOfObj.filter((studentObj) => studentObj.location === locationFilter);
}
