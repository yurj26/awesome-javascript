// 1）Array.prototype.slice
// ● slice()方法是JavaScript数组的一个方法，这个方法可以从已有数组中返回选定的元素：用法：array.slice(start, end)，该方法不会改变原始数组。
// ● 该方法有两个参数，两个参数都可选，如果两个参数都不写，就可以实现一个数组的浅拷贝
let arr = [1,2,3,4];
console.log(arr.slice()); // [1,2,3,4]
console.log(arr.slice() === arr); //false
