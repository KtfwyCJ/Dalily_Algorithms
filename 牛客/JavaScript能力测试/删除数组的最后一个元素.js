// 删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组


/**
 * @param {number[]} arr
 * @return {number[]}
 */ 

// length方法
function truncate(arr) {
	var newarr = arr.slice(0);
    newarr.length = newarr.length-1;
    return newarr;
}

// pop
function truncate(arr) {
	var newarr = arr.slice(0);
	newarr.pop();
	return newarr;
}

// slice
function truncate(arr) {
	var newarr = arr.slice(0,arr.length-1);
	return newarr;
}