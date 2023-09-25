// Take an array as an input and a sum value S and returns an array of pairs whose sum is equal to sum value S

let inputValues = prompt("Enter values of array (separated by commas): ");
let sum = parseInt(prompt("Enter Sum: "));

let newArr = inputValues.split(",");

let pairCheck = (arr, sum) => {
    let map = new Map();
    let pairArr = [];

    for (let num of arr) {
        if (map.has(sum-(+num))) {
            pairArr.push([+num, sum - (+num)])
        }
        else {  
            map.set(+num, +num)
        }
    }
    console.log(map)
    return pairArr.length ? pairArr : "No pairs found";
}

console.log(pairCheck(newArr, sum));