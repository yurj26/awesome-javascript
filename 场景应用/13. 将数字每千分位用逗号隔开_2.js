//数字无小数版本：
let format = n => {
    let num = n.toString()
    let len = num.length
    if (len <= 3) {
        return num
    } else {
        let remainder = len % 3
        if (remainder > 0) { // 不是3的整数倍
            return num.slice(0, remainder) + ',' + num.slice(remainder, len).match(/\d{3}/g).join(',')
        } else { // 是3的整数倍
            return num.slice(0, len).match(/\d{3}/g).join(',')
        }
    }
}
format(1232323)  // '1,232,323'
