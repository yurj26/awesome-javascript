//ES5方法：使用map存储不重复的数字
const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

uniqueArray(array); // [1, 2, 3, 5, 9, 8]

function uniqueArray(array) {
    let map = {};
    let res = [];
    for(var i = 0; i < array.length; i++) {
        if(!map.hasOwnProperty([array[i]])) {
            map[array[i]] = 1;
            res.push(array[i]);
        }
    }
    return res;
}
