var removeDuplicates = function(nums) {
    if(nums.length < 2) return nums.length
    
    var j = 1
    
    for(var i = 0;i< nums.length-1;i++){
        if(nums[i+1] !== nums[i]){
            nums[j] = nums[i+1]
            j++;
        }
    }
    return j
    
    

};