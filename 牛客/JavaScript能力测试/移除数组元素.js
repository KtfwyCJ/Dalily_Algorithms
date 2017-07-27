// 移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果返回


/**
 * @param {number[]} arr
 * @param {number[]} item
 * @return {number[]}
 */ 

// 常规做法
function removeWithoutCopy(arr, item) {
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == item){
            arr.splice(i,1);
            i--;   //当删除这一项时，i项数减一
        }
    }
    return arr;
}