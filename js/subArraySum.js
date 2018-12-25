var array = [1, -2, 3, 4, -9, 9, 6];

getSumOfSubArray(array);

function getSumOfSubArray(arr) {
  var maxSum = 0;
  for (var i = 0; i < arr.length; i++) {
    var subArraySum = 0;
    for (var j = i; j < arr.length; j++) {
      subArraySum += arr[j];
      maxSum = Math.max(maxSum, subArraySum);
    }
  }
  console.log(maxSum);
}