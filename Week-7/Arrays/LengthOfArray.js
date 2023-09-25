// Take an array input from the user and return the count of elements.
// Note - The time complexity must be O(1). So you cannot use a loop

let arr = prompt("Enter comma seperated values: ")

let arrlength = (arr) =>{
    return arr.split(',').length;
}

console.log(arrlength(arr))