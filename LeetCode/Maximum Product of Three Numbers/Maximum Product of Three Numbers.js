/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    function sortNumber(a,b) {
        return a - b;
    }
    nums.sort(sortNumber);
    return Math.max(nums[nums.length-1]*nums[nums.length-2]*nums[nums.length-3],nums[0]*nums[1]*nums[nums.length-1]);
    
};