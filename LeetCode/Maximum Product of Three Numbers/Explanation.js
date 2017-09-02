	function sortNumber(a,b) {
        return a - b;
    }
    nums.sort(sortNumber);

    //将数组排序，如果只是nums.sort，很容易出现以下状况：
    nums = [1,3,1000,200,5];
    nums.sort() //[1, 3, 1000, 200, 5]
    
