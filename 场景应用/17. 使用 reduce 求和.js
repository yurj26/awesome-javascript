arr = [1,2,3,4,5,6,7,8,9,10]//，求和

let arr = [1,2,3,4,5,6,7,8,9,10]
arr.reduce((prev, cur) => { return prev + cur }, 0)
arr = [1,2,3,[[4,5],6],7,8,9]//，求和

let arr = [1,2,3,4,5,6,7,8,9,10]
arr.flat(Infinity).reduce((prev, cur) => { return prev + cur }, 0)
arr = [{a:1, b:3}, {a:2, b:3, c:4}, {a:3}]//，求和

let arr = [{a:9, b:3, c:4}, {a:1, b:3}, {a:3}]

arr.reduce((prev, cur) => {
    return prev + cur["a"];
}, 0)
