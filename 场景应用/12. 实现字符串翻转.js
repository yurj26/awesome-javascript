//在字符串的原型链上添加一个方法，实现字符串翻转：
String.prototype._reverse = function(a){
    return a.split("").reverse().join("");
}
var obj = new String();
var res = obj._reverse ('hello');
console.log(res);    // olleh
//需要注意的是，必须通过实例化对象之后再去调用定义的方法，不然找不到该方法。
