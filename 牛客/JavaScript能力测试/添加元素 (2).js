// 在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组

/**
 * @param {number[]} arr
 * @return {number[]}
 */ 
 
// unshift
function prepend(arr, item) {
	var newarr = arr.slice(0);
    newarr.unshift(item);
    return newarr;
}

// splice
function prepend(arr, item) {
	var newarr = arr.slice(0);
    newarr.splice(0,0,item);
    return newarr;
}

// concat
function prepend(arr, item) {
	return [item].concat(arr);
}