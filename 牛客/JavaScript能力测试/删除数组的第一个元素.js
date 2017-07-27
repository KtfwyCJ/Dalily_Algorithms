// 删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组


/**
 * @param {number[]} arr
 * @return {number[]}
 */ 
 
// shift
function curtail(arr) {
	var newarr = arr.slice(0);
    newarr.shift();
    return newarr;
}

// 常规做法
function curtail(arr) {
	var newarr = [];
    for (var i = 1; i < arr.length; i++) {
        newarr.push(arr[i]);
    }
    return newarr;
}

// slice()
function curtail(arr) {
	var newarr = arr.slice(1);
    return newarr;
}