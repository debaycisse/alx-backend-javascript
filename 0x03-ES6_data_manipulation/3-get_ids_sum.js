export default function getStudentIdsSum(studentsList) {
  if (!Array.isArray(studentsList)) {
    return 0;
  }
  return studentsList.reduce(
    (accumulator, studentObj) => accumulator + studentObj.id, 0,
  );
}
