// Take input a number from the user and reverse all the digits

let initialValue = prompt("Enter number to reverse: ");

let reverseNumber = (number)=>{
    let num = number;
    // if(isNaN(num)) return "Not a valid number";
    let newNum = 0;
    
    while(num>0){
        let rem = num%10;
        newNum = newNum*10 + rem;
        num = Math.floor(num/10);
    }

    return newNum;
}

console.log(reverseNumber(initialValue));