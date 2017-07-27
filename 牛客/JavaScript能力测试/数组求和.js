// 在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组

/**
 * @param {number[]} arr
 * @param {number[]} item
 * @param {number[]} index
 * @return {number[]} 
 */ 

// splice
function insert(arr, item, index) {
	var newarr = arr.slice(0);
    newarr.splice(index,0,item);
    return newarr;
}

// concat
function insert(arr, item, index) {
	return arr.slice(0,index).concat(item).concat(arr.slice(index));
	//  = return arr.slice(0,index).concat(item,arr.slice(index);
}