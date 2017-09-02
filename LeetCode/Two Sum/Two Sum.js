/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var ans = nums.length;
    var arr = [];
    for (var i = 0; i < ans; i++) {
        var temp = target - nums[i];
        if (arr[temp] !== undefined) {
            return [arr[temp],i];
        }else {
            arr[nums[i]] = i;
        }
        
    }
  
};