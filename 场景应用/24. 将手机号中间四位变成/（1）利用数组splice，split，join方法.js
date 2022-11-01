//（1）利用数组splice，split，join方法
let tel = 18877776666;
tel = "" + tel;
var ary = tel.split("");
ary.splice(3,4,"****");
var tel1 = ary.join("");
console.log(tel1);
