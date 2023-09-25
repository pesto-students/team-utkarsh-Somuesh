//Sum of Max and Min values of an array:

let arr = [23,54,65,12,90]

let mMsum = (arr) => {
    let max = -Infinity
    let min = Infinity
    
    for(let i of arr){
        max = Math.max(max, i);
        min = Math.min(min, i);
    }
    
    return max + min
}

console.log(mMsum(arr))


// //Binary Search using Recursion concept: ( O(log(n)) ):
// let binarySearch = (array, key, start, end) => {
//     if (start === end) {
//         if (array[start] > key) {
//             return start
//         } else {
//             return start + 1
//         }
//     }

//     if (start > end) {
//         return start
//     }

//     let mid = Math.floor((start + end) / 2)

//     if (array[mid] < key) {
//         return binarySearch(array, key, mid + 1, end)
//     } else if (array[mid] > key) {
//         return binarySearch(array, key, start, mid - 1)
//     } else {
//         return mid
//     }
// }

// //Binary Sort: ( O(log(n)) ):
// let binarySort = (array) => {
//     const totalLength = array.length
//     for (let i = 0; i < totalLength; i += 1) {
//         const key = parseInt(array[i])
//         const indexPosition = binarySearch(array, key, 0, i - 1)
//         array.splice(i, 1)
//         array.splice(indexPosition, 0, key)
//     }
//     return array
// }

// let inputValues = prompt("Enter integer values of array (separated by commas): ");

// let minMaxSum = (inputValues) => {
//     let arr = inputValues.split(",");
//     let sorted = binarySort(arr);
//     // console.log(sorted);
//     let sum = sorted[0] + sorted[sorted.length - 1];
//     return (sum)
// }

// //Output
// console.log(minMaxSum(inputValues))