// 找出数组 arr 中重复出现过的元素


// 常规
function duplicates(arr) {
	var a = arr.sort(),b = [];
    for (var i in a ) {
        
        if (a[i] == a[i-1] && b.indexOf(a[i]) == -1) {
            b.push(a[i]);
        }
    }
    return b;
}

// 利用位置进行检索
function duplicates(arr) {
	var a = [];
    arr.forEach(function(elem) {
        if (arr.indexOf(elem) != arr.lastIndexOf(elem) && a.indexOf(elem) == -1) {
            a.push(elem);
        }
    });
    return a;
}