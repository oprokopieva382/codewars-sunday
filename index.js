//Is the string uppercase?
String.prototype.isUpperCase = function () {
  return this.toString() === this.toUpperCase();
};
//Who has the most money?
function mostMoney(students) {
  let array = [];
  if (students.length === 1) {
    return students[0].name;
  }
  students.forEach((value, index) => {
    let total = 5 * value.fives + 10 * value.tens + 20 * value.twenties;
    array.push([total, value.name]);
  });
  array = array.sort((a, b) => b[0] - a[0]);
  if (array.every((el, i, array) => el[0] === array[0][0])) {
    return "all";
  } else {
    return array[0][1];
  }
}
