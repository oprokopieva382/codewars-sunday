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
//Calculating with Functions
function zero(func) {
  return func ? func(0) : 0;
}
function one(func) {
  return func ? func(1) : 1;
}
function two(func) {
  return func ? func(2) : 2;
}
function three(func) {
  return func ? func(3) : 3;
}
function four(func) {
  return func ? func(4) : 4;
}
function five(func) {
  return func ? func(5) : 5;
}
function six(func) {
  return func ? func(6) : 6;
}
function seven(func) {
  return func ? func(7) : 7;
}
function eight(func) {
  return func ? func(8) : 8;
}
function nine(func) {
  return func ? func(9) : 9;
}

function plus(b) {
  return function (a) {
    return a + b;
  };
}
function minus(b) {
  return function (a) {
    return a - b;
  };
}
function times(b) {
  return function (a) {
    return a * b;
  };
}
function dividedBy(b) {
  return function (a) {
    return Math.floor(a / b);
  };
}
//Directions Reduction
function dirReduc(arr) {
  const opposites = {
    NORTH: "SOUTH",
    EAST: "WEST",
    SOUTH: "NORTH",
    WEST: "EAST",
  };
  return arr.reduce(
    (acc, cur) => (
      opposites[acc.slice(-1)] === cur ? acc.pop() : acc.push(cur), acc
    ),
    []
  );
}
//Product of consecutive Fib numbers
