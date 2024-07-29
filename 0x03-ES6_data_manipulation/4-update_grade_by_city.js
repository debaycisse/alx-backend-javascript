export default function updateStudentGradeByCity(
  studentsList, city, newGradeList,
) {
  return studentsList
    .filter((studentObj) => studentObj.location === city)
    .map((student) => ({
      ...student,
      grade: newGradeList.find((grd) => grd.studentId === student.id)
        ? newGradeList.find((grd) => grd.studentId === student.id).grade
        : 'NA',
    }));
}
