var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

array.sort(randomArray);
console.log(array);
console.log(sumOfArray());
console.log(getMaxValue());

function randomArray() {
  return Math.random() - 0.5;
}

function sumOfArray() {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}

function getMaxValue() {
  var max = array[0]; 
  for (var i = 0; i < array.length; i++) { 
    if (max < array[i]) max = array[i]; 
  }
  return max;
}


