//Take array as an input from the user and replace occurrences of an old key with a new key in an array

let inputValues = prompt("Enter values of array (separated by commas): ");
let arr = inputValues.split(',');

let secondInput = prompt("Replace value, Replace with value: (Give seperated by comma): ")
let target = secondInput.split(',')[0];
let replaceValue = secondInput.split(',')[1];

for( let index in arr ){
    if( target == arr[index] ){
        arr.splice(index,1, replaceValue);
    }
    else{
        continue;
    }
}

console.log("updated array",arr);