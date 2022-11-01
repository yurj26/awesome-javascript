function sum() {
    let sum = 0
    Array.prototype.forEach.call(arguments, function(item) {
        sum += item * 1
    })
    return sum
}
