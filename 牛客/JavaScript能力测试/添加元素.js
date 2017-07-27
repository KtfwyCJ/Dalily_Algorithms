// 在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组

/**
 * @param {number[]} arr
 * @param {number[]} item
 * @return {number[]}
 */ 

// 常规方法
function append(arr, item) {
    var a = arr.slice(0);
	a.push(item);
    return a;
}

// concat
function append(arr,item) {
	var a = arr.slice(0);
	a.concat([item]);
}/**
 * @param {number[]} arr
 * @param {number[]} item
 * @return {number[]}
 */ 
