var array = [1, -2, 3, 4, -9, 6];

console.log(getSumOfSubArray(array));

function getSumOfSubArray(arr) {
  var maxSum = 0;
  for (var i = 1; i <= arr.length; i++) {
    var subArraySum = 0;
    for (var j = i; j <= arr.length - i; j++) {
      subArraySum += arr[j];
      maxSum = Math.max(maxSum, subArraySum);
    }
  }
  return maxSum;
}