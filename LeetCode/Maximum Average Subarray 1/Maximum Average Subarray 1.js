/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    var sum = 0;
    for (var i = 0; i < k; i++) {
        sum += nums[i];
    }
    var maxSum = sum;
    for (var i = 0,j = k; i < j,j < nums.length; i++,j++) {
        sum = sum - nums[i] + nums[j];
        maxSum = Math.max(sum,maxSum);
    }
    return maxSum/k;
};