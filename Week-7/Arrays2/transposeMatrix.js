// Take a 2d array as input and return the tranpose of that 2d Matrix

let arr = [
    [23, 54, 12],
    [22, 78, 11],
    [8, 3, 5]
];

let transpose = (arr) => {
    let res = new Array(arr[0].length)
    for (let i = 0; i < arr.length; i++) {
        res[i] = new Array(arr.length)
    }

    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = 0; j <= arr[0].length - 1; j++) {
            res[i][j] = arr[j][i]
        }
    }

    return res;
}

console.log(transpose(arr));