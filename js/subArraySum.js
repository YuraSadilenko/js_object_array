var array = [1, -2, 3, 4, -9, 11, 6];

console.log(getMaxSubSum(array));

function getMaxSubSum(arr) {
  var maxSum = 0; // если совсем не брать элементов, то сумма 0

  for (var i = 0; i < arr.length; i++) {
    var sumFixedStart = 0;
    for (var j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }
  return maxSum;
}