//（3）利用字符串substring方法
let tel = 18877776666;
tel = "" + tel;
var tel1 =tel.replace(tel.substring(3,7), "****")
console.log(tel1);
