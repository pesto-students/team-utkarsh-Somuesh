// Take an array input from the user and delete all the elements which are divisible by 2 and 3
let inputValues = prompt("Enter values of array (separated by commas): ");
let arr = inputValues.split(',');

console.log("before",arr)
for( let i= 0; i<arr.length;i++ ){
    
    if( (parseInt(arr[i])%2 == 0 ) || (parseInt(arr[i])%3 == 0 ) ){
        
        arr.splice(i,1);
        console.log(i,arr)
        if(i>0){ i-- };
    }
    
}

console.log(arr);