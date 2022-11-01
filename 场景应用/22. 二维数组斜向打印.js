function printMatrix(arr){
    let m = arr.length, n = arr[0].length
    let res = []

    // 左上角，从0 到 n - 1 列进行打印
    for (let k = 0; k < n; k++) {
        for (let i = 0, j = k; i < m && j >= 0; i++, j--) {
            res.push(arr[i][j]);
        }
    }

    // 右下角，从1 到 n - 1 行进行打印
    for (let k = 1; k < m; k++) {
        for (let i = k, j = n - 1; i < m && j >= 0; i++, j--) {
            res.push(arr[i][j]);
        }
    }
    return res
}
