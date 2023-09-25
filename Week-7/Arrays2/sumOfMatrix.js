// Take 2 2d arrays from the user and return a 2d array as their sum.
// Note - rows and cols must be same of both the input matrix else throw an error message "Arrays must have the same dimensions"

let firstArr = [[1, 21, 3], 
                [4, 85, 6], 
                [17, 8, 9]];

let secondArr = [[29, 38,17], 
                 [16, 25, 14], 
                 [3, 2, 11]];

let matrixSum = (arr1, arr2) => {
    if((arr1.length !== arr2.length) || (arr1[0].length !== arr2[0].length) )  return "Arrays are not of same dimension"

    let res = new Array(arr1.length)

    for (let i = 0; i < arr1[0].length; i++) {
        res[i] = new Array()
    }

    for (let i = 0; i <= arr1.length - 1; i++) {
        for (let j = 0; j <= arr2.length - 1; j++) {
            res[i][j] = (arr1[i][j] + arr2[i][j]);   
        }
    }
    return res
}

console.log(matrixSum(firstArr, secondArr));