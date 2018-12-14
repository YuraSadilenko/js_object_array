var Car = {
  mark: 'Mersedes',
  color: 'red',
  year: '2018',
  mileage: '1000',
}

function getStartEngine() {
  var startEngine = true;
  return startEngine;
}
console.log(getStartEngine());

function getStartMove(startMove) {
  if (getStartEngine() == true) {
    startMove = true;
  } else {
    startMove = false;
  }
  return startMove;
}

console.log(getStartMove());