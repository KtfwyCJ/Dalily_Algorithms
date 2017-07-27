// 在数组 arr 中，查找值与 item 相等的元素出现的所有位置

/**
 * @param {number[]} arr
 * @return {string[]} target 
 */ 

// 常规方法
function findAllOccurrences(arr, target) {
	var a = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            a.push(i);
        }
 
    }
    return a;
}


function findAllOccurrences(arr, target) {
	var a = [];
    arr.forEach(function(val,index) {
        val != target || a.push(index);
    });
    return a;
}