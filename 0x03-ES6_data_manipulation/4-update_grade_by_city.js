export default function updateStudentGradeByCity(list, city, newGrades) {
  const students = list.filter((student) => student.location === city);
  for (const student of students) {
    student.grade = 'N/A';
  }
  const newStudents = students.map((student) => {
    const tmp = student;
    for (const grade of newGrades) {
      if (tmp.id === grade.studentId) {
        tmp.grade = grade.grade;
      }
    }
    return tmp;
  });
  return newStudents;
}
