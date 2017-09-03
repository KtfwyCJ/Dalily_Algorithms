此题是查询某个给定的元素空间左右两边是否都为0。
var prev;  //定义元素空间前一个元素
!prev  //检查前一个元素是否为0；

if (!prev && !curr && !next) {    //!0 =>true
    emptySlots++;    
    prev = 1;
    } else {
    prev = curr; 
}



