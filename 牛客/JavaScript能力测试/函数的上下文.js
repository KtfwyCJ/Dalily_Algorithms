
// 将函数 fn 的执行上下文改为 obj 对象

function speak(fn, obj) {
    return  fn.apply(obj,obj);

}
// 解析：
// 可以通过对象中的call或apply来修改函数的上下文，函数中的this指针可以被替换为call或apply的第一个参数

