/**
 * ● concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
 ● 该方法有两个参数，两个参数都可选，如果两个参数都不写，就可以实现一个数组的浅拷贝。
 */

let arr = [1,2,3,4];
console.log(arr.concat()); // [1,2,3,4]
console.log(arr.concat() === arr); //false
