//（5）ES6 中的 flat
/**
 * 我们还可以直接调用 ES6 中的 flat 方法来实现数组扁平化。flat 方法的语法：arr.flat([depth])
 其中 depth 是 flat 的参数，depth 是可以传递数组的展开深度（默认不填、数值是 1），即展开一层数组。如果层数不确定，参数可以传进 Infinity，代表不论多少层都要展开：
 */
let arr = [1, [2, [3, 4]]];
function flatten(arr) {
    return arr.flat(Infinity);
}
console.log(flatten(arr)); //  [1, 2, 3, 4，5]
/**
 * 可以看出，一个嵌套了两层的数组，通过将 flat 方法的参数设置为 Infinity，达到了我们预期的效果。其实同样也可以设置成 2，也能实现这样的效果。在编程过程中，如果数组的嵌套层数不确定，最好直接使用 Infinity，可以达到扁平化。
 */
