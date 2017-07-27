// 统计数组 arr 中值等于 item 的元素出现的次数

/**
 * @param {number[]} arr
 * @param {number[]} item
 * @return {number[]} 
 */ 

// 常规做法
function count(arr, item) {
	var a = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            a++;
        }
    }
    return a;
}

// filter:指定函数确定是否在返回的数组中包含某一项
function count(arr,item) {
	var count = arr.filter(function(a) {
		return a === item;
	});
	return count.length;
}

// map
function count(arr,item) {
	var count = 0;
	arr.map(function(a) {
		if (a === item) {
			count++;
		}
	});
	return count;
}