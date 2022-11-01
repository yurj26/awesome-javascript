//（6）正则和 JSON 方法
/**
 * 在第4种方法中已经使用 toString 方法，其中仍然采用了将 JSON.stringify 的方法先转换为字符串，然后通过正则表达式过滤掉字符串中的数组的方括号，最后再利用 JSON.parse 把它转换成数组：
 */
let arr = [1, [2, [3, [4, 5]]], 6];
function flatten(arr) {
    let str = JSON.stringify(arr);
    str = str.replace(/(\[|\])/g, '');
    str = '[' + str + ']';
    return JSON.parse(str);
}
console.log(flatten(arr)); //  [1, 2, 3, 4，5]
