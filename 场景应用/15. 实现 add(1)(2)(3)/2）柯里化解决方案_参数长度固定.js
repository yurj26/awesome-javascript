/**
 * 2）柯里化解决方案
 ● 参数长度固定
 */
var add = function (m) {
    var temp = function (n) {
        return add(m + n);
    }
    temp.toString = function () {
        return m;
    }
    return temp;
};
console.log(add(3)(4)(5)); // 12
console.log(add(3)(6)(9)(25)); // 43
/**
 对于add(3)(4)(5)，其执行过程如下：
 1. 先执行add(3)，此时m=3，并且返回temp函数；
 2. 执行temp(4)，这个函数内执行add(m+n)，n是此次传进来的数值4，m值还是上一步中的3，所以add(m+n)=add(3+4)=add(7)，此时m=7，并且返回temp函数
 3. 执行temp(5)，这个函数内执行add(m+n)，n是此次传进来的数值5，m值还是上一步中的7，所以add(m+n)=add(7+5)=add(12)，此时m=12，并且返回temp函数
 4. 由于后面没有传入参数，等于返回的temp函数不被执行而是打印，了解JS的朋友都知道对象的toString是修改对象转换字符串的方法，因此代码中temp函数的toString函数return m值，而m值是最后一步执行函数时的值m=12，所以返回值是12。
 */
