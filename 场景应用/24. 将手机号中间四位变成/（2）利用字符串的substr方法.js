//（2）利用字符串的substr方法
const tel = 18877776666;
tel = "" + tel;
var tel1 = tel.substr(0,3) + "****" + tel.substr(7)
console.log(tel1);
