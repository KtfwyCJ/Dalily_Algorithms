// 移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组

/**
 * @param {number[]} arr
 * @param {number[]} item
 * @return {number[]}
 */ 

 // 常规做法
 function remove(arr, item) {
    var a = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != item) {
            a.push(arr[i]);
        }
    }
	return a;
}


// splice
function remove(arr,item) {
	var newarr = arr.slice(0);
	for (var i = 0; i < newarr.length; i++) {
		if (newarr[i] === item) {
			newarr.splice(i,1);
			i--;
		}
	}
	return newarr;
}