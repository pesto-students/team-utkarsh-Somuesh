// Check number is odd or even

let oddEven = (num)=>{
    if(num%2){
        return "Odd"
    }
    return "Even"
}

let num = prompt("Enter number: ")
console.log(oddEven(num))