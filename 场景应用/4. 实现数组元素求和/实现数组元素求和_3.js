//递归实现
let arr = [1, 2, 3, 4, 5, 6]

function add(arr) {
    if (arr.length == 1) return arr[0]
    return arr[0] + add(arr.slice(1))
}
console.log(add(arr)) // 21
