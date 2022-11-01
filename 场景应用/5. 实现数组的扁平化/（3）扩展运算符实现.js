//（3）扩展运算符实现
/**
 * 这个方法的实现，采用了扩展运算符和 some 的方法，两者共同使用，达到数组扁平化的目的：
 */
let arr = [1, [2, [3, 4]]];
function flatten(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}
console.log(flatten(arr)); //  [1, 2, 3, 4，5]
