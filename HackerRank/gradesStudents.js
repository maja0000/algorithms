// If the difference between the grade and the next multiple of 5 is less than 3,
// round grade up to the next multiple of 5.
// If the value of grade is less than 38, no rounding occurs as the result will
// still be a failing grade.

function gradingStudents(grades) {
  let numToROund = 5;

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38 && numToROund - (grades[i] % 5) < 3) {
      grades[i] += numToROund - (grades[i] % 5);
    }
  }

  return grades;
}
