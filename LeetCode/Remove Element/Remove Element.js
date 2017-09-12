/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var ans = 0;
    for (var i = nums.length-1; i >=0; i--) {
        if (nums[i] === val) {
            nums.splice(i,1);
        }
        else {
            ans++;
        }
    }
    return ans;
};