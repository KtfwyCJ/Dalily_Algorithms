// 合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组

/**
 * @param {number[]} arr
 * @return {number[]}
 */ 
 
// concat
function concat(arr1, arr2) {
	var newarr = arr1.concat(arr2);
    return newarr;
}

// apply
function concat(arr1, arr2) {
	var newarr = arr1.slice(0);
    [].push.apply(newarr,arr2);
    return newarr;
}