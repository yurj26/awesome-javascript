//arr=[1,2,3,4,5,6,7,8,9,10]，求和
let arr=[1,2,3,4,5,6,7,8,9,10]
let sum = arr.reduce( (total,i) => total += i,0);
console.log(sum);
