// 找出元素 item 在给定数组 arr 中的位置
// 如果数组中存在 item，则返回元素在数组中的位置，否则返回 -1

/**
 * @param {string[]} string
 * @param {string[]} string
 * @return {number[]}
 */ 
function indexOf(arr, item) {
	if (Array.prototype.indexOf) {
        return arr.indexOf(item);
    } else {
        for (var i = 0;i < arr.length; i++) {
            if (arr[i] === item) {
                return i;
            }
        }
    }
}