var array = [43, 23, 57, 54, 60, 41, 10, 60, 23, 47, 60, 12, 59, 60];

console.log('Всего проведено исследований: ' + array.length);
console.log('Наилучший результат: ' + getMaxValue());
console.log(getMaxIndexes());

for (var i = 0; i < array.length; i++) {
  console.log('Образец под номером ' + (i + 1) + ' - результат - ' + array[i]);
}

function getMaxValue() {
  var max = array[0]; 
  for (var i = 0; i < array.length; i++) { 
    if (max < array[i]) max = array[i]; 
  }
  return max;
}

function getMaxIndexes() {
  var max = -Infinity;
  var maxIndexes = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === max) {
      maxIndexes.push(i+1);
    } else if (array[i] > max) {
      maxIndexes = [i];
      max = array[i];
    }
  }
  return maxIndexes;
}
