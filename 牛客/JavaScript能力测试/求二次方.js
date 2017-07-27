// 为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组

/**
 * @param {number[]} arr
 * @return {number[]} 
 */ 

function square(arr) {
	var newarr = arr.slice(0);
    for (var i = 0; i < newarr.length; i++) {
        newarr[i] *= newarr[i];
    }
    return newarr;
}