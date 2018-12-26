var array = [1, -2, 3, 4, -9, 11, 6];

console.log(getSubArrays(array));

function getSubArrays(arr) {
  var subArray = [];
  for (var i = 1; i <= arr.length; i++) {
    for (var j = 0; j <= arr.length - i; j++) {
      subArray.push(arr.slice(j, j + i));
    }
  }
  return subArray;
}