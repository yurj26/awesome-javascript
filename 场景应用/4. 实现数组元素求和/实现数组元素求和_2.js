//arr=[1,2,3,[[4,5],6],7,8,9]，求和
var arr=[1,2,3,[[4,5],6],7,8,9]
let arr= arr.toString().split(',').reduce( (total,i) => total += Number(i),0);
console.log(arr);
