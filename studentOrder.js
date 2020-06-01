let students = [1, 1, 3, 3, 4, 1];

function orderStudents(students) {
  let wrongPlaces = 0;

  const sorted = [...students].sort();

  for (let i = 0; i < students.length; i++) {
    students[i] !== sorted[i] ? wrongPlaces++ : '';
  }

  return wrongPlaces;
}
console.log(orderStudents(students));
